import Link from "next/link";
import { cn } from "@/lib/utils";

const cell =
  "inline-flex h-11 min-w-11 items-center justify-center rounded-full border px-3 text-sm font-medium transition";

function pageWindow(current: number, total: number): (number | "gap")[] {
  const keep = new Set([1, total, current - 1, current, current + 1]);
  const out: (number | "gap")[] = [];
  let previous = 0;
  for (let page = 1; page <= total; page++) {
    if (!keep.has(page)) continue;
    if (page - previous > 1) out.push("gap");
    out.push(page);
    previous = page;
  }
  return out;
}

export function Pagination({
  current,
  total,
  hrefFor,
}: {
  current: number;
  total: number;
  hrefFor: (page: number) => string;
}) {
  if (total <= 1) return null;
  return (
    <nav
      aria-label="Pagination"
      className="mt-12 flex flex-wrap items-center justify-center gap-2"
    >
      {current > 1 ? (
        <Link
          href={hrefFor(current - 1)}
          rel="prev"
          className={cn(cell, "border-border-subtle bg-card px-4 text-text-soft hover:border-brand/40 hover:text-text")}
        >
          <span aria-hidden="true">←&nbsp;</span>Précédent
        </Link>
      ) : null}
      <ol className="flex flex-wrap items-center justify-center gap-2">
        {pageWindow(current, total).map((item, i) =>
          item === "gap" ? (
            <li key={`gap-${i}`} aria-hidden="true" className="px-1 text-text-muted">
              …
            </li>
          ) : (
            <li key={item}>
              <Link
                href={hrefFor(item)}
                aria-label={`Page ${item}`}
                aria-current={item === current ? "page" : undefined}
                className={cn(
                  cell,
                  item === current
                    ? "border-brand/50 bg-brand/15 text-text"
                    : "border-border-subtle bg-card text-text-soft hover:border-brand/40 hover:text-text",
                )}
              >
                {item}
              </Link>
            </li>
          ),
        )}
      </ol>
      {current < total ? (
        <Link
          href={hrefFor(current + 1)}
          rel="next"
          className={cn(cell, "border-border-subtle bg-card px-4 text-text-soft hover:border-brand/40 hover:text-text")}
        >
          Suivant<span aria-hidden="true">&nbsp;→</span>
        </Link>
      ) : null}
    </nav>
  );
}
