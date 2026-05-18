import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { getAllArticles } from "@/lib/articles";
import { categories, getCategoryBySlug } from "@/lib/categories";
import {
  absoluteUrl,
  buildArticleItemListJsonLd,
  buildBreadcrumbJsonLd,
  buildCollectionPageJsonLd,
  buildMetadata,
  noIndexFollowRobots,
} from "@/lib/seo";
import { cn } from "@/lib/utils";

export const revalidate = 3600;

type BlogSearchParams = Promise<{ cat?: string }>;

const blogDescription =
  "Tous les guides IA créative : vidéo, image, prompting, storytelling, workflow et business. Méthode terrain, sans rendu générique.";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: BlogSearchParams;
}) {
  const { cat } = await searchParams;
  const active = cat ? getCategoryBySlug(cat) : undefined;

  return buildMetadata({
    title: active
      ? `Blog ${active.name} : guides IA`
      : "Blog : guides IA image, vidéo et cinéma",
    description: active
      ? `${active.description} Explorez tous les guides sur la page catégorie dédiée.`
      : blogDescription,
    path: "/blog",
    robots: cat ? noIndexFollowRobots() : undefined,
    appendCta: !cat,
  });
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: BlogSearchParams;
}) {
  const { cat } = await searchParams;
  const all = getAllArticles();
  const filtered = cat ? all.filter((a) => a.category === cat) : all;
  const active = cat ? getCategoryBySlug(cat) : undefined;
  const pageJsonLd = buildCollectionPageJsonLd({
    name: active ? `Guides ${active.name}` : "Blog AI Studios",
    description: active?.description ?? blogDescription,
    path: "/blog",
  });
  const listJsonLd = buildArticleItemListJsonLd({
    articles: filtered,
    name: active ? `Articles ${active.name}` : "Tous les articles AI Studios",
    path: "/blog",
  });
  const breadcrumbLd = buildBreadcrumbJsonLd([
    { name: "Accueil", url: absoluteUrl("/") },
    { name: "Blog", url: absoluteUrl("/blog") },
  ]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <SEOJsonLd data={[breadcrumbLd, pageJsonLd, listJsonLd]} />
      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/" },
          { label: "Blog" },
        ]}
      />
      <div className="mt-8 max-w-3xl">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-text md:text-5xl">
          Blog
        </h1>
        <p className="mt-4 text-lg text-text-soft">
          Des guides longs, techniques et narratifs pour apprendre l’IA
          créative sans vous perdre. Filtrez par catégorie si vous voulez une
          piste claire.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-2">
        <Link
          href="/blog"
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-medium transition",
            !cat
              ? "border-brand/50 bg-brand/15 text-text"
              : "border-border-subtle bg-card text-text-soft hover:border-brand/30",
          )}
        >
          Tout
        </Link>
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/blog?cat=${c.slug}`}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition",
              cat === c.slug
                ? "border-brand/50 bg-brand/15 text-text"
                : "border-border-subtle bg-card text-text-soft hover:border-brand/30",
            )}
          >
            {c.name}
          </Link>
        ))}
      </div>

      {active ? (
        <p className="mt-6 text-sm text-text-muted">
          Filtre : <span className="text-text">{active.name}</span>.{" "}
          {active.description}
        </p>
      ) : null}

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-text-muted">
          Aucun article dans cette catégorie pour le moment.{" "}
          <Link href="/blog" className="text-brand-bright hover:text-accent-rose">
            Revenir au blog complet
          </Link>
          .
        </p>
      ) : null}
    </div>
  );
}
