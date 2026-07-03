import type { Metadata } from "next";
import type { Article, ArticleFaqItem } from "@/lib/types/article";
import {
  AUTHOR_NAME,
  AUTHOR_URL,
  DEFAULT_SOCIAL_IMAGE,
  FORMATION_FREE_URL,
  MAIN_SITE_URL,
  ORG_LOGO,
  ORG_NAME,
  ORG_SAME_AS,
  SEO_CTA,
  SITE_NAME,
  SITE_URL,
  VOIDBORN_AWARDS,
} from "@/lib/constants";

export const TITLE_MAX = 60;
export const DESCRIPTION_MAX = 160;

export const DEFAULT_TITLE =
  "AI Studios Blog - Formation IA vidéo, image et cinéma";

export const DEFAULT_DESCRIPTION =
  "Guides IA image, vidéo et cinéma pour des workflows pro, sans rendu générique. Méthode AI Studios, guides terrain. Accédez à la formation gratuite.";

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}

export function truncateAtWord(text: string, max: number): string {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= max) return normalized;
  const cut = normalized.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  const base =
    lastSpace > Math.floor(max * 0.55) ? cut.slice(0, lastSpace) : cut;
  return `${base.trimEnd()}…`;
}

export function withSeoCta(
  description: string,
  cta: string = SEO_CTA,
): string {
  const base = description.replace(/\s+/g, " ").trim();
  const ctaFragment = cta.replace(/\s+/g, " ").trim();
  if (!ctaFragment) return truncateAtWord(base, DESCRIPTION_MAX);
  if (base.toLowerCase().includes(ctaFragment.toLowerCase().slice(0, 24))) {
    return truncateAtWord(base, DESCRIPTION_MAX);
  }
  const spacer = base.endsWith(".") ? " " : ". ";
  const withCta = `${base}${spacer}${ctaFragment}`;
  // N'ajoute le CTA que s'il tient entièrement : sinon on garde la
  // description seule plutôt que de tronquer le CTA en plein milieu.
  if (withCta.length <= DESCRIPTION_MAX) return withCta;
  return truncateAtWord(base, DESCRIPTION_MAX);
}

export function resolvePageTitle(
  title: string,
  options?: { includeBrand?: boolean },
): string {
  const includeBrand = options?.includeBrand ?? true;
  const branded = includeBrand ? `${title} | ${SITE_NAME}` : title;
  if (branded.length <= TITLE_MAX) return branded;
  if (!includeBrand && title.length <= TITLE_MAX) return title;
  const budget = includeBrand
    ? TITLE_MAX - ` | ${SITE_NAME}`.length
    : TITLE_MAX;
  if (budget > 12) {
    return `${truncateAtWord(title, budget)} | ${SITE_NAME}`;
  }
  return truncateAtWord(title, TITLE_MAX);
}

const indexableRobots: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

function buildOpenGraphImages(
  image: string,
  alt: string,
): NonNullable<Metadata["openGraph"]>["images"] {
  const ogImage = absoluteUrl(image);
  return [
    {
      url: ogImage,
      secureUrl: ogImage,
      width: 1200,
      height: 630,
      alt,
    },
  ];
}

function baseTwitter(
  title: string,
  description: string,
  image: string,
): NonNullable<Metadata["twitter"]> {
  const ogImage = absoluteUrl(image);
  return {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
    creator: AUTHOR_NAME,
  };
}

type BuildMetadataInput = {
  title?: string;
  absoluteTitle?: string;
  description?: string;
  path?: string;
  /** URL canonique absolue (ex. redirection vers un domaine externe) */
  canonical?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  image?: string;
  imageAlt?: string;
  keywords?: string[];
  robots?: Metadata["robots"];
  /** Ajoute le CTA SEO par défaut si absent (défaut: true) */
  appendCta?: boolean;
};

export function buildMetadata({
  title,
  absoluteTitle,
  description,
  path = "/",
  canonical,
  type = "website",
  publishedTime,
  modifiedTime,
  image,
  imageAlt,
  keywords,
  robots = indexableRobots,
  appendCta = true,
}: BuildMetadataInput): Metadata {
  const resolvedTitle =
    absoluteTitle ??
    (title ? resolvePageTitle(title) : DEFAULT_TITLE);
  const metaDescription = truncateAtWord(
    appendCta
      ? withSeoCta(description ?? DEFAULT_DESCRIPTION)
      : (description ?? DEFAULT_DESCRIPTION),
    DESCRIPTION_MAX,
  );
  const url = canonical ?? absoluteUrl(path);
  const ogImage = image ?? DEFAULT_SOCIAL_IMAGE;
  const resolvedImageAlt = imageAlt ?? title ?? absoluteTitle ?? SITE_NAME;

  return {
    title: absoluteTitle
      ? { absolute: absoluteTitle }
      : title
        ? title
        : undefined,
    description: metaDescription,
    keywords: keywords?.length ? keywords : undefined,
    alternates: { canonical: url },
    authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
    creator: AUTHOR_NAME,
    publisher: ORG_NAME,
    openGraph: {
      type: type === "article" ? "article" : "website",
      locale: "fr_FR",
      siteName: SITE_NAME,
      url,
      title: resolvedTitle,
      description: metaDescription,
      images: buildOpenGraphImages(ogImage, resolvedImageAlt),
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
      ...(type === "article" && modifiedTime ? { modifiedTime } : {}),
    },
    twitter: baseTwitter(resolvedTitle, metaDescription, ogImage),
    robots,
  };
}

export function articleMetadata(article: Article): Metadata {
  const url = absoluteUrl(`/blog/${article.slug}`);
  const ogTitle = resolvePageTitle(article.title);
  const metaDescription = truncateAtWord(
    withSeoCta(article.description),
    DESCRIPTION_MAX,
  );
  const ogImage = article.image;

  return {
    // Titre absolu déjà tronqué à 60 car. (marque incluse) pour éviter
    // que le template racine "%s | AI Studios Blog" ne rallonge le <title>.
    title: { absolute: ogTitle },
    description: metaDescription,
    keywords: article.keywords,
    alternates: { canonical: url },
    authors: [{ name: article.author.name, url: article.author.url }],
    creator: article.author.name,
    publisher: ORG_NAME,
    category: article.category,
    openGraph: {
      type: "article",
      locale: "fr_FR",
      siteName: SITE_NAME,
      url,
      title: ogTitle,
      description: metaDescription,
      images: buildOpenGraphImages(ogImage, article.imageAlt),
      publishedTime: article.date,
      modifiedTime: article.updatedAt,
      authors: [article.author.name],
      tags: article.tags,
    },
    twitter: baseTwitter(ogTitle, metaDescription, ogImage),
    robots: indexableRobots,
  };
}

export function noIndexFollowRobots(): Metadata["robots"] {
  return {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  };
}

export function buildRootMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    applicationName: SITE_NAME,
    title: {
      default: DEFAULT_TITLE,
      template: `%s | ${SITE_NAME}`,
    },
    description: DEFAULT_DESCRIPTION,
    alternates: {
      canonical: SITE_URL,
      languages: { "fr-FR": SITE_URL },
      types: {
        "application/rss+xml": [
          { url: `${SITE_URL}/feed.xml`, title: "AI Studios Blog — flux RSS" },
        ],
      },
    },
    authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
    creator: AUTHOR_NAME,
    publisher: ORG_NAME,
    icons: {
      icon: [{ url: absoluteUrl(ORG_LOGO), sizes: "512x512", type: "image/png" }],
      apple: [{ url: absoluteUrl(ORG_LOGO), sizes: "512x512", type: "image/png" }],
    },
    formatDetection: {
      telephone: false,
      email: false,
      address: false,
    },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: SITE_NAME,
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      url: SITE_URL,
      images: buildOpenGraphImages(
        DEFAULT_SOCIAL_IMAGE,
        "AI Studios Blog - guides IA image, vidéo et cinéma",
      ),
    },
    twitter: baseTwitter(DEFAULT_TITLE, DEFAULT_DESCRIPTION, DEFAULT_SOCIAL_IMAGE),
    robots: indexableRobots,
  };
}

export function buildOrganizationJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${MAIN_SITE_URL}#organization`,
    name: ORG_NAME,
    url: MAIN_SITE_URL,
    logo: absoluteUrl(ORG_LOGO),
    image: absoluteUrl(DEFAULT_SOCIAL_IMAGE),
    description:
      "Formation et communauté pour maîtriser l’IA créative appliquée à l’image, la vidéo et le cinéma.",
    founder: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: AUTHOR_URL,
    },
    sameAs: [...ORG_SAME_AS],
  };
}

export function buildWebsiteJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "fr-FR",
    publisher: {
      "@type": "Organization",
      "@id": `${MAIN_SITE_URL}#organization`,
    },
    about: { "@id": `${MAIN_SITE_URL}#organization` },
  };
}

export function buildFormationServiceJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${FORMATION_FREE_URL}#service`,
    name: "Formation IA créative gratuite",
    description:
      "Formation gratuite pour structurer un workflow IA image et vidéo, avec une exigence cinématographique.",
    provider: {
      "@type": "EducationalOrganization",
      "@id": `${MAIN_SITE_URL}#organization`,
      name: ORG_NAME,
      url: MAIN_SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: FORMATION_FREE_URL,
      serviceType: "Formation en ligne",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      url: FORMATION_FREE_URL,
    },
  };
}

export function buildArticleBreadcrumbJsonLd(
  article: Article,
  categoryName?: string,
): Record<string, unknown> {
  const items = [
    { name: "Accueil", url: absoluteUrl("/") },
    { name: "Blog", url: absoluteUrl("/blog") },
  ];
  if (categoryName) {
    items.push({
      name: categoryName,
      url: absoluteUrl(`/categories/${article.category}`),
    });
  }
  items.push({
    name: article.title,
    url: absoluteUrl(`/blog/${article.slug}`),
  });
  return buildBreadcrumbJsonLd(items);
}

export function buildArticleBreadcrumbItems(
  article: Article,
  categoryName?: string,
): { label: string; href?: string }[] {
  const items: { label: string; href?: string }[] = [
    { label: "Accueil", href: "/" },
    { label: "Blog", href: "/blog" },
  ];
  if (categoryName) {
    items.push({
      label: categoryName,
      href: `/categories/${article.category}`,
    });
  }
  items.push({ label: article.title });
  return items;
}

export function buildBlogJsonLd({
  description,
}: {
  description: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}#blog`,
    name: SITE_NAME,
    description,
    url: SITE_URL,
    inLanguage: "fr-FR",
    publisher: {
      "@type": "Organization",
      "@id": `${MAIN_SITE_URL}#organization`,
      name: ORG_NAME,
      url: MAIN_SITE_URL,
    },
  };
}

export function buildAboutPageJsonLd({
  description,
}: {
  description: string;
}): Record<string, unknown> {
  const url = absoluteUrl("/a-propos");
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${url}#about`,
    name: `À propos de ${ORG_NAME}`,
    description,
    url,
    isPartOf: { "@id": `${SITE_URL}#website` },
    about: { "@id": `${MAIN_SITE_URL}#organization` },
    inLanguage: "fr-FR",
  };
}

export function buildPersonJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${AUTHOR_URL}#person`,
    name: AUTHOR_NAME,
    url: AUTHOR_URL,
    image: absoluteUrl(ORG_LOGO),
    jobTitle: "Formateur IA créative et réalisateur IA",
    description:
      "Fondateur d’AI Studios. Forme les créateurs à un usage exigeant de l’IA image et vidéo : méthode, workflows et qualité cinématographique. Réalisateur de VOIDBORN, film IA primé dans plusieurs festivals internationaux.",
    worksFor: { "@id": `${MAIN_SITE_URL}#organization` },
    knowsAbout: [
      "Intelligence artificielle générative",
      "Création vidéo IA",
      "Génération d'images IA",
      "Cinéma IA",
      "Prompting",
      "Direction artistique",
      "Workflows créatifs",
    ],
    award: VOIDBORN_AWARDS.map(
      (a) => `${a.name} — ${a.detail} (VOIDBORN)`,
    ),
    sameAs: [...ORG_SAME_AS],
  };
}

export function buildBreadcrumbJsonLd(
  items: { name: string; url: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildCollectionPageJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}): Record<string, unknown> {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    name,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${MAIN_SITE_URL}#organization`,
      name: ORG_NAME,
      url: MAIN_SITE_URL,
    },
    inLanguage: "fr-FR",
  };
}

export function buildArticleItemListJsonLd({
  articles,
  name,
  path,
}: {
  articles: Article[];
  name: string;
  path: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    url: absoluteUrl(path),
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: articles.length,
    itemListElement: articles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/blog/${article.slug}`),
      item: {
        "@type": "BlogPosting",
        headline: article.title,
        description: article.description,
        image: absoluteUrl(article.image),
        datePublished: article.date,
        dateModified: article.updatedAt,
        url: absoluteUrl(`/blog/${article.slug}`),
        author: {
          "@type": "Person",
          name: article.author.name,
          url: article.author.url,
        },
      },
    })),
  };
}

export function buildArticleJsonLd(
  article: Article,
  categoryName?: string,
): Record<string, unknown> {
  const url = absoluteUrl(`/blog/${article.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: article.title,
    description: article.description,
    url,
    image: {
      "@type": "ImageObject",
      url: absoluteUrl(article.image),
      caption: article.imageAlt,
    },
    datePublished: article.date,
    dateModified: article.updatedAt,
    author: {
      "@type": "Person",
      name: article.author.name,
      url: article.author.url,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${MAIN_SITE_URL}#organization`,
      name: ORG_NAME,
      url: MAIN_SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(ORG_LOGO),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: article.keywords?.join(", "),
    articleSection: categoryName,
    wordCount: article.content
      .filter((b) => b.type === "p")
      .reduce((n, b) => n + (b.type === "p" ? b.text.split(/\s+/).length : 0), 0),
    timeRequired: `PT${article.readingTime}M`,
    inLanguage: "fr-FR",
  };
}

export function buildFaqJsonLd(items: ArticleFaqItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function getTocEntries(
  blocks: Article["content"],
): { id: string; text: string; depth: 2 | 3 }[] {
  const out: { id: string; text: string; depth: 2 | 3 }[] = [];
  for (const b of blocks) {
    if (b.type === "h2") out.push({ id: b.id, text: b.text, depth: 2 });
    // Keep the FAQ section heading but skip its individual question sub-entries,
    // which would otherwise clutter the outline.
    if (b.type === "h3" && b.id && !b.id.startsWith("faq"))
      out.push({ id: b.id, text: b.text, depth: 3 });
  }
  return out;
}
