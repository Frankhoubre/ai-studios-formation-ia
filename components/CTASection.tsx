import { FORMATION_FREE_URL } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-brand/25 bg-gradient-to-br from-brand/25 via-bg-secondary to-brand-bright/15 p-8 shadow-[0_0_80px_-30px_rgba(139,92,246,0.55)] md:p-12">
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-accent-rose/15 blur-3xl" />
      <div className="relative max-w-2xl">
        <h2 className="font-display text-2xl font-semibold text-text md:text-3xl">
          Vous voulez aller plus loin que de simples prompts ?
        </h2>
        <p className="mt-4 text-text-soft md:text-lg">
          Découvrez la formation gratuite AI Studios pour apprendre à
          construire un vrai workflow image et vidéo avec l’IA.
        </p>
        <a
          href={FORMATION_FREE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-bg-primary transition hover:bg-text-soft"
        >
          Accéder à la formation gratuite
        </a>
      </div>
    </section>
  );
}
