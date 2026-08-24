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
      <h1 className="mb-2 text-3xl font-bold text-neutral-900">
        Blog do Instituto Frauches
      </h1>
      <p className="mb-10 max-w-2xl text-neutral-600">
        Conteúdo educativo sobre transplante capilar, tricologia e calvície,
        assinado pelo{" "}
        <Link href="/sobre" className="underline">
          Dr. Vitor Frauches
        </Link>
        .
      </p>

      <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {JOURNEYS.map((journey) => {
          const post = posts.find((p) => p.slug === journey.slug);
          if (!post) return null;
          return (
            <Link
              key={journey.slug}
              href={`/blog/${journey.slug}`}
              className="group block rounded-xl border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-400"
            >
              <p className="mb-1 text-base font-semibold text-neutral-900 group-hover:underline">
                {journey.question}
              </p>
              <p className="text-sm text-neutral-600">{journey.subtitle}</p>
            </Link>
          );
        })}
      </div>

      <BlogExplorer posts={posts} />
    </main>
  );
}
