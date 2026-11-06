import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleView } from "@/components/ArticleView";
import { getAllEnPosts, getEnPostComponent, getEnPostMeta } from "@/lib/blog/registry";
import { SITE_NAME, SITE_URL } from "@/lib/blog/site";
import { extractFaqs, extractHowTo } from "@/lib/blog/structured-data";

export async function generateStaticParams() {
  return getAllEnPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = getEnPostMeta(slug);
  if (!meta) return {};

  const titleWithSuffix = `${meta.title} | ${SITE_NAME}`;
  const url = `${SITE_URL}/en/blog/${meta.slug}`;
  const ptUrl = meta.translationOf ? `${SITE_URL}/blog/${meta.translationOf}` : undefined;

  return {
    title: titleWithSuffix.length <= 70 ? titleWithSuffix : meta.title,
    description: meta.description,
    alternates: {
      canonical: url,
      languages: ptUrl ? { "pt-BR": ptUrl, en: url, "x-default": url } : undefined,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "article",
      locale: "en_US",
      publishedTime: meta.publishedAt,
      authors: [meta.author.name],
      url,
      images: meta.coverImage ? [{ url: `${SITE_URL}${meta.coverImage.src}` }] : undefined,
    },
  };
}

export default async function EnglishPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = getEnPostMeta(slug);
  const load = getEnPostComponent(slug);

  if (!meta || !load) {
    notFound();
  }

  const { default: Content } = await load();

  return (
    <ArticleView
      meta={meta}
      Content={Content}
      url={`${SITE_URL}/en/blog/${meta.slug}`}
      authorUrl={`${SITE_URL}/en/about`}
      faqs={extractFaqs(meta.slug, "content-en")}
      howTo={extractHowTo(meta.slug, meta.title, "content-en")}
      locale="en"
      otherLanguageHref={meta.translationOf ? `/blog/${meta.translationOf}` : undefined}
    />
  );
}
