import Image from "next/image";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { CTASection } from "@/components/CTASection";
import { NewsletterBlock } from "@/components/NewsletterBlock";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { getAllArticles } from "@/lib/articles";
import { categories } from "@/lib/categories";
import { formatFrenchDate } from "@/lib/utils";
import { CtaLink } from "@/components/cta/CtaLink";
import { AUTHOR_NAME, FORMATION_FREE_URL } from "@/lib/constants";
import {
  buildArticleItemListJsonLd,
  buildBlogJsonLd,
  buildCollectionPageJsonLd,
  buildFormationServiceJsonLd,
  buildMetadata,
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
} from "@/lib/seo";

export const revalidate = 3600;

const homeDescription = DEFAULT_DESCRIPTION;

export const metadata = buildMetadata({
  absoluteTitle: DEFAULT_TITLE,
  description: homeDescription,
  path: "/",
  appendCta: false,
});

export default function HomePage() {
  const articles = getAllArticles();
  // Le plus récent ouvre la page ("À la une"), les six suivants forment la grille.
  const lead = articles[0];
  const latest = articles.slice(1, 7);
  // Pages piliers : les 3 guides complets reçoivent le maillage le plus fort
  // du site (home > piliers > clusters). Fallback sur les fondamentaux tant
  // qu'un pilier n'est pas encore publié (date future).
  const starters = [
    articles.find((a) => a.slug === "video-ia-guide-complet") ??
      articles.find((a) => a.slug === "formation-ia-video"),
    articles.find((a) => a.slug === "image-ia-guide-complet") ??
      articles.find((a) => a.slug === "prompt-image-ia-cinema"),
    articles.find((a) => a.slug === "prompt-ia-guide-complet") ??
      articles.find((a) => a.slug === "creer-film-ia"),
  ].filter(Boolean);
  const pageJsonLd = buildCollectionPageJsonLd({
    name: "AI Studios Blog",
    description: homeDescription,
    path: "/",
  });
  const blogJsonLd = buildBlogJsonLd({ description: homeDescription });
  const formationServiceLd = buildFormationServiceJsonLd();
  const latestJsonLd = buildArticleItemListJsonLd({
    articles: lead ? [lead, ...latest] : latest,
    name: "Derniers guides IA créative",
    path: "/",
  });

  return (
    <div>
      <SEOJsonLd
        data={[blogJsonLd, formationServiceLd, pageJsonLd, latestJsonLd]}
      />
      <section className="mx-auto max-w-6xl px-4 pb-14 pt-10 md:px-6 md:pb-24 md:pt-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-stretch lg:gap-14">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-bright">
              AI Studios Blog
            </p>
            <h1 className="font-display mt-4 text-[2.1rem] font-semibold leading-[1.1] tracking-tight text-text sm:text-4xl md:text-5xl lg:text-[3.35rem] lg:leading-[1.06]">
              Apprendre l’IA créative pour créer des images, vidéos et films
              qui{" "}
              <span className="bg-gradient-to-r from-brand-bright to-accent-rose bg-clip-text text-transparent">
                marquent vraiment
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-soft md:text-xl md:leading-relaxed">
              Des guides concrets pour arrêter de produire des rendus IA jolis
              mais oubliables, et commencer à construire de vrais workflows
              visuels : prompts, images, vidéo, storyboard, montage, son,
              publicité et narration.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-10">
              <CtaLink
                href={FORMATION_FREE_URL}
                placement="home-hero"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-brand to-brand-bright px-7 py-3 text-[15px] font-semibold text-white shadow-[0_0_32px_-6px_rgba(168,85,247,0.6)] transition hover:brightness-110"
              >
                Accéder à la formation gratuite
              </CtaLink>
              <Link
                href="/blog"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-border-subtle bg-card px-7 py-3 text-[15px] font-semibold text-text transition hover:border-brand/40"
              >
                Lire les guides
              </Link>
            </div>
            <p className="mt-7 max-w-xl border-l-2 border-brand/50 pl-4 text-sm leading-relaxed text-text-muted">
              {articles.length} guides et actualités écrits par{" "}
              <Link
                href="/a-propos"
                className="font-medium text-text-soft underline decoration-white/25 underline-offset-[3px] transition hover:text-brand-bright"
              >
                {AUTHOR_NAME}
              </Link>
              , fondateur d’AI Studios et réalisateur de VOIDBORN, film IA
              primé en festivals.
            </p>
          </div>

          {lead ? (
            <article className="group relative overflow-hidden rounded-3xl border border-border-subtle bg-card shadow-[0_40px_120px_-50px_rgba(139,92,246,0.65)] transition duration-300 hover:border-brand/45">
              <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[28rem]">
                <Image
                  src={lead.image}
                  alt={lead.imageAlt}
                  fill
                  preload
                  fetchPriority="high"
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 1023px) 100vw, 560px"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#06060a] via-[#06060a]/55 to-transparent"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-text backdrop-blur">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-accent-rose"
                  />
                  À la une
                </p>
                <h2 className="font-display mt-3 text-xl font-semibold leading-snug tracking-tight text-text sm:text-2xl">
                  <Link
                    href={`/blog/${lead.slug}`}
                    className="after:absolute after:inset-0 after:content-['']"
                  >
                    {lead.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm text-text-soft">
                  <time dateTime={lead.date}>{formatFrenchDate(lead.date)}</time>{" "}
                  · {lead.readingTime} min de lecture
                </p>
              </div>
            </article>
          ) : null}
        </div>
      </section>

      <section className="border-t border-border-subtle bg-bg-secondary/50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-display text-2xl font-semibold text-text md:text-3xl">
                Commencer ici
              </h2>
              <p className="mt-2 max-w-xl text-text-muted">
                Trois guides complets pour cadrer ton apprentissage sans te
                perdre dans les outils.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex min-h-11 items-center text-sm font-medium text-brand-bright hover:text-accent-rose"
            >
              Tous les articles →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {starters.map((a) =>
              a ? (
                <ArticleCard key={a.slug} article={a} headingLevel={3} />
              ) : null,
            )}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="font-display text-2xl font-semibold text-text md:text-3xl">
            Catégories
          </h2>
          <p className="mt-2 max-w-2xl text-text-muted">
            Choisis une piste, pas une overdose de contenus mélangés.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {categories.map((c) => {
              const count = articles.filter((a) => a.category === c.slug).length;
              return (
                <Link
                  key={c.slug}
                  href={`/categories/${c.slug}`}
                  className="group flex flex-col rounded-2xl border border-border-subtle bg-card p-4 transition duration-300 hover:-translate-y-1 hover:border-brand/45 hover:bg-white/[0.06] md:p-6"
                >
                  <span className="text-[13px] font-medium text-text-muted">
                    {count} {c.slug === "actualites-ia" ? "actualités" : "guides"}
                  </span>
                  <h3 className="font-display mt-2 text-lg font-semibold sm:text-xl tracking-tight text-text transition group-hover:text-brand-bright">
                    {c.name}
                  </h3>
                  <p className="mt-3 hidden flex-1 text-sm leading-relaxed text-text-muted sm:block">
                    {c.description}
                  </p>
                  <span
                    aria-hidden="true"
                    className="mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-semibold text-brand-bright"
                  >
                    Explorer
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>
              );
            })}
            <Link
              href="/blog"
              className="group flex flex-col justify-between rounded-2xl border border-brand/35 bg-gradient-to-br from-brand/20 via-bg-secondary to-bg-secondary p-4 transition duration-300 hover:-translate-y-1 hover:border-brand/60 md:p-6"
            >
              <span className="text-[13px] font-medium text-text-soft">
                {articles.length} articles
              </span>
              <span>
                <span className="font-display mt-2 block text-lg font-semibold tracking-tight text-text sm:text-xl">
                  Tout le blog
                </span>
                <span className="mt-3 hidden text-sm leading-relaxed text-text-soft sm:block">
                  Tous les guides et actualités, du plus récent au plus ancien.
                </span>
              </span>
              <span
                aria-hidden="true"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-text"
              >
                Parcourir
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section id="articles" className="border-t border-border-subtle py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-display text-2xl font-semibold text-text md:text-3xl">
                Derniers articles
              </h2>
              <p className="mt-2 text-text-muted">
                Guides longs, utiles, écrits pour des créateurs sérieux.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex min-h-11 items-center text-sm font-medium text-brand-bright hover:text-accent-rose"
            >
              Voir le blog →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latest.map((a) => (
              <ArticleCard key={a.slug} article={a} headingLevel={3} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-2xl font-semibold text-text md:text-3xl">
                Pourquoi AI Studios
              </h2>
              <p className="mt-4 text-text-soft leading-relaxed">
                AI Studios, c’est une formation et une communauté pour créateurs
                qui veulent maîtriser l’IA image et vidéo avec une méthode, pas
                avec des prompts magiques. Ici, on parle workflows, narration,
                cohérence, livrables et critères de qualité. Pas de discours
                creux, pas de promesse miracle. Du terrain, des erreurs
                assumées, des corrections.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-text-muted">
                <li className="flex gap-2">
                  <span className="text-brand-bright">•</span>
                  Des guides pensés pour passer de la démo au projet.
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-bright">•</span>
                  Une voix de praticien : tests, échecs, itérations réelles.
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-bright">•</span>
                  Un positionnement clair : moins de plastique, plus de sens.
                </li>
              </ul>
            </div>
            <NewsletterBlock />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <CTASection placement="home-end" />
        </div>
      </section>
    </div>
  );
}
