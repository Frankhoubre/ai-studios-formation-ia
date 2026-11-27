import { ArticleCard } from "@/components/ArticleCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CategoryNav } from "@/components/CategoryNav";
import { FormationBand } from "@/components/cta/FormationCta";
import { Pagination } from "@/components/Pagination";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { ListingHeader } from "@/components/ListingHeader";
import { getAllArticles, getBlogPage, getBlogPageCount } from "@/lib/articles";
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

/**
 * Cartes avant le bandeau formation. Page 1 : une grande carte et deux
 * cartes à côté. Pages suivantes : deux rangées de trois.
 */
function cardsBeforeBand(page: number): number {
  return page <= 1 ? 3 : 6;
}

export function BlogListing({ page }: { page: number }) {
  const articles = getBlogPage(page);
  const total = getBlogPageCount();
  const path = blogPagePath(page);
  const split = cardsBeforeBand(page);
  const first = articles.slice(0, split);
  const rest = articles.slice(split);
  const count = getAllArticles().length;

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
      <ListingHeader
        eyebrow={`${count} guides et actualités`}
        title={
          <>
            Blog
            {page > 1 ? (
              <span className="text-text-muted">, page {page}</span>
            ) : null}
          </>
        }
        lead="Des guides longs et concrets pour apprendre l’IA créative sans te perdre. Choisis une catégorie si tu veux suivre une seule piste."
      />

      <div className="mt-8 md:mt-10">
        <CategoryNav />
      </div>

      <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-2 lg:grid-cols-3">
        {first.map((a, i) => (
          <ArticleCard
            key={a.slug}
            article={a}
            eager={i < 3}
            featured={page <= 1 && i === 0}
          />
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
