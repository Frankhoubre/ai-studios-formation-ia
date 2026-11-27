import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/types/article";
import { getCategoryBySlug } from "@/lib/categories";
import { AUTHOR_NAME } from "@/lib/constants";
import {
  articleModifiedAt,
  articlePublishedAt,
  articleWasUpdated,
} from "@/lib/seo";
import { formatFrenchDate } from "@/lib/utils";
import { CategoryPill } from "@/components/CategoryPill";

function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/**
 * En-tête éditorial : rubrique, titre, chapô, signature et dates visibles
 * (les mêmes que dans le JSON-LD), puis l'image de couverture.
 */
export function ArticleHero({ article }: { article: Article }) {
  const cat = getCategoryBySlug(article.category);
  const isFounder = article.author.name === AUTHOR_NAME;
  const updated = articleWasUpdated(article);
  return (
    <header>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        {cat ? <CategoryPill slug={cat.slug} label={cat.name} /> : null}
        <span className="text-sm text-text-muted">
          {article.readingTime} min de lecture
        </span>
      </div>
      <h1 className="font-display mt-4 max-w-4xl text-[1.9rem] font-semibold leading-[1.12] tracking-tight text-text sm:text-4xl md:mt-5 md:text-[2.75rem] lg:text-[3.25rem] lg:leading-[1.08]">
        {article.title}
      </h1>
      <p className="mt-4 max-w-3xl text-[17px] leading-relaxed text-text-soft md:mt-5 md:text-xl md:leading-relaxed">
        {article.description}
      </p>

      <div className="mt-6 flex items-center gap-3">
        <span
          aria-hidden="true"
          className="font-display inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-accent-rose text-sm font-semibold text-white"
        >
          {initials(article.author.name)}
        </span>
        <div className="min-w-0 text-sm leading-snug">
          <p className="text-text-muted">
            Par{" "}
            {isFounder ? (
              <Link
                href="/a-propos"
                rel="author"
                className="font-semibold text-text underline decoration-white/25 underline-offset-[3px] transition hover:text-brand-bright"
              >
                {article.author.name}
              </Link>
            ) : (
              <span className="font-semibold text-text">
                {article.author.name}
              </span>
            )}
            {isFounder ? (
              <span className="hidden sm:inline">, fondateur d’AI Studios</span>
            ) : null}
          </p>
          <p className="mt-1 text-text-muted">
            Publié le{" "}
            <time dateTime={articlePublishedAt(article)}>
              {formatFrenchDate(article.date)}
              {article.publishedTime ? ` à ${article.publishedTime}` : ""}
            </time>
            {updated ? (
              <>
                {" · "}Mis à jour le{" "}
                <time dateTime={articleModifiedAt(article)}>
                  {formatFrenchDate(article.updatedAt)}
                </time>
              </>
            ) : null}
          </p>
        </div>
      </div>

      <div className="relative mt-7 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border-subtle bg-bg-secondary shadow-[0_40px_120px_-60px_rgba(139,92,246,0.55)] md:mt-9 md:rounded-3xl lg:aspect-[21/9]">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          preload
          fetchPriority="high"
          className="object-cover"
          sizes="(min-width: 1152px) 1104px, 100vw"
        />
      </div>
    </header>
  );
}
