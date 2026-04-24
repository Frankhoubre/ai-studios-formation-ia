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

  return (
    <nav
      aria-label="Sommaire"
      className="rounded-2xl border border-border-subtle bg-card/80 p-5"
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
        Sommaire
      </p>
      <ol className="mt-4 space-y-2 text-sm">
        {entries.map((e) => (
          <li
            key={e.id}
            className={cn(e.depth === 3 && "ml-4 border-l border-border-subtle pl-3")}
          >
            <a
              href={`#${e.id}`}
              className={cn(
                "block transition",
                active === e.id
                  ? "text-brand-bright"
                  : "text-text-soft hover:text-text",
              )}
            >
              {e.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
