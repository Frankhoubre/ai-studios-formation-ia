import { getAllArticles } from "@/lib/articles";
import { SITE_URL } from "@/lib/constants";

export const revalidate = 3600;

const SITE_TITLE = "AI Studios Blog";
const SITE_DESC =
  "Le blog francophone pour apprendre l'IA créative : images, vidéos, films, publicités, prompts et workflows professionnels.";

function esc(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function GET() {
  const articles = getAllArticles().slice(0, 30);
  const lastBuild = articles[0]
    ? new Date(articles[0].updatedAt).toUTCString()
    : new Date().toUTCString();

  const items = articles
    .map((a) => {
      const url = `${SITE_URL}/blog/${a.slug}`;
      return `    <item>
      <title>${esc(a.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(a.date).toUTCString()}</pubDate>
      <description>${esc(a.description)}</description>
      <enclosure url="${SITE_URL}${a.image}" type="image/webp" length="0" />
      <category>${esc(a.category)}</category>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(SITE_TITLE)}</title>
    <link>${SITE_URL}</link>
    <description>${esc(SITE_DESC)}</description>
    <language>fr-FR</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
