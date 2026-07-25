import fs from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";
import type { PostMeta } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content");

interface ContentModule {
  meta: PostMeta;
  default: ComponentType;
}

export interface PostEntry {
  meta: PostMeta;
  load: () => Promise<ContentModule>;
}

function getSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".tsx"))
    .map((file) => file.replace(/\.tsx$/, ""));
}

function loadModuleSync(slug: string): ContentModule {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return require(`../../content/${slug}.tsx`) as ContentModule;
}

function buildRegistry(): PostEntry[] {
  return getSlugs().map((slug) => {
    const { meta } = loadModuleSync(slug);
    return {
      meta,
      load: () => import(`../../content/${slug}.tsx`),
    };
  });
}

let cachedRegistry: PostEntry[] | null = null;

function getRegistry(): PostEntry[] {
  if (!cachedRegistry) {
    cachedRegistry = buildRegistry();
  }
  return cachedRegistry;
}

export function getAllPosts(): PostMeta[] {
  return getRegistry()
    .map((entry) => entry.meta)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getPostMeta(slug: string): PostMeta | undefined {
  return getRegistry().find((entry) => entry.meta.slug === slug)?.meta;
}

export function getPostComponent(
  slug: string,
): (() => Promise<ContentModule>) | undefined {
  return getRegistry().find((entry) => entry.meta.slug === slug)?.load;
}
