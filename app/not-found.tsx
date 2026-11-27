import Link from "next/link";
import { buildMetadata, noIndexFollowRobots } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Page introuvable (404)",
  description:
    "Cette page n’existe plus sur AI Studios Blog. Retrouvez nos guides IA image, vidéo et cinéma sur le blog.",
  path: "/404",
  robots: noIndexFollowRobots(),
  appendCta: false,
});

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center md:px-6">
      <p className="text-sm font-medium uppercase tracking-wider text-brand-bright">
        Erreur 404
      </p>
      <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight text-text md:text-5xl">
        Page introuvable
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-text-soft">
        Cette page n’existe pas ou n’est plus disponible. Le blog reste le
        meilleur point de départ pour retrouver les guides IA créative.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link
          href="/blog"
          className="inline-flex justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-bright"
        >
          Voir le blog
        </Link>
        <Link
          href="/"
          className="inline-flex justify-center rounded-full border border-border-subtle px-6 py-3 text-sm font-semibold text-text transition hover:border-brand/40"
        >
          Retour à l’accueil
        </Link>
      </div>
    </div>
  );
}
