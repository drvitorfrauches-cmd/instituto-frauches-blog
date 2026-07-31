"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { PostMeta } from "@/lib/blog/types";
import { WHATSAPP_URL } from "@/lib/blog/site";

function normalize(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export default function BlogExplorer({ posts }: { posts: PostMeta[] }) {
  const [query, setQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return posts;
    return posts.filter((post) => {
      const haystack = normalize(`${post.title} ${post.description}`);
      return haystack.includes(q);
    });
  }, [query, posts]);

  return (
    <div>
      <label htmlFor="blog-search" className="sr-only">
        Buscar no blog
      </label>
      <input
        id="blog-search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Digite sua dúvida sobre queda de cabelo ou transplante capilar"
        className="mb-10 w-full max-w-xl rounded-lg border border-neutral-300 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-500 focus:outline-none"
      />

      <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => {
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

      {filteredPosts.length === 0 && (
        <p className="text-neutral-500">
          Nenhum artigo encontrado para essa busca. Tente outro termo, ou{" "}
          <a href={WHATSAPP_URL} className="underline" target="_blank" rel="noopener noreferrer">
            fale direto com a gente pelo WhatsApp
          </a>
          .
        </p>
      )}
    </div>
  );
}
