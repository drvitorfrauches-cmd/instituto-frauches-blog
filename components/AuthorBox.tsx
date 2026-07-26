import Link from "next/link";
import { AUTHOR_CREDENTIALS } from "@/lib/blog/site";

function formatMonthYear(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00`).toLocaleDateString("pt-BR", {
    month: "long",
    year: "numeric",
  });
}

export function AuthorBox({
  authorName,
  publishedAt,
  updatedAt,
}: {
  authorName: string;
  publishedAt: string;
  updatedAt?: string;
}) {
  const reviewDate = updatedAt ?? publishedAt;

  return (
    <div className="mb-8 rounded-lg border border-neutral-200 p-4 text-sm text-neutral-600">
      <p className="mb-1 font-medium text-neutral-900">
        Escrito e revisado por{" "}
        <Link href="/sobre" className="underline">
          {authorName}
        </Link>
      </p>
      <ul className="mb-2 list-none">
        {AUTHOR_CREDENTIALS.map((credential) => (
          <li key={credential}>{credential}</li>
        ))}
      </ul>
      <p className="text-neutral-500">
        Última revisão médica: {formatMonthYear(reviewDate)}
      </p>
    </div>
  );
}
