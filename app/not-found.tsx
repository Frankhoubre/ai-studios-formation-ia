import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page introuvable | AI Studios Blog",
  description:
    "La page demandée n’existe pas sur AI Studios Blog. Retournez vers les guides IA créatifs.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center md:py-32">
      <p className="text-sm font-medium text-brand-bright">404</p>
      <h1 className="font-display mt-3 text-3xl font-semibold text-text">
        Page introuvable
      </h1>
      <p className="mt-4 text-text-muted">
        Le lien est peut être ancien, ou la page a bougé. Revenez au blog et
        reprenez depuis les guides récents.
      </p>
      <Link
        href="/blog"
        className="mt-8 inline-flex rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-bright"
      >
        Voir les articles
      </Link>
    </div>
  );
}
