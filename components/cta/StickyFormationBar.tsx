"use client";

import { useEffect, useState } from "react";
import { CtaLink } from "@/components/cta/CtaLink";
import { FORMATION_FREE_URL } from "@/lib/constants";

const DISMISS_KEY = "ais-sticky-cta-dismissed";

/**
 * Barre discrète en bas d'écran sur mobile et tablette. Elle n'arrive
 * qu'après un quart de l'article, se ferme d'un geste (mémorisé pour la
 * session) et s'efface dès que le bloc formation de fin d'article est visible.
 */
export function StickyFormationBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(DISMISS_KEY)) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setDismissed(true);
        return;
      }
    } catch {
      /* navigation privée : la barre reste simplement refermable */
    }

    let ctaInView = false;
    let frame = 0;

    function update() {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const ratio = scrollable > 0 ? doc.scrollTop / scrollable : 0;
      setVisible(ratio > 0.25 && !ctaInView);
    }
    function onScroll() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    }

    const targets = document.querySelectorAll(
      "[data-formation-cta], footer",
    );
    const inView = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) inView.add(entry.target);
        else inView.delete(entry.target);
      }
      ctaInView = inView.size > 0;
      update();
    });
    targets.forEach((el) => observer.observe(el));

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function dismiss() {
    setDismissed(true);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
  }

  if (dismissed) return null;

  return (
    <div
      role="complementary"
      aria-label="Formation gratuite"
      inert={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition duration-300 lg:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-xl items-center gap-2 rounded-2xl border border-brand/40 bg-bg-secondary/95 py-2 pl-4 pr-1 shadow-[0_-8px_40px_-12px_rgba(0,0,0,0.8)] backdrop-blur-md">
        <p className="min-w-0 flex-1 text-[13px] leading-snug text-text-soft">
          <span className="block font-semibold text-text">
            Formation IA gratuite
          </span>
          <span className="block truncate">De l’idée à la vidéo finale</span>
        </p>
        <CtaLink
          href={FORMATION_FREE_URL}
          placement="article-sticky"
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-brand to-brand-bright px-4 text-sm font-semibold text-white"
        >
          Y accéder
        </CtaLink>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Fermer"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-text-muted transition hover:text-text"
        >
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
