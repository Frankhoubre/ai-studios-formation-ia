import type { Category } from "@/lib/types/article";

export const categories: Category[] = [
  {
    name: "IA vidéo",
    slug: "ia-video",
    description:
      "Guides pour générer, diriger, corriger et monter des vidéos IA plus cinématiques.",
  },
  {
    name: "IA image",
    slug: "ia-image",
    description:
      "Méthodes pour créer des images IA plus réalistes, cohérentes et exploitables.",
  },
  {
    name: "Prompting",
    slug: "prompting",
    description:
      "Prompts, structures et méthodes pour obtenir des résultats plus précis avec l’IA.",
  },
  {
    name: "Storytelling",
    slug: "storytelling",
    description:
      "Narration, découpage, storyboard et mise en scène pour donner du sens aux images IA.",
  },
  {
    name: "Workflow créatif",
    slug: "workflow-creatif",
    description:
      "Méthodes concrètes pour produire plus vite, avec plus de cohérence et moins de hasard.",
  },
  {
    name: "Business créatif",
    slug: "business-creatif",
    description:
      "Utiliser l’IA créative pour créer des pubs, vendre des services et produire du contenu client.",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
