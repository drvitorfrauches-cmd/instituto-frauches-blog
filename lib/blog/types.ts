export interface PostAuthor {
  name: string;
  role: string;
}

export interface PostImage {
  /** path under /public, e.g. "/blog/transplante-capilar-fue-o-que-e/cover.jpg" */
  src: string;
  alt: string;
}

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  /** ISO date, YYYY-MM-DD */
  publishedAt: string;
  /** ISO date, YYYY-MM-DD — atualizado a cada revisão real do conteúdo */
  updatedAt?: string;
  /** minutes */
  readingTime: number;
  category: string;
  author: PostAuthor;
  /** optional cover/thumbnail shown on /blog and at the top of the article */
  coverImage?: PostImage;
}
