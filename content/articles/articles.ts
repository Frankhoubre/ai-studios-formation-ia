import type { Article } from "@/lib/types/article";
import { formationIaVideo } from "@/content/articles/posts/formation-ia-video";
import { promptImageIaCinema } from "@/content/articles/posts/prompt-image-ia-cinema";
import { videosIaJoliesMaisVides } from "@/content/articles/posts/videos-ia-jolies-mais-vides";
import { creerStoryboardIa } from "@/content/articles/posts/creer-storyboard-ia";
import { iaImageRealiste } from "@/content/articles/posts/ia-image-realiste";
import { creerPubliciteIa } from "@/content/articles/posts/creer-publicite-ia";
import { meilleursOutilsIaVideo } from "@/content/articles/posts/meilleurs-outils-ia-video";
import { personnageCoherentIa } from "@/content/articles/posts/personnage-coherent-ia";
import { workflowIaCreatif } from "@/content/articles/posts/workflow-ia-creatif";
import { creerFilmIa } from "@/content/articles/posts/creer-film-ia";
import { fluxLoraPubliciteLocale } from "@/content/articles/posts/flux-lora-publicite-locale";
import { klingRunwayMontageAds } from "@/content/articles/posts/kling-runway-montage-ads";
import { sdxlEtalonnerPeauLumiere } from "@/content/articles/posts/sdxl-etalonner-peau-lumiere";
import { ideogramTypographieAfficheCinema } from "@/content/articles/posts/ideogram-typographie-affiche-cinema";
import { sunoMusiquePubCourte } from "@/content/articles/posts/suno-musique-pub-courte";
import { elevenlabsVoiceoverPub } from "@/content/articles/posts/elevenlabs-voiceover-pub";
import { storyboardShotlistNotionIa } from "@/content/articles/posts/storyboard-shotlist-notion-ia";
import { stabilitePersonnageMultiPlans } from "@/content/articles/posts/stabilite-personnage-multi-plans";
import { workflowClientBriefLivraisonIa } from "@/content/articles/posts/workflow-client-brief-livraison-ia";
import { budgetRenduTempsCoutIa } from "@/content/articles/posts/budget-rendu-temps-cout-ia";

export const articles: Article[] = [
  budgetRenduTempsCoutIa,
  workflowClientBriefLivraisonIa,
  stabilitePersonnageMultiPlans,
  storyboardShotlistNotionIa,
  elevenlabsVoiceoverPub,
  sunoMusiquePubCourte,
  ideogramTypographieAfficheCinema,
  sdxlEtalonnerPeauLumiere,
  klingRunwayMontageAds,
  fluxLoraPubliciteLocale,
  formationIaVideo,
  promptImageIaCinema,
  videosIaJoliesMaisVides,
  creerStoryboardIa,
  iaImageRealiste,
  creerPubliciteIa,
  meilleursOutilsIaVideo,
  personnageCoherentIa,
  workflowIaCreatif,
  creerFilmIa,
];
