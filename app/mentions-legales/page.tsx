import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import {
  AUTHOR_NAME,
  MAIN_SITE_URL,
  ORG_NAME,
  SITE_URL,
} from "@/lib/constants";
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildMetadata,
  noIndexFollowRobots,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Mentions légales",
  description:
    "Mentions légales du blog AI Studios : éditeur, directeur de la publication, hébergeur et propriété intellectuelle.",
  path: "/mentions-legales",
  robots: noIndexFollowRobots(),
  appendCta: false,
});

export default function MentionsLegalesPage() {
  const breadcrumbLd = buildBreadcrumbJsonLd([
    { name: "Accueil", url: absoluteUrl("/") },
    { name: "Mentions légales", url: absoluteUrl("/mentions-legales") },
  ]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
      <SEOJsonLd data={breadcrumbLd} />
      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/" },
          { label: "Mentions légales" },
        ]}
      />
      <h1 className="font-display mt-8 text-4xl font-semibold tracking-tight text-text md:text-5xl">
        Mentions légales
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-text-soft">
        Conformément aux articles 6-III et 19 de la loi n° 2004-575 du 21 juin
        2004 pour la confiance dans l’économie numérique (LCEN), les présentes
        mentions légales s’appliquent au site{" "}
        <strong className="font-medium text-text">blog.ai-studios.fr</strong>.
      </p>

      <h2 className="mt-12 font-display text-2xl font-semibold text-text">
        Éditeur du site
      </h2>
      <p className="mt-4 text-text-muted leading-relaxed">
        Le site est édité par la société{" "}
        <strong className="font-medium text-text">BUSINESSDYNAMITE</strong>,
        qui exploite la marque {ORG_NAME}.
        <br />
        Forme juridique : Société par actions simplifiée (SAS).
        <br />
        SIREN : 840 854 129 — SIRET (siège social) : 840 854 129 00011.
        <br />
        Numéro de TVA intracommunautaire : FR90 840 854 129.
        <br />
        Code APE / NAF : 8559B (Autres enseignements).
        <br />
        Siège social : ZAC Les Terrasses de la Sarre, Pépinière Synergie 4,
        57400 Sarrebourg, France.
        <br />
        Contact :{" "}
        <a
          href="mailto:hello@businessdynamite.xyz"
          className="text-brand-bright underline underline-offset-2 hover:text-accent-rose"
        >
          hello@businessdynamite.xyz
        </a>
        .
      </p>

      <h2 className="mt-10 font-display text-2xl font-semibold text-text">
        Directeur de la publication
      </h2>
      <p className="mt-4 text-text-muted leading-relaxed">
        {AUTHOR_NAME}, en qualité de représentant légal de la société
        BUSINESSDYNAMITE.
      </p>

      <h2 className="mt-10 font-display text-2xl font-semibold text-text">
        Hébergeur
      </h2>
      <p className="mt-4 text-text-muted leading-relaxed">
        Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA
        91789, États-Unis —{" "}
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-bright underline underline-offset-2 hover:text-accent-rose"
        >
          vercel.com
        </a>
        .
      </p>

      <h2 className="mt-10 font-display text-2xl font-semibold text-text">
        Propriété intellectuelle
      </h2>
      <p className="mt-4 text-text-muted leading-relaxed">
        L’ensemble des contenus présents sur ce blog (textes, guides, visuels,
        identité graphique) est protégé par le droit d’auteur et reste la
        propriété de la société BUSINESSDYNAMITE ({ORG_NAME}), sauf mention
        contraire. Toute reproduction ou
        réutilisation, totale ou partielle, sans autorisation préalable est
        interdite. Les marques, logos et liens vers des outils tiers cités
        restent la propriété de leurs détenteurs respectifs.
      </p>

      <h2 className="mt-10 font-display text-2xl font-semibold text-text">
        Données personnelles et cookies
      </h2>
      <p className="mt-4 text-text-muted leading-relaxed">
        Les modalités de gestion des cookies et de vos données sont détaillées
        dans notre{" "}
        <Link
          href="/politique-cookies"
          className="text-brand-bright underline underline-offset-2 hover:text-accent-rose"
        >
          politique cookies
        </Link>
        .
      </p>

      <h2 className="mt-10 font-display text-2xl font-semibold text-text">
        Liens et responsabilité
      </h2>
      <p className="mt-4 text-text-muted leading-relaxed">
        Ce blog peut contenir des liens vers des sites externes (formation,
        communauté, outils). {ORG_NAME} n’exerce aucun contrôle sur ces
        ressources et décline toute responsabilité quant à leur contenu. Pour en
        savoir plus sur le projet, consultez le{" "}
        <a
          href={MAIN_SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-bright underline underline-offset-2 hover:text-accent-rose"
        >
          site principal AI Studios
        </a>
        .
      </p>

      <p className="mt-8 text-sm text-text-muted">
        <Link href={SITE_URL} className="text-brand-bright hover:text-accent-rose">
          Retour à l’accueil
        </Link>
      </p>
    </div>
  );
}
