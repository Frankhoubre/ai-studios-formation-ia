import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";
import { FORMATION_FREE_URL } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "À propos : AI Studios, formation IA créative",
  description:
    "AI Studios est une plateforme de formation pour créateurs qui veulent maîtriser l’IA image et vidéo avec une méthode, des workflows et une exigence de qualité.",
  path: "/a-propos",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
      <h1 className="font-display text-4xl font-semibold tracking-tight text-text md:text-5xl">
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
      <div className="mt-16">
        <CTASection />
      </div>
    </div>
  );
}
