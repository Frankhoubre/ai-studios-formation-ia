import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

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
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: new URL(SITE_URL).host,
  };
}
