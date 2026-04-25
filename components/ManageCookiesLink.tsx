"use client";

import {
  COOKIE_CONSENT_RESET_EVENT,
  clearStoredConsent,
} from "@/lib/cookie-consent";

export function ManageCookiesLink() {
  return (
    <button
      type="button"
      onClick={() => {
        clearStoredConsent();
        window.dispatchEvent(new Event(COOKIE_CONSENT_RESET_EVENT));
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="transition hover:text-brand-bright"
    >
      Gérer les cookies
    </button>
  );
}
