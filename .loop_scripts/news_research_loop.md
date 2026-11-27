# news_research_loop.md — 2 articles news / jour

But : 2 articles d'actualité IA créative, basés sur de l'info récente, réelle,
sourcée. La news est de la **matière première**, jamais un texte à recopier.

## 1. Collecte (priorité 24-72 h)

1. Lire NEWS_SOURCES.md. Lancer les requêtes Google News + parcourir les RSS et
   blogs officiels. Outils selon disponibilité : WebSearch/WebFetch, Bright Data
   (skills `search`, `scrape`), `curl` sur les flux RSS publics.
2. Retenir les sujets liés au thème du site : génération image/vidéo/audio,
   sorties de modèles, release notes d'outils, fonctionnalités créatives,
   cinéma/pub IA. Ignorer l'IA "entreprise/finance" hors sujet.
3. Pour chaque sujet candidat, exiger :
   - une **source primaire** (blog/officiel/release) + idéalement 1 corroboration ;
   - une date claire (publier la fraîcheur, ex. "annoncé le 16 juin").
4. Pas de news forte en 24-72 h ? Prendre la plus importante des 7 derniers jours.
   Toujours rien de solide ? **Ne pas publier de news** ce jour (hard stop news),
   logger dans ERRORS_AND_BLOCKERS.md, et ne sortir que l'evergreen + l'audit.

## 2. Choix des 2 angles (anti-cannibalisation)

- 2 sujets distincts, ou 1 sujet sous 2 angles vraiment différents.
- Vérifier le CONTENT_LEDGER : pas déjà traité.
- Préférer l'angle "ce que ça change pour le créateur" à la simple reprise.

## 3. Rédaction (STYLE_GUIDE strict)

Chaque article news répond à :
- **Quoi ?** ce qui s'est passé, factuel, daté, sourcé.
- **Pourquoi ça compte ?** l'analyse, l'enjeu réel.
- **Qui est concerné ?** créateurs, fondateurs, agences, débutants…
- **Quoi en retenir / faire ?** le takeaway concret et actionnable.
- **Lien avec le thème du site** : workflow, image, vidéo, cinéma IA.

Distinguer explicitement fait / analyse / opinion. Citer les sources avec liens
(liens externes, en plus des liens internes obligatoires).

Structure conseillée (assouplie vs evergreen) :
- 1-2 paragraphes : le fait, daté et sourcé.
- H2 "Ce que ça change" : analyse.
- H2 "Pour qui, et quoi en faire" : impact + takeaway, avec table ou liste si utile.
- 2-3 liens internes vers des evergreen pertinents (effet cluster).
- FAQ courte (3-4 Q/R) pour le JSON-LD.
- Métadonnées complètes.

## 4. Catégorie & tags

Ranger dans la catégorie la plus proche (souvent `ia-video`, `ia-image`, ou
`business-creatif`). Tags = outils/sujets cités.

## 5. Anti-pièges

- Jamais une rumeur en fait. Si non confirmé : "selon X", "non confirmé".
- Jamais de chiffre/benchmark inventé.
- Pas de copie de paragraphe source (reformulation profonde + analyse propre).
- Sujet sensible (procès, deepfake, politique, régulation) → factuel, neutre,
  sourcé ; au moindre doute, passer en revue humaine (voir autonomie).

## 6. Sortie

Deux modules `content/articles/posts/<slug>.ts` datés du jour (Europe/Paris) pour
publication immédiate. Mettre à jour CONTENT_LEDGER (sources incluses).

Liens : [[NEWS_SOURCES]] [[STYLE_GUIDE]] [[CONTENT_LEDGER]] [[checklist]]
