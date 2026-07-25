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
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-2 text-3xl font-bold text-neutral-900">
        Blog do Instituto Frauches
      </h1>
      <p className="mb-10 text-neutral-600">
        Conteúdo educativo sobre transplante capilar, tricologia e calvície,
        assinado pelo Dr. Vitor Frauches.
      </p>

      <ul className="space-y-8">
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-neutral-200 pb-8">
            <Link href={`/blog/${post.slug}`} className="group block">
              {post.coverImage && (
                <Image
                  src={post.coverImage.src}
                  alt={post.coverImage.alt}
                  width={1200}
                  height={675}
                  className="mb-4 aspect-video w-full rounded-lg object-cover"
                />
              )}
              <span className="mb-1 block text-xs font-medium uppercase tracking-wide text-neutral-500">
                {post.category} · {post.readingTime} min de leitura
              </span>
              <h2 className="mb-2 text-xl font-semibold text-neutral-900 group-hover:underline">
                {post.title}
              </h2>
              <p className="text-neutral-600">{post.description}</p>
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
