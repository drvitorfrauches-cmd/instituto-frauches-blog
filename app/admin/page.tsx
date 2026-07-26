import Link from "next/link";
import { listOpenPullRequests } from "@/lib/admin/github";
import { LogoutButton } from "@/components/admin/LogoutButton";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const prs = await listOpenPullRequests();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-neutral-900">
          Artigos aguardando revisão
        </h1>
        <LogoutButton />
      </div>

      {prs.length === 0 && (
        <p className="text-neutral-500">
          Nenhum artigo pendente no momento. Quando a publicação automática
          abrir um novo PR, ele aparece aqui.
        </p>
      )}

      <ul className="flex flex-col gap-3">
        {prs.map((pr) => (
          <li key={pr.number}>
            <Link
              href={`/admin/${pr.number}`}
              className="block rounded-lg border border-neutral-200 p-4 hover:border-neutral-400"
            >
              <span className="block text-xs uppercase tracking-wide text-neutral-500">
                PR #{pr.number} · {pr.branch}
              </span>
              <span className="block text-lg font-medium text-neutral-900">
                {pr.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
