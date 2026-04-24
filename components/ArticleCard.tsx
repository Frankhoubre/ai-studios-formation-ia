import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/types/article";
import { getCategoryBySlug } from "@/lib/categories";
import { formatFrenchDate } from "@/lib/utils";
import { CategoryPill } from "@/components/CategoryPill";

export function ArticleCard({ article }: { article: Article }) {
  const cat = getCategoryBySlug(article.category);
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border-subtle bg-card shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] transition hover:border-brand/35 hover:shadow-[0_20px_60px_-40px_rgba(139,92,246,0.45)]">
      <Link href={`/blog/${article.slug}`} className="block overflow-hidden">
        <div className="relative aspect-[16/9] bg-bg-secondary">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          {cat ? (
            <CategoryPill slug={cat.slug} label={cat.name} />
          ) : null}
          <span className="text-xs text-text-muted">
            {formatFrenchDate(article.date)} · {article.readingTime} min
          </span>
        </div>
        <h2 className="font-display text-xl font-semibold tracking-tight text-text md:text-[1.35rem]">
          <Link
            href={`/blog/${article.slug}`}
            className="transition hover:text-brand-bright"
          >
            {article.title}
          </Link>
        </h2>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
          {article.excerpt}
        </p>
        <Link
          href={`/blog/${article.slug}`}
          className="mt-5 inline-flex text-sm font-medium text-brand-bright transition hover:text-accent-rose"
        >
          Lire le guide →
        </Link>
      </div>
    </article>
  );
}
