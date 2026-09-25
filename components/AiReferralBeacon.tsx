"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";
import { detectAiEngineFromWindow } from "@/lib/ai-traffic";

const SESSION_KEY = "ais-ai-referral";

/**
 * Une fois par session, si le visiteur arrive depuis un assistant IA :
 * evenement `ai_referral` envoye a Vercel Analytics avec le nom du moteur
 * et la page d'entree. Sans cookie, donc hors perimetre du bandeau.
 */
export function AiReferralBeacon() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
    } catch {
      /* navigation privee : on tente quand meme l'envoi */
    }
    const engine = detectAiEngineFromWindow();
    if (!engine) return;
    try {
      sessionStorage.setItem(SESSION_KEY, engine);
    } catch {
      /* ignore */
    }
    try {
      track("ai_referral", { engine, path: window.location.pathname });
    } catch {
      /* la mesure ne doit jamais casser la page */
    }
  }, []);
  return null;
}
