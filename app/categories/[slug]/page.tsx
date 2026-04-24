import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { getArticlesByCategory } from "@/lib/articles";
import { categories, getCategoryBySlug } from "@/lib/categories";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return {};
  return buildMetadata({
    title: `${cat.name} : articles et guides IA créative`,
    description: `${cat.description} Articles AI Studios Blog, orientés méthode et livrables.`,
    path: `/categories/${slug}`,
    keywords: [cat.name, "IA créative", "AI Studios"],
  });
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) notFound();

  const posts = getArticlesByCategory(slug);

  const intro: Record<string, string> = {
    "ia-video":
      "L’IA vidéo ne se résume pas à un effet waouh. Ici, on parle chaîne de production : images, mouvement, montage, son, et surtout intention. Ces guides vous aident à éviter la compilation de plans et à viser une lecture cinématographique.",
    "ia-image":
      "L’image IA devient crédible quand vous arrêtez de demander « réalisme » comme un bouton magique. Ces articles couvrent texture, lumière, cohérence, prompting, et sélection. Objectif : des images exploitables, pas seulement scrollables.",
    prompting:
      "Le prompting est une interface de décision. Ces guides vous donnent des structures pour trancher : scène, sujet, lumière, focale, contraintes. Moins de bruit, plus de contrôle.",
    storytelling:
      "Le storytelling, ce n’est pas une couche de texte sur une image. C’est la causalité entre les plans, le rythme, le sous-texte. Ces articles connectent narration et workflows IA.",
    "workflow-creatif":
      "Un workflow créatif, c’est ce qui vous empêche de refaire le même chaos en plus vite. Méthodes, archives, batch, sélection, livrables : des guides pour produire sérieusement.",
    "business-creatif":
      "Le business créatif avec l’IA, c’est brief, validation, droits, livraison. Ces articles parlent pubs, process client, et qualité professionnelle sans bullshit.",
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <nav aria-label="Fil d’Ariane" className="text-sm text-text-muted">
        <Link href="/" className="hover:text-brand-bright">
          Accueil
        </Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-brand-bright">
          Blog
        </Link>
        <span className="mx-2">/</span>
        <span className="text-text-soft">{cat.name}</span>
      </nav>

      <header className="mt-8 max-w-3xl">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-text md:text-5xl">
          {cat.name}
        </h1>
        <p className="mt-4 text-lg text-text-soft">{cat.description}</p>
        <p className="mt-6 leading-relaxed text-text-muted">
          {intro[slug] ??
            "Guides AI Studios Blog pour progresser avec une méthode claire."}
        </p>
      </header>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>

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
