import Link from "next/link";
import { categories } from "@/lib/categories";
import {
  FORMATION_FREE_URL,
  MAIN_SITE_URL,
  SKOOL_COMMUNITY_URL,
} from "@/lib/constants";

const navCategories = categories.filter((c) =>
  ["ia-video", "ia-image", "prompting"].includes(c.slug),
);

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle/80 bg-bg-primary/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-text"
        >
          AI Studios{" "}
          <span className="text-brand-bright">Blog</span>
        </Link>
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Navigation principale"
        >
          <Link
            href="/blog"
            className="rounded-full px-3 py-2 text-sm text-text-soft transition hover:bg-white/[0.06] hover:text-text"
          >
            Blog
          </Link>
          {navCategories.map((c) => (
            <Link
              key={c.slug}
              href={`/categories/${c.slug}`}
              className="rounded-full px-3 py-2 text-sm text-text-soft transition hover:bg-white/[0.06] hover:text-text"
            >
              {c.name}
            </Link>
          ))}
          <a
            href={MAIN_SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-3 py-2 text-sm text-text-soft transition hover:bg-white/[0.06] hover:text-text"
          >
            Site principal
          </a>
          <a
            href={FORMATION_FREE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-3 py-2 text-sm text-text-soft transition hover:bg-white/[0.06] hover:text-text"
          >
            Formation gratuite
          </a>
          <a
            href={SKOOL_COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-3 py-2 text-sm text-text-soft transition hover:bg-white/[0.06] hover:text-text"
          >
            Skool
          </a>
        </nav>
        <a
          href={FORMATION_FREE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 rounded-full bg-gradient-to-r from-brand to-brand-bright px-4 py-2 text-sm font-medium text-white shadow-[0_0_24px_-4px_rgba(168,85,247,0.55)] transition hover:brightness-110 sm:inline-flex"
        >
          Formation gratuite
        </a>
      </div>
      <div className="flex gap-2 overflow-x-auto border-t border-border-subtle/60 px-4 py-2 lg:hidden">
        <Link
          href="/blog"
          className="shrink-0 rounded-full border border-border-subtle bg-card px-3 py-1.5 text-xs text-text-soft"
        >
          Blog
        </Link>
        {navCategories.map((c) => (
          <Link
            key={c.slug}
            href={`/categories/${c.slug}`}
            className="shrink-0 rounded-full border border-border-subtle bg-card px-3 py-1.5 text-xs text-text-soft"
          >
            {c.name}
          </Link>
        ))}
        <a
          href={MAIN_SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full border border-border-subtle bg-card px-3 py-1.5 text-xs text-text-soft"
        >
          Site principal
        </a>
        <a
          href={FORMATION_FREE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full border border-brand/40 bg-brand/15 px-3 py-1.5 text-xs text-text"
        >
          Formation gratuite
        </a>
        <a
          href={SKOOL_COMMUNITY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full border border-border-subtle bg-card px-3 py-1.5 text-xs text-text-soft"
        >
          Skool
        </a>
      </div>
    </header>
  );
}
