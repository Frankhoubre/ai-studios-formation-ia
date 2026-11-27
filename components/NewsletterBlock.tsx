import { CtaLink } from "@/components/cta/CtaLink";
import { FORMATION_FREE_URL, SKOOL_COMMUNITY_URL } from "@/lib/constants";

export function NewsletterBlock() {
  return (
    <aside className="rounded-2xl border border-border-subtle bg-card p-6 md:p-8">
      <p className="font-display text-lg font-semibold text-text">
        Rejoindre AI Studios
      </p>
      <p className="mt-2 text-[15px] leading-relaxed text-text-muted">
        Ce blog montre les méthodes, article par article. Pour les suivre dans
        l’ordre, commence par la formation gratuite. Pour échanger avec
        d’autres créateurs, la communauté est sur Skool.
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <CtaLink
          href={FORMATION_FREE_URL}
          placement="home-join"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-brand-bright"
        >
          Voir la formation gratuite
        </CtaLink>
        <CtaLink
          href={SKOOL_COMMUNITY_URL}
          placement="home-join"
          target="skool"
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-border-subtle px-5 py-2.5 text-center text-sm font-semibold text-text-soft transition hover:border-brand/40 hover:text-text"
        >
          Voir la communauté Skool
        </CtaLink>
      </div>
    </aside>
  );
}
