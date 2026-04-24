import Link from "next/link";
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
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/categories/${c.slug}`}
                    className="text-sm text-text-soft transition hover:text-brand-bright"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-text">AI Studios</p>
            <ul className="mt-4 space-y-2 text-sm text-text-soft">
              <li>
                <a
                  href={MAIN_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-brand-bright"
                >
                  Site principal
                </a>
              </li>
              <li>
                <a
                  href={FORMATION_FREE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-brand-bright"
                >
                  Formation gratuite
                </a>
              </li>
              <li>
                <a
                  href={SKOOL_COMMUNITY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-brand-bright"
                >
                  Communauté Skool
                </a>
              </li>
              <li>
                <Link
                  href="/a-propos"
                  className="transition hover:text-brand-bright"
                >
                  À propos
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-12 text-center text-xs text-text-muted md:text-left">
          © {year} AI Studios. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
