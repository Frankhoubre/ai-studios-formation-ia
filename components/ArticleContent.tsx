import type { ArticleBlock } from "@/lib/types/article";
import { RichParagraph } from "@/components/RichParagraph";

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
        return null;
      })}
    </div>
  );
}
