import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { CTASection } from "@/components/CTASection";
import { NewsletterBlock } from "@/components/NewsletterBlock";
import { CategoryPill } from "@/components/CategoryPill";
import { getAllArticles } from "@/lib/articles";
import { categories } from "@/lib/categories";
import { FORMATION_FREE_URL } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  absoluteTitle: "AI Studios Blog - Formation IA vidéo, image et cinéma",
  description:
    "Des guides concrets pour arrêter de produire des rendus IA jolis mais oubliables, et commencer à construire de vrais workflows visuels : prompts, images, vidéo, storyboard, montage, son, publicité et narration.",
  path: "/",
});

export default function HomePage() {
  const articles = getAllArticles();
  const latest = articles.slice(0, 6);
  const starters = [
    articles.find((a) => a.slug === "formation-ia-video"),
    articles.find((a) => a.slug === "prompt-image-ia-cinema"),
    articles.find((a) => a.slug === "creer-film-ia"),
  ].filter(Boolean);

  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-12 md:px-6 md:pb-24 md:pt-16">
        <div className="max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-wider text-brand-bright">
            AI Studios Blog
          </p>
          <h1 className="font-display mt-4 text-4xl font-semibold leading-[1.08] tracking-tight text-text md:text-5xl lg:text-[3.35rem]">
            Apprendre l’IA créative pour créer des images, vidéos et films qui
            marquent vraiment
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-soft md:text-xl">
            Des guides concrets pour arrêter de produire des rendus IA jolis
            mais oubliables, et commencer à construire de vrais workflows
            visuels : prompts, images, vidéo, storyboard, montage, son,
            publicité et narration.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={FORMATION_FREE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-full bg-gradient-to-r from-brand to-brand-bright px-7 py-3 text-sm font-semibold text-white shadow-[0_0_32px_-6px_rgba(168,85,247,0.6)] transition hover:brightness-110"
            >
              Voir la formation gratuite
            </a>
            <Link
              href="/blog"
              className="inline-flex justify-center rounded-full border border-border-subtle bg-card px-7 py-3 text-sm font-semibold text-text transition hover:border-brand/40"
            >
              Lire les guides
            </Link>
          </div>
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
                Trois piliers pour cadrer votre apprentissage sans vous perdre
                dans les outils.
              </p>
            </div>
            <Link
              href="/blog"
              className="text-sm font-medium text-brand-bright hover:text-accent-rose"
            >
              Tous les articles →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {starters.map((a) =>
              a ? <ArticleCard key={a.slug} article={a} /> : null,
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
            Choisissez une piste, pas une overdose de contenus mélangés.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/categories/${c.slug}`}
                className="group rounded-2xl border border-border-subtle bg-card p-6 transition hover:border-brand/35"
              >
                <div className="flex items-center gap-2">
                  <CategoryPill slug={c.slug} label={c.name} />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-text-soft">
                  {c.description}
                </p>
                <p className="mt-4 text-sm font-medium text-brand-bright group-hover:text-accent-rose">
                  Explorer →
                </p>
              </Link>
            ))}
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
              className="text-sm font-medium text-brand-bright hover:text-accent-rose"
            >
              Voir le blog →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latest.map((a) => (
              <ArticleCard key={a.slug} article={a} />
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
                cohérence, livrables, et critères de qualité. Pas de discours
                vaporware, pas de promesses « révolution ». Du terrain, des
                erreurs assumées, des corrections.
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
          <CTASection />
        </div>
      </section>
    </div>
  );
}
