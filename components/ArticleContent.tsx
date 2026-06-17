import Image from "next/image";
import type { ArticleBlock } from "@/lib/types/article";
import { RichParagraph } from "@/components/RichParagraph";
import { LiteYouTube } from "@/components/LiteYouTube";
import { YOUTUBE_URL } from "@/lib/constants";

export function ArticleContent({ blocks }: { blocks: ArticleBlock[] }) {
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
        if (block.type === "table") {
          return (
            <figure key={i} className="my-8 overflow-x-auto rounded-2xl border border-border-subtle bg-card/60">
              {block.caption ? (
                <figcaption className="border-b border-border-subtle px-4 py-3 text-sm text-text-muted">
                  {block.caption}
                </figcaption>
              ) : null}
              <table className="w-full min-w-[520px] text-left text-sm md:text-base">
                <thead>
                  <tr className="border-b border-border-subtle bg-white/[0.03]">
                    {block.headers.map((h) => (
                      <th
                        key={h}
                        className="px-4 py-3 font-display font-semibold text-text"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, ri) => (
                    <tr
                      key={ri}
                      className="border-b border-border-subtle/80 last:border-0"
                    >
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          className="px-4 py-3 align-top text-text-soft"
                        >
                          <RichParagraph text={cell} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </figure>
          );
        }
        if (block.type === "image") {
          return (
            <figure
              key={`${block.src}-${i}`}
              className="my-10 overflow-hidden rounded-3xl border border-border-subtle bg-card/70"
            >
              <div className="relative aspect-video w-full">
                <Image
                  src={block.src}
                  alt={block.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 860px, 100vw"
                />
              </div>
              {block.caption ? (
                <figcaption className="border-t border-border-subtle px-5 py-3 text-sm leading-relaxed text-text-muted">
                  <RichParagraph text={block.caption} />
                </figcaption>
              ) : null}
            </figure>
          );
        }
        if (block.type === "youtube") {
          return (
            <figure key={`${block.videoId}-${i}`} className="my-10">
              <LiteYouTube videoId={block.videoId} title={block.title} />
              <figcaption className="mt-3 text-sm leading-relaxed text-text-muted">
                Vidéo : {block.title} —{" "}
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
