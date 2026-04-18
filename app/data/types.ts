export type ContentBlock =
  | { type: "paragraph"; html: string }
  | { type: "heading"; level: 2 | 3 | 4; text: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "code"; lang: string; code: string }
  | { type: "image"; src: string; alt: string; caption: string }
  | { type: "blockquote"; text: string }
  | { type: "hr" };

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  dateISO: string;
  category: string;
  readTime: string;
  author: string;
  label: string;
  excerpt: string;
  metaDescription: string;
  metaKeywords: string;
  tags: string[];
  content: ContentBlock[];
}
