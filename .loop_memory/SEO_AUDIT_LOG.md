# SEO_AUDIT_LOG.md

Journal des audits SEO et techniques. Un bloc par run. Le plus récent en haut.

Lancer l'audit automatisé : `node .loop_scripts/audit.mjs` (depuis la racine).

---

## 2026-06-17 — Audit Run #1 (3 articles ajoutés)

**Build** ✅ exit 0 · **Lint** ✅ exit 0 · **audit.mjs** ✅ 0 erreur (94 articles).
3 nouveaux articles (2 news + 1 evergreen), descriptions 143/152/148 car., 0 tiret
cadratin, 3 liens internes + lien externe d'autorité chacun, heros présents.
Aucun nouveau problème introduit. Backlog inchangé : 47 descriptions >160 car.
(anciens articles) à reprendre progressivement (~2-3 par run).

---

## 2026-06-17 — Audit baseline (premier run)

**Build** : ✅ `npm run build` exit 0 (82 routes prerendered, 79 articles SSG).
**Lint** : ✅ après correctif (voir ci-dessous). Était ❌ avant.
**Stack** : Next.js 16.2.4 (App Router) + React 19 + TS + Tailwind v4. Vercel.

### État SEO — solide. Déjà en place (rien à corriger) :

- `lib/seo.ts` complet : metadata, canonical, OG, Twitter cards, robots
  indexable, troncature titre (60) / description (160) automatique, CTA auto.
- JSON-LD riche : Organization, WebSite, Blog, BlogPosting, FAQPage,
  BreadcrumbList, Person, CollectionPage, ItemList, Service. Bien structuré
  avec `@id` et références croisées.
- `app/sitemap.ts` dynamique (articles publiés + catégories + statiques),
  `revalidate 3600`. `app/robots.ts` correct (disallow `/api/`, sitemap, host).
- Pages légales en `noindex` via balise (pas de disallow → Google lit le noindex).
- Gating par date (`lib/articles.ts`) : articles future-datés non affichés tant
  que la date n'est pas atteinte. Bon pour la planification.
- Hero images : 79/79 présentes en WebP, `imageAlt` rempli partout.
- Titres uniques (0 doublon), slugs uniques (0 doublon), H1 unique par page.

### Problèmes trouvés ce run

| # | Sévérité | Problème | Statut |
|---|----------|----------|--------|
| 1 | 🟠 Haute | CI GitHub Actions ROUGE depuis ≥3 commits : `npm run lint` échouait sur `components/CookieConsent.tsx` (`react-hooks/set-state-in-effect`). Vercel déployait quand même (build seul). | ✅ CORRIGÉ |
| 2 | 🟠 Haute | 16 liens internes cassés (body + relatedSlugs) vers 12 slugs jamais créés et hors roadmap. Erreur 404 interne live. | ✅ CORRIGÉ |
| 3 | 🟡 Moyenne | 37 `description` meta > 160 car. → tronquées à 160 par `lib/seo.ts` (avec "…", CTA non ajouté). Rendu pas cassé mais sous-optimal. | ⏳ Backlog |
| 4 | 🟢 Basse | ~10 articles (lot "calendrier") : KW principal = nom d'outil seul + secondaires génériques dupliqués. Mots-clés faibles. | ⏳ Backlog |
| 5 | 🟢 Basse | Cannibalisation latente : "storyboard IA" (x2), "personnage cohérent" (x2). Voir KEYWORD_MAP. | 👀 Surveillé |

### Correctifs appliqués ce run

1. **CI lint** : ajout d'un `// eslint-disable-next-line react-hooks/set-state-in-effect`
   ciblé + commentaire explicatif sur le mount-gate volontaire dans
   `components/CookieConsent.tsx`. Comportement runtime inchangé. Lint exit 0.
2. **Liens cassés** : 16 liens repointés vers l'article existant le plus
   pertinent (body markdown + `relatedSlugs`), 6 doublons de `relatedSlugs`
   nettoyés. 0 lien cassé restant, 0 self-ref, 0 doublon. Build re-vérifié OK.
   Détail des remaps : voir le diff du commit bootstrap.

### Backlog SEO (sûr, à traiter dans les prochains runs)

- [ ] Réécrire les 37 descriptions > 160 car. (≤ 158, ton du blog, sans "…").
- [ ] Renforcer les KW faibles du lot "calendrier" (titre + keywords).
- [ ] Ajouter un fil d'Ariane visible déjà présent (vérifier sur mobile).
- [ ] Envisager un article "glossaire" pour densifier le maillage interne.
- [ ] Vérifier les Core Web Vitals en prod (LCP du hero) quand analytics dispo.

### Checks NON exécutables localement (à faire en prod / via outils)

- Crawl live (broken external links, redirects, 404 réels) → Ahrefs Site Audit
  (MCP dispo) ou crawl manuel.
- Indexabilité réelle, couverture Search Console (MCP GSC dispo si projet lié).
- Core Web Vitals terrain, poids réel des images servies.
