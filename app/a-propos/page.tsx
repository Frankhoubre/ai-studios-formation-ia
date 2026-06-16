import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import {
  AUTHOR_NAME,
  FORMATION_FREE_URL,
  MAIN_SITE_URL,
  SKOOL_COMMUNITY_URL,
  YOUTUBE_URL,
} from "@/lib/constants";
import {
  absoluteUrl,
  buildAboutPageJsonLd,
  buildBreadcrumbJsonLd,
  buildMetadata,
  buildPersonJsonLd,
} from "@/lib/seo";

const aboutDescription =
  "AI Studios forme les créateurs à l’IA image et vidéo : méthode, workflows et exigence qualité. Découvrez Frank Houbre et la communauté.";

export const metadata = buildMetadata({
  title: "À propos AI Studios - formation IA créative",
  description: aboutDescription,
  path: "/a-propos",
});

export default function AboutPage() {
  const breadcrumbLd = buildBreadcrumbJsonLd([
    { name: "Accueil", url: absoluteUrl("/") },
    { name: "À propos", url: absoluteUrl("/a-propos") },
  ]);
  const aboutLd = buildAboutPageJsonLd({ description: aboutDescription });
  const personLd = buildPersonJsonLd();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
      <SEOJsonLd data={[breadcrumbLd, aboutLd, personLd]} />
      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/" },
          { label: "À propos" },
        ]}
      />
      <h1 className="font-display mt-8 text-4xl font-semibold tracking-tight text-text md:text-5xl">
        À propos
      </h1>
      <p className="mt-6 text-lg text-text-soft leading-relaxed">
        AI Studios, c’est la formation et la communauté de Frank Houbre autour
        de l’IA créative appliquée à des livrables sérieux : images, vidéos,
        publicités, contenus cinématiques, workflows pros. Le positionnement est
        simple : moins de rendu générique, plus de méthode, plus de narration,
        plus de cohérence.
      </p>
      <p className="mt-6 text-text-muted leading-relaxed">
        Ce blog prolonge cette même exigence. Les articles sont écrits comme des
        guides de terrain : problèmes réels, erreurs fréquentes, workflows,
        exemples. Pas de langue corporate, pas de promesses vides, pas de
        contenu « SEO creux ». Si vous débutez sérieusement, vous trouverez des
        piliers pour structurer votre apprentissage. Si vous créez déjà, vous
        trouverez des critères pour durcir la qualité et accélérer sans vous
        disperser.
      </p>
      <p className="mt-6 text-text-muted leading-relaxed">
        L’objectif final reste le même : vous aider à produire des images et des
        vidéos qui tiennent debout hors de votre timeline, avec une démarche
        répétable, pas avec un prompt miracle du jour.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/blog"
          className="inline-flex justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-bright"
        >
          Lire les guides
        </Link>
        <a
          href={FORMATION_FREE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center rounded-full border border-border-subtle px-6 py-3 text-sm font-semibold text-text transition hover:border-brand/40"
        >
          Formation gratuite
        </a>
      </div>
      <section className="mt-16 rounded-2xl border border-border-subtle bg-card/50 p-6 md:p-8">
        <h2 className="font-display text-2xl font-semibold text-text">
          L’auteur : {AUTHOR_NAME}
        </h2>
        <p className="mt-4 text-text-muted leading-relaxed">
          {AUTHOR_NAME} est le fondateur d’AI Studios. Il forme des créateurs à
          un usage exigeant de l’IA image et vidéo, en partageant des workflows
          testés sur de vrais projets plutôt que des « prompts magiques ». Les
          guides de ce blog sont écrits depuis cette pratique de terrain.
        </p>
        <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <li>
            <a
              href={MAIN_SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-bright underline underline-offset-2 hover:text-accent-rose"
            >
              Site AI Studios
            </a>
          </li>
          <li>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-bright underline underline-offset-2 hover:text-accent-rose"
            >
              Chaîne YouTube
            </a>
          </li>
          <li>
            <a
              href={SKOOL_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-bright underline underline-offset-2 hover:text-accent-rose"
            >
              Communauté Skool
            </a>
          </li>
        </ul>
      </section>

      <div className="mt-16">
        <CTASection />
      </div>
    </div>
  );
}
