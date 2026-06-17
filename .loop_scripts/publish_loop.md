# publish_loop.md — publication & git

But : pousser en prod proprement, seulement quand tout est vert. Ne jamais
prétendre que c'est publié si ça ne l'est pas.

## 0. Garde-fou concurrence

Avant tout git : vérifier qu'aucun autre loop/autopilote n'écrit (lock
`.claude/scheduled_tasks.lock`, processus `next build`, working tree sale non
attendu). Collision possible → STOP, logger B-0, ne pas committer.

## 1. Pré-checks (tous obligatoires, tous verts)

```
node .loop_scripts/audit.mjs   # exit 0
npm run lint                   # exit 0
npm run build                  # exit 0
```
Plus : articles complets, aucune route cassée introduite, mémoire à jour
(CONTENT_LEDGER + PUBLISH_LOG).

## 2. Commit

```
git add <fichiers explicites du run>   # PAS de git add -A si un autre loop tourne
git commit -m "feat(content): YYYY-MM-DD — 2 news + 1 evergreen + audit SEO"
```
Messages clairs. Terminer les messages de commit par la ligne Co-Authored-By
demandée par l'environnement.

## 3. Merge vers main (déclenche Vercel)

Vercel auto-déploie depuis `main`.
```
git switch main && git pull
git merge --no-ff loop/daily-YYYY-MM-DD
git push origin main
```
Conflit majeur → STOP, logger, ne pas forcer.

## 4. Vérifier le déploiement

- CI GitHub Actions (`Build`) doit passer : `gh run list --branch main --limit 1`.
- Vercel : dernier déploiement Production en **Ready**. Si CLI `vercel` /
  webhook dispo, vérifier ; sinon, vérifier l'URL en HTTP 200 :
  `curl -sI https://blog.ai-studios.fr/blog/<nouveau-slug> | head -1`.
- Déploiement échoué → logger ERRORS_AND_BLOCKERS.md, NE PAS marquer "publié".

## 5. Journal

PUBLISH_LOG.md : date, branche, commit, articles publiés (URL), statut déploiement.
CONTENT_LEDGER.md : une ligne par article publié.

## Règles git de sécurité

- Jamais committer `.env*` ni de secret. `.gitignore` couvre déjà `.env*`.
- Jamais `git push --force` sur `main`.
- Jamais supprimer du contenu sans raison loggée.
- Brancher avant de travailler ; ne pas committer directement sur `main` à la
  main (passer par la branche + merge).

Liens : [[seo_audit_loop]] [[PUBLISH_LOG]] [[CONTENT_LEDGER]] [[ERRORS_AND_BLOCKERS]]
