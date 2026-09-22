"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { PostMeta } from "@/lib/blog/types";
import { WHATSAPP_URL } from "@/lib/blog/site";

function normalize(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
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
        className="mb-10 w-full max-w-xl border border-line bg-paper-raised px-4 py-3 text-sm text-ink placeholder:text-stone-soft focus:border-pine focus:outline-none"
      />

      <ul>
        {filteredPosts.map((post, i) => {
          const isGuide = post.category === "Guias";
          return (
            <li
              key={post.slug}
              className="grid grid-cols-1 gap-2 border-t border-line py-6 first:border-t-0 sm:grid-cols-[3.5rem_1fr_9rem] sm:gap-7 sm:py-7"
            >
              <span className="font-data hidden text-xs text-stone-soft sm:block sm:pt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <Link href={`/blog/${post.slug}`} className="group block">
                <span className="mb-2 flex flex-wrap items-center gap-2 text-[0.68rem] font-medium tracking-[0.1em] text-pine uppercase">
                  {isGuide && (
                    <span className="bg-pine px-1.5 py-0.5 text-[0.62rem] tracking-[0.08em] text-paper">
                      Comece por aqui
                    </span>
                  )}
                  <span>{post.category}</span>
                </span>
                <h2 className="font-display mb-1.5 text-xl leading-snug font-medium text-balance text-ink group-hover:text-pine">
                  {post.title}
                </h2>
                <p className="line-clamp-2 max-w-[60ch] text-sm text-stone">
                  {post.description}
                </p>
              </Link>
              <div className="font-data flex gap-4 text-xs text-stone-soft sm:flex-col sm:gap-1 sm:text-right">
                <span>{post.readingTime} min</span>
                <span>{formatDate(post.publishedAt)}</span>
              </div>
            </li>
          );
        })}
      </ul>

      {filteredPosts.length === 0 && (
        <p className="text-stone">
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
