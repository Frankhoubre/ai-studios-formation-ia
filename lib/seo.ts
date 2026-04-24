import type { Metadata } from "next";
import type { Article } from "@/lib/types/article";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

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
}: BuildMetadataInput): Metadata {
  const resolvedTitle =
    absoluteTitle ?? (title ? `${title} | ${SITE_NAME}` : defaultTitle);
  const url = absoluteUrl(path);
  const ogImage = image ? absoluteUrl(image) : undefined;

  return {
    title: absoluteTitle
      ? { absolute: absoluteTitle }
      : title
        ? title
        : undefined,
    description,
    keywords: keywords?.length ? keywords : undefined,
    alternates: { canonical: url },
    openGraph: {
      type: type === "article" ? "article" : "website",
      locale: "fr_FR",
      siteName: SITE_NAME,
      url,
      title: resolvedTitle,
      description,
      ...(ogImage
        ? {
            images: [
              {
                url: ogImage,
                width: 1200,
                height: 630,
                alt: imageAlt ?? title ?? SITE_NAME,
              },
            ],
          }
        : {}),
      ...(type === "article" && publishedTime
        ? { publishedTime }
        : {}),
      ...(type === "article" && modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: ogImage ? "summary_large_image" : "summary",
      title: resolvedTitle,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
    robots: { index: true, follow: true },
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
    robots: { index: true, follow: true },
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
