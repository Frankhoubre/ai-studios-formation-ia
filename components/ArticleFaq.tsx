import type { ArticleFaqItem } from "@/lib/types/article";

export function ArticleFaq({ items }: { items: ArticleFaqItem[] }) {
  if (items.length === 0) return null;
  return (
    <section
      className="mt-14 border-t border-border-subtle pt-10"
      aria-labelledby="faq-title"
    >
      <h2
        id="faq-title"
        className="font-display scroll-mt-28 text-2xl font-semibold text-text"
      >
        Questions fréquentes
      </h2>
      <div className="mt-8 space-y-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-border-subtle bg-card/50 transition hover:border-brand/30 open:border-brand/30 open:bg-card/70"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-medium text-text [&::-webkit-details-marker]:hidden">
              {item.question}
              <span
                aria-hidden="true"
                className="shrink-0 text-brand-bright transition-transform duration-200 group-open:rotate-45"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </summary>
            <p className="px-5 pb-5 leading-relaxed text-text-soft">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
