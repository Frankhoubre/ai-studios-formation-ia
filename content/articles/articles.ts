import type { Article } from "@/lib/types/article";
import fs from "node:fs";
import path from "node:path";
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
import { promptNegatifIaImagesPropres } from "@/content/articles/posts/prompt-negatif-ia-images-propres";
import { raccordContinuitePlansIa } from "@/content/articles/posts/raccord-continuite-plans-ia";
import { promptStructure4BlocsIa } from "@/content/articles/posts/prompt-structure-4-blocs-ia";
import { hook3SecondesVideoIa } from "@/content/articles/posts/hook-3-secondes-video-ia";
import { compositionCadrageImageIa } from "@/content/articles/posts/composition-cadrage-image-ia";
import { structure3ActesVideoIa } from "@/content/articles/posts/structure-3-actes-video-ia";
import { decrireLumierePromptIa } from "@/content/articles/posts/decrire-lumiere-prompt-ia";
import { portfolioCreationsIaQuiConvertit } from "@/content/articles/posts/portfolio-creations-ia-qui-convertit";
import { corrigerMainsYeuxDefautsAnatomiquesIa } from "@/content/articles/posts/corriger-mains-yeux-defauts-anatomiques-ia";
import { prolongerPlanIaAuDela5Secondes } from "@/content/articles/posts/prolonger-plan-ia-au-dela-5-secondes";
import { bibliothequePromptsReutilisables } from "@/content/articles/posts/bibliotheque-prompts-reutilisables";
import { genererImageIaGuideDebutant } from "@/content/articles/posts/generer-image-ia-guide-debutant";
import { meilleursGenerateursImagesIa2026 } from "@/content/articles/posts/meilleurs-generateurs-images-ia-2026";
import { dalleChatgptCreerImages } from "@/content/articles/posts/dalle-chatgpt-creer-images";
import { stableDiffusionDebutantDemarrer } from "@/content/articles/posts/stable-diffusion-debutant-demarrer";
import { creerVideoIaGratuit } from "@/content/articles/posts/creer-video-ia-gratuit";
import { veo3GenererVideosIa } from "@/content/articles/posts/veo-3-generer-videos-ia";
import { klingAiVideosCinematiques } from "@/content/articles/posts/kling-ai-videos-cinematiques";
import { videoCourteIaTiktokReelsShorts } from "@/content/articles/posts/video-courte-ia-tiktok-reels-shorts";
import { renduPelliculeGrainFilmIa } from "@/content/articles/posts/rendu-pellicule-grain-film-ia";
import { lumiereCinemaAmbiancesImagesIa } from "@/content/articles/posts/lumiere-cinema-ambiances-images-ia";
import { illustrationIaCreerPro } from "@/content/articles/posts/illustration-ia-creer-pro";
import { imagesAbstraitesIa } from "@/content/articles/posts/images-abstraites-ia";
import { illustrationCinemaConceptArtIa } from "@/content/articles/posts/illustration-cinema-concept-art-ia";
import { imagesCinemaIaSceneFilm } from "@/content/articles/posts/images-cinema-ia-scene-film";
import { filmIaGratuitCourtMetrage } from "@/content/articles/posts/film-ia-gratuit-court-metrage";
import { runwayGuideVideoIa } from "@/content/articles/posts/runway-guide-video-ia";
import { soraOpenaiCreerVideos } from "@/content/articles/posts/sora-openai-creer-videos";
import { meilleursSitesVideoIaGratuits } from "@/content/articles/posts/meilleurs-sites-video-ia-gratuits";
import { midjourneyVsFluxVsDalle } from "@/content/articles/posts/midjourney-vs-flux-vs-dalle";
import { googleImagenNanoBananaPhotorealisme } from "@/content/articles/posts/google-imagen-nano-banana-photorealisme";
import { midjourneyDebutantPremiereImage } from "@/content/articles/posts/midjourney-debutant-premiere-image";
import { creerImagesIaGratuitOutils } from "@/content/articles/posts/creer-images-ia-gratuit-outils";

const beginnerArticles = JSON.parse(
  fs.readFileSync(
    path.join(process.cwd(), "content/articles/beginner-articles.json"),
    "utf8",
  ),
) as Article[];

export const articles: Article[] = [
  ...beginnerArticles,
  illustrationIaCreerPro,
  imagesAbstraitesIa,
  lumiereCinemaAmbiancesImagesIa,
  illustrationCinemaConceptArtIa,
  renduPelliculeGrainFilmIa,
  imagesCinemaIaSceneFilm,
  videoCourteIaTiktokReelsShorts,
  filmIaGratuitCourtMetrage,
  klingAiVideosCinematiques,
  runwayGuideVideoIa,
  veo3GenererVideosIa,
  soraOpenaiCreerVideos,
  creerVideoIaGratuit,
  meilleursSitesVideoIaGratuits,
  stableDiffusionDebutantDemarrer,
  midjourneyVsFluxVsDalle,
  dalleChatgptCreerImages,
  googleImagenNanoBananaPhotorealisme,
  meilleursGenerateursImagesIa2026,
  midjourneyDebutantPremiereImage,
  genererImageIaGuideDebutant,
  creerImagesIaGratuitOutils,
  bibliothequePromptsReutilisables,
  prolongerPlanIaAuDela5Secondes,
  corrigerMainsYeuxDefautsAnatomiquesIa,
  portfolioCreationsIaQuiConvertit,
  decrireLumierePromptIa,
  structure3ActesVideoIa,
  compositionCadrageImageIa,
  hook3SecondesVideoIa,
  promptStructure4BlocsIa,
  raccordContinuitePlansIa,
  promptNegatifIaImagesPropres,
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
