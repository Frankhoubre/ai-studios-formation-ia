import { CtaLink } from "@/components/cta/CtaLink";
import {
  AUTHOR_NAME,
  FORMATION_FREE_URL,
  SKOOL_COMMUNITY_URL,
} from "@/lib/constants";

const primaryButton =
  "inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-center text-[15px] font-semibold text-bg-primary transition hover:bg-text-soft";
const secondaryButton =
  "inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 py-3 text-center text-[15px] font-semibold text-text transition hover:border-brand-bright/70 hover:bg-white/[0.05]";

/**
 * Bloc de fin (article, accueil, à propos) : un seul message, la formation
 * gratuite en action principale, la communauté Skool en second.
 */
export function FormationCta({
  placement,
  title = "Tu veux la méthode complète, pas une astuce de plus ?",
  text = "Un article couvre un morceau du travail. Dans la formation gratuite AI Studios, je te montre comment je construis un workflow IA en entier, de l’idée à la vidéo finale.",
  headingLevel = 2,
  signed = false,
}: {
  placement: string;
  title?: string;
  text?: string;
  headingLevel?: 2 | 3;
  /** Signature de l'auteur sous le texte (note de fin d'article). */
  signed?: boolean;
}) {
  const Heading = headingLevel === 3 ? "h3" : "h2";
  return (
    <section
      id="formation-gratuite"
      data-formation-cta
      aria-labelledby="formation-cta-title"
      className="relative scroll-mt-28 overflow-hidden rounded-3xl border border-brand/30 bg-gradient-to-br from-brand/25 via-bg-secondary to-brand-bright/15 p-6 shadow-[0_0_80px_-30px_rgba(139,92,246,0.55)] sm:p-8 md:p-12"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-accent-rose/15 blur-3xl" />
      <div className="relative max-w-2xl">
        <p className="text-sm font-semibold text-brand-bright">
          Formation gratuite
        </p>
        <Heading
          id="formation-cta-title"
          className="font-display mt-2 text-2xl font-semibold leading-tight text-text md:text-3xl"
        >
          {title}
        </Heading>
        <p className="mt-4 leading-relaxed text-text-soft md:text-lg">{text}</p>
        {signed ? (
          <p className="mt-3 text-sm text-text-muted">
            {AUTHOR_NAME}, fondateur d’AI Studios
          </p>
        ) : null}
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <CtaLink
            href={FORMATION_FREE_URL}
            placement={placement}
            className={primaryButton}
            data-button
          >
            Accéder à la formation gratuite
          </CtaLink>
          <CtaLink
            href={SKOOL_COMMUNITY_URL}
            placement={placement}
            target="skool"
            className={secondaryButton}
            data-button
          >
            Voir la communauté Skool
          </CtaLink>
        </div>
      </div>
    </section>
  );
}

/** Note d'une ligne glissée au milieu d'un long article. */
export function FormationInlineNote({ placement }: { placement: string }) {
  return (
    <aside
      aria-label="Formation gratuite"
      className="my-10 flex flex-col gap-3 rounded-2xl border border-brand/25 bg-brand/[0.07] px-5 py-4 text-[15px] leading-relaxed text-text-soft sm:flex-row sm:items-center sm:justify-between sm:gap-6 md:text-base"
    >
      <p>
        <strong className="font-semibold text-text">
          Tu veux voir la méthode en entier ?
        </strong>{" "}
        Je la déroule dans la formation gratuite AI Studios, de l’idée à la
        vidéo finale.
      </p>
      <CtaLink
        href={FORMATION_FREE_URL}
        placement={placement}
        data-button
        className="inline-flex min-h-11 shrink-0 items-center justify-center self-start rounded-full border border-brand-bright/50 px-5 py-2 text-sm font-semibold text-text transition hover:bg-brand/20 sm:self-center"
      >
        Voir la formation gratuite
      </CtaLink>
    </aside>
  );
}

/** Bandeau compact pour les pages de liste (blog, catégories). */
export function FormationBand({ placement }: { placement: string }) {
  return (
    <aside
      aria-label="Formation gratuite"
      className="flex flex-col gap-4 rounded-2xl border border-brand/30 bg-gradient-to-r from-brand/15 via-bg-secondary to-bg-secondary p-5 sm:p-6 md:flex-row md:items-center md:justify-between md:gap-10"
    >
      <div className="min-w-0">
        <p className="font-display text-lg font-semibold leading-snug text-text md:text-xl">
          Beaucoup de guides, et tu cherches le fil conducteur ?
        </p>
        <p className="mt-2 text-[15px] leading-relaxed text-text-soft">
          La formation gratuite AI Studios montre comment je construis un
          workflow IA en entier, de l’idée à la vidéo finale.
        </p>
      </div>
      <CtaLink
        href={FORMATION_FREE_URL}
        placement={placement}
        className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-brand to-brand-bright px-6 py-3 text-center text-[15px] font-semibold text-white shadow-[0_0_32px_-6px_rgba(168,85,247,0.6)] transition hover:brightness-110"
      >
        Accéder à la formation gratuite
      </CtaLink>
    </aside>
  );
}

/** Carte étroite sous le sommaire, sur grand écran. */
export function FormationSidebarCard({ placement }: { placement: string }) {
  return (
    <aside
      aria-label="Formation gratuite"
      className="mt-4 hidden rounded-2xl border border-brand/30 bg-brand/[0.08] p-5 lg:block"
    >
      <p className="font-display text-base font-semibold leading-snug text-text">
        La méthode complète, gratuite
      </p>
      <p className="mt-2 text-sm leading-relaxed text-text-soft">
        Mon workflow IA, de l’idée à la vidéo finale.
      </p>
      <CtaLink
        href={FORMATION_FREE_URL}
        placement={placement}
        className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-gradient-to-r from-brand to-brand-bright px-4 py-2 text-center text-sm font-semibold text-white transition hover:brightness-110"
      >
        Voir la formation
      </CtaLink>
    </aside>
  );
}

/** Ligne discrète quand l'article se termine déjà par son propre bloc formation. */
export function SkoolNote({ placement }: { placement: string }) {
  return (
    <p className="mt-10 rounded-2xl border border-border-subtle bg-card/50 px-5 py-4 leading-relaxed text-text-soft">
      Pour échanger avec d’autres créateurs et poser tes questions,{" "}
      <CtaLink
        href={SKOOL_COMMUNITY_URL}
        placement={placement}
        target="skool"
        className="font-medium text-brand-bright underline decoration-white/25 underline-offset-[3px] transition hover:text-accent-rose"
      >
        la communauté AI Studios est sur Skool
      </CtaLink>
      .
    </p>
  );
}
