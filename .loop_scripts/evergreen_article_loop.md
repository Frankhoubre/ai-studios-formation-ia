# evergreen_article_loop.md — 1 article evergreen / jour

But : 1 article qui renforce l'autorité topique du site sans cannibaliser
l'existant. Utile même sans le produit.

## 1. Choisir le sujet (anti-cannibalisation d'abord)

0. **Priorité au plan 90 jours** : lire `.loop_memory/seo-90-day-plan.md` et
   prendre le prochain article non encore publié (vérifier slug dans le repo +
   ledger). Suivre sa ligne : slug, KW, angle, maillage, parade
   anti-cannibalisation. Passer au point 2 uniquement si le plan est épuisé, si
   le sujet a été couvert entre-temps (appliquer sa parade ou glisser au jour
   suivant), ou si une actu forte prend la place du jour (l'article du plan
   glisse, il n'est pas perdu).
1. Lire seo-content-map.md (mots-clés réservés par page, articles à ne pas
   créer), CONTENT_LEDGER.md, KEYWORD_MAP.md, IDEAS_BACKLOG.md.
2. Hors plan : piocher un gap réel (section "Gaps" de KEYWORD_MAP, ou IDEAS_BACKLOG).
3. Vérifier dans le repo : `grep -ri "<mot-clé>" content/articles/posts/` et la
   liste des slugs. Chercher un titre/slug/intention déjà couvert.
4. Décision cannibalisation :
   - Intention déjà couverte → choisir un angle plus précis, OU mettre à jour
     l'article existant, OU ajouter un lien interne, OU **passer** le sujet.
   - Deux articles ne doivent jamais viser la même intention + même KW principal.

## 2. Type d'evergreen (choisir selon le gap)

Guide pas-à-pas · erreurs à éviter · décryptage de workflow · comparatif ·
glossaire · guide débutant · guide avancé · cas d'usage · problème→solution ·
opinion étayée d'exemples · template · checklist · étude de cas.

## 3. Intention de recherche

Définir clairement : informationnelle (apprendre), comparative (choisir),
transactionnelle douce (faire/produire). Le titre et le H1 doivent matcher.

## 4. Rédaction

Suivre STYLE_GUIDE + le gabarit complet (concepts clés / méthode pas à pas /
pièges / FAQ). Tous les H2 en français et spécifiques au sujet : les intitulés
anglais "Core Concepts / Practical Workflow / Trench Warfare" sont interdits
(seuls les `id` historiques restent). L'article doit aider même sans acheter
quoi que ce soit.

## 5. Maillage

- ≥ 2 liens internes vers des articles **du même cluster** (effet topical).
- Ajouter, si pertinent, un lien **entrant** depuis 1-2 vieux articles vers le
  nouveau (renforce le nouvel article). Le faire proprement, ancre naturelle.
- 1 lien externe d'autorité.

## 6. Métadonnées + hero + enregistrement

Comme pour tout article (voir daily_content_loop §article_creation_process).
Date du jour pour publication immédiate, ou future pour planifier.

## 7. Checker + mémoire

Passer la checklist, puis mettre à jour CONTENT_LEDGER, KEYWORD_MAP (nouveau
cluster/KW + retirer le sujet d'IDEAS_BACKLOG). Si l'article vient du plan 90
jours : le cocher dans seo-90-day-plan.md (ajouter "✅ publié YYYY-MM-DD" sur
sa ligne).

Liens : [[KEYWORD_MAP]] [[CONTENT_LEDGER]] [[IDEAS_BACKLOG]] [[STYLE_GUIDE]] [[checklist]] [[seo-90-day-plan]] [[seo-content-map]]
