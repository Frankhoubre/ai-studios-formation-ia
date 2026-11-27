import Link from "next/link";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Fil d’Ariane">
      {/* Une seule ligne : les liens gardent leur largeur, la page courante est tronquée. */}
      <ol className="flex items-center gap-2 text-sm text-text-muted">
        {items.map((item, i) => (
          <li
            key={`${item.label}-${i}`}
            className={
              item.href
                ? "flex shrink-0 items-center gap-2"
                : "flex min-w-0 items-center gap-2"
            }
          >
            {i > 0 ? <span aria-hidden> / </span> : null}
            {item.href ? (
              <Link
                href={item.href}
                className="inline-flex min-h-11 items-center transition hover:text-brand-bright"
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="truncate text-text-soft">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
