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
      className="fixed inset-x-0 bottom-0 z-[100] p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-border-subtle bg-bg-secondary/95 p-5 shadow-[0_-8px_40px_-12px_rgba(0,0,0,0.65)] backdrop-blur-md md:p-6">
        <h2
          id="cookie-consent-title"
          className="font-display text-base font-semibold text-text md:text-lg"
        >
          Cookies et traceurs
        </h2>
        <p
          id="cookie-consent-desc"
          className="mt-3 text-sm leading-relaxed text-text-muted"
        >
          Nous utilisons des cookies strictement nécessaires au fonctionnement du
          site et, avec votre accord, des cookies pour mesurer l’audience. Vous
          pouvez accepter, refuser les cookies non essentiels ou personnaliser
          votre choix. Vous pouvez modifier votre décision à tout moment via le
          lien en bas de page.{" "}
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
                    Mémorisation de vos préférences de consentement, sécurité et
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
                className="rounded-full bg-brand px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-bright"
              >
                Enregistrer mes choix
              </button>
              <button
                type="button"
                onClick={() => setShowCustomize(false)}
                className="rounded-full border border-border-subtle px-4 py-2 text-sm text-text-soft transition hover:border-brand/40 hover:text-text"
              >
                Retour
              </button>
            </div>
          </div>
        ) : null}

        {!showCustomize ? (
          <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end">
            <button
              type="button"
              onClick={() => close(false)}
              className="order-2 rounded-full border border-border-subtle px-4 py-2.5 text-sm font-medium text-text-soft transition hover:border-brand/40 hover:text-text sm:order-1"
            >
              Refuser les cookies non essentiels
            </button>
            <button
              type="button"
              onClick={() => {
                setShowCustomize(true);
                setAnalyticsOptIn(false);
              }}
              className="order-3 rounded-full border border-border-subtle px-4 py-2.5 text-sm font-medium text-text-soft transition hover:border-brand/40 hover:text-text sm:order-2"
            >
              Personnaliser
            </button>
            <button
              type="button"
              onClick={() => close(true)}
              className="order-1 rounded-full bg-brand px-4 py-2.5 text-sm font-medium text-white transition hover:bg-brand-bright sm:order-3"
            >
              Tout accepter
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
