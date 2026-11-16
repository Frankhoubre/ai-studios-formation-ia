import Link from "next/link";
import { CtaLink } from "@/components/cta/CtaLink";
import { ManageCookiesLink } from "@/components/ManageCookiesLink";
import { categories } from "@/lib/categories";
import {
  AUTHOR_NAME,
  FORMATION_FREE_URL,
  MAIN_SITE_URL,
  SKOOL_COMMUNITY_URL,
  YOUTUBE_URL,
} from "@/lib/constants";

const linkClass =
  "inline-flex min-h-11 items-center text-sm text-text-soft transition hover:text-brand-bright md:min-h-0 md:py-1.5";
const titleClass =
  "text-[13px] font-semibold uppercase tracking-[0.12em] text-text-muted";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-border-subtle bg-bg-secondary radial-glow-soft">
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-14 md:px-6 md:pt-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,2fr)] lg:gap-16">
          <div>
            <p className="font-display text-xl font-semibold text-text">
              AI Studios <span className="text-brand-bright">Blog</span>
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-text-muted">
              Le blog francophone pour apprendre l’IA créative sans rendu
              plastique : images, vidéos, pubs, films, workflows et méthode.
              Écrit par{" "}
              <Link
                href="/a-propos"
                className="text-text-soft underline decoration-white/25 underline-offset-[3px] transition hover:text-brand-bright"
              >
                {AUTHOR_NAME}
              </Link>
              .
            </p>
            <CtaLink
              href={FORMATION_FREE_URL}
              placement="footer"
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-brand to-brand-bright px-6 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Accéder à la formation gratuite
            </CtaLink>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3">
            <nav aria-label="Catégories">
              <p className={titleClass}>Catégories</p>
              <ul className="mt-2 md:mt-4">
                {categories.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/categories/${c.slug}`} className={linkClass}>
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="AI Studios">
              <p className={titleClass}>AI Studios</p>
              <ul className="mt-2 md:mt-4">
                <li>
                  <CtaLink
                    href={FORMATION_FREE_URL}
                    placement="footer-nav"
                    className={linkClass}
                  >
                    Formation gratuite
                  </CtaLink>
                </li>
                <li>
                  <CtaLink
                    href={SKOOL_COMMUNITY_URL}
                    placement="footer-nav"
                    target="skool"
                    className={linkClass}
                  >
                    Communauté Skool
                  </CtaLink>
                </li>
                <li>
                  <a
                    href={MAIN_SITE_URL}
                    target="_blank"
                    rel="noopener"
                    className={linkClass}
                  >
                    Site principal
                  </a>
                </li>
                <li>
                  <a
                    href={YOUTUBE_URL}
                    target="_blank"
                    rel="noopener"
                    className={linkClass}
                  >
                    Chaîne YouTube
                  </a>
                </li>
              </ul>
            </nav>
            <nav aria-label="Le blog" className="col-span-2 md:col-span-1">
              <p className={titleClass}>Le blog</p>
              <ul className="mt-2 grid grid-cols-2 gap-x-6 md:mt-4 md:grid-cols-1">
                <li>
                  <Link href="/blog" className={linkClass}>
                    Tous les articles
                  </Link>
                </li>
                <li>
                  <Link href="/a-propos" className={linkClass}>
                    À propos et auteur
                  </Link>
                </li>
                <li>
                  <Link href="/a-propos#contact" className={linkClass}>
                    Contact
                  </Link>
                </li>
                <li>
                  <a href="/feed.xml" className={linkClass}>
                    Flux RSS
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border-subtle pt-6 text-[13px] text-text-muted md:flex-row md:items-center md:justify-between">
          <p>© {year} AI Studios. Tous droits réservés.</p>
          <ul className="flex flex-wrap items-center gap-x-5">
            <li>
              <Link
                href="/mentions-legales"
                className="inline-flex min-h-11 items-center transition hover:text-brand-bright"
              >
                Mentions légales
              </Link>
            </li>
            <li>
              <Link
                href="/politique-cookies"
                className="inline-flex min-h-11 items-center transition hover:text-brand-bright"
              >
                Politique cookies
              </Link>
            </li>
            <li>
              <ManageCookiesLink />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
