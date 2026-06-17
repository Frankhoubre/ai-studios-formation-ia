# PUBLISH_LOG.md

Journal des publications et des push. Une ligne par commit/déploiement réel.
Ne JAMAIS écrire "publié" si le push/déploiement n'a pas réussi.

Format : `DATE | TYPE | branche → main | commit | articles | déploiement`

---

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
