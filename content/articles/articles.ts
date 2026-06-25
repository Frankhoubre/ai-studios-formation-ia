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
import { visuelsPublicitairesIaConvertissent } from "@/content/articles/posts/visuels-publicitaires-ia-convertissent";
import { creerLogoIaMethodeOutils } from "@/content/articles/posts/creer-logo-ia-methode-outils";
import { avatarsIaUgcPresentateurVirtuel } from "@/content/articles/posts/avatars-ia-ugc-presentateur-virtuel";
import { mockupsProduitIa } from "@/content/articles/posts/mockups-produit-ia";
import { lipSyncIaFaireParlerPersonnage } from "@/content/articles/posts/lip-sync-ia-faire-parler-personnage";
import { sousTitresAutomatiquesIaVideo } from "@/content/articles/posts/sous-titres-automatiques-ia-video";
import { leonardoAiImagesAssets } from "@/content/articles/posts/leonardo-ai-images-assets";
import { ideogramTexteLisibleImagesIa } from "@/content/articles/posts/ideogram-texte-lisible-images-ia";
import { pikaLumaAlternativesVideoIa } from "@/content/articles/posts/pika-luma-alternatives-video-ia";
import { genererModeles3dIa } from "@/content/articles/posts/generer-modeles-3d-ia";
import { inpaintingIaRetoucherImage } from "@/content/articles/posts/inpainting-ia-retoucher-image";
import { hailuoWanSeedanceVideoIa } from "@/content/articles/posts/hailuo-wan-seedance-video-ia";
import { recraftDesignVectorielIcones } from "@/content/articles/posts/recraft-design-vectoriel-icones";
import { kreaAiTempsReelUpscale } from "@/content/articles/posts/krea-ai-temps-reel-upscale";
import { magnificUpscalersIaAgrandirImage } from "@/content/articles/posts/magnific-upscalers-ia-agrandir-image";
import { doublageTraductionVideoIa } from "@/content/articles/posts/doublage-traduction-video-ia";
import { clipMusicalIa } from "@/content/articles/posts/clip-musical-ia";
import { visuelsReseauxSociauxIaMois } from "@/content/articles/posts/visuels-reseaux-sociaux-ia-mois";
import { portraitsIaPhotoProfilLinkedin } from "@/content/articles/posts/portraits-ia-photo-profil-linkedin";
import { photosProduitIaShooting } from "@/content/articles/posts/photos-produit-ia-shooting";
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
import { changerStyleImageIa } from "@/content/articles/posts/changer-style-image-ia";
import { detourerSupprimerFondIa } from "@/content/articles/posts/detourer-supprimer-fond-ia";
import { restaurerColoriserPhotoIa } from "@/content/articles/posts/restaurer-coloriser-photo-ia";
import { upscaleVideoIa } from "@/content/articles/posts/upscale-video-ia";
import { controlnetPosesControlerComposition } from "@/content/articles/posts/controlnet-poses-controler-composition";
import { seedCfgStepsReglagesImageIa } from "@/content/articles/posts/seed-cfg-steps-reglages-image-ia";
import { loraEntrainerStyleVisage } from "@/content/articles/posts/lora-entrainer-style-visage";
import { ponderationPromptPoidsMots } from "@/content/articles/posts/ponderation-prompt-poids-mots";
import { promptMidjourneyParametres } from "@/content/articles/posts/prompt-midjourney-parametres";
import { banqueStylesVisuelsIa } from "@/content/articles/posts/banque-styles-visuels-ia";
import { gagnerArgentIaCreativeModeles } from "@/content/articles/posts/gagner-argent-ia-creative-modeles";
import { devenirFreelanceCreationIa } from "@/content/articles/posts/devenir-freelance-creation-ia";
import { fixerPrixCreationIaGrille } from "@/content/articles/posts/fixer-prix-creation-ia-grille";
import { trouverPremiersClientsCreationIa } from "@/content/articles/posts/trouver-premiers-clients-creation-ia";
import { automatiserProductionContenuIa } from "@/content/articles/posts/automatiser-production-contenu-ia";
import { batchProduireVisuelsCoherentsSerie } from "@/content/articles/posts/batch-produire-visuels-coherents-serie";
import { detecterImageGenereeIa } from "@/content/articles/posts/detecter-image-generee-ia";
import { universVisuelMarqueIa } from "@/content/articles/posts/univers-visuel-marque-ia";
import { midjourneyV81MiseAJour } from "@/content/articles/posts/midjourney-v8-1-mise-a-jour";
import { runwaySeedance2FastAleph2 } from "@/content/articles/posts/runway-seedance-2-fast-aleph-2";
import { comfyuiWorkflowNodalDebutant } from "@/content/articles/posts/comfyui-workflow-nodal-debutant";
import { screenweaverScenarioStoryboardIa } from "@/content/articles/posts/screenweaver-scenario-storyboard-ia";
import { ecrireScenarioIaMethodeOutils } from "@/content/articles/posts/ecrire-scenario-ia-methode-outils";
import { adobeFireflyAndroidImagenVeo } from "@/content/articles/posts/adobe-firefly-android-imagen-veo";
import { krea2Images2Secondes } from "@/content/articles/posts/krea-2-images-2-secondes";
import { imageToVideoIaMethode } from "@/content/articles/posts/image-to-video-ia-methode";
import { higgsfieldCreativeOsJuin2026 } from "@/content/articles/posts/higgsfield-creative-os-juin-2026";
import { elevenlabsMusicV2StableAudioSuno } from "@/content/articles/posts/elevenlabs-music-v2-stable-audio-suno";
import { focaleObjectifPromptIa } from "@/content/articles/posts/focale-objectif-prompt-ia";
import { lumaRay32ControleVideoIa } from "@/content/articles/posts/luma-ray-3-2-controle-video-ia";
import { lumaSkillsWorkflowReutilisable } from "@/content/articles/posts/luma-skills-workflow-reutilisable";
import { glossaireIaCreativeTermes } from "@/content/articles/posts/glossaire-ia-creative-termes";
import { kling3TurboOmniJuin2026 } from "@/content/articles/posts/kling-3-turbo-omni-juin-2026";
import { combienCouteIaCreativeMois } from "@/content/articles/posts/combien-coute-ia-creative-mois";
import { grokImagineVideo15Juin2026 } from "@/content/articles/posts/grok-imagine-video-1-5-juin-2026";
import { minimaxHubCreationVideoIa } from "@/content/articles/posts/minimax-hub-creation-video-ia";
import { monterVideoIaCapcutDavinci } from "@/content/articles/posts/monter-video-ia-capcut-davinci";

const beginnerArticles = JSON.parse(
  fs.readFileSync(
    path.join(process.cwd(), "content/articles/beginner-articles.json"),
    "utf8",
  ),
) as Article[];

export const articles: Article[] = [
  ...beginnerArticles,
  kling3TurboOmniJuin2026,
  combienCouteIaCreativeMois,
  higgsfieldCreativeOsJuin2026,
  elevenlabsMusicV2StableAudioSuno,
  focaleObjectifPromptIa,
  screenweaverScenarioStoryboardIa,
  ecrireScenarioIaMethodeOutils,
  adobeFireflyAndroidImagenVeo,
  krea2Images2Secondes,
  imageToVideoIaMethode,
  lumaRay32ControleVideoIa,
  lumaSkillsWorkflowReutilisable,
  glossaireIaCreativeTermes,
  midjourneyV81MiseAJour,
  runwaySeedance2FastAleph2,
  comfyuiWorkflowNodalDebutant,
  detecterImageGenereeIa,
  universVisuelMarqueIa,
  automatiserProductionContenuIa,
  batchProduireVisuelsCoherentsSerie,
  fixerPrixCreationIaGrille,
  trouverPremiersClientsCreationIa,
  gagnerArgentIaCreativeModeles,
  devenirFreelanceCreationIa,
  promptMidjourneyParametres,
  banqueStylesVisuelsIa,
  loraEntrainerStyleVisage,
  ponderationPromptPoidsMots,
  controlnetPosesControlerComposition,
  seedCfgStepsReglagesImageIa,
  restaurerColoriserPhotoIa,
  upscaleVideoIa,
  changerStyleImageIa,
  detourerSupprimerFondIa,
  genererModeles3dIa,
  inpaintingIaRetoucherImage,
  pikaLumaAlternativesVideoIa,
  hailuoWanSeedanceVideoIa,
  ideogramTexteLisibleImagesIa,
  recraftDesignVectorielIcones,
  leonardoAiImagesAssets,
  kreaAiTempsReelUpscale,
  sousTitresAutomatiquesIaVideo,
  magnificUpscalersIaAgrandirImage,
  lipSyncIaFaireParlerPersonnage,
  doublageTraductionVideoIa,
  mockupsProduitIa,
  clipMusicalIa,
  avatarsIaUgcPresentateurVirtuel,
  visuelsReseauxSociauxIaMois,
  creerLogoIaMethodeOutils,
  portraitsIaPhotoProfilLinkedin,
  visuelsPublicitairesIaConvertissent,
  photosProduitIaShooting,
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
  grokImagineVideo15Juin2026,
  minimaxHubCreationVideoIa,
  monterVideoIaCapcutDavinci,
];
