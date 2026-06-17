# ERRORS_AND_BLOCKERS.md

Tout ce qui bloque, échoue, ou demande une décision humaine. Le plus récent en
haut. Quand c'est résolu, déplacer dans la section "Résolu" avec la date.

---

## Ouvert — décisions / accès à confirmer

### B-0 — ⛔ AUTOPILOTE CONCURRENT DÉTECTÉ (priorité absolue, git gelé ce run)
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

### B-1 — Accès web du runner quotidien à confirmer (BLOQUANT pour les news)
Les 2 articles news/jour exigent une recherche web sourcée (24-72 h). Il faut
confirmer que le runner qui exécute le loop a accès à : WebSearch/WebFetch, ou
Bright Data (skills présents), ou flux RSS via `curl`. Sans accès → ne pas
publier de news (hard stop), produire uniquement l'evergreen + l'audit.
**Action utilisateur** : valider le mode d'accès dans SETUP_LOOP.md.

### B-2 — Clé GEMINI_API_KEY pour les hero images
`scripts/generate-hero.py` génère le visuel hero (Imagen 4) et exige
`GEMINI_API_KEY` (env ou `.env` git-ignoré). Sans clé, un nouvel article n'aura
pas de hero. Fallback : réutiliser une image existante pertinente OU écrire un
brief image dans le ledger et publier sans hero dédié (moins bon).
**Action utilisateur** : fournir la clé en variable d'env du runner.

### B-3 — Accès MCP SEO (Ahrefs / Search Console) optionnel
Des outils MCP Ahrefs + GSC sont disponibles mais nécessitent un projet lié au
domaine `blog.ai-studios.fr`. S'ils sont configurés, le loop peut lire les vraies
positions, requêtes, et lancer un Site Audit live. Sinon, l'audit reste local.
**Action utilisateur** : confirmer si le projet Ahrefs/GSC couvre le domaine.

### B-4 — Autorisation de push direct sur `main`
Vercel auto-déploie depuis `main`. Le loop pousse une branche `loop/daily-*`
puis merge dans `main` après checks verts. Confirmer que ce flux est autorisé
en autonomie (défaut demandé par la mission : oui, si checks verts).

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
