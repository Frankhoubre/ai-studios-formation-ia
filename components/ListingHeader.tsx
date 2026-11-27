import type { ReactNode } from "react";

/** En-tête commun des pages de liste : sur-titre, H1, chapô. */
export function ListingHeader({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  children?: ReactNode;
}) {
  return (
    <header className="mt-5 max-w-3xl md:mt-8">
      <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-bright">
        {eyebrow}
      </p>
      <h1 className="font-display mt-3 text-4xl font-semibold leading-[1.05] tracking-tight text-text md:text-6xl">
        {title}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-text-soft md:mt-5 md:text-xl md:leading-relaxed">
        {lead}
      </p>
      {children}
    </header>
  );
}
