"use client";

import type { ReactNode } from "react";
import { track } from "@vercel/analytics";

export type CtaTarget = "formation" | "skool";

/**
 * Lien de CTA sortant. `rel="noopener"` sans `noreferrer` : le site d'arrivée
 * voit que le visiteur vient du blog. Chaque clic envoie un événement
 * `cta_click` (emplacement, cible, page) à Vercel Analytics, sans cookie.
 */
export function CtaLink({
  href,
  placement,
  target = "formation",
  className,
  children,
  ...rest
}: {
  href: string;
  /** Emplacement dans la page : "article-end", "sticky", "header"… */
  placement: string;
  target?: CtaTarget;
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
  "data-button"?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      data-cta={placement}
      className={className}
      onClick={() => {
        try {
          track("cta_click", {
            placement,
            target,
            path: window.location.pathname,
          });
        } catch {
          /* la mesure ne doit jamais bloquer le clic */
        }
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
