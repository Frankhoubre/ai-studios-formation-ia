import Link from "next/link";
import { categories } from "@/lib/categories";
import { cn } from "@/lib/utils";

const chip =
  "inline-flex min-h-11 shrink-0 items-center rounded-full border px-4 text-sm font-medium transition";
const chipIdle =
  "border-border-subtle bg-card text-text-soft hover:border-brand/30 hover:text-text";
const chipActive = "border-brand/50 bg-brand/15 text-text";

/**
 * Pastilles de navigation entre le blog et les pages catégorie. Sur mobile,
 * une seule rangée qui défile au doigt ; à partir de md, elles passent à la ligne.
 */
export function CategoryNav({ active }: { active?: string }) {
  return (
    <nav aria-label="Catégories du blog" className="-mx-4 md:mx-0">
      <ul className="flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] md:flex-wrap md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden">
        <li className="shrink-0">
          <Link
            href="/blog"
            aria-current={!active ? "page" : undefined}
            className={cn(chip, !active ? chipActive : chipIdle)}
          >
            Tout
          </Link>
        </li>
        {categories.map((c) => (
          <li key={c.slug} className="shrink-0">
            <Link
              href={`/categories/${c.slug}`}
              aria-current={active === c.slug ? "page" : undefined}
              className={cn(chip, active === c.slug ? chipActive : chipIdle)}
            >
              {c.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
