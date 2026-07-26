const OWNER = "drvitorfrauches-cmd";
const REPO = "instituto-frauches-blog";
const API_BASE = `https://api.github.com/repos/${OWNER}/${REPO}`;

function getToken(): string {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    throw new Error("GITHUB_TOKEN não configurado nas variáveis de ambiente.");
  }
  return token;
}

async function gh(path: string, init: RequestInit = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(init.body ? { "Content-Type": "application/json" } : {}),
      ...init.headers,
    },
    cache: "no-store",
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GitHub API ${res.status} em ${path}: ${body}`);
  }
  return res;
}

export interface PullRequestSummary {
  number: number;
  title: string;
  branch: string;
  htmlUrl: string;
  updatedAt: string;
}

export async function listOpenPullRequests(): Promise<PullRequestSummary[]> {
  const res = await gh(`/pulls?state=open&per_page=50&sort=created&direction=asc`);
  const data = (await res.json()) as Array<{
    number: number;
    title: string;
    head: { ref: string };
    html_url: string;
    updated_at: string;
  }>;
  return data.map((pr) => ({
    number: pr.number,
    title: pr.title,
    branch: pr.head.ref,
    htmlUrl: pr.html_url,
    updatedAt: pr.updated_at,
  }));
}

export async function getPullRequest(number: number): Promise<PullRequestSummary> {
  const res = await gh(`/pulls/${number}`);
  const pr = (await res.json()) as {
    number: number;
    title: string;
    head: { ref: string };
    html_url: string;
    updated_at: string;
  };
  return {
    number: pr.number,
    title: pr.title,
    branch: pr.head.ref,
    htmlUrl: pr.html_url,
    updatedAt: pr.updated_at,
  };
}

export interface PullRequestFile {
  filename: string;
  status: string;
}

export async function listPullRequestFiles(number: number): Promise<PullRequestFile[]> {
  const res = await gh(`/pulls/${number}/files?per_page=100`);
  const data = (await res.json()) as Array<{ filename: string; status: string }>;
  return data.map((f) => ({ filename: f.filename, status: f.status }));
}

export interface FileContent {
  content: string;
  sha: string;
}

export async function getFileContent(path: string, ref: string): Promise<FileContent> {
  const res = await gh(`/contents/${encodeURIComponent(path).replace(/%2F/g, "/")}?ref=${encodeURIComponent(ref)}`);
  const data = (await res.json()) as { content: string; encoding: string; sha: string };
  const content = Buffer.from(data.content, data.encoding as BufferEncoding).toString("utf8");
  return { content, sha: data.sha };
}

export async function updateFileContent(
  path: string,
  branch: string,
  newContent: string,
  sha: string,
  message: string,
): Promise<void> {
  await gh(`/contents/${encodeURIComponent(path).replace(/%2F/g, "/")}`, {
    method: "PUT",
    body: JSON.stringify({
      message,
      content: Buffer.from(newContent, "utf8").toString("base64"),
      sha,
      branch,
    }),
  });
}

export async function mergePullRequest(number: number): Promise<void> {
  await gh(`/pulls/${number}/merge`, {
    method: "PUT",
    body: JSON.stringify({ merge_method: "merge" }),
  });
}

export async function deleteBranch(branch: string): Promise<void> {
  try {
    await gh(`/git/refs/heads/${encodeURIComponent(branch)}`, { method: "DELETE" });
  } catch {
    // não crítico se a branch já não existir
  }
}
