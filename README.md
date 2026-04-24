# AI Studios Blog

Blog premium francophone pour **AI Studios** (Frank Houbre) : IA créative, images, vidéos, publicités, contenus cinématiques et workflows professionnels. Construit avec **Next.js (App Router)**, **TypeScript** et **Tailwind CSS**. Contenu statique local, sans CMS ni base de données.

Domaine de production : `https://blog.ai-studios.fr`

## Prérequis

- Node.js 20+ recommandé
- npm

## Installation

```bash
npm install
```

## Développement local

```bash
npm run dev
```

Ouvrez `http://localhost:3000`.

## Build de production

```bash
npm run build
npm start
```

## Lint

```bash
npm run lint
```

## Déploiement sur Vercel

1. Créez ou ouvrez un projet Vercel **connecté au dépôt** `Frankhoubre/ai-studios-formation-ia` (branche `main`).
2. **Root directory** : laissez la racine du repo (là où se trouvent `package.json` et `app/`).
3. Framework : Next.js (détecté automatiquement), Node 20+.
4. Vérifiez que le dernier déploiement **Production** est en statut **Ready** (icône verte).
5. Ouvrez l’URL `https://<nom-du-projet>.vercel.app` : la home du blog doit s’afficher. Si cette URL est en **404**, le domaine personnalisé le sera aussi : corrigez d’abord le build ou le mauvais projet.
6. **Settings → Domains** : ajoutez `blog.ai-studios.fr` sur **ce même projet**. DNS : enregistrement **CNAME** `blog` → `cname.vercel-dns.com` (ou les valeurs indiquées par Vercel).
7. Les routes `robots.txt` et `sitemap.xml` sont générées automatiquement.

Les URLs canoniques et Open Graph utilisent la constante `SITE_URL` dans `lib/constants.ts`. Adaptez-la si vous déployez sur un domaine de preview temporaire.

### 404 sur `blog.ai-studios.fr` : diagnostic (le code build correctement)

Si la page affiche `The page could not be found` avec `server: Vercel`, ce n’est **pas** un bug Next.js dans ce dépôt : c’est que **Vercel ne sert aucun déploiement “Production” valide** pour le projet auquel le domaine est rattaché. Test : ouvrez **`https://ai-studios-formation-ia.vercel.app`** (ou le nom exact affiché sous **Settings → Domains**). Tant que cette URL est en **404**, `blog.ai-studios.fr` le sera aussi.

À faire dans l’ordre sur Vercel :

1. **Bon projet** : le projet doit être relié au repo GitHub **`Frankhoubre/ai-studios-formation-ia`**, pas à un autre dépôt ou à un projet vide.
2. **Branche de production** : **Settings → Git → Production Branch** = **`main`** (si ton défaut est `master`, aucun déploiement prod ne part).
3. **Réglages de build** : **Settings → General** : **Root Directory** = vide (racine du repo). **Settings → Build & Deployment** : **Framework Preset** = Next.js. **Output Directory** = **vide** (si tu y mets `out`, `dist`, `.next`, etc., le site casse).
4. **Node** : **Settings → General → Node.js Version** = **20.x** (recommandé pour Next 16).
5. **Dernier déploiement** : onglet **Deployments** → le déploiement marqué **Production** sur `main` doit être **Ready** (vert). S’il est en erreur, ouvrez les **logs** : la cause y est écrite (install, build, etc.).
6. **Domaine** : **Settings → Domains** : `blog.ai-studios.fr` doit apparaître sur **ce** projet. Retirez-le de tout autre projet Vercel qui pourrait le réclamer.
7. Après correction : **Deployments → … → Redeploy** (case “Use existing Build Cache” décochée une fois pour forcer un build propre).

Vérification locale côté dépôt : le workflow GitHub **Build** (`.github/workflows/build.yml`) exécute `npm ci`, `lint` et `build` sur Ubuntu. S’il est vert sur `main`, le problème est uniquement la configuration ou le compte Vercel.

Déploiement manuel (pour voir l’erreur dans le terminal) :

```bash
npm i -g vercel@latest
cd /chemin/vers/ai-studios
vercel login
vercel link    # lier au bon projet
vercel --prod
```

## Ajouter un article

1. Créez un fichier dans `content/articles/posts/` qui exporte un objet `Article` typé (voir les exemples existants).
2. Importez et ajoutez l’article au tableau `articles` dans `content/articles/articles.ts`.
3. Ajoutez une image hero PNG ou WebP (ratio 16:9 recommandé) dans `public/images/articles/{slug}.png`.
4. Mettez à jour `image` et `imageAlt` dans l’article.
5. Vérifiez `relatedSlugs` et les liens internes `[texte](/blog/slug)`.

Structure attendue : voir `lib/types/article.ts` (titres, slug, SEO, blocs de contenu, FAQ, etc.).

## Modifier les catégories

Éditez `lib/categories.ts` (nom, slug, description). Les pages `/categories/[slug]` et les filtres du blog se basent sur ce fichier.

## Structure utile

- `app/` : routes, `layout.tsx`, `robots.ts`, `sitemap.ts`
- `components/` : UI réutilisable (header, cartes, SEO JSON-LD, etc.)
- `content/articles/` : données éditoriales
- `lib/` : helpers SEO, articles, catégories

## GitHub

Remote prévu :

```text
https://github.com/Frankhoubre/ai-studios-formation-ia.git
```

Initialisation et push :

```bash
git init
git remote add origin https://github.com/Frankhoubre/ai-studios-formation-ia.git
# ou si le remote existe déjà :
# git remote set-url origin https://github.com/Frankhoubre/ai-studios-formation-ia.git

git add .
git commit -m "Create AI Studios SEO blog"
git branch -M main
git push -u origin main
```

Si GitHub demande une authentification (2FA, token, SSO), connectez-vous comme d’habitude puis relancez :

```bash
git remote set-url origin https://github.com/Frankhoubre/ai-studios-formation-ia.git
git branch -M main
git push -u origin main
```

## Licence

Projet privé AI Studios. Tous droits réservés sauf mention contraire.
