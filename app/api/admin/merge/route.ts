import { getPullRequest, mergePullRequest, deleteBranch } from "@/lib/admin/github";
import { pingIndexNow } from "@/lib/admin/indexnow";

export async function POST(request: Request) {
  const body = (await request.json()) as { prNumber: number; slugs: string[] };

  try {
    const pr = await getPullRequest(body.prNumber);
    await mergePullRequest(body.prNumber);
    await deleteBranch(pr.branch);
    await pingIndexNow(body.slugs.map((slug) => `/blog/${slug}`));
    return Response.json({ ok: true });
  } catch (err) {
    return Response.json({ error: (err as Error).message }, { status: 400 });
  }
}
