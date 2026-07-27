import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostComponent, getPostMeta } from "@/lib/blog/registry";
import { LOGO_PATH, SITE_NAME, SITE_URL } from "@/lib/blog/site";
import { AuthorBox } from "@/components/AuthorBox";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShareButtons } from "@/components/ShareButtons";

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

  return {
    title: titleWithSuffix.length <= 70 ? titleWithSuffix : meta.title,
    description: meta.description,
    alternates: { canonical: `${SITE_URL}/blog/${meta.slug}` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "article",
      publishedTime: meta.publishedAt,
      authors: [meta.author.name],
      url: `${SITE_URL}/blog/${meta.slug}`,
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["MedicalWebPage", "BlogPosting"],
    headline: meta.title,
    description: meta.description,
    datePublished: meta.publishedAt,
    dateModified: meta.updatedAt ?? meta.publishedAt,
    author: {
      "@type": "Person",
      name: meta.author.name,
      jobTitle: meta.author.role,
      url: `${SITE_URL}/sobre`,
    },
    publisher: {
      "@type": "MedicalOrganization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}${LOGO_PATH}`,
        width: 600,
        height: 600,
      },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${meta.slug}`,
    image: meta.coverImage ? `${SITE_URL}${meta.coverImage.src}` : undefined,
  };

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link href="/blog" className="mb-4 inline-block text-sm text-neutral-500 hover:underline">
        ← Voltar para o blog
      </Link>

      <Breadcrumbs category={meta.category} title={meta.title} slug={meta.slug} />

      <span className="mb-2 block text-xs font-medium uppercase tracking-wide text-neutral-500">
        {meta.category} · {meta.readingTime} min de leitura
      </span>
      <h1 className="mb-4 text-3xl font-bold text-neutral-900">{meta.title}</h1>
      <p className="mb-3 text-sm text-neutral-500">
        Publicado em{" "}
        {new Date(meta.publishedAt).toLocaleDateString("pt-BR", {
          timeZone: "UTC",
        })}
      </p>
      <AuthorBox
        authorName={meta.author.name}
        publishedAt={meta.publishedAt}
        updatedAt={meta.updatedAt}
      />

      <ShareButtons url={`${SITE_URL}/blog/${meta.slug}`} title={meta.title} />

      {meta.coverImage && (
        <Image
          src={meta.coverImage.src}
          alt={meta.coverImage.alt}
          width={1200}
          height={675}
          priority
          className="mb-10 aspect-video w-full rounded-lg object-cover"
        />
      )}

      <article>
        <Content />
      </article>

      <div className="mt-10 border-t border-neutral-200 pt-8">
        <ShareButtons url={`${SITE_URL}/blog/${meta.slug}`} title={meta.title} />
      </div>
    </main>
  );
}
