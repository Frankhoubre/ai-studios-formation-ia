import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { getAllArticles } from "@/lib/articles";
import { categories } from "@/lib/categories";

export const revalidate = 3600;

function getLatestModifiedDate(
  items: { updatedAt: string }[],
  fallback = "2026-05-11",
): Date {
  const latest = items.reduce(
    (current, item) => (item.updatedAt > current ? item.updatedAt : current),
    fallback,
  );
  return new Date(latest);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();
  const latestSiteUpdate = getLatestModifiedDate(articles);
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: latestSiteUpdate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: latestSiteUpdate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/a-propos`,
      lastModified: latestSiteUpdate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...categories.map((c) => ({
      url: `${SITE_URL}/categories/${c.slug}`,
      lastModified: getLatestModifiedDate(
        articles.filter((article) => article.category === c.slug),
        latestSiteUpdate.toISOString(),
      ),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    })),
  ];

  const articleRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${SITE_URL}/blog/${a.slug}`,
    lastModified: new Date(a.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...articleRoutes];
}
