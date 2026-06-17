# daily_content_loop.md — orchestrateur quotidien

Playbook maître. Un agent (ou une routine planifiée) lit ce fichier et exécute
les étapes dans l'ordre. Max 10 itérations / jour, sinon hard stop + log.

## 0. Pré-vol (toujours)

1. Lire **tous** les fichiers `.loop_memory/*` (mémoire du loop).
2. Vérifier qu'aucun autre loop n'écrit : pas de `.claude/scheduled_tasks.lock`
   tenu par une autre session active, pas de `git status` "sale" inattendu.
   Si collision possible → STOP, logger B-0 dans ERRORS_AND_BLOCKERS.md.
3. `git pull` sur `main` (repartir d'un état propre).
4. Créer la branche du jour : `git switch -c loop/daily-YYYY-MM-DD`.
5. Confirmer les accès : web (news), GEMINI_API_KEY (hero), MCP SEO (optionnel).
   Accès manquant → adapter le scope, logger dans ERRORS_AND_BLOCKERS.md.

## 1. Recherche news → `news_research_loop.md`

Produire la matière première sourcée (24-72 h). Si la qualité est trop faible
→ ne pas publier de news ce jour, le noter.

## 2. Écriture (writer)

- **2 articles news** (voir news_research_loop.md).
- **1 article evergreen** (voir evergreen_article_loop.md) :
  piocher dans IDEAS_BACKLOG / gaps de KEYWORD_MAP, vérifier l'anti-cannibalisation.

Pour chaque article : suivre `article_creation_process` (ci-dessous).

## 3. Vérification (checker) → `checklist.md`

Chaque article passe le checker. Max 3 cycles de révision. Échec après 3 →
skip + log dans ERRORS_AND_BLOCKERS.md.

## 4. Audit SEO → `seo_audit_loop.md`

`node .loop_scripts/audit.mjs` + corriger les items sûrs. Logger dans SEO_AUDIT_LOG.

## 5. Publication → `publish_loop.md`

lint + build verts → commit → merge `main` → vérifier déploiement Vercel.

## 6. Mémoire (toujours, même si échec)

Mettre à jour : CONTENT_LEDGER, KEYWORD_MAP, PUBLISH_LOG, SEO_AUDIT_LOG,
PROGRESS, ERRORS_AND_BLOCKERS, IDEAS_BACKLOG, et écrire DAILY_REPORT.md.

---

## article_creation_process (par article)

1. Choisir le sujet.
2. Vérifier la cannibalisation (CONTENT_LEDGER + KEYWORD_MAP).
3. Décider l'intention de recherche.
4. Titre + slug (kebab, sans accent, stable).
5. Recherche si nécessaire (news = obligatoire, ≥ 2 sources).
6. Rédiger selon STYLE_GUIDE + gabarit.
7. Métadonnées (description ≤ 160, keywords 4-6, imageAlt, excerpt, tags).
8. Liens internes (≥ 2 vers slugs existants) + 1 lien externe d'autorité.
9. CTA doux (formation gratuite) si pertinent.
10. Hero : `python scripts/generate-hero.py --slug <slug> --prompt "<brief EN>"`.
11. Enregistrer le module dans `content/articles/posts/<slug>.ts`.
12. Importer + ajouter au tableau dans `content/articles/articles.ts`.
13. Passer le checker, réviser (max 3).
14. Mettre à jour la mémoire.

## Hard stops (arrêter et logger)

- Build échoue après 3 tentatives de correctif.
- Déploiement échoue.
- Credential requis manquant.
- Qualité des sources news trop faible.
- Conflit de merge majeur / autre loop actif.
- Risque de supprimer du contenu important.
- Incertitude légale ou factuelle / sujet sensible.
- 10 itérations atteintes.

Liens : [[news_research_loop]] [[evergreen_article_loop]] [[seo_audit_loop]] [[publish_loop]] [[checklist]]
