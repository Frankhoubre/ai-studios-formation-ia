# checklist.md — le checker (rôle évaluateur)

Le writer crée. Le checker valide contre des standards objectifs. Max 3 cycles
de révision par article. Échec après 3 → skip + log dans ERRORS_AND_BLOCKERS.md.

## A. Qualité éditoriale (refus si "non")

- [ ] L'article n'est PAS générique : il a un angle clair, une opinion ou un point de vue.
- [ ] J'ai appris quelque chose d'utilisable (exemple/méthode concrète).
- [ ] Ton conforme à STYLE_GUIDE (tutoiement, direct, humain).
- [ ] Première phrase utile, pas d'intro corporate.
- [ ] Paragraphes courts, rythme varié.
- [ ] **Zéro tiret cadratin/demi-cadratin (— ou –)** dans tout le contenu.
- [ ] Aucun mot banni (révolutionnaire, game changer, seamless, leverage, delve,
      "à l'ère de", "libérer la puissance", etc.).
- [ ] Pas de fait/chiffre/date inventé. Fait vs analyse vs opinion distingués.

## B. News uniquement

- [ ] Basé sur une vraie info récente (24-72 h, sinon 7 j justifié).
- [ ] ≥ 1 source primaire citée et liée, idéalement 2.
- [ ] Aucune rumeur présentée comme un fait.
- [ ] Aucun paragraphe recopié d'une source.
- [ ] Répond à : quoi / pourquoi ça compte / pour qui / takeaway / lien thème.

## C. Anti-cannibalisation

- [ ] Intention de recherche non déjà couverte (vérifié dans CONTENT_LEDGER).
- [ ] Titre non quasi-dupliqué d'un existant.
- [ ] KW principal pas identique à un article de même intention.
- [ ] Si chevauchement : angle plus précis OU update OU lien OU skip (décision loggée).

## D. SEO / technique

- [ ] `title` clair (≤ ~60 car. marque comprise).
- [ ] `description` présente et **≤ 160 caractères**.
- [ ] `slug` propre (kebab, sans accent), stable.
- [ ] `excerpt` présent.
- [ ] `keywords` 4-6, principal en premier, pas de bourrage.
- [ ] `imageAlt` descriptif (pas de keyword stuffing).
- [ ] `category` valide (1 des 6 slugs).
- [ ] `relatedSlugs` : 2-3, existants, distincts, ≠ slug courant.
- [ ] ≥ 2 liens internes vers slugs **existants** (markdown `/blog/...`).
- [ ] ≥ 1 lien externe d'autorité, URL valide.
- [ ] FAQ (`faq[]`) reflète les Q/R du contenu (JSON-LD FAQPage).
- [ ] CTA doux présent si pertinent (formation gratuite).
- [ ] Si l'article parle d'un outil/site : ≥ 1 vraie capture d'écran de sa page
      publique intégrée (bloc image), fichier présent dans public/images/articles/,
      alt descriptif. Page publique uniquement (jamais login/paywall).

## E. Build (gate final)

- [ ] `node .loop_scripts/audit.mjs` exit 0.
- [ ] `npm run lint` exit 0.
- [ ] `npm run build` exit 0.

Si une case A-D est "non" → renvoyer au writer avec le motif précis.
Si E échoue → corriger ou, après 3 tentatives, hard stop.

Liens : [[STYLE_GUIDE]] [[CONTENT_LEDGER]] [[KEYWORD_MAP]] [[audit]]
