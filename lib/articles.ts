import { articles as allArticles } from "@/content/articles/articles";
import type { Article } from "@/lib/types/article";

export function getAllArticles(): Article[] {
  return [...allArticles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getArticleBySlug(slug: string): Article | undefined {
  return allArticles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return getAllArticles().filter((a) => a.category === categorySlug);
}

export function getRelatedArticles(
  article: Article,
  limit = 3,
): Article[] {
  const pool = article.relatedSlugs
    .map((s) => getArticleBySlug(s))
    .filter((a): a is Article => Boolean(a));
  if (pool.length >= limit) return pool.slice(0, limit);
  const rest = getAllArticles()
    .filter((a) => a.slug !== article.slug && !pool.find((p) => p.slug === a.slug))
    .slice(0, limit - pool.length);
  return [...pool, ...rest];
}

export function getAllSlugs(): string[] {
  return allArticles.map((a) => a.slug);
}
