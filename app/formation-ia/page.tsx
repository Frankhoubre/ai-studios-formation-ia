import { redirect } from "next/navigation";
import { FORMATION_FREE_URL } from "@/lib/constants";

export default function FormationIaPage() {
  redirect(FORMATION_FREE_URL);
}
