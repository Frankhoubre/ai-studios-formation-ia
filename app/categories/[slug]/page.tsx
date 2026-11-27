import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { ArticleCompactList } from "@/components/ArticleCompactList";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CategoryNav } from "@/components/CategoryNav";
import { FormationBand } from "@/components/cta/FormationCta";
import { ListingHeader } from "@/components/ListingHeader";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { getArticlesByCategory } from "@/lib/articles";
import { categories, getCategoryBySlug } from "@/lib/categories";
import {
  absoluteUrl,
  buildArticleItemListJsonLd,
  buildBreadcrumbJsonLd,
  buildCollectionPageJsonLd,
  buildMetadata,
} from "@/lib/seo";

export const revalidate = 3600;

/** Guides affichés en cartes avant la liste dense. */
const CARDS = 12;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return {};
  return buildMetadata({
    title: `${cat.name} : guides IA créative`,
    description: `${cat.description} Guides pratiques, workflows et méthode AI Studios.`,
    path: `/categories/${slug}`,
    keywords: [cat.name, "IA créative", "AI Studios"],
  });
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) notFound();

  const posts = getArticlesByCategory(slug);
  const categoryPath = `/categories/${slug}`;

  const intro: Record<string, string> = {
    "ia-video":
      "L’IA vidéo ne se résume pas à un effet waouh. Ici, on parle chaîne de production : images, mouvement, montage, son, et surtout intention. Ces guides t’aident à éviter la compilation de plans et à viser une lecture cinématographique.",
    "ia-image":
      "L’image IA devient crédible quand tu arrêtes de demander « réalisme » comme un bouton magique. Ces articles couvrent texture, lumière, cohérence, prompting, et sélection. Objectif : des images exploitables, pas seulement scrollables.",
    prompting:
      "Le prompting est une interface de décision. Ces guides te donnent des structures pour trancher : scène, sujet, lumière, focale, contraintes. Moins de bruit, plus de contrôle.",
    storytelling:
      "Le storytelling, ce n’est pas une couche de texte sur une image. C’est la causalité entre les plans, le rythme, le sous-texte. Ces articles connectent narration et workflows IA.",
    "workflow-creatif":
      "Un workflow créatif, c’est ce qui t’empêche de refaire le même chaos en plus vite. Méthodes, archives, batch, sélection, livrables : des guides pour produire sérieusement.",
    "business-creatif":
      "Le business créatif avec l’IA, c’est brief, validation, droits, livraison. Ces articles parlent pubs, process client, et qualité professionnelle sans bullshit.",
    "actualites-ia":
      "Un nouveau modèle vidéo, une mise à jour d’outil image, une décision qui touche les créateurs : on explique ce qui vient de sortir, ce que ça change pour ton travail et comment le tester, sources à l’appui.",
  };
  const categoryIntro =
    intro[slug] ??
    "Guides AI Studios Blog pour progresser avec une méthode claire.";
  const breadcrumbLd = buildBreadcrumbJsonLd([
    { name: "Accueil", url: absoluteUrl("/") },
    { name: "Blog", url: absoluteUrl("/blog") },
    { name: cat.name, url: absoluteUrl(categoryPath) },
  ]);
  const pageJsonLd = buildCollectionPageJsonLd({
    name: `${cat.name} - guides IA créative`,
    description: `${cat.description} ${categoryIntro}`,
    path: categoryPath,
  });
  const listJsonLd = buildArticleItemListJsonLd({
    articles: posts,
    name: `Articles ${cat.name}`,
    path: categoryPath,
    compact: true,
  });
  // Les plus récents en cartes, le reste en liste dense : la catégorie garde
  // tous ses liens sur une seule URL sans devenir une page interminable.
  const cards = posts.slice(0, CARDS);
  const firstCards = cards.slice(0, 3);
  const nextCards = cards.slice(3);
  const older = posts.slice(CARDS);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16">
      <SEOJsonLd data={[breadcrumbLd, pageJsonLd, listJsonLd]} />
      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: cat.name },
        ]}
      />

      <ListingHeader
        eyebrow={`${posts.length} ${slug === "actualites-ia" ? "actualités" : "guides"}`}
        title={cat.name}
        lead={cat.description}
      >
        <p className="mt-5 leading-relaxed text-text-muted">{categoryIntro}</p>
      </ListingHeader>

      <div className="mt-8 md:mt-10">
        <CategoryNav active={slug} />
      </div>

      <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-2 lg:grid-cols-3">
        {firstCards.map((a, i) => (
          <ArticleCard
            key={a.slug}
            article={a}
            eager={i < 3}
            featured={i === 0 && posts.length >= 3}
          />
        ))}
      </div>

      {posts.length > 0 ? (
        <div className="mt-10">
          <FormationBand placement="category-listing" />
        </div>
      ) : null}

      {nextCards.length > 0 ? (
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {nextCards.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      ) : null}

      {older.length > 0 ? (
        <section className="mt-14" aria-labelledby="older-guides">
          <h2
            id="older-guides"
            className="font-display text-2xl font-semibold text-text"
          >
            Tous les autres guides {cat.name}
          </h2>
          <div className="mt-4">
            <ArticleCompactList articles={older} />
          </div>
        </section>
      ) : null}

      {posts.length === 0 ? (
        <p className="mt-12 text-text-muted">
          Cette catégorie accueillera bientôt d’autres guides. En attendant,{" "}
          <Link href="/blog" className="text-brand-bright hover:text-accent-rose">
            parcourez le blog
          </Link>
          .
        </p>
      ) : null}
    </div>
  );
}
