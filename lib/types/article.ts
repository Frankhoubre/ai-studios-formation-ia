export type ArticleTable = {
  type: "table";
  caption?: string;
  headers: string[];
  rows: string[][];
  /** Optionnel : mêmes champs que `comparison` pour afficher la source et la date. */
  source?: ArticleSourceLink | ArticleSourceLink[];
  verifieLe?: string;
};

export type ArticleSourceLink = { label: string; href: string };

/** Capture réelle : dimensions en pixels du fichier, date au format AAAA-MM-JJ. */
export type ArticleScreenshot = {
  src: string;
  alt: string;
  caption: string;
  /** URL de la page capturée. */
  source: string;
  capturedAt: string;
  width: number;
  height: number;
};

export type ArticleVerdict = {
  type: "verdict";
  /** Titre affiché, « Notre verdict » par défaut. */
  title?: string;
  pourQui: string;
  forts: string[];
  faibles: string[];
  verdict: string;
  lien?: { label: string; href: string; sponsored?: boolean };
};

export type ArticleComparison = {
  type: "comparison";
  caption: string;
  headers: string[];
  rows: string[][];
  source: ArticleSourceLink | ArticleSourceLink[];
  /** Date du relevé, AAAA-MM-JJ. */
  verifieLe: string;
  /** Début de la ligne de relevé, « Prix relevés le » par défaut. */
  releveLabel?: string;
  note?: string;
};

export type ArticleMethodology = {
  type: "methodology";
  /** Date de l'analyse, AAAA-MM-JJ. */
  date: string;
  text: string[];
  sources?: ArticleSourceLink[];
  teste?: string[];
  nonTeste?: string[];
};

export type ArticleCtaVariant = "screenweaver" | "imaginode" | "formation";

export type ArticleCta = {
  type: "cta";
  variant: ArticleCtaVariant;
  title?: string;
  text?: string;
  label?: string;
  /** Destination /go du site visé (ex. "script", "tuto", "models"). Ignorée pour "formation". */
  destination?: string;
};

export type ArticleBlock =
  | { type: "h2"; id: string; text: string }
  | { type: "h3"; id?: string; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
      width?: number;
      height?: number;
    }
  | { type: "youtube"; videoId: string; title: string }
  | { type: "quote"; text: string; cite?: string }
  | ({ type: "screenshot" } & ArticleScreenshot)
  | { type: "gallery"; caption?: string; items: ArticleScreenshot[] }
  | ArticleVerdict
  | ArticleComparison
  | ArticleMethodology
  | ArticleCta
  | ArticleTable;

export type ArticleFaqItem = {
  question: string;
  answer: string;
};

/** Schéma HowTo, émis seulement quand ce champ est renseigné. */
export type ArticleHowTo = {
  name: string;
  description?: string;
  /** Durée ISO 8601, ex. "PT30M". */
  totalTime?: string;
  steps: { name: string; text: string; anchor?: string }[];
};

export type Article = {
  title: string;
  slug: string;
  description: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string;
  updatedAt: string;
  readingTime: number;
  author: { name: string; url?: string };
  image: string;
  imageAlt: string;
  keywords: string[];
  content: ArticleBlock[];
  faq: ArticleFaqItem[];
  relatedSlugs: string[];
  /** Affiche la mention d'affiliation en tête d'article. */
  affiliate?: boolean;
  howTo?: ArticleHowTo;
};

export type Category = {
  name: string;
  slug: string;
  description: string;
};
