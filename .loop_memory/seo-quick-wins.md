# seo-quick-wins.md — Optimisations réalisées le 2026-07-09

Basées sur l'export GSC du 09/07/2026 (données réelles : 26/06 → 07/07, 11 clics,
~370 impressions, position moyenne ~8). Site indexé depuis fin juin seulement :
échantillons petits, à recontrôler dans 2 à 4 semaines.

## 1. Correctif systémique : H2 en anglais sur 89 articles

**Problème** : 264 titres de section utilisaient des gabarits anglais ("Core
Concepts : …", "Practical Workflow : …", "The Trench Warfare Section : …") sur un
blog 100 % francophone. Signal "généré à la chaîne", H2 sans mot-clé, contraire à
la charte.
**Fait** : préfixes retirés par script sur 88 fichiers + 2 titres orphelins réécrits
(`monter-video-ia-capcut-davinci`), fautes d'accent des intitulés dupliqués corrigées
("parait cinematographique" → "paraît cinématographique", etc.).
**Impact attendu** : H2 lisibles et indexables, cohérence de langue, meilleure
éligibilité aux featured snippets.

## 2. Quick wins par page (données GSC → action)

| Page | Donnée GSC | Problème | Action réalisée |
|---|---|---|---|
| `creer-logo-ia-methode-outils` | "comment créer un logo avec ia" ~14 imp, pos 24-25 ; page 23 imp, 0 clic | Title/H1 pas alignés sur la question ; pas de réponse directe | Title → "Comment créer un logo avec l'IA : le guide" ; meta réécrite ; KW ajouté ; liste "4 étapes" snippet-ready en intro ; H2 workflow → "Comment créer un logo avec l'IA en 3 étapes" |
| `formation-ia-video` | "formation ia vidéo" 6 imp pos 14,7 ; page pos 10,5 | Title de 98 caractères tronqué en SERP ; KW absent de la meta ; aucune section "choisir sa formation" (intention commerciale) | Title → "Formation IA vidéo : par où commencer" (38 c.) ; meta avec KW exact + CTA ; nouvelle section H2 "Choisir une formation IA vidéo : les critères" avec checklist ; 5 coquilles corrigées ; lien entrant ajouté depuis creer-video-ia-gratuit |
| `meilleurs-sites-video-ia-gratuits` | "meilleure ia video gratuite" 2 imp pos 21,5 ; page pos 15,8 | La requête "meilleure" n'avait aucune réponse directe | Title → "Meilleure IA vidéo gratuite : comparatif" ; meta interrogative ; nouvelle section H2 "Quelle est la meilleure IA vidéo gratuite ?" + tableau par usage + liens vers guides Kling/Pika-Luma/Hailuo |
| `photos-produit-ia-shooting` | "photo produit ia" pos 24, "ia photo produit" pos 23, "mise en scène produit" pos 17 | Title au pluriel vs requête au singulier ; "mise en scène produit" non exploité en KW | Title → "Photo produit IA : remplacer le shooting" ; meta avec KW exact ; KW "mise en scène produit" ajouté ; H2 workflow renommé |
| `runway-seedance-2-fast-aleph-2` | 19 imp, pos 7,2, CTR 0 % ("aleph 2.0" pos 8) | Title purement descriptif, aucun bénéfice | Title → "Aleph 2.0 sur Runway : montage au prompt" ; meta orientée bénéfice |
| `comfyui-workflow-nodal-debutant` | Top page (2 clics, 55 imp, pos 6,9) ; "comfyui workflow" pos 30 | La requête large "comfyui workflow" mal couverte ; peu de liens entrants | Nouvelle section H2 "Où trouver des workflows ComfyUI prêts à l'emploi" (templates, PNG embarquant le workflow, doc officielle en lien externe) ; lien entrant ajouté depuis stable-diffusion-debutant-demarrer |
| `prompt-negatif-ia-images-propres` | Top page (2 clics, 55 imp, pos 8,2) | Title de 61 caractères tronqué | Title → "Prompt négatif IA : nettoyer tes images" (40 c.) |
| `creer-video-ia-gratuit` | 1 clic, pos 13,3 | Title de 55 caractères tronqué | Title → "Créer une vidéo IA gratuitement : le guide" ; lien sortant vers formation-ia-video ajouté |

Tous les articles modifiés ont reçu `updatedAt: 2026-07-09`.

## 3. À surveiller (GSC dans 2 à 4 semaines)

- **CTR** des 8 pages ci-dessus (surtout Runway/Aleph : 0 % → objectif > 3 %).
- **Positions** : "comment créer un logo avec ia" (25 → top 10 visé), "formation ia
  vidéo" (14,7 → top 10), "meilleure ia video gratuite" (21,5 → top 15), "photo
  produit ia" (24 → top 15), "comfyui workflow" (30 → top 15).
- **`prompt-court-ou-long-ia-image`** (article JSON débutant) : 1 clic, pos 4,7,
  CTR 16,7 % : bon signal, envisager de le promouvoir en module TS enrichi si la
  tendance se confirme.
- **"agence video ia"** (pos 49 sans page dédiée) : couvert par J2 du plan 90 jours.
- Catégories (`/categories/*`) : impressions faibles mais présentes ; enrichir les
  descriptions de catégorie si elles restent visibles dans les exports suivants.

## 4. Actions non réalisées volontairement

- Pas de refonte des articles bootstrap d'avril (H2 identiques entre eux après
  nettoyage) : à différencier au fil des mises à jour de contenu, pas en masse.
- Pas d'article nouveau créé aujourd'hui : c'est le rôle du plan 90 jours
  (`seo-90-day-plan.md`).
- `combien-coute-ia-creative-mois` vs `cout-premier-mois-ia-image-video` : fusion
  envisagée seulement si le prochain export montre une cannibalisation réelle.
