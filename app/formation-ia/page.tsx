import { permanentRedirect } from "next/navigation";
import { FORMATION_FREE_URL } from "@/lib/constants";
import { buildMetadata, noIndexFollowRobots } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Formation IA gratuite",
  description:
    "Redirection vers la formation gratuite AI Studios : workflow IA image et vidéo pour des rendus plus cinématiques.",
  path: "/formation-ia",
  canonical: FORMATION_FREE_URL,
  robots: noIndexFollowRobots(),
  appendCta: false,
});

export default function FormationIaPage() {
  permanentRedirect(FORMATION_FREE_URL);
}
