"use client";

import { useEffect, useState } from "react";
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

const linkClass =
  "rounded-full px-3 py-2 text-sm text-text-soft transition hover:bg-white/[0.06] hover:text-text";

const mobileLinkClass =
  "rounded-2xl border border-border-subtle bg-card px-4 py-3 text-sm text-text-soft transition hover:border-brand/50 hover:bg-white/[0.06] hover:text-text";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle/80 bg-bg-primary/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-text"
          onClick={closeMenu}
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
            className={linkClass}
          >
            Blog
          </Link>
          {navCategories.map((c) => (
            <Link
              key={c.slug}
              href={`/categories/${c.slug}`}
              className={linkClass}
            >
              {c.name}
            </Link>
          ))}
          <a
            href={MAIN_SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Site principal
          </a>
          <a
            href={FORMATION_FREE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Formation gratuite
          </a>
          <a
            href={SKOOL_COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Skool
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={FORMATION_FREE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 rounded-full bg-gradient-to-r from-brand to-brand-bright px-4 py-2 text-sm font-medium text-white shadow-[0_0_24px_-4px_rgba(168,85,247,0.55)] transition hover:brightness-110 sm:inline-flex"
          >
            Formation gratuite
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle bg-card text-text transition hover:border-brand/50 hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-brand/70 focus:ring-offset-2 focus:ring-offset-bg-primary lg:hidden"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="sr-only">
              {isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            </span>
            <span className="relative h-4 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        className={`${isMenuOpen ? "grid" : "hidden"} gap-2 border-t border-border-subtle/60 px-4 pb-4 pt-2 lg:hidden`}
        aria-label="Navigation mobile"
      >
        <Link
          href="/blog"
          className={mobileLinkClass}
          onClick={closeMenu}
        >
          Blog
        </Link>
        {navCategories.map((c) => (
          <Link
            key={c.slug}
            href={`/categories/${c.slug}`}
            className={mobileLinkClass}
            onClick={closeMenu}
          >
            {c.name}
          </Link>
        ))}
        <a
          href={MAIN_SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={mobileLinkClass}
          onClick={closeMenu}
        >
          Site principal
        </a>
        <a
          href={FORMATION_FREE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-brand/40 bg-brand/15 px-4 py-3 text-sm font-medium text-text transition hover:border-brand/70 hover:bg-brand/20"
          onClick={closeMenu}
        >
          Formation gratuite
        </a>
        <a
          href={SKOOL_COMMUNITY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={mobileLinkClass}
          onClick={closeMenu}
        >
          Skool
        </a>
      </nav>
    </header>
  );
}
