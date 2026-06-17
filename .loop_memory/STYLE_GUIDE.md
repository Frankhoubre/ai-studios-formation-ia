# STYLE_GUIDE.md — écrire comme Frank Houbre

But : tout article du blog doit donner l'impression qu'une vraie personne qui
fabrique des choses l'a écrit. Pas un assistant. Pas une ferme de contenu.

Ce fichier est lu au début de chaque run et appliqué à chaque article, news ou
evergreen. Le checker (voir `.loop_scripts/checklist.md`) refuse tout article qui
ne le respecte pas.

---

## 1. La voix

- Français, **tutoiement** ("tu", "ton workflow", "tu verras"). C'est la norme du
  blog, vérifiée sur les 79 articles existants.
- Simple, direct, curieux, utile.
- Opinion assumée quand c'est mérité. On a le droit de dire "c'est une perte de
  temps" ou "celui-là, oublie-le".
- Concret avant tout. Un exemple vaut mieux qu'un adjectif.
- Un peu cinématique quand ça sert (le blog parle d'image et de cinéma), jamais
  pour faire joli.
- Humain. On peut s'adresser au lecteur, reconnaître une galère, nuancer.

## 2. Interdits absolus (refus automatique du checker)

- **Pas de tirets cadratins (—) ni demi-cadratins (–).** Utiliser virgules,
  parenthèses, ou deux points. C'est la règle la plus stricte. Vérifier le
  caractère `—` dans tout le contenu avant publication.
- Pas d'intro corporate ("Dans un monde où...", "À l'ère de l'IA...").
- Pas de remplissage SEO vide.
- Pas de fausse excitation, pas de fausse certitude.
- Pas de chiffres inventés, pas de faits inventés, pas de dates inventées.
- Pas de marketing forcé.
- Jamais "en tant qu'IA".
- Bannis (FR et EN) : "dans un monde en constante évolution", "révolutionnaire",
  "game changer", "changer la donne" (sauf usage rare et justifié), "seamless",
  "fluide et sans couture", "libérer la puissance de", "exploiter le potentiel",
  "leverage", "delve", "plonger au cœur de", "paysage" / "landscape" au sens
  figuré, "robuste" / "robust", "incontournable" en pagaille, "à l'heure où".

## 3. Rythme et structure

- Paragraphes courts (2 à 5 phrases). Lisibles sur mobile.
- Première phrase = la valeur, tout de suite. Pas d'échauffement.
- Varier la longueur des phrases. Une courte after une longue, ça respire.
- Une idée par paragraphe.
- Listes quand c'est une liste, pas quand c'est un raisonnement.

## 4. Le gabarit d'article (format en place sur le site)

Chaque article est un module TypeScript `content/articles/posts/<slug>.ts` qui
exporte un objet typé `Article` (voir `lib/types/article.ts`). Structure
observée et à reproduire :

1. **3 paragraphes d'intro** (`type: "p"`).
   - P1 : la galère du lecteur, posée frontalement.
   - P2 : la promesse concrète ("à la fin, tu sauras...").
   - P3 : l'angle, la phrase qui tranche.
2. **H2 "Core Concepts"** (`id: "core-concepts"`) + 2 `h3` avec contenu.
3. **H2 "Practical Workflow"** (`id: "practical-workflow"`) + un `table`
   (`caption`, `headers`, `rows`) + une liste `ol` d'étapes + un **Pro Tip**
   (un `p` qui commence par `> Pro Tip : ...`) + 2 à 3 liens internes + 1 lien
   externe d'autorité (Wikipédia ou source officielle).
4. **H2 "The Trench Warfare Section"** (`id: "trench-warfare"`) + 4 erreurs, une
   `h3` par erreur, chacune avec le symptôme puis un "Fix concret :".
5. **H2 "FAQ"** (`id: "faq"`) + 6 questions (`h3` `id: "faq-1"`...`faq-6`),
   chaque réponse en un `p`. Ces 6 Q/R doivent **refléter** le tableau `faq` de
   l'objet (même questions, mêmes réponses) car ce tableau alimente le JSON-LD
   FAQPage.
6. Commentaire final : `// <!-- PUBLICATION DATE: YYYY-MM-DD -->`.

> Note : ce gabarit "Core/Workflow/Trench/FAQ" est celui des evergreen. Les
> articles **news** peuvent assouplir la structure (voir
> `.loop_scripts/news_research_loop.md`) mais gardent intro forte + analyse +
> takeaway + FAQ courte + métadonnées complètes.

## 5. Champs `Article` obligatoires

`title, slug, description, excerpt, category, tags, date, updatedAt,
readingTime, author, image, imageAlt, keywords, content, faq, relatedSlugs`.

Contraintes :
- `title` : clair, < 60 caractères marque comprise idéalement (le système
  tronque au-delà mais autant viser juste).
- `description` (meta) : **≤ 160 caractères**. Au-delà, `lib/seo.ts` tronque et
  n'ajoute pas le CTA. Vise 140 à 158 pour laisser la place au CTA.
- `slug` : kebab-case, sans accent, descriptif, stable (ne jamais changer un
  slug publié sans redirection).
- `excerpt` : 1 à 2 phrases d'accroche, ton du blog.
- `imageAlt` : descriptif, naturel, pas de bourrage de mots-clés.
- `keywords` : 4 à 6, le principal en premier, pas de répétition mécanique.
- `relatedSlugs` : 2 à 3 slugs **existants et distincts**, jamais le slug de
  l'article lui-même.
- `category` : un des 6 slugs valides (`ia-image`, `ia-video`, `prompting`,
  `storytelling`, `workflow-creatif`, `business-creatif`).
- `author` : `{ name: "Frank Houbre", url: "https://www.ai-studios.fr" }`.

## 6. Liens internes

- Au moins 2 liens internes pertinents par article, en markdown dans le texte
  d'un `p` : `[ancre naturelle](/blog/slug-existant)`.
- Ancres variées et descriptives, jamais "cliquez ici", jamais la même ancre
  partout.
- 1 lien externe d'autorité minimum (Wikipédia FR, doc officielle d'un outil,
  page de release). Vérifier que l'URL existe.
- Ne jamais lier vers un slug inexistant (cause de bug live, déjà corrigé une
  fois). Le checker vérifie chaque `/blog/...`.

## 7. CTA

- CTA doux, jamais agressif. Le produit du site est la **formation IA gratuite**
  (`FORMATION_FREE_URL` dans `lib/constants.ts`) et la communauté Skool.
- Une note fondateur ("c'est ce qu'on creuse dans la formation gratuite") en fin
  d'article suffit. Pas de CTA à chaque section.
- **ScreenWeaver** : ce produit n'est pas connecté à ce repo (le site pousse la
  formation AI Studios). Ne pas l'inventer. Si un jour il est intégré, le
  positionner ainsi : "ScreenWeaver n'est pas un bouton magique qui fabrique un
  film, c'est l'espace de travail entre l'écriture et la production". D'ici là,
  CTA = formation gratuite.

## 8. Faits, sources, honnêteté

- Distinguer clairement fait / analyse / opinion.
- Pour les articles news : jamais une rumeur présentée comme un fait. Citer au
  moins deux sources quand c'est possible, lier les sources officielles.
- Ne pas recopier de paragraphes. La news est une matière première, pas un
  texte à réécrire de près.
- Pas de chiffres ou benchmarks inventés. Si on ne sait pas, on le dit ou on
  l'omet.

## 9. Test de relecture (le lecteur doit sentir...)

Avant de valider, se demander :
- Est-ce qu'une vraie personne qui fabrique des images et des vidéos écrirait ça ?
- Est-ce que j'ai appris quelque chose d'utilisable ?
- Est-ce qu'il y a un angle, ou c'est de la bouillie générique ?
- Est-ce que je peux retirer 20 % du texte sans rien perdre ? (Si oui, retire.)

Liens : [[CONTENT_LEDGER]] [[KEYWORD_MAP]] [[NEWS_SOURCES]]
