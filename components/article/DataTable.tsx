import Link from "next/link";
import { RichParagraph } from "@/components/RichParagraph";
import type { ArticleSourceLink } from "@/lib/types/article";
import { classifyLink, REL_BY_KIND } from "@/lib/links";
import { formatShortDate } from "@/lib/utils";

type Props = {
  caption?: string;
  headers: string[];
  rows: string[][];
  source?: ArticleSourceLink | ArticleSourceLink[];
  verifieLe?: string;
  releveLabel?: string;
  note?: string;
};

function SourceLinks({ sources }: { sources: ArticleSourceLink[] }) {
  return (
    <>
      {sources.map((s, i) => {
        const { href, kind } = classifyLink(s.href);
        return (
          <span key={s.href}>
            {i > 0 ? ", " : null}
            {kind === "internal" ? (
              <Link href={href} className="underline decoration-white/25 underline-offset-[3px] hover:text-brand-bright">
                {s.label}
              </Link>
            ) : (
              <a
                href={href}
                target="_blank"
                rel={REL_BY_KIND[kind]}
                className="underline decoration-white/25 underline-offset-[3px] hover:text-brand-bright"
              >
                {s.label}
              </a>
            )}
          </span>
        );
      })}
    </>
  );
}

// First column stays pinned while the rest scrolls sideways, so a 4 or 5
// column comparison stays readable at 360 px without breaking the page width.
export function DataTable({
  caption,
  headers,
  rows,
  source,
  verifieLe,
  releveLabel = "Prix relevés le",
  note,
}: Props) {
  const sources = source ? (Array.isArray(source) ? source : [source]) : [];
  const wide = headers.length > 2;
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-border-subtle bg-bg-secondary">
      {caption ? (
        <figcaption className="border-b border-border-subtle px-4 py-3 text-sm font-medium text-text-soft">
          {caption}
        </figcaption>
      ) : null}
      <div
        className="overflow-x-auto overscroll-x-contain"
        tabIndex={0}
        role="region"
        aria-label={caption ? `Tableau : ${caption}` : "Tableau défilant"}
      >
        <table className={`w-full text-left text-sm md:text-[15px] ${wide ? "min-w-[600px]" : ""}`}>
          <thead>
            <tr className="border-b border-border-subtle">
              {headers.map((h, ci) => (
                <th
                  key={`${h}-${ci}`}
                  scope="col"
                  className={
                    ci === 0
                      ? "sticky left-0 z-10 bg-[#13131c] px-4 py-3 font-display font-semibold text-text"
                      : "bg-[#13131c] px-4 py-3 font-display font-semibold text-text"
                  }
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className="border-b border-border-subtle/80 last:border-0">
                {row.map((cell, ci) =>
                  ci === 0 ? (
                    <th
                      key={ci}
                      scope="row"
                      className="sticky left-0 z-10 max-w-[9.5rem] bg-bg-secondary px-4 py-3 align-top font-semibold text-text shadow-[1px_0_0_var(--border)] md:max-w-none"
                    >
                      <RichParagraph text={cell} />
                    </th>
                  ) : (
                    <td key={ci} className="px-4 py-3 align-top text-text-soft">
                      <RichParagraph text={cell} />
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {wide ? (
        <p className="border-t border-border-subtle px-4 py-2 text-xs text-text-muted md:hidden">
          Fais glisser le tableau vers la gauche pour voir toutes les colonnes.
        </p>
      ) : null}
      {verifieLe || sources.length || note ? (
        <div className="space-y-1 border-t border-border-subtle px-4 py-3 text-xs leading-relaxed text-text-muted">
          {verifieLe ? (
            <p>
              {releveLabel}{" "}
              <time dateTime={verifieLe}>{formatShortDate(verifieLe)}</time>
              {sources.length ? (
                <>
                  . Source{sources.length > 1 ? "s" : ""} : <SourceLinks sources={sources} />
                </>
              ) : null}
              .
            </p>
          ) : sources.length ? (
            <p>
              Source{sources.length > 1 ? "s" : ""} : <SourceLinks sources={sources} />.
            </p>
          ) : null}
          {note ? (
            <p>
              <RichParagraph text={note} />
            </p>
          ) : null}
        </div>
      ) : null}
    </figure>
  );
}
