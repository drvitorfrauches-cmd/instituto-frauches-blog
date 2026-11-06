import type { MetadataRoute } from "next";
import { getAllEnPosts, getAllPosts, getEnSlugFor } from "@/lib/blog/registry";
import { SITE_URL } from "@/lib/blog/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const enPosts = getAllEnPosts();
  const pair = (pt: string, en: string) => ({
    languages: { "pt-BR": pt, en, "x-default": en },
  });

  return [
    {
      url: `${SITE_URL}/blog`,
      lastModified: posts[0]?.publishedAt ?? new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: pair(`${SITE_URL}/blog`, `${SITE_URL}/en`),
    },
    {
      url: `${SITE_URL}/sobre`,
      alternates: pair(`${SITE_URL}/sobre`, `${SITE_URL}/en/about`),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/politica-de-privacidade`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...posts.map((post) => {
      const enSlug = getEnSlugFor(post.slug);
      return {
        url: `${SITE_URL}/blog/${post.slug}`,
        lastModified: post.updatedAt ?? post.publishedAt,
        changeFrequency: "yearly" as const,
        priority: 0.6,
        alternates: enSlug
          ? pair(`${SITE_URL}/blog/${post.slug}`, `${SITE_URL}/en/blog/${enSlug}`)
          : undefined,
      };
    }),
    {
      url: `${SITE_URL}/en`,
      lastModified: enPosts[0]?.publishedAt ?? new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: pair(`${SITE_URL}/blog`, `${SITE_URL}/en`),
    },
    {
      url: `${SITE_URL}/en/about`,
      changeFrequency: "monthly",
      priority: 0.5,
      alternates: pair(`${SITE_URL}/sobre`, `${SITE_URL}/en/about`),
    },
    ...enPosts.map((post) => ({
      url: `${SITE_URL}/en/blog/${post.slug}`,
      lastModified: post.updatedAt ?? post.publishedAt,
      changeFrequency: "yearly" as const,
      priority: 0.6,
      alternates: post.translationOf
        ? pair(`${SITE_URL}/blog/${post.translationOf}`, `${SITE_URL}/en/blog/${post.slug}`)
        : undefined,
    })),
  ];
}
