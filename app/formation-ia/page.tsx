import { permanentRedirect } from "next/navigation";
import { FORMATION_FREE_URL } from "@/lib/constants";
import { noIndexFollowRobots } from "@/lib/seo";

export const metadata = {
  alternates: { canonical: FORMATION_FREE_URL },
  robots: noIndexFollowRobots(),
};

export default function FormationIaPage() {
  permanentRedirect(FORMATION_FREE_URL);
}
