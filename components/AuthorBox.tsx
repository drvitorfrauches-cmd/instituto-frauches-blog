import Link from "next/link";
import { IshrsBadge } from "@/components/IshrsBadge";
import { AUTHOR_CREDENTIALS, AUTHOR_CREDENTIALS_EN } from "@/lib/blog/site";
import { UI, type Locale } from "@/lib/i18n";

function formatMonthYear(isoDate: string, dateLocale: string): string {
  return new Date(`${isoDate}T00:00:00`).toLocaleDateString(dateLocale, {
    month: "long",
    year: "numeric",
  });
}

export function AuthorBox({
  authorName,
  publishedAt,
  updatedAt,
  locale = "pt",
}: {
  authorName: string;
  publishedAt: string;
  updatedAt?: string;
  locale?: Locale;
}) {
  const t = UI[locale];
  const reviewDate = updatedAt ?? publishedAt;
  const credentials =
    locale === "en" ? AUTHOR_CREDENTIALS_EN : AUTHOR_CREDENTIALS;

  return (
    <div className="mb-8 flex flex-col gap-4 border border-line p-5 text-sm text-stone sm:flex-row sm:items-start sm:justify-between">
      <div>
        <p className="mb-2 font-medium text-ink">
          {t.writtenBy}{" "}
          <Link href={t.aboutHref} className="underline">
            {authorName}
          </Link>
        </p>
        <ul className="mb-3 list-none space-y-0.5">
          {credentials.map((credential) => (
            <li key={credential}>{credential}</li>
          ))}
        </ul>
        <p className="font-data text-xs text-stone-soft">
          {t.lastReview} {formatMonthYear(reviewDate, t.dateLocale)}
        </p>
      </div>
      <IshrsBadge locale={locale} width={110} />
    </div>
  );
}
