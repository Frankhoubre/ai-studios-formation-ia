import type { ArticleBlock } from "@/lib/types/article";
import { RichParagraph } from "@/components/RichParagraph";
import { LiteYouTube } from "@/components/LiteYouTube";
import { Fragment } from "react";
import { ArticleCta } from "@/components/article/ArticleCta";
import { FormationInlineNote } from "@/components/cta/FormationCta";
import { DataTable } from "@/components/article/DataTable";
import { MediaFigure } from "@/components/article/MediaFigure";
import { Methodology } from "@/components/article/Methodology";
import { Verdict } from "@/components/article/Verdict";
import { YOUTUBE_URL } from "@/lib/constants";

/**
 * Index du H2 qui ouvre la seconde moitié de l'article : c'est devant lui que
 * se glisse la note formation. -1 si l'article a moins de quatre sections.
 */
export function midArticleIndex(blocks: ArticleBlock[]): number {
  const h2 = blocks
    .map((b, i) => (b.type === "h2" ? i : -1))
    .filter((i) => i >= 0);
  if (h2.length < 4) return -1;
  return h2[Math.ceil(h2.length / 2)];
}

export function ArticleContent({
  blocks,
  slug,
  midCta = false,
}: {
  blocks: ArticleBlock[];
  slug: string;
  /** Glisse une note formation d'une ligne à mi-parcours. */
  midCta?: boolean;
}) {
  // Un média placé tout en haut du corps peut être l'image principale à
  // l'écran : lui seul est chargé sans attendre. Plus bas, le lazy-loading
  // évite de concurrencer l'image de couverture.
  const firstMedia = blocks
    .slice(0, 3)
    .findIndex(
      (b) => b.type === "image" || b.type === "screenshot" || b.type === "gallery",
    );
  const noteIndex = midCta ? midArticleIndex(blocks) : -1;
  return (
    <div className="prose-blog space-y-5 text-[17px] leading-[1.75] text-text-soft md:text-lg">
      {blocks.map((block, i) => {
        const node = renderBlock(block, i);
        if (i !== noteIndex) return node;
        return (
          <Fragment key={`mid-cta-${i}`}>
            <FormationInlineNote placement="article-mid" />
            {node}
          </Fragment>
        );
      })}
    </div>
  );

  function renderBlock(block: ArticleBlock, i: number) {
        if (block.type === "h2") {
          return (
            <h2
              key={`${block.id}-${i}`}
              id={block.id}
              className="font-display mt-14 scroll-mt-28 text-2xl font-semibold tracking-tight text-text before:mb-4 before:block before:h-[3px] before:w-10 before:rounded-full before:bg-gradient-to-r before:from-brand before:to-accent-rose before:content-[''] first:mt-0 md:mt-16 md:text-[2rem] md:leading-tight"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3
              key={`${block.id ?? block.text}-${i}`}
              id={block.id}
              className="font-display mt-8 scroll-mt-28 text-xl font-semibold text-text md:text-2xl"
            >
              {block.text}
            </h3>
          );
        }
        if (block.type === "p") {
          return (
            <p
              key={i}
              className="text-text-soft first:text-[1.15rem] first:leading-[1.7] first:text-text md:first:text-[1.3rem]"
            >
              <RichParagraph text={block.text} />
            </p>
          );
        }
        if (block.type === "ul") {
          return (
            <ul
              key={i}
              className="list-disc space-y-2 pl-6 text-text-soft marker:text-brand"
            >
              {block.items.map((item) => (
                <li key={item.slice(0, 48)}>
                  <RichParagraph text={item} />
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === "ol") {
          return (
            <ol
              key={i}
              className="list-decimal space-y-2 pl-6 text-text-soft marker:text-brand"
            >
              {block.items.map((item) => (
                <li key={item.slice(0, 48)}>
                  <RichParagraph text={item} />
                </li>
              ))}
            </ol>
          );
        }
        if (block.type === "table" || block.type === "comparison") {
          return <DataTable key={i} {...block} />;
        }
        if (block.type === "image" || block.type === "screenshot") {
          return (
            <MediaFigure
              key={`${block.src}-${i}`}
              item={block}
              eager={i === firstMedia}
            />
          );
        }
        if (block.type === "gallery") {
          return (
            <figure key={`gallery-${i}`} className="my-10">
              <div
                className={
                  block.items.length >= 3
                    ? "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                    : "grid gap-4 sm:grid-cols-2"
                }
              >
                {block.items.map((item, gi) => (
                  <MediaFigure
                    key={item.src}
                    item={item}
                    compact
                    eager={i === firstMedia && gi === 0}
                    sizes={
                      block.items.length >= 3
                        ? "(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
                        : "(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"
                    }
                  />
                ))}
              </div>
              {block.caption ? (
                <figcaption className="mt-3 text-sm leading-relaxed text-text-muted">
                  <RichParagraph text={block.caption} />
                </figcaption>
              ) : null}
            </figure>
          );
        }
        if (block.type === "verdict") {
          return <Verdict key={`verdict-${i}`} block={block} />;
        }
        if (block.type === "methodology") {
          return <Methodology key={`methodology-${i}`} block={block} />;
        }
        if (block.type === "cta") {
          return <ArticleCta key={`cta-${i}`} block={block} slug={slug} />;
        }
        if (block.type === "youtube") {
          return (
            <figure key={`${block.videoId}-${i}`} className="my-10">
              <LiteYouTube videoId={block.videoId} title={block.title} />
              <figcaption className="mt-3 text-sm leading-relaxed text-text-muted">
                Vidéo : {block.title}, sur la{" "}
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-bright underline decoration-white/20 underline-offset-[3px] transition hover:text-accent-rose"
                >
                  chaîne Business Dynamite
                </a>
              </figcaption>
            </figure>
          );
        }
        if (block.type === "quote") {
          return (
            <blockquote
              key={`${block.text.slice(0, 48)}-${i}`}
              className="my-9 rounded-r-2xl border-l-[3px] border-brand-bright bg-gradient-to-r from-brand/15 to-transparent px-5 py-4 text-text md:px-6 md:py-5"
            >
              <p className="leading-relaxed">
                <RichParagraph text={block.text} />
              </p>
              {block.cite ? (
                <cite className="mt-3 block text-sm not-italic text-text-muted">
                  {block.cite}
                </cite>
              ) : null}
            </blockquote>
          );
        }
        return null;
  }
}
