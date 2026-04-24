import Link from "next/link";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Fil d’Ariane">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-text-muted">
        {items.map((item, i) => (
          <li key={`${item.label}-${i}`} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden> / </span> : null}
            {item.href ? (
              <Link
                href={item.href}
                className="transition hover:text-brand-bright"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-text-soft">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
