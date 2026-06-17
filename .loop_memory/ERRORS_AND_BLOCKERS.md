# ERRORS_AND_BLOCKERS.md

Tout ce qui bloque, échoue, ou demande une décision humaine. Le plus récent en
haut. Quand c'est résolu, déplacer dans la section "Résolu" avec la date.

---

## Ouvert — décisions / accès à confirmer

### B-0 — ✅ RÉSOLU (coexistence) — voir aussi section Résolu
Décision "fais ce qui est logique" appliquée le 2026-06-17. Vérification faite :
les 2 tâches planifiées existantes (`daily-ai-news-article`, `translate-blog-backlog`)
ciblent **`/Users/frankhoubre/frankhoubre.com`**, PAS ce repo → aucun conflit
réel avec ce blog. L'autopilote évergreen de CE repo (editorial-plan.json) a
**épuisé son plan (60/60)** : plus aucune automatisation ne pilotait ce site.
Donc une **nouvelle tâche planifiée dédiée** a été créée pour ce repo :
`daily-growth-loop-ai-studios` (tous les jours 08:10 Europe/Paris, cron `10 8 * * *`),
qui exécute le loop complet (2 news + 1 evergreen + audit). C'est désormais LE
système unique de ce site. Historique conservé ci-dessous.

### B-0 (historique) — AUTOPILOTE CONCURRENT DÉTECTÉ pendant le bootstrap
Pendant ce run bootstrap, un **second processus** écrivait déjà dans le repo :
- Lock actif `.claude/scheduled_tasks.lock` (session `f071011f-...`, pid 61568,
  démarré 2026-06-17 09:55).
- `content/articles/articles.ts` modifié (imports n°51 `prompt-midjourney-parametres`
  et n°52 `banque-styles-visuels-ia` ajoutés) — **pas par ce run**.
- 2 fichiers d'articles non suivis créés ; hero `prompt-midjourney-parametres.webp`
  généré à 14:35 (pendant ce run) ; hero `banque-styles-visuels-ia.webp` encore
  **absent** → génération en cours côté autopilote.
- Un `next build` tournait en parallèle.

C'est l'autopilote évergreen existant décrit dans `content/editorial-plan.json`
(lit le plan, prend les 2 prochains `done:false`, écrit, build, commit, push).

**Conséquence** : ce run bootstrap **n'exécute AUCUN git add/commit/push/branch**
pour éviter une collision / un commit qui balaie du travail à moitié fini
(banque-styles-visuels-ia n'a pas encore son hero). Tous mes changements restent
dans le working tree, à committer par l'utilisateur une fois l'autopilote au repos.

**Action utilisateur (décision requise)** : voir SETUP_LOOP.md §"Coexistence".
Choisir : (a) intégrer la news + l'audit DANS l'autopilote existant, ou
(b) faire tourner ce loop à un horaire distinct sans chevauchement, ou
(c) remplacer l'autopilote par ce loop. Tant que deux loops écrivent et pushent
en même temps, risque de conflits git et de double déploiement.

### B-1 — ✅ Accès web : CONFIRMÉ
La tâche sœur `daily-ai-news-article` (frankhoubre.com) fait déjà de la recherche
web pour ses news → l'accès web existe sur ce runner. Le loop peut sourcer ses
news. (Ahrefs : voir B-3, à NE PAS utiliser.)

### B-2 — 🟠 OUVERT (seul vrai reste) : GEMINI_API_KEY absente DANS CE REPO
`scripts/generate-hero.py` exige `GEMINI_API_KEY` (env ou `.env` racine
git-ignoré). Le repo voisin frankhoubre.com a sa clé dans son `.env.local`, mais
**ce repo n'a pas de `.env`** et aucune variable d'env GEMINI. Sans clé, les hero
images des nouveaux articles échoueront (le loop continue : fallback image
existante + brief loggé, mais c'est sous-optimal).
**Action utilisateur (1 minute)** : créer `/Users/frankhoubre/blog-ai-studio/.env`
avec `GEMINI_API_KEY=...` (déjà couvert par `.gitignore`). Réutiliser la même clé
gratuite que frankhoubre.com. Clé gratuite : https://aistudio.google.com/apikey

### B-3 — ✅ MCP Ahrefs : NE PAS utiliser (plan gratuit insuffisant)
Confirmé par la tâche sœur ("ne PAS appeler le MCP Ahrefs"). Le calage mot-clé se
fait via l'autocomplétion Google / recherches associées en recherche web. L'audit
reste local (audit.mjs + lint + build). GSC : non lié, optionnel.

### B-4 — ✅ Push sur `main` : autorisé et opérationnel
Flux branche `loop/daily-*` → merge `main` → push (Vercel auto-deploy). Le
bootstrap a déjà été poussé avec succès sur main le 2026-06-17 (CI verte).

---

## Résolu

### 2026-06-17 — CI GitHub Actions rouge (lint)
`npm run lint` échouait sur `components/CookieConsent.tsx:22`
(`react-hooks/set-state-in-effect`). CI rouge depuis ≥3 commits ; Vercel
déployait quand même. **Résolu** par suppression ciblée de la règle sur la ligne
du mount-gate volontaire, comportement inchangé. Lint exit 0.

### 2026-06-17 — 16 liens internes cassés
Liens body + `relatedSlugs` vers 12 slugs jamais créés et hors roadmap.
**Résolu** : repointés vers les articles existants pertinents, doublons nettoyés,
0 cassé restant. Build vérifié.
