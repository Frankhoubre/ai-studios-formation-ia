import type { ArticleCta as ArticleCtaBlock, ArticleCtaVariant } from "@/lib/types/article";
import { FORMATION_FREE_URL } from "@/lib/constants";

// Same contract as automations/scripts/lien.mjs: <site>/go/bl-<destination>-a/<slug>
// (source "bl" = another of Frank's sites, format "a" = article).
export const CTA_GO_SITES = {
  screenweaver: {
    origin: "https://www.screenweaver.ai",
    destinations: ["home", "fr", "tuto", "script", "tarifs", "mcp", "academy", "seedance", "tools", "blog"],
    fallback: "fr",
  },
  imaginode: {
    origin: "https://imaginode.ai",
    destinations: ["home", "mobile", "meme", "previz", "mcp", "models", "pricing", "signup", "docs", "tools", "blog"],
    fallback: "home",
  },
} as const;

const DEFAULTS: Record<ArticleCtaVariant, { name: string; title: string; text: string; label: string }> = {
  screenweaver: {
    name: "ScreenWeaver",
    title: "Ton film IA, du scénario au storyboard",
    text: "ScreenWeaver part de ton scénario pour construire le découpage, le storyboard puis les plans vidéo, avec des personnages qui restent les mêmes d’une scène à l’autre.",
    label: "Découvrir ScreenWeaver",
  },
  imaginode: {
    name: "Imaginode",
    title: "Compare les modèles sur un seul canvas",
    text: "Imaginode réunit les modèles d’image et de vidéo dans un canvas de nodes. Tu lances le même prompt sur plusieurs modèles, tu compares les rendus, et ton workflow reste enregistré pour la prochaine fois.",
    label: "Essayer Imaginode",
  },
  formation: {
    name: "Formation gratuite",
    title: "La méthode complète, pas des astuces éparpillées",
    text: "La formation gratuite d’AI Studios montre comment je construis un workflow IA, de l’idée à la vidéo finale.",
    label: "Accéder à la formation gratuite",
  },
};

export function ctaHref(block: Pick<ArticleCtaBlock, "variant" | "destination">, slug: string): string {
  if (block.variant === "formation") return FORMATION_FREE_URL;
  const site = CTA_GO_SITES[block.variant];
  const wanted = (block.destination ?? site.fallback).toLowerCase();
  const destination = (site.destinations as readonly string[]).includes(wanted) ? wanted : site.fallback;
  const content = slug.toLowerCase().replace(/[^a-z0-9_-]/g, "").slice(0, 80);
  return `${site.origin}/go/bl-${destination}-a/${content}`;
}

export function ArticleCta({ block, slug }: { block: ArticleCtaBlock; slug: string }) {
  const d = DEFAULTS[block.variant];
  return (
    <aside
      aria-label={d.name}
      className="my-10 flex flex-col gap-5 rounded-2xl border border-brand/30 bg-bg-secondary p-5 md:flex-row md:items-center md:justify-between md:gap-8 md:p-7"
    >
      <div className="min-w-0">
        <p className="text-sm font-semibold text-brand-bright">{d.name}</p>
        <p className="font-display mt-1.5 text-lg font-semibold leading-snug text-text md:text-xl">
          {block.title ?? d.title}
        </p>
        <p className="mt-2 text-[15px] leading-relaxed text-text-soft md:text-base">
          {block.text ?? d.text}
        </p>
      </div>
      <a
        href={ctaHref(block, slug)}
        target="_blank"
        rel="noopener"
        data-button
        className="inline-flex min-h-11 shrink-0 items-center justify-center self-start rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-bg-primary transition hover:bg-text-soft md:self-center"
      >
        {block.label ?? d.label}
      </a>
    </aside>
  );
}
