# PUBLISH_LOG.md

Journal des publications et des push. Une ligne par commit/déploiement réel.
Ne JAMAIS écrire "publié" si le push/déploiement n'a pas réussi.

Format : `DATE | TYPE | branche → main | commit | articles | déploiement`

---

## 2026-06-17

- `2026-06-17 | BOOTSTRAP | loop/bootstrap-2026-06-17 → main | 0 article publié | infra + 2 correctifs SEO | poussé sur main (sur demande utilisateur)`
  - Contenu publié : aucun nouvel article (pas de contenu créé ce run).
  - Correctifs poussés live : CI lint réparée, 16 liens internes cassés repointés.
  - Fichiers infra ajoutés : `.loop_memory/*`, `.loop_scripts/*`, `SETUP_LOOP.md`.
  - Autopilote concurrent : avait terminé son lot (60/60) avant le commit, pas de
    collision. Working tree ne contenait que les fichiers de ce run.

> À partir du run 2 : chaque article publié doit aussi apparaître dans
> CONTENT_LEDGER.md, et chaque push doit confirmer le statut Vercel (Ready).
