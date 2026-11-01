import { getAllArticles } from "@/lib/articles";
import { SITE_URL } from "@/lib/constants";
import { articlePublishedAt, parisDateTime } from "@/lib/seo";

export const revalidate = 600;

// Google News ne lit que les articles des deux derniers jours.
const WINDOW_MS = 2 * 24 * 60 * 60 * 1000;

function esc(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function GET() {
  const cutoff = Date.now() - WINDOW_MS;
  const recent = getAllArticles().filter(
    (a) =>
      new Date(parisDateTime(a.date, a.publishedTime ?? "00:00")).getTime() >=
      cutoff,
  );

  const items = recent
    .map(
      (a) => `  <url>
    <loc>${SITE_URL}/blog/${a.slug}</loc>
    <news:news>
      <news:publication>
        <news:name>AI Studios</news:name>
        <news:language>fr</news:language>
      </news:publication>
      <news:publication_date>${articlePublishedAt(a)}</news:publication_date>
      <news:title>${esc(a.title)}</news:title>
    </news:news>
  </url>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${items}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=600, s-maxage=600",
    },
  });
}
