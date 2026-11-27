export const COOKIE_CONSENT_STORAGE_KEY = "ai-studios-cookie-consent";
export const COOKIE_CONSENT_VERSION = 1;

export const COOKIE_CONSENT_UPDATED_EVENT = "ai-studios:cookie-consent-updated";
export const COOKIE_CONSENT_RESET_EVENT = "ai-studios:cookie-consent-reset";

export type StoredCookieConsent = {
  v: number;
  /** Cookies de mesure d’audience et statistiques (non essentiels) */
  analytics: boolean;
  at: string;
};

export function parseStoredConsent(raw: string | null): StoredCookieConsent | null {
  if (!raw) return null;
  try {
    const data = JSON.parse(raw) as Partial<StoredCookieConsent>;
    if (data.v !== COOKIE_CONSENT_VERSION) return null;
    if (typeof data.analytics !== "boolean") return null;
    if (typeof data.at !== "string") return null;
    return data as StoredCookieConsent;
  } catch {
    return null;
  }
}

export function readStoredConsent(): StoredCookieConsent | null {
  if (typeof window === "undefined") return null;
  return parseStoredConsent(localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY));
}

export function writeConsent(analytics: boolean): void {
  const payload: StoredCookieConsent = {
    v: COOKIE_CONSENT_VERSION,
    analytics,
    at: new Date().toISOString(),
  };
  localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(payload));
  window.dispatchEvent(
    new CustomEvent<{ analytics: boolean }>(COOKIE_CONSENT_UPDATED_EVENT, {
      detail: { analytics },
    }),
  );
}

export function clearStoredConsent(): void {
  localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY);
}

/** null = l’utilisateur n’a pas encore tranché */
export function getAnalyticsConsent(): boolean | null {
  const s = readStoredConsent();
  if (!s) return null;
  return s.analytics;
}
