# PROGRESS.md

État vivant du loop. Lu au début de chaque run, mis à jour à la fin.
Le plus récent en haut.

---

## Run 2026-06-17 — BOOTSTRAP (premier run)

### Ce qui s'est passé
- Inspection complète du repo. Site identifié : **AI Studios Blog**, blog
  francophone IA créative (Frank Houbre), Next.js 16 App Router, contenu statique
  TypeScript (pas de CMS), déploiement Vercel auto depuis `main`.
- 79 articles existants, tous evergreen, future-datés jusqu'au 2026-07-10,
  gérés par un plan éditorial autopilote (`content/editorial-plan.json`, 60
  entrées, 48 done / 12 pending jusqu'au 2026-07-16).
- Système de mémoire `.loop_memory/` créé et rempli (9 fichiers + rapport).
- Playbooks `.loop_scripts/` créés + script d'audit `audit.mjs` runnable.
- `SETUP_LOOP.md` créé à la racine.
- Audit SEO baseline réalisé (voir SEO_AUDIT_LOG.md).

### Ce qui a été corrigé (sûr, build vérifié)
- ✅ CI lint qui bloquait GitHub Actions (CookieConsent setState-in-effect).
- ✅ 16 liens internes cassés (body + relatedSlugs) repointés ; 6 doublons
  relatedSlugs nettoyés.

### Ce qui est fait depuis
- ✅ Bootstrap commité et poussé sur `main`. CI lint réparée + 16 liens cassés
  corrigés, désormais live (CI verte confirmée).
- ✅ Coexistence arbitrée (B-0 résolu) : les tâches planifiées existantes ciblent
  frankhoubre.com (autre site) ; le plan évergreen de ce repo est épuisé (60/60).
- ✅ Tâche planifiée créée : `daily-growth-loop-ai-studios`, tous les jours 08:10
  Europe/Paris → exécute le loop complet (2 news + 1 evergreen + audit) en
  autonomie, auto-publie si gates verts. C'est LE système quotidien du site.

### Seul reste avant 100%
- 🟠 Déposer `GEMINI_API_KEY` dans `/Users/frankhoubre/blog-ai-studio/.env` pour
  les hero images (B-2). Sans elle, le loop tourne mais sans visuel hero dédié.

### Ce qui a échoué / bloqué
- Aucune publication de contenu ce run (règle "premier run = pas de publication").
- News non produites : nécessite de confirmer l'accès web réel du runner
  quotidien (voir NEWS_SOURCES.md + SETUP_LOOP.md).

### Prochaines actions (run 2, une fois le bootstrap mergé)
1. Confirmer l'accès web (WebSearch/Bright Data) et l'accès SEO (MCP Ahrefs/GSC).
2. Produire 2 news (24-72 h) + 1 evergreen, en respectant anti-cannibalisation.
3. Générer les hero images (scripts/generate-hero.py, clé GEMINI_API_KEY requise).
4. Re-lancer l'audit, traiter 1-2 items du backlog SEO (descriptions > 160).
5. Build + lint + commit + push (autonomie activée à partir du run 2).

### Décisions / conventions établies
- Branche de travail quotidienne : `loop/daily-YYYY-MM-DD` (contenu + SEO),
  mergée dans `main` après checks verts. Vercel redéploie depuis `main`.
- Pas de tirets cadratins dans le contenu (règle de style forte).
- CTA = formation IA gratuite (ScreenWeaver non branché sur ce repo).
- Articles datés du jour (Europe/Paris) pour publication immédiate, ou
  future-datés pour planifier.

Liens : [[DAILY_REPORT]] [[SEO_AUDIT_LOG]] [[ERRORS_AND_BLOCKERS]] [[CONTENT_LEDGER]]
