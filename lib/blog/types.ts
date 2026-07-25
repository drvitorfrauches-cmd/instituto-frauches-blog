export interface PostAuthor {
  name: string;
  role: string;
}

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  /** ISO date, YYYY-MM-DD */
  publishedAt: string;
  /** minutes */
  readingTime: number;
  category: string;
  author: PostAuthor;
}
