export const SITE_URL = "https://blog.ai-studios.fr";
export const SITE_NAME = "AI Studios Blog";
/** Image sociale Open Graph / Twitter (ratio 1.91:1, 1200×630). */
export const DEFAULT_SOCIAL_IMAGE = "/images/og-default.png";
/** Logo carré pour les icônes et le JSON-LD Organization (512×512). */
export const ORG_LOGO = "/images/logo.png";
export const FORMATION_FREE_URL =
  "https://www.ai-studios.fr/formation-ia-gratuite-video";
/** Communauté privée AI Studios sur Skool */
export const SKOOL_COMMUNITY_URL = "https://www.skool.com/ai-studios/about";
export const MAIN_SITE_URL = "https://www.ai-studios.fr";
export const YOUTUBE_URL = "https://www.youtube.com/@BusinessDynamite";

export const ORG_NAME = "AI Studios";
export const AUTHOR_NAME = "Frank Houbre";
/** Page auteur on-site (E-E-A-T) : référencée comme Person.url dans le JSON-LD. */
export const AUTHOR_URL = `${SITE_URL}/a-propos`;

/** CTA réutilisé en fin de meta descriptions indexables */
export const SEO_CTA = "Accédez à la formation gratuite.";

export const PODCAST_URL = "https://www.podcastics.com/podcast/generation-ia/";

export const ORG_SAME_AS = [
  MAIN_SITE_URL,
  YOUTUBE_URL,
  SKOOL_COMMUNITY_URL,
  FORMATION_FREE_URL,
  PODCAST_URL,
] as const;

// Récompenses et sélections du film IA VOIDBORN (source : ai-studios.fr).
// Alimentent le JSON-LD Person (E-E-A-T) et la page À propos.
export const VOIDBORN_AWARDS = [
  { name: "Chroma Awards", detail: "Première place Silver" },
  { name: "Seoul International AI Film Festival", detail: "Award Winner" },
  { name: "Hollywood Indie Festival", detail: "Award Winner" },
  { name: "Australian AI Festival", detail: "Award Winner" },
  { name: "Chroma Dreamina", detail: "Deuxième place" },
  { name: "Bangkok Movie Awards", detail: "Finaliste" },
  { name: "Top Shorts", detail: "Sélection officielle" },
  { name: "Los Angeles Film Awards", detail: "Sélection officielle" },
  { name: "Pulse of Animation Festival", detail: "Sélection officielle" },
] as const;
