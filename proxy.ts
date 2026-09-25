import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { detectAiCrawler } from "@/lib/ai-traffic";

/**
 * Passage d'un crawler IA (GPTBot, ClaudeBot, PerplexityBot...) : une ligne
 * JSON dans les logs Vercel, avec le robot et la page lue.
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
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)", "/llms.txt", "/robots.txt", "/sitemap.xml"],
};
