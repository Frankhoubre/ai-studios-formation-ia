# PUBLISH_LOG.md

Journal des publications et des push. Une ligne par commit/déploiement réel.
Ne JAMAIS écrire "publié" si le push/déploiement n'a pas réussi.

Format : `DATE | TYPE | branche → main | commit | articles | déploiement`

---

## 2026-07-06

- `2026-07-06 | RUN #7 | loop/daily-2026-07-06 → main | 3 articles | 2 news + 1 evergreen | poussé sur main (commit bd72b4b, merge edaae82)`
  - `seedance-2-5-video-ia-30-secondes` (IA vidéo, news, Seedance 2.5 ByteDance)
  - `gemini-images-personnalisees-donnees-google` (IA image, news, images Gemini gratuites US)
  - `pourquoi-videos-ia-air-faux` (IA vidéo, evergreen, réalisme vidéo)
  - Bonus SEO : 14 liens internes cassés repointés dans les 3 pages piliers + 1 description ramenée sous 160 car.
  - Heros Imagen 4 Fast 1K (16/28/42 Ko). Audit 0 err, lint/build verts. CI success. 3 pages en 200. IndexNow 135 URLs (HTTP 200).
  - B-5 (24 fichiers non commités) laissé intact et non poussé (stash/pop autour du merge).

## 2026-06-25

- `2026-06-25 | RUN #6 | loop/daily-2026-06-25 → main | 3 articles | 2 news + 1 evergreen | poussé sur main`
  - `grok-imagine-video-1-5-juin-2026` (IA vidéo, news, Grok Imagine 1.5 xAI 16/06, image vers vidéo + audio natif, + capture x.ai/news)
  - `minimax-hub-creation-video-ia` (IA vidéo, news, MiniMax Hub festival de Shanghai 15/06, source Variety, + capture minimax.io)
  - `monter-video-ia-capcut-davinci` (Workflow créatif, evergreen, monter ses plans IA dans CapCut/DaVinci)
  - Heros Imagen 4 Fast 1K. Audit (110 art., 0 err, 0 avert.) / lint / build verts.
  - 2 news à ~8-10 j (semaine creuse côté sorties fraîches), mais solides et sourcées
    (primaire x.ai ; Variety). Dates des faits citées précisément dans le texte.
  - Fix SEO : 2 descriptions >160 (ecrire-scenario, screenweaver) raccourcies.
  - 24 modifs non commitées (injections de liens, B-5) toujours laissées en l'état,
    non stagées, non poussées. Push surgical (git add explicite uniquement).
  - 2 articles préexistants future-datés tombaient le 25 (`images-cinema-ia-scene-film`,
    `rendu-pellicule-grain-film-ia`, ia-image) : non touchés.

## 2026-06-22

- `2026-06-22 | RUN #5 | loop/daily-2026-06-22 → main | 2 articles | 1 news + 1 evergreen | poussé sur main`
  - `kling-3-turbo-omni-juin-2026` (IA vidéo, news, Kling 3.0 Turbo + Omni 17/06, + capture klingai.com)
  - `combien-coute-ia-creative-mois` (Business créatif, evergreen, budget mensuel outils IA)
  - Heros Imagen 4 Fast 1K. Audit (107 art., 0 err) / lint / build verts.
  - 1 seule news : seul sujet frais, on-thème et non sensible cette semaine.
    Seedance 2.0 Mini (15/06) volontairement écarté (litige Disney/Paramount +
    demande de fermeture de sénateurs US = sujet sensible, voir ERRORS).
  - 2 articles datés du jour préexistaient (evergreen `veo-3-generer-videos-ia`
    et `sora-openai-creer-videos`, future-datés tombant le 22) : non touchés.
  - 24 modifs non commitées laissées en l'état (injections de liens internes d'un
    run précédent pointant vers des articles encore future-datés = risque 404
    live ; ne pas committer tel quel). Voir ERRORS_AND_BLOCKERS.

## 2026-06-20

- `2026-06-20 | RUN #4 | loop/daily-2026-06-20 → main | 3 articles | 2 news + 1 evergreen | poussé sur main`
  - `higgsfield-creative-os-juin-2026` (IA vidéo, news, + capture higgsfield.ai)
  - `elevenlabs-music-v2-stable-audio-suno` (Business créatif, news, + capture elevenlabs.io)
  - `focale-objectif-prompt-ia` (Prompting, evergreen)

## 2026-06-18

- `2026-06-18 | RUN #2 | loop/daily-2026-06-18 → main | 3 articles | 2 news + 1 evergreen | poussé sur main`
  - `adobe-firefly-android-imagen-veo` (IA image, news, Firefly sur Android 17/06)
  - `krea-2-images-2-secondes` (IA image, news, Krea 2 08/06)
  - `image-to-video-ia-methode` (IA vidéo, evergreen)
  - Heros Imagen 4 Fast 1K. Audit/lint/build verts. Voir DAILY_REPORT.

## 2026-06-17

- `2026-06-17 | RUN #1 | loop/daily-2026-06-17 → main | 3 articles | 2 news + 1 evergreen | poussé sur main`
  - `midjourney-v8-1-mise-a-jour` (IA image, news, Midjourney V8.1)
  - `runway-seedance-2-fast-aleph-2` (IA vidéo, news, Runway Seedance/Aleph)
  - `comfyui-workflow-nodal-debutant` (Workflow créatif, evergreen)
  - Heros Imagen 4 Fast (1K). Audit/lint/build verts. Voir DAILY_REPORT.
- `2026-06-17 | BOOTSTRAP | loop/bootstrap-2026-06-17 → main | 0 article publié | infra + 2 correctifs SEO | poussé sur main (sur demande utilisateur)`
  - Contenu publié : aucun nouvel article (pas de contenu créé ce run).
  - Correctifs poussés live : CI lint réparée, 16 liens internes cassés repointés.
  - Fichiers infra ajoutés : `.loop_memory/*`, `.loop_scripts/*`, `SETUP_LOOP.md`.
  - Autopilote concurrent : avait terminé son lot (60/60) avant le commit, pas de
    collision. Working tree ne contenait que les fichiers de ce run.

> À partir du run 2 : chaque article publié doit aussi apparaître dans
> CONTENT_LEDGER.md, et chaque push doit confirmer le statut Vercel (Ready).
