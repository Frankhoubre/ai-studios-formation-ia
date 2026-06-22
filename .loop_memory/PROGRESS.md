# PROGRESS.md

État vivant du loop. Lu au début de chaque run, mis à jour à la fin.
Le plus récent en haut.

---

## Run 2026-06-22 — RUN #5

- 2 articles datés du 22 : 1 news `kling-3-turbo-omni-juin-2026` (Kling 3.0
  Turbo + Omni, annonce 17/06, + capture klingai.com) et 1 evergreen
  `combien-coute-ia-creative-mois` (budget mensuel outils IA, business-creatif,
  sorti du backlog 🔥).
- 1 seule news : seule actu fraîche, on-thème et non sensible cette semaine
  (qualité > quantité). Seedance 2.0 Mini écarté (litige Disney/Paramount, voir
  ERRORS B-4). 2 evergreen video déjà future-datés tombaient le 22 (Veo, Sora),
  non touchés.
- Audit 0 err (107 art.), lint + build verts. Descriptions 148/148, 0 cadratin,
  liens internes → slugs LIVE seulement.
- Working tree d'entrée non propre : 24 injections de liens d'un run précédent
  pointant vers des cibles future-datées (risque 404 live). NON commitées,
  stashées pendant le push, restaurées ensuite (ERRORS B-5).

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

### Statut : système 100% opérationnel
- ✅ `GEMINI_API_KEY` en place (.env git-ignoré), génération hero validée.
- ✅ `scripts/generate-hero.py` réglé éco : Imagen 4 Fast, 1K, 50mm par défaut
  (options 85mm / 2K standard/ultra). ~25 Ko/hero, coût minimal.
- Le run quotidien `daily-growth-loop-ai-studios` (08:10) a tout ce qu'il faut.
- Astuce : faire un "Run now" une fois pour pré-approuver les outils.

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
