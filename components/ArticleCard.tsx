import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/types/article";
import { getCategoryBySlug } from "@/lib/categories";
import { cn, formatFrenchDate } from "@/lib/utils";
import { CategoryPill } from "@/components/CategoryPill";

export function ArticleCard({
  article,
  headingLevel = 2,
  eager = false,
  featured = false,
}: {
  article: Article;
  /** 3 quand la carte vit sous un H2 de section (accueil, articles liés). */
  headingLevel?: 2 | 3;
  /** Première rangée d'une liste : image chargée sans attendre le scroll. */
  eager?: boolean;
  /** Grande carte d'ouverture : deux colonnes et deux rangées à partir de lg. */
  featured?: boolean;
}) {
  const cat = getCategoryBySlug(article.category);
  const Heading = headingLevel === 3 ? "h3" : "h2";
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border-subtle bg-card shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] transition duration-300 focus-within:border-brand/45 hover:-translate-y-1 hover:border-brand/45 hover:shadow-[0_24px_70px_-36px_rgba(139,92,246,0.6)]",
        featured && "md:col-span-2 lg:row-span-2",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-bg-secondary",
          featured ? "aspect-[16/9] lg:aspect-auto lg:min-h-[20rem] lg:flex-1" : "aspect-[16/9]",
        )}
      >
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          loading={eager ? "eager" : "lazy"}
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
          sizes={
            featured
              ? "(max-width: 767px) 100vw, (max-width: 1151px) 66vw, 752px"
              : "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 368px"
          }
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c0c14] via-transparent to-transparent opacity-80"
        />
      </div>
      <div className={cn("flex flex-col p-5 md:p-6", featured ? "lg:p-8" : "flex-1")}>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          {cat ? (
            <CategoryPill slug={cat.slug} label={cat.name} />
          ) : null}
          <span className="text-[13px] text-text-muted">
            <time dateTime={article.date}>{formatFrenchDate(article.date)}</time>{" "}
            · {article.readingTime} min
          </span>
        </div>
        <Heading
          className={cn(
            "font-display font-semibold tracking-tight text-text",
            featured
              ? "text-2xl leading-tight md:text-3xl lg:text-[2.1rem]"
              : "text-xl leading-snug md:text-[1.35rem]",
          )}
        >
          {/* Lien étiré : toute la carte est cliquable, avec le titre comme seule ancre. */}
          <Link
            href={`/blog/${article.slug}`}
            className="transition after:absolute after:inset-0 after:content-[''] group-hover:text-brand-bright"
          >
            {article.title}
          </Link>
        </Heading>
        <p
          className={cn(
            "mt-3 leading-relaxed text-text-muted",
            featured ? "text-[15px] md:text-base lg:max-w-2xl" : "line-clamp-4 flex-1 text-sm",
          )}
        >
          {article.excerpt}
        </p>
        <span
          aria-hidden="true"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-bright"
        >
          {article.news ? "Lire l’article" : "Lire le guide"}
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </article>
  );
}
