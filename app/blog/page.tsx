import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog/registry";
import { AUTHOR, LOGO_PATH, SITE_NAME, SITE_URL } from "@/lib/blog/site";

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
    publisher: {
      "@type": "MedicalOrganization",
      name: SITE_NAME,
      url: SITE_URL,
    },
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
        assinado pelo Dr. Vitor Frauches.
      </p>

      <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => {
          const isGuide = post.category === "Guias";
          return (
            <li
              key={post.slug}
              className={
                isGuide
                  ? "rounded-xl border border-amber-200 bg-amber-50/60 p-4"
                  : ""
              }
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                {post.coverImage ? (
                  <Image
                    src={post.coverImage.src}
                    alt={post.coverImage.alt}
                    width={600}
                    height={338}
                    className="mb-3 aspect-video w-full rounded-lg object-cover"
                  />
                ) : (
                  <div className="mb-3 aspect-video w-full rounded-lg bg-neutral-100" />
                )}
                <span className="mb-1 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-neutral-500">
                  {isGuide && (
                    <span className="rounded-full bg-amber-800 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-white">
                      Comece por aqui
                    </span>
                  )}
                  <span>
                    {post.category} · {post.readingTime} min de leitura
                  </span>
                </span>
                <h2 className="mb-1.5 line-clamp-2 text-lg font-semibold leading-snug text-neutral-900 group-hover:underline">
                  {post.title}
                </h2>
                <p className="line-clamp-2 text-sm text-neutral-600">
                  {post.description}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>

      {posts.length === 0 && (
        <p className="text-neutral-500">Nenhum artigo publicado ainda.</p>
      )}
    </main>
  );
}
