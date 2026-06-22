# CLAUDE.md — AI Studios Blog

Blog premium francophone d'AI Studios (Frank Houbre) : IA créative, images, vidéos,
publicités, contenus cinématiques, workflows pro. Next.js 16 (App Router), TypeScript,
Tailwind v4. Contenu statique en modules TS (`content/articles/posts/<slug>.ts`,
enregistrés dans `content/articles/articles.ts`). Pas de CMS. Déploiement Vercel auto
depuis `main`. Domaine prod : `https://blog.ai-studios.fr`.

---

## Charte éditoriale, SEO et qualité (règles permanentes)

Ces règles s'appliquent à **tout** : nouvel article, réécriture, mise à jour de page,
optimisation SEO. Le but : chaque article doit être utile, agréable à lire, structuré,
optimisé SEO, crédible, **humain**, dans le style de Frank Houbre. Jamais générique,
jamais "écrit à la chaîne", jamais du remplissage.

> Ces règles sont la version canonique pour toute session. Le daily growth loop les
> implémente via `.loop_memory/STYLE_GUIDE.md` (la voix en détail) et
> `.loop_scripts/checklist.md` (le checker). En cas de doute, ces trois fichiers disent
> la même chose : si l'un évolue, mettre les autres à jour.

### 1. Style (écrire comme une personne, pas comme une IA)

- Français, **tutoiement** ("tu", "ton workflow"). Simple, direct, vivant, concret.
- Ton Frank Houbre : humain, clair, utile, passionné, accessible. Jamais professoral,
  froid, corporate ou marketing forcé.
- Opinion assumée quand c'est mérité ("celui-là, oublie-le").
- Un exemple concret vaut mieux qu'un adjectif. Une idée par paragraphe.
- Paragraphes courts (2 à 5 phrases), lisibles sur mobile. Varier la longueur des
  phrases. Première phrase = la valeur, pas d'échauffement.

**Interdits absolus :**

- **Aucun tiret long (— ou –).** Pour séparer deux idées : virgule, point, deux-points,
  parenthèses, ou reformuler. C'est la règle la plus stricte, vérifiée avant tout commit.
- Pas d'intro vide ("Dans un monde où…", "À l'ère de l'IA…", "À l'heure où…").
- Pas de débuts IA ("Il est important de noter que…", "En conclusion, il est essentiel…").
- Bannis (FR/EN) : révolutionnaire, game changer, changer la donne, incontournable (en
  pagaille), en constante évolution, seamless, fluide et sans couture, libérer/exploiter
  la puissance/le potentiel, leverage, delve, plonger au cœur de, **paysage/landscape au
  sens figuré**, robuste/robust.
- Pas de tournures trop symétriques ou scolaires, pas de listes trop "propres" qui sentent
  le généré. Pas de répétitions d'idées, pas de keyword stuffing, pas de promesses exagérées.
- Zéro faute d'orthographe, de grammaire, de typographie.

### 2. SEO (naturel, jamais forcé)

Chaque article : un **mot-clé principal** clair + secondaires naturels ; `title` qui donne
envie de cliquer (≤ ~60 car. marque comprise) ; **meta `description` ≤ 160 caractères**
(viser 140-158, au-delà `lib/seo.ts` tronque et n'ajoute pas le CTA) ; H1 unique ;
structure H2/H3 claire ; intro qui accroche vite ; paragraphes courts ; listes à puces
quand c'est utile ; **gras** sur les idées fortes (pas partout) ; *italique* avec modération ;
slug propre kebab-case sans accent (stable, jamais changé sans redirection) ; intention de
recherche respectée. Ne jamais sacrifier la lecture pour caser un mot-clé.

### 3. Liens

- **≥ 2 liens internes** pertinents par article, en markdown dans le texte d'un `p` :
  `[ancre naturelle](/blog/slug-existant)`. Ancres variées, jamais "cliquez ici". Vérifier
  que le slug existe (un lien interne 404 est déjà arrivé ici).
- **≥ 1 lien externe d'autorité** (doc officielle d'un outil, page de release, Wikipédia,
  étude, média spécialisé). Les liens externes doivent enrichir, pas décorer. Ne pas linker
  un concurrent direct sans raison.

### 4. Crédibilité

- Toute affirmation factuelle, technique ou chiffrée s'appuie sur une source fiable quand
  c'est possible. **Ne jamais inventer** chiffres, citations, études, dates, benchmarks.
- Si une info n'est pas vérifiable : la donner comme hypothèse, observation ou opinion.
- Distinguer clairement fait / analyse / opinion. News : ≥ 1 source primaire liée, jamais
  une rumeur présentée comme un fait, aucun paragraphe recopié.

### 5. Valeur pour le lecteur

Avant d'écrire ou de modifier : pourquoi on cherche cet article, quel problème il résout,
ce qu'on doit comprendre après lecture, ce qu'il apporte de mieux qu'un contenu moyen.
Chaque article contient **au moins une partie vraiment utile** : méthode, checklist, exemple
concret, comparaison, erreur fréquente, mini-analyse, plan d'action, cas pratique, ou
explication simple d'un concept compliqué. Une **FAQ** (champ `faq[]`, idéalement 6 Q/R)
quand le sujet s'y prête. Une conclusion qui donne une vraie sortie au lecteur, pas un résumé creux.

### 6. Anti-cannibalisation

Avant de créer/optimiser, vérifier qu'aucun article ne couvre déjà la même intention
(voir `.loop_memory/CONTENT_LEDGER.md`). Si chevauchement : différencier l'angle, changer le
mot-clé principal de l'un, lier les deux s'ils sont complémentaires, fusionner, ou skip.
Chaque article a un rôle clair dans l'architecture. Préserver les URL indexées. Ne supprimer
aucun article sans raison solide.

### 7. Métadonnées `Article` (voir `lib/types/article.ts`)

`title, slug, description, excerpt, category, tags, date, updatedAt, readingTime, author,
image, imageAlt, keywords, content, faq, relatedSlugs`. `imageAlt` descriptif et naturel
(pas de bourrage). `keywords` 4-6, principal en premier. `relatedSlugs` 2-3 existants et
distincts. `category` parmi : `ia-image`, `ia-video`, `prompting`, `storytelling`,
`workflow-creatif`, `business-creatif`. `author` = `{ name: "Frank Houbre", url: "https://www.ai-studios.fr" }`.
Le tableau `faq[]` doit refléter les Q/R du contenu (il alimente le JSON-LD FAQPage).

### 8. CTA

CTA doux. Le produit poussé est la **formation IA gratuite** (`FORMATION_FREE_URL` dans
`lib/constants.ts`) et la communauté Skool. Une note fondateur en fin d'article suffit.
ScreenWeaver n'est pas connecté à ce repo : ne pas l'inventer.
**Ne jamais mentionner d'« essai gratuit de 7 jours » / « 7 jours offerts » ni aucune
période d'essai pour la formation ou Skool : cette offre n'existe plus. La formation est
simplement « gratuite », sans essai limité dans le temps.**

### 9. Checklist finale avant commit

Intention respectée ? Titre cliquable ? Intro qui donne envie ? Ça sonne humain ? Zéro
tournure IA ? Zéro tiret long ? SEO optimisé sans être forcé ? Liens internes utiles et
valides ? Liens externes crédibles ? Sources vérifiables ? Structure claire, paragraphes
agréables ? Plus de valeur qu'un article moyen ? Conclusion utile ? Zéro faute ? `imageAlt`
correct ? Et toujours : **`node .loop_scripts/audit.mjs`**, **`npm run lint`**,
**`npm run build`** verts avant de pousser.

---

## Commandes

- Dev : `npm run dev` (http://localhost:3000) · Build : `npm run build` · Lint : `npm run lint`
- Audit contenu/SEO : `node .loop_scripts/audit.mjs` (93 articles, vérifie liens, longueurs, hero)
- Hero image : `python scripts/generate-hero.py` (cf. `.loop_memory` pour les flags ; `GEMINI_API_KEY` dans `.env`, git-ignoré, ne jamais committer)
- Cohérence du registre : `python3 scripts/check-registry.py` (vérifie que chaque import d'`articles.ts` + son hero est suivi par git ; évite le build Vercel cassé "Module not found")

## Notes infra

- Articles datés dans le futur : masqués jusqu'à leur date (`lib/articles.ts`).
- Daily growth loop : tâche planifiée `daily-growth-loop-ai-studios` (08:10 Europe/Paris),
  mémoire dans `.loop_memory/`, playbooks dans `.loop_scripts/`. Lire ces fichiers avant tout
  travail de loop. Attention aux push concurrents avec l'autopilot.
- Hook anti-build-cassé : `.githooks/pre-push` lance `scripts/check-registry.py` et bloque
  tout push où `articles.ts` importe un fichier non commité. Activation par clone (une fois) :
  `git config core.hooksPath .githooks`. Contournement exceptionnel : `git push --no-verify`.
