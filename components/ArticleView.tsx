import type { ComponentType } from "react";
import Image from "next/image";
import Link from "next/link";
import { AuthorBox } from "@/components/AuthorBox";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShareButtons } from "@/components/ShareButtons";
import { ORGANIZATION_JSON_LD, PHYSICIAN_JSON_LD } from "@/lib/blog/site";
import type { FaqItem, HowToData } from "@/lib/blog/structured-data";
import type { PostMeta } from "@/lib/blog/types";
import { UI, type Locale } from "@/lib/i18n";

// Corpo comum da página de artigo, em português ou inglês.
export function ArticleView({
  meta,
  Content,
  url,
  authorUrl,
  faqs,
  howTo,
  locale,
  otherLanguageHref,
}: {
  meta: PostMeta;
  Content: ComponentType;
  url: string;
  authorUrl: string;
  faqs: FaqItem[];
  howTo: HowToData | null;
  locale: Locale;
  otherLanguageHref?: string;
}) {
  const t = UI[locale];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["MedicalWebPage", "BlogPosting"],
    headline: meta.title,
    description: meta.description,
    inLanguage: locale === "en" ? "en" : "pt-BR",
    datePublished: meta.publishedAt,
    dateModified: meta.updatedAt ?? meta.publishedAt,
    author: { ...PHYSICIAN_JSON_LD, url: authorUrl },
    reviewedBy: { "@id": PHYSICIAN_JSON_LD["@id"] },
    lastReviewed: meta.updatedAt ?? meta.publishedAt,
    publisher: ORGANIZATION_JSON_LD,
    mainEntityOfPage: url,
    image: meta.coverImage ? `${new URL(url).origin}${meta.coverImage.src}` : undefined,
  };

  const faqJsonLd =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  const howToJsonLd = howTo
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: howTo.name,
        step: howTo.steps.map((step, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          text: step,
        })),
      }
    : null;

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      {howToJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
        />
      )}

      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-3">
        <Link href={t.blogHref} className="inline-block text-sm text-stone hover:text-pine">
          {t.backToBlog}
        </Link>
        {otherLanguageHref && (
          <Link
            href={otherLanguageHref}
            hrefLang={locale === "pt" ? "en" : "pt-BR"}
            className="font-data text-xs text-stone hover:text-pine"
          >
            {t.otherLanguage}
          </Link>
        )}
      </div>

      <Breadcrumbs category={meta.category} title={meta.title} slug={meta.slug} locale={locale} />

      <span className="font-data mb-3 block text-xs tracking-[0.1em] text-pine uppercase">
        {meta.category} · {meta.readingTime} {t.readingTime}
      </span>
      <h1 className="font-display mb-4 text-3xl font-medium text-balance text-ink sm:text-4xl">{meta.title}</h1>
      <p className="font-data mb-4 text-xs text-stone-soft">
        {t.publishedOn}{" "}
        {new Date(meta.publishedAt).toLocaleDateString(t.dateLocale, {
          timeZone: "UTC",
        })}
      </p>
      <ShareButtons url={url} title={meta.title} locale={locale} />

      {meta.coverImage && (
        <Image
          src={meta.coverImage.src}
          alt={meta.coverImage.alt}
          width={1200}
          height={675}
          priority
          className="mb-10 aspect-video w-full border border-line object-cover"
        />
      )}

      <article>
        <Content />
      </article>

      <div className="mt-10 border-t border-line pt-8">
        <AuthorBox
          authorName={meta.author.name}
          publishedAt={meta.publishedAt}
          updatedAt={meta.updatedAt}
          locale={locale}
        />
        <ShareButtons url={url} title={meta.title} locale={locale} />
      </div>
    </main>
  );
}
