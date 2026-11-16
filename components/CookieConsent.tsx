"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
  COOKIE_CONSENT_RESET_EVENT,
  readStoredConsent,
  writeConsent,
} from "@/lib/cookie-consent";

export function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [analyticsOptIn, setAnalyticsOptIn] = useState(false);

  const refreshOpen = useCallback(() => {
    setOpen(readStoredConsent() === null);
  }, []);

  useEffect(() => {
    // Mount gate volontaire : le consentement dépend de localStorage, on ne
    // peut donc le lire qu'après hydratation pour éviter un mismatch SSR.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    refreshOpen();
  }, [refreshOpen]);

  useEffect(() => {
    const onReset = () => {
      refreshOpen();
      setShowCustomize(false);
      setAnalyticsOptIn(false);
    };
    window.addEventListener(COOKIE_CONSENT_RESET_EVENT, onReset);
    return () => window.removeEventListener(COOKIE_CONSENT_RESET_EVENT, onReset);
  }, [refreshOpen]);

  const close = useCallback((analytics: boolean) => {
    writeConsent(analytics);
    setOpen(false);
    setShowCustomize(false);
  }, []);

  if (!mounted || !open) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[100] p-2 sm:p-4 md:p-6"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
    >
      <div className="mx-auto max-h-[85vh] max-w-3xl overflow-y-auto rounded-2xl border border-border-subtle bg-bg-secondary/95 p-4 shadow-[0_-8px_40px_-12px_rgba(0,0,0,0.65)] backdrop-blur-md sm:p-5 md:p-6">
        <h2
          id="cookie-consent-title"
          className="font-display text-[15px] font-semibold text-text md:text-lg"
        >
          Cookies et traceurs
        </h2>
        <p
          id="cookie-consent-desc"
          className="mt-1.5 text-[13px] leading-relaxed text-text-muted sm:mt-3 sm:text-sm"
        >
          Le site utilise des cookies nécessaires à son fonctionnement et, avec
          ton accord, des cookies de mesure d’audience. Tu peux changer d’avis
          à tout moment depuis le lien en bas de page.{" "}
          <Link
            href="/politique-cookies"
            className="text-brand-bright underline underline-offset-2 hover:text-accent-rose"
          >
            Politique cookies
          </Link>
          .
        </p>

        {showCustomize ? (
          <div className="mt-4 rounded-xl border border-border-subtle bg-card p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
              Personnaliser
            </p>
            <ul className="mt-3 space-y-3 text-sm text-text-soft">
              <li className="flex gap-3">
                <input
                  id="cookie-essential"
                  type="checkbox"
                  checked
                  disabled
                  className="mt-1 h-4 w-4 rounded border-border-subtle"
                />
                <label htmlFor="cookie-essential">
                  <span className="font-medium text-text">Nécessaires</span>
                  <span className="mt-0.5 block text-text-muted">
                    Mémorisation de tes préférences de consentement, sécurité et
                    charge du site. Toujours actifs.
                  </span>
                </label>
              </li>
              <li className="flex gap-3">
                <input
                  id="cookie-analytics"
                  type="checkbox"
                  checked={analyticsOptIn}
                  onChange={(e) => setAnalyticsOptIn(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-border-subtle accent-brand"
                />
                <label htmlFor="cookie-analytics">
                  <span className="font-medium text-text">Mesure d’audience</span>
                  <span className="mt-0.5 block text-text-muted">
                    Statistiques de fréquentation anonymisées lorsque nous en
                    déployons. Refusées par défaut.
                  </span>
                </label>
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => close(analyticsOptIn)}
                className="min-h-11 rounded-full bg-brand px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-bright"
              >
                Enregistrer mes choix
              </button>
              <button
                type="button"
                onClick={() => setShowCustomize(false)}
                className="min-h-11 rounded-full border border-border-subtle px-4 py-2 text-sm text-text-soft transition hover:border-brand/40 hover:text-text"
              >
                Retour
              </button>
            </div>
          </div>
        ) : null}

        {!showCustomize ? (
          <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-5 sm:flex sm:flex-wrap sm:items-center sm:justify-end">
            <button
              type="button"
              onClick={() => close(false)}
              className="order-1 min-h-11 rounded-full border border-border-subtle px-4 text-sm font-medium text-text-soft transition hover:border-brand/40 hover:text-text"
            >
              Refuser
            </button>
            <button
              type="button"
              onClick={() => {
                setShowCustomize(true);
                setAnalyticsOptIn(false);
              }}
              className="order-3 col-span-2 min-h-11 rounded-full px-4 text-sm font-medium text-text-muted underline decoration-white/25 underline-offset-[3px] transition hover:text-text sm:order-2 sm:border sm:border-border-subtle sm:text-text-soft sm:no-underline sm:hover:border-brand/40"
            >
              Personnaliser
            </button>
            <button
              type="button"
              onClick={() => close(true)}
              className="order-2 min-h-11 rounded-full bg-brand px-4 text-sm font-medium text-white transition hover:bg-brand-bright sm:order-3"
            >
              Accepter
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
