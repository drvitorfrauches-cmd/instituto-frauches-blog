import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog/registry";
import { SITE_URL } from "@/lib/blog/site";

export const metadata: Metadata = {
  title: "Blog | Instituto Frauches",
  description:
    "Conteúdo educativo sobre transplante capilar FUE, tricologia e calvície, assinado pelo Dr. Vitor Frauches.",
  alternates: { canonical: `${SITE_URL}/blog` },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="mb-2 text-3xl font-bold text-neutral-900">
        Blog do Instituto Frauches
      </h1>
      <p className="mb-10 max-w-2xl text-neutral-600">
        Conteúdo educativo sobre transplante capilar, tricologia e calvície,
        assinado pelo Dr. Vitor Frauches.
      </p>

      <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <li key={post.slug}>
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
              <span className="mb-1 block text-xs font-medium uppercase tracking-wide text-neutral-500">
                {post.category} · {post.readingTime} min de leitura
              </span>
              <h2 className="mb-1.5 line-clamp-2 text-lg font-semibold leading-snug text-neutral-900 group-hover:underline">
                {post.title}
              </h2>
              <p className="line-clamp-2 text-sm text-neutral-600">
                {post.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>

      {posts.length === 0 && (
        <p className="text-neutral-500">Nenhum artigo publicado ainda.</p>
      )}
    </main>
  );
}
