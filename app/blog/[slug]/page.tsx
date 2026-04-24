import { notFound } from "next/navigation";
import { ArticleContent } from "@/components/ArticleContent";
import { ArticleFaq } from "@/components/ArticleFaq";
import { ArticleHero } from "@/components/ArticleHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { RelatedArticles } from "@/components/RelatedArticles";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { TableOfContents } from "@/components/TableOfContents";
import {
  getAllSlugs,
  getArticleBySlug,
  getRelatedArticles,
} from "@/lib/articles";
import { getCategoryBySlug } from "@/lib/categories";
import { FORMATION_FREE_URL, SITE_URL } from "@/lib/constants";
import { articleMetadata, getTocEntries } from "@/lib/seo";
import { formatFrenchDate } from "@/lib/utils";

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

  const url = `${SITE_URL}/blog/${article.slug}`;
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: url,
      },
    ],
  };

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    image: `${SITE_URL}${article.image}`,
    datePublished: article.date,
    dateModified: article.updatedAt,
    author: {
      "@type": "Person",
      name: article.author.name,
      url: article.author.url,
    },
    publisher: {
      "@type": "Organization",
      name: "AI Studios",
      url: "https://www.ai-studios.fr",
    },
    mainEntityOfPage: url,
    keywords: article.keywords.join(", "),
    articleSection: category?.name,
    inLanguage: "fr-FR",
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <SEOJsonLd data={[breadcrumbLd, articleLd, faqLd]} />
      <article className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: article.title },
          ]}
        />

        <div className="mt-6">
          <ArticleHero article={article} />
        </div>

        <p className="mt-6 text-sm text-text-muted">
          Publié le {formatFrenchDate(article.date)}
          {article.updatedAt !== article.date
            ? ` · Mis à jour le ${formatFrenchDate(article.updatedAt)}`
            : ""}
          {" · "}
          {article.readingTime} min de lecture
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)] lg:gap-14">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <TableOfContents entries={toc} />
          </aside>
          <div className="min-w-0">
            <div className="mx-auto max-w-[860px]">
              <ArticleContent blocks={article.content} />
              <section className="mx-auto mt-14 max-w-[860px] rounded-2xl border border-border-subtle bg-card/50 p-6 md:p-8">
                <p className="text-sm font-medium text-brand-bright">
                  Aller plus loin
                </p>
                <p className="mt-2 text-text-soft leading-relaxed">
                  Pour aller plus loin, j’ai préparé une formation gratuite qui
                  montre comment structurer un vrai workflow IA pour créer des
                  images et vidéos plus cinématiques.
                </p>
                <a
                  href={FORMATION_FREE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-bright"
                >
                  Accéder à la formation gratuite
                </a>
              </section>
              <div className="mx-auto max-w-[860px]">
                <ArticleFaq items={article.faq} />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-[860px]">
          <CTASection />
        </div>

        <RelatedArticles articles={related} />
      </article>
    </>
  );
}
