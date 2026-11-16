import { FormationCta } from "@/components/cta/FormationCta";

/** Bloc formation des pages hors article (accueil, à propos). */
export function CTASection({ placement = "page-end" }: { placement?: string }) {
  return (
    <FormationCta
      placement={placement}
      title="Tu veux aller plus loin que de simples prompts ?"
      text="La formation gratuite AI Studios montre comment je construis un vrai workflow image et vidéo avec l’IA, de l’idée à la vidéo finale."
    />
  );
}
