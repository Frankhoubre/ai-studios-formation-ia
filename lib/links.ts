// Link policy for article content.
// - Official/editorial sources: followed ("noopener noreferrer").
// - Affiliate links (registry in seo-multisites/affiliation.md, or the
//   "sponsored:" prefix in markdown): "sponsored nofollow noopener".
// - User-generated content (forums, Reddit, Q&A): "nofollow noopener".
// Keep AFFILIATE_* in sync with .loop_scripts/audit.mjs.

export const SPONSORED_PREFIX = "sponsored:";

export const AFFILIATE_HOSTS = [
  "goto.higgsfield.ai",
  "dub.florafauna.ai",
  "try.elevenlabs.io",
  "f.mtr.cool",
  "go.getproton.me",
];

// Referral parameters used by the programs in the registry (Higgsfield fpr,
// Rewardful via/sid, Refersion rfsn, HasOffers aff_id, Wispr Flow /r).
const AFFILIATE_PARAMS = ["fpr", "via", "rfsn", "aff_id"];

const UGC_HOSTS = [
  "reddit.com",
  "redd.it",
  "quora.com",
  "discord.com",
  "discord.gg",
  "stackoverflow.com",
  "stackexchange.com",
  "news.ycombinator.com",
];
const UGC_SUBDOMAIN = /^(forum|forums|community|discuss|discourse)\./;

export type LinkKind = "internal" | "editorial" | "sponsored" | "ugc";

function hostOf(url: URL): string {
  return url.hostname.toLowerCase().replace(/^www\./, "");
}

function matchesHost(host: string, list: string[]): boolean {
  return list.some((h) => host === h || host.endsWith(`.${h}`));
}

export function isAffiliateUrl(href: string): boolean {
  let url: URL;
  try {
    url = new URL(href);
  } catch {
    return false;
  }
  const host = hostOf(url);
  if (matchesHost(host, AFFILIATE_HOSTS)) return true;
  if (host === "wisprflow.ai" && url.pathname === "/r") return true;
  if (url.searchParams.get("sid") === "rewardful") return true;
  return AFFILIATE_PARAMS.some((p) => url.searchParams.has(p));
}

export function isUgcUrl(href: string): boolean {
  try {
    const host = hostOf(new URL(href));
    return matchesHost(host, UGC_HOSTS) || UGC_SUBDOMAIN.test(host);
  } catch {
    return false;
  }
}

export function classifyLink(
  rawHref: string,
  options?: { sponsored?: boolean },
): { href: string; kind: LinkKind } {
  let href = rawHref.trim();
  let sponsored = options?.sponsored ?? false;
  if (href.startsWith(SPONSORED_PREFIX)) {
    href = href.slice(SPONSORED_PREFIX.length).trim();
    sponsored = true;
  }
  if (!/^https?:\/\//.test(href)) return { href, kind: "internal" };
  if (sponsored || isAffiliateUrl(href)) return { href, kind: "sponsored" };
  if (isUgcUrl(href)) return { href, kind: "ugc" };
  return { href, kind: "editorial" };
}

export const REL_BY_KIND: Record<Exclude<LinkKind, "internal">, string> = {
  editorial: "noopener noreferrer",
  sponsored: "sponsored nofollow noopener",
  ugc: "nofollow noopener",
};
