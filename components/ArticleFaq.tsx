import type { ArticleFaqItem } from "@/lib/types/article";

export function ArticleFaq({ items }: { items: ArticleFaqItem[] }) {
  if (items.length === 0) return null;
  return (
    <section className="mt-14 border-t border-border-subtle pt-10" aria-labelledby="faq-title">
      <h2 id="faq-title" className="font-display text-2xl font-semibold text-text">
        Questions fréquentes
      </h2>
      <dl className="mt-8 space-y-8">
        {items.map((item) => (
          <div key={item.question}>
            <dt className="font-medium text-text">{item.question}</dt>
            <dd className="mt-2 text-text-soft leading-relaxed">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
