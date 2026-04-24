import Image from "next/image";
import type { Article } from "@/lib/types/article";
import { getCategoryBySlug } from "@/lib/categories";
import { formatFrenchDate } from "@/lib/utils";
import { CategoryPill } from "@/components/CategoryPill";

export function ArticleHero({ article }: { article: Article }) {
  const cat = getCategoryBySlug(article.category);
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border-subtle bg-bg-secondary">
      <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/55 to-transparent md:via-bg-primary/35" />
      </div>
      <div className="relative p-6 md:absolute md:inset-x-0 md:bottom-0 md:p-10">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {cat ? <CategoryPill slug={cat.slug} label={cat.name} /> : null}
          <span className="text-sm text-text-muted">
            {formatFrenchDate(article.date)} · {article.readingTime} min de
            lecture
          </span>
        </div>
        <h1 className="font-display max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-text md:text-4xl lg:text-5xl">
          {article.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base text-text-soft md:text-lg">
          {article.description}
        </p>
      </div>
    </div>
  );
}
