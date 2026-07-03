import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

// Crawlers IA explicitement autorisés : leur accès conditionne la
// visibilité du blog dans les réponses de ChatGPT, Claude, Perplexity,
// Gemini, Copilot, etc. (GEO). La règle "*" les couvre déjà, mais les
// nommer documente l'intention et protège d'un blocage accidentel.
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "meta-externalagent",
  "Amazonbot",
  "cohere-ai",
  "DuckAssistBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Pas de disallow ici : les pages à désindexer (/formation-ia,
        // /politique-cookies, /mentions-legales) portent une balise noindex.
        // Bloquer leur crawl empêcherait Google de lire ce noindex.
        disallow: ["/api/"],
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: new URL(SITE_URL).host,
  };
}
