import { FORMATION_FREE_URL, MAIN_SITE_URL } from "@/lib/constants";

export function NewsletterBlock() {
  return (
    <aside className="rounded-2xl border border-border-subtle bg-card p-6 md:p-8">
      <p className="font-display text-lg font-semibold text-text">
        Rejoindre AI Studios
      </p>
      <p className="mt-2 text-sm leading-relaxed text-text-muted">
        Ce blog est une vitrine de méthodes. Pour aller plus loin, la communauté
        et les parcours sont sur le site principal. Pas de liste mail ici : on
        préfère un vrai point d’entrée clair.
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <a
          href={FORMATION_FREE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white transition hover:bg-brand-bright"
        >
          Voir la formation gratuite
        </a>
        <a
          href={MAIN_SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center rounded-full border border-border-subtle px-5 py-2.5 text-sm text-text-soft transition hover:border-brand/40 hover:text-text"
        >
          Visiter ai-studios.fr
        </a>
      </div>
    </aside>
  );
}
