import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleContent } from "@/components/ArticleContent";
import { ArticleFaq } from "@/components/ArticleFaq";
import { ArticleHero } from "@/components/ArticleHero";
import { AffiliateNotice } from "@/components/article/AffiliateNotice";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  FormationCta,
  FormationSidebarCard,
  SkoolNote,
} from "@/components/cta/FormationCta";
import { StickyFormationBar } from "@/components/cta/StickyFormationBar";
import { ReadingProgress } from "@/components/ReadingProgress";
import { RelatedArticles } from "@/components/RelatedArticles";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { TableOfContents } from "@/components/TableOfContents";
import {
  getAllSlugs,
  getArticleBySlug,
  getRelatedArticles,
} from "@/lib/articles";
import { getCategoryBySlug } from "@/lib/categories";
import {
  articleMetadata,
  buildArticleBreadcrumbItems,
  buildArticleBreadcrumbJsonLd,
  buildArticleJsonLd,
  buildFaqJsonLd,
  buildHowToJsonLd,
  getTocEntries,
} from "@/lib/seo";

export const revalidate = 3600;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return articleMetadata(article);
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const category = getCategoryBySlug(article.category);
  const related = getRelatedArticles(article, 3);
  const toc = getTocEntries(article.content);

  const breadcrumbLd = buildArticleBreadcrumbJsonLd(article, category?.name);
  const breadcrumbItems = buildArticleBreadcrumbItems(article, category?.name);

  const articleLd = buildArticleJsonLd(article, category?.name);
  const faqLd = article.faq.length ? buildFaqJsonLd(article.faq) : null;
  const howToLd = article.howTo ? buildHowToJsonLd(article) : null;

  // Some articles embed their FAQ as a section inside the body; in that case
  // we skip the standalone FAQ block to avoid rendering it twice. Match only
  // genuine FAQ headings (anchored) so titles like "erreurs fréquentes" don't
  // falsely hide a real FAQ.
  const FAQ_HEADING =
    /^\s*(questions fréquentes|foire aux questions|frequently asked questions|faq)\b/i;
  const hasInlineFaq = article.content.some(
    (block) => block.type === "h2" && FAQ_HEADING.test(block.text),
  );

  // Note formation à mi-parcours : seulement sur les guides longs où l'auteur
  // n'a pas déjà placé son propre bloc CTA, jamais sur une actualité.
  const midCta =
    !article.news &&
    article.readingTime >= 6 &&
    !article.content.some((block) => block.type === "cta");

  // L'auteur a déjà conclu sur son propre bloc formation : on ne le double pas.
  const endsWithFormationCta = article.content
    .slice(-6)
    .some((block) => block.type === "cta" && block.variant === "formation");

  return (
    <>
      <ReadingProgress />
      <StickyFormationBar />
      <SEOJsonLd
        data={[
          breadcrumbLd,
          articleLd,
          ...(faqLd ? [faqLd] : []),
          ...(howToLd ? [howToLd] : []),
        ]}
      />
      <article className="mx-auto max-w-6xl px-4 pb-10 pt-4 md:px-6 md:py-14">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="mt-2 md:mt-6">
          <ArticleHero article={article} />
        </div>

        {article.affiliate ? <AffiliateNotice /> : null}

        <div className="mt-8 grid gap-8 md:mt-10 lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)] lg:gap-14">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <TableOfContents entries={toc} />
            <FormationSidebarCard placement="article-sidebar" />
          </aside>
          <div className="min-w-0">
            <div className="mx-auto max-w-[860px]">
              <ArticleContent
                blocks={article.content}
                slug={article.slug}
                midCta={midCta}
              />
              {hasInlineFaq ? null : <ArticleFaq items={article.faq} />}
              {endsWithFormationCta ? (
                <SkoolNote placement="article-end" />
              ) : (
                <div className="mt-14">
                  <FormationCta placement="article-end" signed />
                </div>
              )}
              {category ? (
                <p className="mt-8 text-text-soft">
                  Envie de creuser le sujet ?{" "}
                  <Link
                    href={`/categories/${category.slug}`}
                    className="font-medium text-brand-bright underline decoration-white/25 underline-offset-[3px] transition hover:text-accent-rose"
                  >
                    Tous les guides {category.name}
                  </Link>
                </p>
              ) : null}
            </div>
          </div>
        </div>

        <RelatedArticles articles={related} />
      </article>
    </>
  );
}
