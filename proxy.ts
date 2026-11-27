import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { detectAiCrawler } from "@/lib/ai-traffic";
import { getCategoryBySlug } from "@/lib/categories";

/**
 * Passage d'un crawler IA (GPTBot, ClaudeBot, PerplexityBot...) : une ligne
 * JSON dans les logs Vercel, avec le robot et la page lue.
 *
 * Ancien filtre /blog?cat=<slug> : redirection permanente vers la page
 * catégorie, qui est la version indexable de la même liste. /blog reste ainsi
 * une page statique.
 */
export function proxy(request: NextRequest) {
  const bot = detectAiCrawler(request.headers.get("user-agent"));
  if (bot) {
    console.log(
      JSON.stringify({
        ai_crawler: bot,
        path: request.nextUrl.pathname,
        ua: (request.headers.get("user-agent") ?? "").slice(0, 160),
        at: new Date().toISOString(),
      }),
    );
  }

  if (request.nextUrl.pathname === "/blog") {
    const cat = request.nextUrl.searchParams.get("cat");
    if (cat && getCategoryBySlug(cat)) {
      const target = request.nextUrl.clone();
      target.pathname = `/categories/${cat}`;
      target.search = "";
      return NextResponse.redirect(target, 308);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)", "/llms.txt", "/robots.txt", "/sitemap.xml"],
};
