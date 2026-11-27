import Link from "next/link";
import { RichParagraph } from "@/components/RichParagraph";
import type { ArticleVerdict } from "@/lib/types/article";
import { classifyLink, REL_BY_KIND } from "@/lib/links";

function PointList({
  title,
  items,
  sign,
}: {
  title: string;
  items: string[];
  sign: "plus" | "minus";
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-text">{title}</p>
      <ul className="mt-3 space-y-2.5">
        {items.map((item) => (
          <li key={item.slice(0, 60)} className="flex gap-3 text-[15px] leading-relaxed text-text-soft md:text-base">
            <span
              aria-hidden="true"
              className={
                sign === "plus"
                  ? "mt-[0.3em] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300"
                  : "mt-[0.3em] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-400/15 text-rose-300"
              }
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                {sign === "plus" ? <path d="M12 5v14M5 12h14" /> : <path d="M5 12h14" />}
              </svg>
            </span>
            <span>
              <RichParagraph text={item} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Verdict({ block }: { block: ArticleVerdict }) {
  const link = block.lien ? classifyLink(block.lien.href, { sponsored: block.lien.sponsored }) : null;
  const buttonClass =
    "inline-flex min-h-11 items-center rounded-full bg-[#7c3aed] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#6d28d9]";
  return (
    <section className="my-10 rounded-2xl border border-border-subtle bg-bg-secondary p-5 md:p-7">
      <h3 className="font-display text-xl font-semibold text-text md:text-2xl">
        {block.title ?? "Notre verdict"}
      </h3>
      <p className="mt-4 text-[15px] leading-relaxed text-text-soft md:text-base">
        <span className="font-semibold text-text">Pour qui : </span>
        <RichParagraph text={block.pourQui} />
      </p>
      <div className="mt-6 grid gap-6 border-y border-border-subtle py-6 md:grid-cols-2 md:gap-8">
        <PointList title="Points forts" items={block.forts} sign="plus" />
        <PointList title="Points faibles" items={block.faibles} sign="minus" />
      </div>
      <p className="mt-6 leading-relaxed text-text-soft">
        <RichParagraph text={block.verdict} />
      </p>
      {block.lien && link ? (
        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
          {link.kind === "internal" ? (
            <Link href={link.href} className={buttonClass} data-button>
              {block.lien.label}
            </Link>
          ) : (
            <a href={link.href} target="_blank" rel={REL_BY_KIND[link.kind]} className={buttonClass} data-button>
              {block.lien.label}
            </a>
          )}
          {link.kind === "sponsored" ? (
            <span className="text-xs text-text-muted">Lien affilié</span>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
