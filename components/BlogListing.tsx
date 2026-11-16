import { ArticleCard } from "@/components/ArticleCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CategoryNav } from "@/components/CategoryNav";
import { FormationBand } from "@/components/cta/FormationCta";
import { Pagination } from "@/components/Pagination";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { getBlogPage, getBlogPageCount } from "@/lib/articles";
import {
  absoluteUrl,
  buildArticleItemListJsonLd,
  buildBreadcrumbJsonLd,
  buildCollectionPageJsonLd,
  buildMetadata,
} from "@/lib/seo";

export const BLOG_DESCRIPTION =
  "Tous les guides IA créative : vidéo, image, prompting, storytelling, workflow et business. Méthode terrain, sans rendu générique.";

export function blogPagePath(page: number): string {
  return page <= 1 ? "/blog" : `/blog/page/${page}`;
}

export function blogListingMetadata(page: number) {
  return buildMetadata({
    title:
      page <= 1
        ? "Blog : guides IA image, vidéo et cinéma"
        : `Blog : guides IA image, vidéo et cinéma (page ${page})`,
    description:
      page <= 1
        ? BLOG_DESCRIPTION
        : `Page ${page} des guides IA créative AI Studios : vidéo, image, prompting, storytelling, workflow et business.`,
    path: blogPagePath(page),
    appendCta: page <= 1,
  });
}

/** Cartes avant le bandeau formation : deux rangées sur grand écran. */
const CARDS_BEFORE_BAND = 6;

export function BlogListing({ page }: { page: number }) {
  const articles = getBlogPage(page);
  const total = getBlogPageCount();
  const path = blogPagePath(page);
  const first = articles.slice(0, CARDS_BEFORE_BAND);
  const rest = articles.slice(CARDS_BEFORE_BAND);

  const pageJsonLd = buildCollectionPageJsonLd({
    name: page <= 1 ? "Blog AI Studios" : `Blog AI Studios, page ${page}`,
    description: BLOG_DESCRIPTION,
    path,
  });
  const listJsonLd = buildArticleItemListJsonLd({
    articles,
    name:
      page <= 1
        ? "Derniers articles AI Studios"
        : `Articles AI Studios, page ${page}`,
    path,
    compact: true,
  });
  const breadcrumbLd = buildBreadcrumbJsonLd([
    { name: "Accueil", url: absoluteUrl("/") },
    { name: "Blog", url: absoluteUrl("/blog") },
    ...(page > 1 ? [{ name: `Page ${page}`, url: absoluteUrl(path) }] : []),
  ]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16">
      <SEOJsonLd data={[breadcrumbLd, pageJsonLd, listJsonLd]} />
      <Breadcrumbs
        items={
          page > 1
            ? [
                { label: "Accueil", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: `Page ${page}` },
              ]
            : [{ label: "Accueil", href: "/" }, { label: "Blog" }]
        }
      />
      <div className="mt-6 max-w-3xl md:mt-8">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-text md:text-5xl">
          Blog
          {page > 1 ? (
            <span className="text-text-muted">, page {page}</span>
          ) : null}
        </h1>
        <p className="mt-4 text-lg text-text-soft">
          Des guides longs et concrets pour apprendre l’IA créative sans te
          perdre. Choisis une catégorie si tu veux suivre une seule piste.
        </p>
      </div>

      <div className="mt-8 md:mt-10">
        <CategoryNav />
      </div>

      <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-2 lg:grid-cols-3">
        {first.map((a, i) => (
          <ArticleCard key={a.slug} article={a} eager={i < 3} />
        ))}
      </div>

      {rest.length > 0 ? (
        <>
          <div className="mt-10">
            <FormationBand placement="blog-listing" />
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </>
      ) : (
        <div className="mt-10">
          <FormationBand placement="blog-listing" />
        </div>
      )}

      <Pagination current={page} total={total} hrefFor={blogPagePath} />
    </div>
  );
}
