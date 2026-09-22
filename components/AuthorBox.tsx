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
    <div className="mb-8 border border-line p-5 text-sm text-stone">
      <p className="mb-2 font-medium text-ink">
        Escrito e revisado por{" "}
        <Link href="/sobre" className="underline">
          {authorName}
        </Link>
      </p>
      <ul className="mb-3 list-none space-y-0.5">
        {AUTHOR_CREDENTIALS.map((credential) => (
          <li key={credential}>{credential}</li>
        ))}
      </ul>
      <p className="font-data text-xs text-stone-soft">
        Última revisão médica: {formatMonthYear(reviewDate)}
      </p>
    </div>
  );
}
