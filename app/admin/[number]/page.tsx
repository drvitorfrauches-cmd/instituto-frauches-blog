import Link from "next/link";
import { getPullRequest, listPullRequestFiles, getFileContent } from "@/lib/admin/github";
import { parseArticle } from "@/lib/admin/article-blocks";
import { ArticleEditor } from "@/components/admin/ArticleEditor";
import { ApproveButton } from "@/components/admin/ApproveButton";

export const dynamic = "force-dynamic";

export default async function AdminPRPage({
  params,
}: {
  params: Promise<{ number: string }>;
}) {
  const { number } = await params;
  const prNumber = Number(number);

  const [pr, files] = await Promise.all([
    getPullRequest(prNumber),
    listPullRequestFiles(prNumber),
  ]);

  const articleFiles = files.filter(
    (f) =>
      f.filename.startsWith("content/") &&
      f.filename.endsWith(".tsx") &&
      f.status !== "removed",
  );

  const articles = await Promise.all(
    articleFiles.map(async (f) => {
      const file = await getFileContent(f.filename, pr.branch);
      const parsed = parseArticle(file.content);
      return { path: f.filename, ...parsed };
    }),
  );

  const articleSlugs = articleFiles.map((f) =>
    f.filename.replace(/^content\//, "").replace(/\.tsx$/, ""),
  );

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/admin" className="mb-4 inline-block text-sm text-neutral-500 underline">
        ← Voltar
      </Link>
      <h1 className="mb-1 text-2xl font-bold text-neutral-900">{pr.title}</h1>
      <a
        href={pr.htmlUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-8 inline-block text-sm text-neutral-500 underline"
      >
        Ver PR #{pr.number} no GitHub
      </a>

      {articles.length === 0 && (
        <p className="text-neutral-500">
          Este PR não tem arquivos de artigo (content/*.tsx) editáveis aqui.
        </p>
      )}

      {articles.map((article) => (
        <ArticleEditor
          key={article.path}
          prNumber={prNumber}
          path={article.path}
          initialTitle={article.title}
          initialDescription={article.description}
          initialBlocks={article.blocks}
        />
      ))}

      {articles.length > 0 && (
        <ApproveButton prNumber={prNumber} slugs={articleSlugs} />
      )}
    </main>
  );
}
