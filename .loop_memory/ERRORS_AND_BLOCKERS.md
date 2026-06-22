# ERRORS_AND_BLOCKERS.md

Tout ce qui bloque, échoue, ou demande une décision humaine. Le plus récent en
haut. Quand c'est résolu, déplacer dans la section "Résolu" avec la date.

---

## Ouvert — décisions / accès à confirmer

### B-5 — 2026-06-22 — 24 modifs non commitées dans le working tree (risque 404)
Au démarrage du run #5, `git status` montrait 24 fichiers `content/articles/posts/*.ts`
modifiés et non commités (injections de liens internes d'un run/autopilot
précédent). Vérification : plusieurs de ces liens partent d'articles LIVE
(ex. `workflow-ia-creatif`, 14/04) vers des articles encore FUTURE-datés
(ex. `generer-modeles-3d-ia`, 07/07) → 404 live tant que la cible n'est pas
publiée. **Non commités par ce run** (laissés en l'état, stashés pendant le push
puis restaurés). À traiter par un humain ou un run dédié : soit committer
seulement les injections dont la cible est déjà live, soit attendre que les
cibles sortent. Ne PAS `git add` en bloc.

### B-4 — 2026-06-22 — Seedance 2.0 Mini écarté (sujet sensible)
Seedance 2.0 Mini (ByteDance, sorti le 15/06/2026) était un candidat news frais,
mais le modèle est au cœur d'un litige actif (lettres de cease-and-desist de
Disney et Paramount, lettre de sénateurs US du 16/03 demandant l'arrêt du
modèle). Conformément à la règle "sujet sensible (procès/régulation) → factuel,
neutre, ou revue humaine", news non produite sur ce sujet ce jour. À reconsidérer
seulement sous un angle strictement neutre/sourcé, ou en revue humaine.

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

### B-2 — ✅ RÉSOLU : GEMINI_API_KEY en place + génération validée
Clé fournie par l'utilisateur, déposée dans `/Users/frankhoubre/blog-ai-studio/.env`
(git-ignoré via `.env*`, jamais commité). Test de génération réussi le 2026-06-17 :
Imagen 4 Fast, 1K natif, export WebP 1280×698 ~25 Ko, rendu cinématique conforme
(lumière motivée, bokeh, peau naturelle, mains correctes, pas de look-IA).
`scripts/generate-hero.py` réglé pour le moins cher par défaut : **Fast 1K, 50mm**
(`--lens 85mm`, `--standard/--ultra --image-size 2K` pour un rendu plus net).

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
