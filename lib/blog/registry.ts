import fs from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";
import type { PostMeta } from "./types";

interface ContentModule {
  meta: PostMeta;
  default: ComponentType;
}

export interface PostEntry {
  meta: PostMeta;
  load: () => Promise<ContentModule>;
}

function getSlugs(dir: string): string[] {
  const contentDir = path.join(process.cwd(), dir);
  if (!fs.existsSync(contentDir)) return [];
  return fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".tsx"))
    .map((file) => file.replace(/\.tsx$/, ""));
}

// Os caminhos dos imports ficam literais para o bundler empacotar cada pasta.
function buildPtRegistry(): PostEntry[] {
  return getSlugs("content").map((slug) => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { meta } = require(`../../content/${slug}.tsx`) as ContentModule;
    return { meta, load: () => import(`../../content/${slug}.tsx`) };
  });
}

function buildEnRegistry(): PostEntry[] {
  return getSlugs("content-en").map((slug) => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { meta } = require(`../../content-en/${slug}.tsx`) as ContentModule;
    return { meta, load: () => import(`../../content-en/${slug}.tsx`) };
  });
}

let cachedRegistry: PostEntry[] | null = null;
let cachedEnRegistry: PostEntry[] | null = null;

function getRegistry(): PostEntry[] {
  if (!cachedRegistry) {
    cachedRegistry = buildPtRegistry();
  }
  return cachedRegistry;
}

function getEnRegistry(): PostEntry[] {
  if (!cachedEnRegistry) {
    cachedEnRegistry = buildEnRegistry();
  }
  return cachedEnRegistry;
}

const GUIDE_ORDER = [
  "guia-calvicie-masculina",
  "guia-transplante-capilar",
  "guia-tratamentos-capilares",
];

export function getAllPosts(): PostMeta[] {
  return getRegistry()
    .map((entry) => entry.meta)
    .sort((a, b) => {
      const aGuideIndex = GUIDE_ORDER.indexOf(a.slug);
      const bGuideIndex = GUIDE_ORDER.indexOf(b.slug);
      if (aGuideIndex !== -1 || bGuideIndex !== -1) {
        if (aGuideIndex === -1) return 1;
        if (bGuideIndex === -1) return -1;
        return aGuideIndex - bGuideIndex;
      }
      return a.publishedAt < b.publishedAt ? 1 : -1;
    });
}

export function getPostMeta(slug: string): PostMeta | undefined {
  return getRegistry().find((entry) => entry.meta.slug === slug)?.meta;
}

export function getPostComponent(
  slug: string,
): (() => Promise<ContentModule>) | undefined {
  return getRegistry().find((entry) => entry.meta.slug === slug)?.load;
}

export function getAllEnPosts(): PostMeta[] {
  return getEnRegistry()
    .map((entry) => entry.meta)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getEnPostMeta(slug: string): PostMeta | undefined {
  return getEnRegistry().find((entry) => entry.meta.slug === slug)?.meta;
}

export function getEnPostComponent(
  slug: string,
): (() => Promise<ContentModule>) | undefined {
  return getEnRegistry().find((entry) => entry.meta.slug === slug)?.load;
}

/** Versão em inglês de um artigo em português, se existir. */
export function getEnSlugFor(ptSlug: string): string | undefined {
  return getEnRegistry().find((entry) => entry.meta.translationOf === ptSlug)?.meta.slug;
}
