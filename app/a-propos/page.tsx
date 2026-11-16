import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import {
  AUTHOR_NAME,
  FORMATION_FREE_URL,
  MAIN_SITE_URL,
  PODCAST_URL,
  SKOOL_COMMUNITY_URL,
  VOIDBORN_AWARDS,
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
  "AI Studios forme les créateurs à l’IA image et vidéo : méthode, workflows et exigence qualité. Qui est Frank Houbre et comment il travaille.";

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
      <p className="mt-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-bright md:mt-8">
        Qui écrit ce blog
      </p>
      <h1 className="font-display mt-3 text-4xl font-semibold leading-[1.05] tracking-tight text-text md:text-6xl">
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
        contenu « SEO creux ». Si tu débutes sérieusement, tu trouveras des
        piliers pour structurer ton apprentissage. Si tu crées déjà, tu
        trouveras des critères pour durcir la qualité et accélérer sans te
        disperser.
      </p>
      <p className="mt-6 text-text-muted leading-relaxed">
        L’objectif final reste le même : t’aider à produire des images et des
        vidéos qui tiennent debout hors de ta timeline, avec une démarche
        répétable, pas avec un prompt miracle du jour.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/blog"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-bright"
        >
          Lire les guides
        </Link>
        <a
          href={FORMATION_FREE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-border-subtle px-6 py-3 text-sm font-semibold text-text transition hover:border-brand/40"
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
        <p className="mt-4 text-text-muted leading-relaxed">
          Il est aussi le réalisateur de <strong className="text-text">VOIDBORN</strong>,
          un film narratif réalisé avec l’intelligence artificielle, primé et
          sélectionné dans plusieurs festivals internationaux. C’est cette
          pratique réelle du cinéma IA, avec ses contraintes et ses échecs, qui
          nourrit la méthode enseignée ici.
        </p>
        <h3 className="font-display mt-8 text-lg font-semibold text-text">
          Récompenses et sélections (VOIDBORN)
        </h3>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {VOIDBORN_AWARDS.map((award) => (
            <li
              key={award.name}
              className="rounded-xl border border-border-subtle bg-white/[0.03] px-4 py-2.5 text-sm text-text-soft"
            >
              <span className="font-medium text-text">{award.name}</span>
              {" · "}
              {award.detail}
            </li>
          ))}
        </ul>
        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
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
          <li>
            <a
              href={PODCAST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-bright underline underline-offset-2 hover:text-accent-rose"
            >
              Podcast Les Créateurs IA
            </a>
          </li>
        </ul>
      </section>

      <section
        id="contact"
        className="mt-10 scroll-mt-28 rounded-2xl border border-border-subtle bg-card/50 p-6 md:p-8"
      >
        <h2 className="font-display text-2xl font-semibold text-text">
          Contact
        </h2>
        <p className="mt-4 leading-relaxed text-text-muted">
          Une question sur un article ou une erreur à signaler ? Écris à{" "}
          <a
            href="mailto:hello@businessdynamite.xyz"
            className="text-brand-bright underline underline-offset-2 hover:text-accent-rose"
          >
            hello@businessdynamite.xyz
          </a>
          . L’éditeur du site et le directeur de la publication sont détaillés
          dans les{" "}
          <Link
            href="/mentions-legales"
            className="text-brand-bright underline underline-offset-2 hover:text-accent-rose"
          >
            mentions légales
          </Link>
          .
        </p>
      </section>

      <div className="mt-16">
        <CTASection placement="about-end" />
      </div>
    </div>
  );
}
