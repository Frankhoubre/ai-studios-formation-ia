import { articles as allArticles } from "@/content/articles/articles";
import type { Article } from "@/lib/types/article";

const PUBLICATION_TIME_ZONE = "Europe/Paris";

function getTodayDateKey(now = new Date()): string {
  const parts = new Intl.DateTimeFormat("fr-CA", {
    day: "2-digit",
    month: "2-digit",
    timeZone: PUBLICATION_TIME_ZONE,
    year: "numeric",
  }).formatToParts(now);
  const dateParts = Object.fromEntries(
    parts.map((part) => [part.type, part.value]),
  );

  return `${dateParts.year}-${dateParts.month}-${dateParts.day}`;
}

function getArticleDateKey(article: Article): string {
  return article.date.slice(0, 10);
}

function isPublishedArticle(article: Article): boolean {
  return getArticleDateKey(article) <= getTodayDateKey();
}

export function getAllArticles(): Article[] {
  return allArticles.filter(isPublishedArticle).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getArticleBySlug(slug: string): Article | undefined {
  return allArticles.find((a) => a.slug === slug && isPublishedArticle(a));
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
  return getAllArticles().map((a) => a.slug);
}
