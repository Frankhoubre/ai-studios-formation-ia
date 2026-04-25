import Link from "next/link";
import { ManageCookiesLink } from "@/components/ManageCookiesLink";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Politique cookies et traceurs",
  description:
    "Informations sur les cookies utilisés sur le blog AI Studios, vos choix et vos droits (RGPD).",
  path: "/politique-cookies",
});

export default function PolitiqueCookiesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
      <h1 className="font-display text-4xl font-semibold tracking-tight text-text md:text-5xl">
        Politique cookies
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-text-soft">
        Cette page décrit l’usage des cookies et traceurs sur{" "}
        <strong className="font-medium text-text">blog.ai-studios.fr</strong>, en
        conformité avec le règlement européen sur la protection des données
        (RGPD) et les recommandations de la CNIL.
      </p>

      <h2 className="mt-12 font-display text-2xl font-semibold text-text">
        Qu’est-ce qu’un cookie ?
      </h2>
      <p className="mt-4 text-text-muted leading-relaxed">
        Un cookie est un petit fichier déposé sur votre terminal lors de la visite
        d’un site. Il permet de reconnaître votre navigateur, de mémoriser des
        préférences ou, pour certains cookies, de mesurer l’audience.
      </p>

      <h2 className="mt-10 font-display text-2xl font-semibold text-text">
        Cookies utilisés sur ce blog
      </h2>
      <ul className="mt-4 list-disc space-y-3 pl-5 text-text-muted leading-relaxed">
        <li>
          <strong className="text-text-soft">Cookies strictement nécessaires</strong>{" "}
          : ils servent à enregistrer votre choix concernant les autres cookies
          (bandeau de consentement) et à assurer le bon fonctionnement technique
          du site. Ils ne peuvent pas être désactivés depuis notre bandeau, car
          sans eux le mécanisme de consentement ne pourrait pas fonctionner.
        </li>
        <li>
          <strong className="text-text-soft">Cookies de mesure d’audience</strong>{" "}
          : ils ne sont déposés que si vous les acceptez (bouton « Tout accepter »
          ou case cochée dans « Personnaliser »). À ce jour, le blog peut fonctionner
          sans déployer de solution d’analyse : si un outil de statistiques est
          ajouté ultérieurement, il ne sera chargé qu’après consentement explicite
          pour cette finalité.
        </li>
      </ul>

      <h2 className="mt-10 font-display text-2xl font-semibold text-text">
        Durée de conservation
      </h2>
      <p className="mt-4 text-text-muted leading-relaxed">
        Les informations relatives à votre consentement sont conservées dans votre
        navigateur (stockage local) pendant au plus douze mois, sauf si vous les
        effacez avant ou si nous devons vous redemander un choix suite à une
        évolution de notre politique (nouvelle version du bandeau).
      </p>

      <h2 className="mt-10 font-display text-2xl font-semibold text-text">
        Vos droits
      </h2>
      <p className="mt-4 text-text-muted leading-relaxed">
        Vous pouvez à tout moment retirer ou modifier votre consentement en
        cliquant sur « Gérer les cookies » dans le pied de page, ou en supprimant
        les données du site dans les paramètres de votre navigateur. Pour en
        savoir plus sur les cookies et les moyens de les contrôler, vous pouvez
        consulter le site de la{" "}
        <a
          href="https://www.cnil.fr/fr/cookies-et-autres-traceurs"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-bright underline underline-offset-2 hover:text-accent-rose"
        >
          CNIL
        </a>
        .
      </p>

      <p className="mt-8 text-sm text-text-muted">
        <ManageCookiesLink /> ·{" "}
        <Link href="/" className="text-brand-bright hover:text-accent-rose">
          Retour à l’accueil
        </Link>
      </p>
    </div>
  );
}
