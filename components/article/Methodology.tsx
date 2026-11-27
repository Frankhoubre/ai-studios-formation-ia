import { RichParagraph } from "@/components/RichParagraph";
import type { ArticleMethodology } from "@/lib/types/article";
import { classifyLink, REL_BY_KIND } from "@/lib/links";
import { formatFrenchDate } from "@/lib/utils";

function SubList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="font-semibold text-text-soft">{title}</p>
      <ul className="mt-1.5 list-disc space-y-1 pl-5 marker:text-text-muted">
        {items.map((item) => (
          <li key={item.slice(0, 60)}>
            <RichParagraph text={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Methodology({ block }: { block: ArticleMethodology }) {
  return (
    <details className="group my-10 rounded-2xl border border-border-subtle bg-bg-secondary/60 open:bg-bg-secondary">
      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 px-5 py-3 text-sm font-medium text-text-soft [&::-webkit-details-marker]:hidden">
        <span>
          Méthodologie de notre analyse
          <span className="ml-2 font-normal text-text-muted">
            (<time dateTime={block.date}>{formatFrenchDate(block.date)}</time>)
          </span>
        </span>
        <svg
          aria-hidden="true"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          className="shrink-0 text-text-muted transition-transform group-open:rotate-180"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </summary>
      <div className="space-y-4 border-t border-border-subtle px-5 py-4 text-sm leading-relaxed text-text-muted">
        {block.text.map((t) => (
          <p key={t.slice(0, 60)}>
            <RichParagraph text={t} />
          </p>
        ))}
        {block.teste?.length ? <SubList title="Ce que j’ai testé" items={block.teste} /> : null}
        {block.nonTeste?.length ? (
          <SubList title="Ce que je n’ai pas testé" items={block.nonTeste} />
        ) : null}
        {block.sources?.length ? (
          <div>
            <p className="font-semibold text-text-soft">Sources consultées</p>
            <ul className="mt-1.5 list-disc space-y-1 pl-5 marker:text-text-muted">
              {block.sources.map((s) => {
                const { href, kind } = classifyLink(s.href);
                return (
                  <li key={s.href}>
                    <a
                      href={href}
                      {...(kind === "internal" ? {} : { target: "_blank", rel: REL_BY_KIND[kind] })}
                      className="text-text-soft underline decoration-white/25 underline-offset-[3px] hover:text-brand-bright"
                    >
                      {s.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
    </details>
  );
}
