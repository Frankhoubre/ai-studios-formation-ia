import Link from "next/link";
import { cn } from "@/lib/utils";

export function CategoryPill({
  slug,
  label,
  active,
  asLink = true,
}: {
  slug: string;
  label: string;
  active?: boolean;
  /** false : simple étiquette, à utiliser quand la pastille est déjà dans un lien. */
  asLink?: boolean;
}) {
  const className = cn(
    "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition",
    active
      ? "border-brand/50 bg-brand/20 text-text"
      : "border-border-subtle bg-card text-text-soft",
  );
  if (!asLink) return <span className={className}>{label}</span>;
  return (
    <Link
      href={`/categories/${slug}`}
      // Zone tactile étendue à 44 px de haut sans grossir la pastille.
      className={cn(
        className,
        "relative z-10 after:absolute after:-inset-x-1 after:-inset-y-[10px] after:content-[''] hover:border-brand/30 hover:text-text",
      )}
    >
      {label}
    </Link>
  );
}
