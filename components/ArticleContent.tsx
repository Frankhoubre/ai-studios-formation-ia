import type { ArticleBlock } from "@/lib/types/article";
import { RichParagraph } from "@/components/RichParagraph";
import { LiteYouTube } from "@/components/LiteYouTube";
import { ArticleCta } from "@/components/article/ArticleCta";
import { DataTable } from "@/components/article/DataTable";
import { MediaFigure } from "@/components/article/MediaFigure";
import { Methodology } from "@/components/article/Methodology";
import { Verdict } from "@/components/article/Verdict";
import { YOUTUBE_URL } from "@/lib/constants";

export function ArticleContent({
  blocks,
  slug,
}: {
  blocks: ArticleBlock[];
  slug: string;
}) {
  const firstMedia = blocks.findIndex(
    (b) => b.type === "image" || b.type === "screenshot" || b.type === "gallery",
  );
  return (
    <div className="prose-blog space-y-5 text-[17px] leading-[1.75] text-text-soft md:text-lg">
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2
              key={`${block.id}-${i}`}
              id={block.id}
              className="font-display mt-14 scroll-mt-28 text-2xl font-semibold tracking-tight text-text first:mt-0 md:text-3xl"
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
            <p key={i} className="text-text-soft">
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
              className="my-8 rounded-2xl border border-brand/25 bg-brand/10 px-5 py-4 text-text-soft"
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
      })}
    </div>
  );
}
