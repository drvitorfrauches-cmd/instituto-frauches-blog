import fs from "node:fs";
import path from "node:path";
import { parseArticle } from "@/lib/admin/article-blocks";

function readSource(slug: string): string {
  return fs.readFileSync(path.join(process.cwd(), "content", `${slug}.tsx`), "utf8");
}

function plainText(markup: string): string {
  return markup
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .trim();
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function extractFaqs(slug: string): FaqItem[] {
  const { blocks } = parseArticle(readSource(slug));
  const faqs: FaqItem[] = [];

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if (block.type !== "heading3" || !block.text.trim().endsWith("?")) continue;
    const next = blocks[i + 1];
    if (next && next.type === "paragraph") {
      faqs.push({ question: plainText(block.text), answer: plainText(next.text) });
    }
  }

  return faqs;
}

export interface HowToData {
  name: string;
  steps: string[];
}

const HOWTO_TRIGGER = /etapas|passo a passo|passos são/i;

export function extractHowTo(slug: string, articleTitle: string): HowToData | null {
  const { blocks } = parseArticle(readSource(slug));

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if (block.type !== "list" || !block.ordered) continue;
    const prev = blocks[i - 1];
    if (prev && prev.type === "paragraph" && HOWTO_TRIGGER.test(prev.text)) {
      return { name: articleTitle, steps: block.items.map(plainText) };
    }
  }

  return null;
}
