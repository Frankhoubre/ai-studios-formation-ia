import Link from "next/link";
import { cn } from "@/lib/utils";

export function CategoryPill({
  slug,
  label,
  active,
}: {
  slug: string;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={`/categories/${slug}`}
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition",
        active
          ? "border-brand/50 bg-brand/20 text-text"
          : "border-border-subtle bg-card text-text-soft hover:border-brand/30 hover:text-text",
      )}
    >
      {label}
    </Link>
  );
}
