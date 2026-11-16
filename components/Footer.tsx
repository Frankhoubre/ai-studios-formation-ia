import Link from "next/link";
import { ManageCookiesLink } from "@/components/ManageCookiesLink";
import { categories } from "@/lib/categories";
import {
  FORMATION_FREE_URL,
  MAIN_SITE_URL,
  SKOOL_COMMUNITY_URL,
} from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-border-subtle bg-bg-secondary radial-glow-soft">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold text-text">
              AI Studios Blog
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-text-muted">
              Le blog francophone pour apprendre l’IA créative sans rendu
              plastique : images, vidéos, pubs, films, workflows et méthode.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-text">Catégories</p>
            <ul className="mt-2 grid grid-cols-2 gap-x-4 md:mt-4 md:gap-y-1">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/categories/${c.slug}`}
                    className="inline-flex min-h-11 items-center text-sm text-text-soft transition hover:text-brand-bright md:min-h-0 md:py-1"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-text">AI Studios</p>
            <ul className="mt-2 grid grid-cols-2 gap-x-4 text-sm text-text-soft md:mt-4 md:grid-cols-1 md:gap-y-1">
              <li>
                <a
                  href={MAIN_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center transition hover:text-brand-bright md:min-h-0 md:py-1"
                >
                  Site principal
                </a>
              </li>
              <li>
                <a
                  href={FORMATION_FREE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center transition hover:text-brand-bright md:min-h-0 md:py-1"
                >
                  Formation gratuite
                </a>
              </li>
              <li>
                <a
                  href={SKOOL_COMMUNITY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center transition hover:text-brand-bright md:min-h-0 md:py-1"
                >
                  Communauté Skool
                </a>
              </li>
              <li>
                <Link
                  href="/a-propos"
                  className="inline-flex min-h-11 items-center transition hover:text-brand-bright md:min-h-0 md:py-1"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-cookies"
                  className="inline-flex min-h-11 items-center transition hover:text-brand-bright md:min-h-0 md:py-1"
                >
                  Politique cookies
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="inline-flex min-h-11 items-center transition hover:text-brand-bright md:min-h-0 md:py-1"
                >
                  Mentions légales
                </Link>
              </li>
              <li className="text-text-soft">
                <ManageCookiesLink />
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-center text-[13px] text-text-muted md:text-left">
          © {year} AI Studios. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
