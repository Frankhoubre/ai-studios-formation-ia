# seo-content-map.md — Carte SEO anti-cannibalisation

Source de vérité pour l'attribution des mots-clés. À consulter AVANT de créer ou
d'optimiser un article (en complément de `CONTENT_LEDGER.md`, qui liste l'inventaire).
Créée le 2026-07-09 à partir de l'export GSC et de l'audit du corpus (146 articles :
116 modules TS + 30 articles débutant dans `beginner-articles.json`).

## Règles de maillage (permanentes)

1. Chaque satellite fait **1 lien vers sa page pilier** (ancre exacte ou proche du KW pilier).
2. Chaque pilier liste ses satellites (les 3 piliers actuels le font déjà, maintenir à jour).
3. Les pages qui rankent déjà (ComfyUI, prompt négatif, lumière prompt) servent de
   **donneurs de liens** vers les pages business (formation-ia-video, /formation-ia).
4. Un article news lie toujours vers l'evergreen du même outil (et inversement à la
   prochaine mise à jour de l'evergreen).
5. Jamais deux articles avec le même mot-clé principal. En cas de doute : changer
   l'angle, fusionner, ou skip.

## Piliers et mots-clés réservés

| Page pilier | KW réservés (personne d'autre ne les cible) | Satellites principaux |
|---|---|---|
| `/blog/video-ia-guide-complet` | créer une vidéo avec l'IA, vidéo IA, générer une vidéo IA | tous les articles ia-video |
| `/blog/image-ia-guide-complet` | générer une image IA, image IA, créer une image avec l'IA | tous les articles ia-image |
| `/blog/prompt-ia-guide-complet` | prompt IA, écrire un prompt, prompt engineering créatif | tous les articles prompting |
| `/blog/formation-ia-video` | formation IA vidéo, apprendre la vidéo IA | apprendre-ia-creative (à créer), page /formation-ia |
| `/formation-ia` (page conversion) | formation IA gratuite (intention transactionnelle) | ne PAS créer d'article sur ce KW exact |
| `/blog/meilleurs-outils-ia-video` | outils IA vidéo, meilleur générateur vidéo IA, générateur vidéo IA | guides outils individuels |
| `/blog/meilleurs-generateurs-images-ia-2026` | meilleur générateur d'images IA, ia pour créer des images | guides outils image |
| `/blog/gagner-argent-ia-creative-modeles` | gagner de l'argent avec l'IA créative | freelance, prix, clients, agence (à créer) |
| `/blog/creer-film-ia` | créer un film avec l'IA, cinéma IA | court-métrage, trailer, festivals, VFX |
| `/blog/personnage-coherent-ia` | personnage cohérent IA | stabilité multi-plans, LoRA visage, influenceur virtuel (à créer) |

## Clusters et attribution des mots-clés

### Cluster Vidéo IA gratuite
- `creer-video-ia-gratuit` = **méthode** ("créer une vidéo IA gratuitement", "vidéo IA sans payer")
- `meilleurs-sites-video-ia-gratuits` = **comparatif de sites** ("meilleure IA vidéo gratuite", "sites vidéo IA gratuits")
- `film-ia-gratuit-court-metrage` = cas d'usage court-métrage
- Interdit : un 3e article "outil vidéo IA gratuit" générique.

### Cluster outils vidéo (1 guide evergreen par outil + news datées)
Runway (`runway-guide-video-ia`), Kling (`kling-ai-videos-cinematiques`), Veo
(`veo-3-generer-videos-ia`), Sora (`sora-openai-creer-videos`), Pika+Luma
(`pika-luma-alternatives-video-ia`), Hailuo/Wan/Seedance (`hailuo-wan-seedance-video-ia`).
Les news (Seedance 2.5, Kling 3.0, Grok 1.5, Higgsfield…) ciblent le KW versionné
("kling 3.0 turbo"), jamais le KW de marque nu, réservé au guide evergreen.

### Cluster outils image
Midjourney (`midjourney-debutant-premiere-image` = débutant, `prompt-midjourney-parametres` =
paramètres, `midjourney-vs-flux-vs-dalle` = comparatif), DALL·E (`dalle-chatgpt-creer-images`),
Imagen/Nano Banana (`google-imagen-nano-banana-photorealisme`), SD (`stable-diffusion-debutant-demarrer`),
ComfyUI (`comfyui-workflow-nodal-debutant` : "comfyui", "comfyui workflow"), Krea, Leonardo,
Ideogram (x2 : typo affiche vs texte lisible), Recraft, Flux (`flux-lora-publicite-locale` =
LoRA pub locale ; un guide Flux générique reste possible, angle "guide complet du modèle").

### Cluster prompting
Structure (`prompt-structure-4-blocs-ia`), négatif (`prompt-negatif-ia-images-propres`),
lumière (`decrire-lumiere-prompt-ia`), focale (`focale-objectif-prompt-ia`), pondération
(`ponderation-prompt-poids-mots`), cinéma (`prompt-image-ia-cinema`), bibliothèque
(`bibliotheque-prompts-reutilisables`), réglages (`seed-cfg-steps-reglages-image-ia`),
ControlNet (`controlnet-poses-controler-composition`).
**Trou à combler : les prompts VIDÉO** (aucun article ne cible "prompt vidéo IA").

### Cluster business créatif
- Modèles de revenus : `gagner-argent-ia-creative-modeles` (pilier)
- Freelance : `devenir-freelance-creation-ia` · Prix : `fixer-prix-creation-ia-grille`
- Clients : `trouver-premiers-clients-creation-ia` · Portfolio : `portfolio-creations-ia-qui-convertit`
- Coûts : `combien-coute-ia-creative-mois` (générique) vs `budget-rendu-temps-cout-ia`
  (chiffrer une prod) vs `cout-premier-mois-ia-image-video` (JSON, débutant)
- Photo produit : `photos-produit-ia-shooting` · Logo : `creer-logo-ia-methode-outils`
  ("comment créer un logo avec ia") · Pub : `creer-publicite-ia` (workflow) vs
  `visuels-publicitaires-ia-convertissent` (visuels statiques)
- **Trou : "agence vidéo IA"** (requête GSC pos 49, aucune page dédiée).

### Cluster débutant (30 articles JSON)
KW réservés aux articles `beginner-articles.json` : glossaire débutant, formats,
résolution, fps, moodboard, miniature YouTube débutant, visuel Instagram, reel
compréhensible, checklists qualité, prompts qui ne marchent pas, prompt court/long,
images de référence, fiche style, ambiance cohérente, cadrages, mouvements caméra,
micro-scène, avant/après, organisation fichiers, coût premier mois, droits d'auteur
débutant, vendre ses créations (précautions), plan 30 jours.
Ne pas recréer ces sujets en module TS sans fusionner/rediriger.

## Articles à NE PAS créer (trop proches de l'existant)

- "Les meilleurs outils vidéo IA gratuits" (= meilleurs-sites-video-ia-gratuits)
- "Comment écrire un bon prompt" générique (= prompt-ia-guide-complet)
- "Midjourney : le guide" (= midjourney-debutant + prompt-midjourney-parametres)
- "Créer des visuels pour Instagram" (= creer-visuel-instagram JSON + visuels-reseaux-sociaux-ia-mois)
- "Combien coûte une vidéo IA" (= combien-coute-ia-creative-mois + budget-rendu-temps)
- "Formation IA gratuite" en article (= page /formation-ia, intention transactionnelle)
- "Générateur vidéo IA" en article dédié (= meilleurs-outils-ia-video, renforcer celui-ci)

## Fusions / différenciations à surveiller

- `combien-coute-ia-creative-mois` vs `cout-premier-mois-ia-image-video` (JSON) : proches.
  Si les deux se cannibalisent en GSC dans 2 mois → fusionner dans le premier.
- `video-courte-ia-tiktok-reels-shorts` restera le générique "vidéo courte" ; les futurs
  articles TikTok/Shorts ciblent des sous-intentions (viralité, découpe de longue, pub TikTok).
- `avatars-ia-ugc-presentateur-virtuel` = l'outil/le comment ; le futur "UGC IA pour les
  marques" = le business (offre, prix, clients). Les lier mutuellement.
