import type { Metadata } from "next";
import type { Article } from "@/lib/types/article";
import {
  DEFAULT_SOCIAL_IMAGE,
  MAIN_SITE_URL,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";

const defaultTitle = "AI Studios Blog - Formation IA vidéo, image et cinéma";
const defaultDescription =
  "Guides concrets pour apprendre à créer des images, vidéos, pubs et films avec l’intelligence artificielle, sans rendu générique ni workflow au hasard.";

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}

type BuildMetadataInput = {
  title?: string;
  absoluteTitle?: string;
  description?: string;
  path?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  image?: string;
  imageAlt?: string;
  keywords?: string[];
  robots?: Metadata["robots"];
};

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

export function buildMetadata({
  title,
  absoluteTitle,
  description = defaultDescription,
  path = "/",
  type = "website",
  publishedTime,
  modifiedTime,
  image,
  imageAlt,
  keywords,
  robots = indexableRobots,
}: BuildMetadataInput): Metadata {
  const resolvedTitle =
    absoluteTitle ?? (title ? `${title} | ${SITE_NAME}` : defaultTitle);
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl(image ?? DEFAULT_SOCIAL_IMAGE);
  const resolvedImageAlt = imageAlt ?? title ?? absoluteTitle ?? SITE_NAME;

  return {
    title: absoluteTitle
      ? { absolute: absoluteTitle }
      : title
        ? title
        : undefined,
    description,
    keywords: keywords?.length ? keywords : undefined,
    alternates: { canonical: url },
    authors: [{ name: "Frank Houbre", url: MAIN_SITE_URL }],
    creator: "Frank Houbre",
    publisher: "AI Studios",
    openGraph: {
      type: type === "article" ? "article" : "website",
      locale: "fr_FR",
      siteName: SITE_NAME,
      url,
      title: resolvedTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: resolvedImageAlt,
        },
      ],
      ...(type === "article" && publishedTime
        ? { publishedTime }
        : {}),
      ...(type === "article" && modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [ogImage],
    },
    robots,
  };
}

export function articleMetadata(article: Article): Metadata {
  const url = absoluteUrl(`/blog/${article.slug}`);
  const ogImage = absoluteUrl(article.image);
  const pageTitle = `${article.title} | ${SITE_NAME}`;
  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical: url },
    authors: [{ name: article.author.name, url: article.author.url }],
    creator: article.author.name,
    publisher: "AI Studios",
    category: article.category,
    openGraph: {
      type: "article",
      locale: "fr_FR",
      siteName: SITE_NAME,
      url,
      title: pageTitle,
      description: article.description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: article.imageAlt,
        },
      ],
      publishedTime: article.date,
      modifiedTime: article.updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: article.description,
      images: [ogImage],
    },
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
      name: "AI Studios",
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

export function getTocEntries(
  blocks: Article["content"],
): { id: string; text: string; depth: 2 | 3 }[] {
  const out: { id: string; text: string; depth: 2 | 3 }[] = [];
  for (const b of blocks) {
    if (b.type === "h2") out.push({ id: b.id, text: b.text, depth: 2 });
    if (b.type === "h3" && b.id)
      out.push({ id: b.id, text: b.text, depth: 3 });
  }
  return out;
}
