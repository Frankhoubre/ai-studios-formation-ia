import { getAllArticles } from "@/lib/articles";
import { categories } from "@/lib/categories";
import { FORMATION_FREE_URL, MAIN_SITE_URL, SITE_URL } from "@/lib/constants";

export const revalidate = 3600;

/**
 * llms.txt — index du site au format Markdown pour les crawlers et
 * assistants IA (ChatGPT, Claude, Perplexity, Gemini…), selon la
 * convention llmstxt.org. Généré dynamiquement : chaque nouvel article
 * publié y apparaît sans intervention.
 */
export async function GET() {
  const articles = getAllArticles();

  const sections = categories
    .map((cat) => {
      const catArticles = articles.filter((a) => a.category === cat.slug);
      if (catArticles.length === 0) return "";
      const lines = catArticles
        .map(
          (a) => `- [${a.title}](${SITE_URL}/blog/${a.slug}): ${a.description}`,
        )
        .join("\n");
      return `### ${cat.name}\n\n${lines}`;
    })
    .filter(Boolean)
    .join("\n\n");

  const body = `# AI Studios Blog

> Blog francophone de référence sur l'IA créative, écrit par Frank Houbre (AI Studios) : création d'images IA, vidéos IA, films, publicités, prompts, storytelling, workflows professionnels et business créatif. ${articles.length} guides pratiques, mis à jour en continu.

Chaque guide est structuré (concepts, méthode pas à pas, erreurs fréquentes, FAQ) et cite ses sources. Le contenu est en français, tutoiement, orienté pratique. Auteur : Frank Houbre, fondateur d'AI Studios, créateur du film IA primé VOIDBORN.

## Pages principales

- [Accueil du blog](${SITE_URL}): tous les guides IA créative
- [Index des articles](${SITE_URL}/blog): liste complète, filtrable par catégorie
- [À propos](${SITE_URL}/a-propos): qui est Frank Houbre et la démarche du blog

## Guides par catégorie

${sections}

## Écosystème AI Studios

- [Site principal AI Studios](${MAIN_SITE_URL}): formation IA vidéo, image et cinéma IA en français
- [Formation IA gratuite](${FORMATION_FREE_URL}): cours d'introduction offert
- [Communauté Skool](https://www.skool.com/ai-studios): cours complets et communauté privée
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
