"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CtaLink } from "@/components/cta/CtaLink";
import { categories } from "@/lib/categories";
import {
  FORMATION_FREE_URL,
  MAIN_SITE_URL,
  SKOOL_COMMUNITY_URL,
} from "@/lib/constants";

const navCategories = categories.filter((c) =>
  ["ia-video", "ia-image", "prompting", "actualites-ia"].includes(c.slug),
);

const linkBase =
  "inline-flex min-h-11 items-center rounded-full px-3 text-sm transition hover:bg-white/[0.06] hover:text-text";

const mobileLinkBase =
  "flex min-h-12 items-center rounded-2xl border px-4 py-3 text-[15px] transition hover:border-brand/50 hover:bg-white/[0.06] hover:text-text";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/blog") return pathname === "/blog";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  function linkClass(href: string) {
    return `${linkBase} ${
      isActive(href)
        ? "bg-white/[0.06] text-text"
        : "text-text-soft"
    }`;
  }

  function mobileLinkClass(href: string) {
    return `${mobileLinkBase} ${
      isActive(href)
        ? "border-brand/50 bg-white/[0.06] text-text"
        : "border-border-subtle bg-card text-text-soft"
    }`;
  }

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
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:gap-4 md:px-6">
        <Link
          href="/"
          className="font-display inline-flex min-h-11 shrink-0 items-center whitespace-nowrap text-[17px] font-semibold tracking-tight text-text sm:text-lg"
          onClick={closeMenu}
        >
          <span>
            AI Studios <span className="text-brand-bright">Blog</span>
          </span>
        </Link>
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Navigation principale"
        >
          <Link
            href="/blog"
            className={linkClass("/blog")}
            aria-current={isActive("/blog") ? "page" : undefined}
          >
            Blog
          </Link>
          {navCategories.map((c) => (
            <Link
              key={c.slug}
              href={`/categories/${c.slug}`}
              className={linkClass(`/categories/${c.slug}`)}
              aria-current={
                isActive(`/categories/${c.slug}`) ? "page" : undefined
              }
            >
              {c.name}
            </Link>
          ))}
          <CtaLink
            href={SKOOL_COMMUNITY_URL}
            placement="header-nav"
            target="skool"
            className={`${linkBase} text-text-soft`}
          >
            Communauté Skool
          </CtaLink>
        </nav>
        <div className="flex items-center gap-2">
          <CtaLink
            href={FORMATION_FREE_URL}
            placement="header"
            className="inline-flex min-h-11 shrink-0 items-center rounded-full bg-gradient-to-r from-brand to-brand-bright px-3.5 text-[13px] font-semibold text-white shadow-[0_0_24px_-4px_rgba(168,85,247,0.55)] transition hover:brightness-110 sm:px-4 sm:text-sm"
          >
            Formation gratuite
          </CtaLink>
          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border-subtle bg-card text-text transition hover:border-brand/50 hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-brand/70 focus:ring-offset-2 focus:ring-offset-bg-primary lg:hidden"
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
          className={mobileLinkClass("/blog")}
          aria-current={isActive("/blog") ? "page" : undefined}
          onClick={closeMenu}
        >
          Blog
        </Link>
        {navCategories.map((c) => (
          <Link
            key={c.slug}
            href={`/categories/${c.slug}`}
            className={mobileLinkClass(`/categories/${c.slug}`)}
            aria-current={
              isActive(`/categories/${c.slug}`) ? "page" : undefined
            }
            onClick={closeMenu}
          >
            {c.name}
          </Link>
        ))}
        <a
          href={MAIN_SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${mobileLinkBase} border-border-subtle bg-card text-text-soft`}
          onClick={closeMenu}
        >
          Site principal
        </a>
        <a
          href={FORMATION_FREE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 items-center rounded-2xl border border-brand/40 bg-brand/15 px-4 py-3 text-[15px] font-medium text-text transition hover:border-brand/70 hover:bg-brand/20"
          onClick={closeMenu}
        >
          Formation gratuite
        </a>
        <a
          href={SKOOL_COMMUNITY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${mobileLinkBase} border-border-subtle bg-card text-text-soft`}
          onClick={closeMenu}
        >
          Communauté Skool
        </a>
      </nav>
    </header>
  );
}
