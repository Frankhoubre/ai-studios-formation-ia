import { ArticleCard } from "@/components/ArticleCard";
import type { Article } from "@/lib/types/article";

export function RelatedArticles({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null;
  return (
    <section className="mt-16 border-t border-border-subtle pt-12">
      <h2 className="font-display text-2xl font-semibold text-text">
        Articles liés
      </h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
    </section>
  );
}
