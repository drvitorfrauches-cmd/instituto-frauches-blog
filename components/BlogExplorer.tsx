"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { PostMeta } from "@/lib/blog/types";
import { WHATSAPP_URL } from "@/lib/blog/site";

function normalize(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
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
        className="mb-10 w-full max-w-xl border border-line bg-paper-raised px-4 py-3 text-sm text-ink placeholder:text-stone-soft focus:border-pine focus:outline-none"
      />

      <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => {
          const isGuide = post.category === "Guias";
          return (
            <li key={post.slug} className={isGuide ? "border border-pine/30 bg-pine-soft/40 p-3" : ""}>
              <Link href={`/blog/${post.slug}`} className="group block">
                {post.coverImage ? (
                  <Image
                    src={post.coverImage.src}
                    alt={post.coverImage.alt}
                    width={600}
                    height={338}
                    className="mb-3 aspect-video w-full border border-line object-cover"
                  />
                ) : (
                  <div className="mb-3 aspect-video w-full border border-line bg-paper-raised" />
                )}
                <span className="mb-1.5 flex flex-wrap items-center gap-2 text-[0.68rem] font-medium tracking-[0.1em] text-pine uppercase">
                  {isGuide && (
                    <span className="bg-pine px-1.5 py-0.5 text-[0.62rem] tracking-[0.08em] text-paper">
                      Comece por aqui
                    </span>
                  )}
                  <span className="font-data normal-case tracking-normal text-stone">
                    {post.category} · {post.readingTime} min de leitura
                  </span>
                </span>
                <h2 className="font-display mb-1.5 line-clamp-2 text-lg leading-snug font-medium text-ink group-hover:text-pine">
                  {post.title}
                </h2>
                <p className="line-clamp-2 text-sm text-stone">
                  {post.description}
                </p>
              </Link>
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
