# RUN_30J.md : run 30 jours d'articles quotidiens

Run 30 jours démarré le **2026-07-20** (J1 lancé manuellement). Objectif : 1 article
par jour, sujets J1 à J30 de `.loop_memory/seo-90-day-plan.md` (Phase 1 :
opportunités GSC + intentions commerciales). Publication automatisée ensuite via la
tâche planifiée `daily-article-ai-studios` à **08:53** (Europe/Paris).

**Hero image (depuis le 2026-08-17)** : `node scripts/generate-hero-nb2.mjs --prompt "..."
--out public/images/articles/<slug>.webp`, modèle **Nano Banana 2**
(`google/gemini-3-pro-image`) via le **Vercel AI Gateway** (https://ai-gateway.vercel.sh,
clé `AI_GATEWAY_API_KEY` dans `.env.local`, git-ignoré). **Higgsfield MCP ne doit plus
être utilisé** pour les heroes (utilisé pour J1 à J5, 2026-07-20 → 2026-08-03, avant ce
changement).

**Plafond du run porté à 36 articles** (les lignes de log antérieures au 2026-08-19
affichent l'ancien plafond X/30, ne pas les réécrire). Une fois la Phase 1 du plan
épuisée (J1 à J30), les articles J31 à J36 s'enchaînent dans l'ordre de la Phase 2 de
`seo-90-day-plan.md`. Au 36e article, la tâche planifiée `daily-article-ai-studios`
est désactivée.

## Sujets J1 à J30 (source : seo-90-day-plan.md, ne pas dévier sans raison notée ici)

| J | Slug | KW principal |
|---|------|--------------|
| 1 | `prompts-video-ia-50-exemples` | prompt vidéo ia |
| 2 | `agence-video-ia-lancer` | agence vidéo ia |
| 3 | `veo-3-vs-sora-comparatif` | veo vs sora |
| 4 | `chaine-youtube-automatisee-ia` | chaîne youtube automatisée ia |
| 5 | `creer-video-youtube-ia` | créer vidéo youtube ia |
| 6 | `prompt-veo-3-exemples` | prompt veo 3 |
| 7 | `video-ia-pour-entreprise` | vidéo ia entreprise |
| 8 | `heygen-guide-avatars` | heygen |
| 9 | `elevenlabs-guide-complet` | elevenlabs français |
| 10 | `suno-guide-complet` | suno ai |
| 11 | `vendre-videos-ia` | vendre des vidéos ia |
| 12 | `kling-vs-runway-comparatif` | kling vs runway |
| 13 | `prompts-kling-exemples` | prompt kling |
| 14 | `script-video-chatgpt` | script vidéo chatgpt |
| 15 | `influenceur-virtuel-ia` | influenceur virtuel ia |
| 16 | `voix-off-ia-guide` | voix off ia |
| 17 | `decouper-video-longue-shorts-ia` | découper vidéo shorts ia |
| 18 | `photo-culinaire-ia-restaurant` | photo culinaire ia |
| 19 | `video-ia-immobilier` | vidéo ia immobilier |
| 20 | `midjourney-video-guide` | midjourney video |
| 21 | `ugc-ia-pour-marques` | ugc ia |
| 22 | `capcut-ia-fonctions` | capcut ia |
| 23 | `musique-ia-droits-videos` | musique ia libre de droits |
| 24 | `tiktok-formats-video-ia-viraux` | vidéo ia virale tiktok |
| 25 | `apprendre-ia-creative-parcours` | apprendre l'ia créative |
| 26 | `vendre-prompts-templates-ia` | vendre des prompts |
| 27 | `synthesia-vs-heygen` | synthesia vs heygen |
| 28 | `bande-annonce-ia` | bande annonce ia |
| 29 | `court-metrage-ia-niveau-festival` | court métrage ia |
| 30 | `flux-guide-complet` | flux ia |

## Journal du run (une ligne par jour publié)

| Date | Jour | Progression | Slug | KW principal | Notes |
|------|------|-------------|------|--------------|-------|
| 2026-07-20 | J1 | 1/30 | prompts-video-ia-50-exemples | prompt vidéo ia | jour 1 lancé manuellement |
| 2026-07-22 | J2 | 2/30 | agence-video-ia-lancer | agence vidéo ia | run automatisé daily-article-ai-studios |
| 2026-07-23 | J3 | 3/30 | veo-3-vs-sora-comparatif | veo vs sora | Sora fermé par OpenAI (app 26/04/2026, API 24/09/2026) : angle réorienté vers "duel fini + remplacer Sora" |
| 2026-07-29 | J4 | 4/30 | chaine-youtube-automatisee-ia | chaîne youtube automatisée ia | Angle honnête anti-hype. Fait clé : politique YouTube "contenu inauthentique" (15/07/2025), source officielle liée. Hero Higgsfield soul_2 |
| 2026-08-03 | J5 | 5/30 | creer-video-youtube-ia | créer vidéo youtube ia | Tutoriel A à Z (script/voix/visuels/montage/miniature). Lien elevenlabs-guide-complet remplacé par elevenlabs-voiceover-pub (pas encore publié). Hero Higgsfield soul_2 |
| 2026-08-17 | J6 | 6/30 | prompt-veo-3-exemples | prompt veo 3 | runs du 04 au 16/08 manqués (tâche planifiée disparue, recréée ce jour), hero basculé Higgsfield → Nano Banana 2 via Vercel AI Gateway |
| 2026-08-19 | J7 | 7/36 | video-ia-pour-entreprise | vidéo ia entreprise | Use cases B2B (7 usages), plafond du run porté à 36 articles. Fait sourcé : obligations de transparence de l'article 50 du règlement européen sur l'IA, applicables depuis le 02/08/2026 (FAQ Commission européenne). Hero Nano Banana 2, motif : réunion d'équipe en salle vitrée, plein jour, storyboards sur la table (rupture voulue avec les 3 heros précédents, tous des bureaux de nuit) |
| 2026-08-21 | J8 | 8/36 | heygen-guide-avatars | heygen | Guide outil. Chiffres pris sur les pages officielles HeyGen après avoir constaté que les comparatifs SEO tiers se contredisent (ils annoncent Creator à 200 crédits et Pro à 99 $, la page officielle dit 600 crédits et 49 $). Coûts en crédits sourcés sur le centre d'aide (Avatar IV 16/min en look photo, 31 en look vidéo, Avatar V 48). Passes humanizer + unslop-text + antislop-copywriting appliquées, la dernière a rattrapé une erreur de calcul et deux ouvertures recopiées de J7. Hero Nano Banana 2, motif : coin de bureau transformé en poste d'enregistrement, chaise vide face à un smartphone sur trépied, fond gris agrafé, fin d'après-midi (rupture avec les heros récents, tous des bureaux avec écrans) |
| 2026-08-24 | J9 | 9/36 | elevenlabs-guide-complet | elevenlabs français | Guide outil. Run repris : un run antérieur du jour avait écrit article + hero sans committer, travail vérifié puis publié. Chiffres pris sur les pages officielles (offres, prix par fonction de la page API, durées de clonage de la doc). Anti-cannibalisation : elevenlabs-voiceover-pub garde "voix off pub", les deux sont liés. Passe structurelle FR : intro réécrite, elle recopiait la forme de J8 (amorce "Tu [verbe]" + liste de quatre interrogatives) ; deuxième jour d'affilée où c'est l'intro qui se recopie. Scanner unslop : 1 hit "Robust", faux positif (nom d'un réglage ElevenLabs). Hero Nano Banana 2, motif : cabine de voix off vue depuis la régie, comédienne au micro derrière la vitre, console de mixage au premier plan, lumière du jour (distinct de J8 coin de bureau bricolé et J7 salle de réunion) |
| 2026-08-25 | J10 | 10/36 | suno-guide-complet | suno ai | Guide outil. Angle différenciant : les quotas de téléchargement Suno entrent en vigueur le 03/09/2026 (7 à vie sur le gratuit, 20/mois Pro, 60/mois Premier, rétroactifs sur toute la bibliothèque), soit 9 jours après publication et non couvert en FR. Chiffres officiels uniquement : les blogs tiers se contredisent sur le coût d'une génération, le coût est donc dérivé des morceaux annoncés par le centre d'aide. Anti-cannibalisation : suno-musique-pub-courte garde « musique de pub », elevenlabs-music-v2-stable-audio-suno garde le comparatif. Un chiffre inventé (« 80 % ») attrapé à la relecture et supprimé. Titre volontairement écarté du gabarit « X : le guide complet en français » de J9, et intro factuelle plutôt que scène, pour casser la série d'ouvertures qui se recopiaient depuis J8. Hero Nano Banana 2, motif : salle de répétition dans un vieil immeuble au matin, piano droit et basse, contre-plongée au ras du sol, aucun écran dominant (distinct de J9 cabine de voix off, J8 coin de bureau, J7 salle de réunion) |
| 2026-08-26 | J11 | 11/36 | vendre-videos-ia | vendre des vidéos ia | Business. Angle sourcé : l'écart de prix entre canaux de vente (Codeur 135 € de TJM moyen en août 2026, Malt trois fois plus sur le même métier), donc le canal pèse plus que le niveau technique. Page Codeur lue en direct ; page Malt en 403, seul l'ordre de grandeur est cité et aucun chiffre Malt précis ne figure dans le corps. Apport propre face à agence-video-ia-lancer et fixer-prix-creation-ia-grille : six livrables formulés côté client, montants en euros, canaux. Un chiffre de persuasion inventé (« deux fois plus souvent ») attrapé à la 3e passe et supprimé, même piège qu'en J10. Grappe de « trois » (10 occurrences) diluée, nouveau tell FR à surveiller. Hero Nano Banana 2, motif : bistrot de quartier après le service, chaises retournées, vitrine de rue bleu nuit, vidéaste et patron autour d'une tablette et d'un devis imprimé (premier hero du run chez le client et sur le moment de la vente, distinct de J10 salle de répétition, J9 cabine voix off, J8 coin de bureau, J7 salle de réunion, J6 bureau de nuit) |
| 2026-08-27 | J12 | 12/36 | kling-vs-runway-comparatif | kling vs runway | Comparatif. Angle sourcé et différenciant : les deux ne vendent plus la même chose. Le centre d'aide de Runway liste Kling 3.0 Motion Control parmi ses modèles vidéo tiers (avec Seedance 2.5/2.0, Minimax H3, FLUX 3, Grok Imagine 1.5, Gemini Omni Flash), et la fiche officielle de Gen-4.5 plafonne à 720p et 10 s alors que Kling VIDEO 3.0 fait 3 à 15 s, audio natif et 4K à 30 crédits/s. Chiffres pris uniquement sur les pages officielles : klingai.com et app.klingai.com renvoient HTTP 446 à WebFetch, contourné par curl avec UA navigateur puis extraction du texte. Détail que les comparatifs tiers ratent : chez Kling le prix affiché n'est pas le prix de renouvellement (Standard affiché 10 $, renouvelé 8,80 $). Un chiffre inventé (« la moitié du marché ») attrapé à la 3e passe et remplacé par le compte réel de sept modèles, même piège qu'en J10 et J11, trois runs d'affilée. Sur-correction attrapée à la relecture : une annonce méta supprimée avait été remplacée par une formule aphoristique (« le seul juge utile, c'est... »), réécrite en phrase concrète. Promesse d'intro sortie du gabarit « À la fin de cet article tu sauras », déjà utilisé en J7. Scanner unslop : 0 hit sur 2396 mots, sans valeur sur du français, passe structurelle faite à la main. Hero Nano Banana 2, motif : salle de post-production, deux colonnes de photogrammes imprimés scotchées sur une cloison vitrée, monteuse de profil marqueur en main, lumière rasante ambre à travers des stores (distinct de J11 bistrot de nuit, J10 salle de répétition, J9 cabine voix off, J8 coin de bureau, J7 salle de réunion) |
