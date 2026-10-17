import type { ContentBlock } from "../data/types";
import type { FaqItem } from "./schema";

/** Strips HTML tags and decodes the handful of entities used in blogs.json. */
function toPlainText(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Extracts {question, answer} pairs from a blog post's content blocks for
 * FAQPage schema. Blog posts author FAQs as a `heading` block whose text
 * matches /FAQ/i, followed by a run of `paragraph` blocks each shaped like
 * `<strong>Question?</strong><br/>Answer...` (see app/data/blogs.json), and
 * terminated by the next `heading`/`hr` block. Returns an empty array when
 * the post has no FAQ section.
 */
export function extractFaqFromBlocks(blocks: ContentBlock[]): FaqItem[] {
  const faqHeadingIndex = blocks.findIndex(
    (b) => b.type === "heading" && /faq/i.test(b.text)
  );
  if (faqHeadingIndex === -1) return [];

  const items: FaqItem[] = [];
  for (let i = faqHeadingIndex + 1; i < blocks.length; i++) {
    const block = blocks[i];
    if (block.type === "heading" || block.type === "hr") break;
    if (block.type !== "paragraph") continue;

    const match = block.html.match(/^<strong>([\s\S]*?)<\/strong>\s*(?:<br\s*\/?>)?\s*([\s\S]*)$/i);
    if (!match) continue;

    const question = toPlainText(match[1]);
    const answer = toPlainText(match[2]);
    if (question && answer) items.push({ question, answer });
  }

  return items;
}
