# PROGRESS.md

État vivant du loop. Lu au début de chaque run, mis à jour à la fin.
Le plus récent en haut.

---

## Run 2026-07-06 — RUN #7

- 3 articles datés du 06/07 : 2 news + 1 evergreen, poussés sur main.
  - News `seedance-2-5-video-ia-30-secondes` (ByteDance Seedance 2.5, annonce Volcano
    Engine FORCE du 23/06, angle honnête faits vs specs promises, bêta fermée).
  - News `gemini-images-personnalisees-donnees-google` (images Gemini gratuites aux
    US depuis le 29/06, Nano Banana + Personal Intelligence, angle utilité vs vie privée).
  - Evergreen `pourquoi-videos-ia-air-faux` (réalisme vidéo IA : signaux de faux,
    méthode prompt + montage, gabarit complet, FAQ 6 Q/R).
- Idempotence : la garde "≥3 datés du jour" était un faux positif (3 pages piliers +
  2 pages outils pré-planifiées, pas le livrable news+evergreen du jour). Run complet fait.
- Fix SEO sûr : les 3 pages piliers (commit 0398ccb) avaient 14 liens internes vers un
  cluster jamais construit → 14 x 404 live. Tous repointés vers des articles existants.
  1 description (image-ia-guide-complet) ramenée de 166 à 159 car. Audit repassé à 0/0.
- B-5 toujours là (24 fichiers non commités), laissé intact via stash/pop.
- Gates : audit 0 err, lint OK, build OK (116 articles), CI success, 3 pages 200, IndexNow OK.

## Run 2026-06-25 — RUN #6

- 3 articles datés du 25 : 2 news + 1 evergreen.
  - News `grok-imagine-video-1-5-juin-2026` (xAI, image vers vidéo + audio natif,
    annonce officielle x.ai du 16 juin, + capture x.ai/news vérifiée).
  - News `minimax-hub-creation-video-ia` (plateforme agentique présentée au
    festival du film de Shanghai le 15 juin, source Variety, angle "l'humain garde
    le jugement créatif", + capture minimax.io).
  - Evergreen `monter-video-ia-capcut-davinci` (workflow-creatif, monter ses plans
    IA dans un vrai NLE ; sorti d'IDEAS_BACKLOG).
- Semaine creuse côté sorties fraîches (rien de solide en 24-72 h). Les 2 news
  retenues ont ~8-10 j mais sont les plus marquantes, sourcées en primaire. Dates
  des faits citées précisément. Grok = xAI/Musk : traité strictement comme outil
  créatif, factuel et neutre (pas d'angle politique).
- Audit 0 err / 0 avert. (110 art.), lint + build verts. Descriptions 155/154/142.
  En bonus, fix des 2 avert. SEO traînants depuis Run #5 (descriptions >160).
- B-5 toujours ouvert : les 24 injections de liens non commitées laissées en
  l'état, non stagées. Push surgical (git add explicite, jamais -A).
- 2 evergreen image future-datés tombaient le 25 (`images-cinema-ia-scene-film`,
  `rendu-pellicule-grain-film-ia`), non touchés. Anti-cannibalisation OK
  (evergreen du jour = workflow-creatif, pas ia-image).

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
