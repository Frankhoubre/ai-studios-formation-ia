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
