# seo_audit_loop.md — audit SEO & technique quotidien

But : garder le site propre, indexable, sans liens cassés ni régression. Corriger
les problèmes sûrs directement, logger le reste.

## 1. Audit local automatisé

`node .loop_scripts/audit.mjs` (exit 1 = erreur bloquante). Couvre :
slugs/titres en double, liens internes cassés, relatedSlugs cassés/dupliqués/
self-ref, champs manquants, description > 160, hero absente, tirets cadratins,
catégorie invalide.

## 2. Build & lint (gate de déploiement)

```
npm run lint     # doit sortir 0
npm run build    # doit sortir 0
```
Une erreur de build/lint est bloquante : corriger (max 3 tentatives) avant tout
push. C'est le même gate que la CI GitHub Actions (`.github/workflows/build.yml`).

## 3. Revue ciblée (échantillon + nouveaux articles)

Sur les articles créés aujourd'hui + un échantillon tournant :
- meta title (≤ 60) et description (≤ 160) présentes et utiles ;
- 1 seul H1, hiérarchie h2/h3 cohérente ;
- canonical correct (géré par `lib/seo.ts`, vérifier qu'aucun override ne casse) ;
- OG + Twitter cards présents (auto via seo.ts) ;
- JSON-LD valide (Article + FAQ + Breadcrumb) ;
- alt text sur les images ;
- liens internes/externes valides ;
- pas d'article orphelin (chaque nouvel article reçoit ≥ 1 lien entrant).

## 4. Sitemap / robots / indexabilité

- `app/sitemap.ts` inclut bien les nouveaux articles publiés (date atteinte).
- `app/robots.ts` cohérent (disallow `/api/`, sitemap, host).
- Pages légales toujours en `noindex` (et pas en disallow, sinon Google ne lit
  pas le noindex).

## 5. Checks live (si MCP/outils dispo)

- MCP Ahrefs : Site Audit (broken external links, redirects, 404, duplicate
  content), positions, requêtes. Domaine `blog.ai-studios.fr`.
- MCP Search Console : couverture, requêtes émergentes, pages en CTR faible mais
  impressions hautes (candidates à mise à jour de title/description).
- Ne jamais inventer de données analytics. Pas d'accès → sauter, le noter.

## 6. Corriger (sûr) vs logger (risqué)

**Corriger directement** : metadata, liens internes cassés, alt manquant évident,
sitemap/robots clairement faux, erreurs de build/lint, doublons relatedSlugs,
petits soucis de gabarit.

**Logger d'abord (ne pas faire en autonomie)** : refonte, suppression de page,
migration, changement de slug publié (exige une redirection), modif structurelle
de composant à risque. → SEO_AUDIT_LOG.md + ERRORS_AND_BLOCKERS.md.

## 7. Journal

Écrire un bloc daté dans SEO_AUDIT_LOG.md : build/lint, problèmes trouvés,
corrigés, restants, et les checks non exécutables ce jour.

Liens : [[SEO_AUDIT_LOG]] [[ERRORS_AND_BLOCKERS]] [[publish_loop]]
