import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/types/article";
import { getCategoryBySlug } from "@/lib/categories";
import { formatFrenchDate } from "@/lib/utils";
import { CategoryPill } from "@/components/CategoryPill";

export function ArticleCard({
  article,
  headingLevel = 2,
  eager = false,
}: {
  article: Article;
  /** 3 quand la carte vit sous un H2 de section (accueil, articles liés). */
  headingLevel?: 2 | 3;
  /** Première rangée d'une liste : image chargée sans attendre le scroll. */
  eager?: boolean;
}) {
  const cat = getCategoryBySlug(article.category);
  const Heading = headingLevel === 3 ? "h3" : "h2";
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border-subtle bg-card shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] transition focus-within:border-brand/35 hover:border-brand/35 hover:shadow-[0_20px_60px_-40px_rgba(139,92,246,0.45)]">
      <div className="relative aspect-[16/9] overflow-hidden bg-bg-secondary">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          loading={eager ? "eager" : "lazy"}
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 368px"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          {cat ? (
            <CategoryPill slug={cat.slug} label={cat.name} />
          ) : null}
          <span className="text-[13px] text-text-muted">
            <time dateTime={article.date}>{formatFrenchDate(article.date)}</time>{" "}
            · {article.readingTime} min
          </span>
        </div>
        <Heading className="font-display text-xl font-semibold tracking-tight text-text md:text-[1.35rem]">
          {/* Lien étiré : toute la carte est cliquable, avec le titre comme seule ancre. */}
          <Link
            href={`/blog/${article.slug}`}
            className="transition after:absolute after:inset-0 after:content-[''] hover:text-brand-bright"
          >
            {article.title}
          </Link>
        </Heading>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
          {article.excerpt}
        </p>
        <span
          aria-hidden="true"
          className="mt-5 inline-flex text-sm font-medium text-brand-bright transition group-hover:text-accent-rose"
        >
          Lire le guide →
        </span>
      </div>
    </article>
  );
}
