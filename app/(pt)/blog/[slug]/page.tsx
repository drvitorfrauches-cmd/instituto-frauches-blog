import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleView } from "@/components/ArticleView";
import { getAllPosts, getEnSlugFor, getPostComponent, getPostMeta } from "@/lib/blog/registry";
import { SITE_NAME, SITE_URL } from "@/lib/blog/site";
import { extractFaqs, extractHowTo } from "@/lib/blog/structured-data";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = getPostMeta(slug);
  if (!meta) return {};

  const titleWithSuffix = `${meta.title} | ${SITE_NAME}`;
  const url = `${SITE_URL}/blog/${meta.slug}`;
  const enSlug = getEnSlugFor(meta.slug);

  return {
    title: titleWithSuffix.length <= 70 ? titleWithSuffix : meta.title,
    description: meta.description,
    alternates: {
      canonical: url,
      languages: enSlug
        ? {
            "pt-BR": url,
            en: `${SITE_URL}/en/blog/${enSlug}`,
            "x-default": `${SITE_URL}/en/blog/${enSlug}`,
          }
        : undefined,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "article",
      publishedTime: meta.publishedAt,
      authors: [meta.author.name],
      url,
      images: meta.coverImage ? [{ url: `${SITE_URL}${meta.coverImage.src}` }] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = getPostMeta(slug);
  const load = getPostComponent(slug);

  if (!meta || !load) {
    notFound();
  }

  const { default: Content } = await load();
  const enSlug = getEnSlugFor(meta.slug);

  return (
    <ArticleView
      meta={meta}
      Content={Content}
      url={`${SITE_URL}/blog/${meta.slug}`}
      authorUrl={`${SITE_URL}/sobre`}
      faqs={extractFaqs(meta.slug)}
      howTo={extractHowTo(meta.slug, meta.title)}
      locale="pt"
      otherLanguageHref={enSlug ? `/en/blog/${enSlug}` : undefined}
    />
  );
}
