export type ArticleTable = {
  type: "table";
  caption?: string;
  headers: string[];
  rows: string[][];
};

export type ArticleBlock =
  | { type: "h2"; id: string; text: string }
  | { type: "h3"; id?: string; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | ArticleTable;

export type ArticleFaqItem = {
  question: string;
  answer: string;
};

export type Article = {
  title: string;
  slug: string;
  description: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string;
  updatedAt: string;
  readingTime: number;
  author: { name: string; url?: string };
  image: string;
  imageAlt: string;
  keywords: string[];
  content: ArticleBlock[];
  faq: ArticleFaqItem[];
  relatedSlugs: string[];
};

export type Category = {
  name: string;
  slug: string;
  description: string;
};
