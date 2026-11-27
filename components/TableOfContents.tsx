"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Entry = { id: string; text: string; depth: 2 | 3 };

export function TableOfContents({ entries }: { entries: Entry[] }) {
  const [active, setActive] = useState<string | null>(entries[0]?.id ?? null);

  useEffect(() => {
    if (entries.length === 0) return;
    const obs = new IntersectionObserver(
      (items) => {
        for (const i of items) {
          if (i.isIntersecting && i.target.id) {
            setActive(i.target.id);
            break;
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 1] },
    );
    for (const e of entries) {
      const el = document.getElementById(e.id);
      if (el) obs.observe(el);
    }
    return () => obs.disconnect();
  }, [entries]);

  if (entries.length === 0) return null;

  function linkClass(id: string) {
    return cn(
      "flex min-h-11 items-center rounded py-2 leading-snug transition lg:block lg:min-h-0 lg:py-0.5",
      active === id ? "text-brand-bright" : "text-text-soft hover:text-text",
    );
  }

  const list = (
    <ol className="space-y-0 text-sm lg:mt-4 lg:space-y-2">
      {entries.map((e) => (
        <li
          key={e.id}
          className={cn(
            e.depth === 3 && "ml-4 border-l border-border-subtle pl-3",
          )}
        >
          <a href={`#${e.id}`} className={linkClass(e.id)}>
            {e.text}
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <>
      {/* Mobile: collapsed by default so it never pushes the article down */}
      <details className="group rounded-2xl border border-border-subtle bg-card/80 lg:hidden">
        <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between px-5 text-[13px] font-semibold uppercase tracking-wider text-text-muted [&::-webkit-details-marker]:hidden">
          Sommaire
          <span
            aria-hidden="true"
            className="text-brand-bright transition-transform duration-200 group-open:rotate-180"
          >
            ▾
          </span>
        </summary>
        <div className="px-5 pb-4">{list}</div>
      </details>

      {/* Desktop: sticky outline with scroll-spy */}
      <nav
        aria-label="Sommaire"
        className="hidden max-h-[calc(100vh-21rem)] overflow-y-auto overscroll-contain rounded-2xl border border-border-subtle bg-card/80 p-5 lg:block"
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
          Sommaire
        </p>
        {list}
      </nav>
    </>
  );
}
