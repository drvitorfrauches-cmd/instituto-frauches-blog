import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog/registry";
import { AUTHOR, LOGO_PATH, ORGANIZATION_JSON_LD, SITE_NAME, SITE_URL } from "@/lib/blog/site";
import BlogExplorer from "@/components/BlogExplorer";

const JOURNEYS = [
  {
    slug: "guia-calvicie-masculina",
    question: "Notei queda ou afinamento no cabelo",
    subtitle: "Primeiros sinais, diagnóstico e tratamento clínico.",
  },
  {
    slug: "guia-transplante-capilar",
    question: "Quero entender o transplante capilar",
    subtitle: "Técnica FUE, planejamento, dor, recuperação e resultado.",
  },
  {
    slug: "guia-tratamentos-capilares",
    question: "Busco tratamento clínico, sem cirurgia",
    subtitle: "Minoxidil, finasterida, PRP, MMP, mesoterapia e exossomos.",
  },
] as const;

const TITLE = "Transplante Capilar e Tricologia | Instituto Frauches";
const DESCRIPTION =
  "Conteúdo educativo sobre transplante capilar FUE, tricologia, calvície e tratamentos capilares, assinado pelo Dr. Vitor Frauches. Agende sua avaliação.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: `${SITE_URL}/blog`,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}${LOGO_PATH}` }],
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog do Instituto Frauches",
    description:
      "Conteúdo educativo sobre transplante capilar, tricologia e calvície, assinado pelo Dr. Vitor Frauches.",
    url: `${SITE_URL}/blog`,
    author: {
      "@type": "Person",
      name: AUTHOR.name,
      url: `${SITE_URL}/sobre`,
    },
    publisher: ORGANIZATION_JSON_LD,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}/blog/${post.slug}`,
        name: post.title,
      })),
    },
  };

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <span className="font-data mb-3 block text-xs tracking-[0.14em] text-pine uppercase">
        Tricologia e transplante capilar
      </span>
      <h1 className="font-display mb-3 max-w-3xl text-4xl font-medium text-balance text-ink sm:text-5xl">
        Blog do Instituto Frauches
      </h1>
      <p className="mb-12 max-w-xl text-stone">
        Conteúdo educativo sobre transplante capilar, tricologia e calvície,
        assinado pelo{" "}
        <Link href="/sobre" className="underline">
          Dr. Vitor Frauches
        </Link>
        .
      </p>

      <div className="mb-14 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-3">
        {JOURNEYS.map((journey) => {
          const post = posts.find((p) => p.slug === journey.slug);
          if (!post) return null;
          return (
            <Link
              key={journey.slug}
              href={`/blog/${journey.slug}`}
              className="group block bg-paper-raised p-6 transition-colors hover:bg-pine-soft"
            >
              <p className="font-display mb-2 text-lg font-medium text-ink group-hover:text-pine-ink">
                {journey.question}
              </p>
              <p className="text-sm text-stone">{journey.subtitle}</p>
            </Link>
          );
        })}
      </div>

      <BlogExplorer posts={posts} />
    </main>
  );
}
