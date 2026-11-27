import Link from "next/link";
import type { Article } from "@/lib/types/article";
import { formatFrenchDate } from "@/lib/utils";

/** Liste dense, sans image : tous les guides restent à un clic sans page interminable. */
export function ArticleCompactList({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null;
  return (
    <ul className="grid gap-x-10 md:grid-cols-2">
      {articles.map((a) => (
        <li key={a.slug} className="border-b border-border-subtle/70">
          <Link
            href={`/blog/${a.slug}`}
            className="group flex min-h-14 flex-col justify-center py-3"
          >
            <span className="font-medium leading-snug text-text transition group-hover:text-brand-bright">
              {a.title}
            </span>
            <span className="mt-1 text-[13px] text-text-muted">
              <time dateTime={a.date}>{formatFrenchDate(a.date)}</time> ·{" "}
              {a.readingTime} min
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
