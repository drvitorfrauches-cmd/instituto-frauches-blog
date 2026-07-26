import { getPullRequest, getFileContent, updateFileContent } from "@/lib/admin/github";
import { regenerateArticle, type Block } from "@/lib/admin/article-blocks";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    prNumber: number;
    path: string;
    title: string;
    description: string;
    blocks: Block[];
  };

  try {
    const pr = await getPullRequest(body.prNumber);
    const file = await getFileContent(body.path, pr.branch);
    const newContent = regenerateArticle(file.content, {
      title: body.title,
      description: body.description,
      blocks: body.blocks,
    });
    await updateFileContent(
      body.path,
      pr.branch,
      newContent,
      file.sha,
      `blog: edita ${body.path} via painel de revisão`,
    );
    return Response.json({ ok: true });
  } catch (err) {
    return Response.json({ error: (err as Error).message }, { status: 400 });
  }
}
