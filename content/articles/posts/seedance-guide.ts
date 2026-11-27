import type { Article } from "@/lib/types/article";

export const seedanceGuide: Article = {
  title: "Seedance : le guide du modèle vidéo de ByteDance",
  slug: "seedance-guide",
  description:
    "Seedance 2.0 ou 2.5 ? Versions, 50 références, 30 secondes, prix réels de l'API, accès depuis la France et méthode Draft pour payer moins cher chaque essai.",
  excerpt:
    "Seedance existe en six versions, sur une demi-douzaine de plateformes, avec des prix qui varient du simple au quintuple. Voici laquelle prendre, où l'utiliser et comment ne payer le 1080p qu'une fois.",
  category: "ia-video",
  tags: ["seedance", "bytedance", "seedance 2.5", "dreamina", "byteplus", "vidéo ia"],
  date: "2026-10-15",
  updatedAt: "2026-10-15",
  readingTime: 10,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/seedance-guide.webp",
  imageAlt:
    "Dans un studio de danse en fin de soirée, une chorégraphe filme au smartphone sur stabilisateur une jeune danseuse en plein mouvement, pendant que des tirages photo numérotés sont scotchés sur le grand miroir du fond et qu'un ordinateur portable ouvert est posé sur le parquet",
  keywords: [
    "seedance",
    "seedance ai",
    "bytedance video",
    "seedance 2.0",
    "seedance prix",
    "dreamina seedance",
  ],
  relatedSlugs: [
    "seedance-2-5-video-ia-30-secondes",
    "hailuo-wan-seedance-video-ia",
    "runway-seedance-2-fast-aleph-2",
  ],
  faq: [
    {
      question: "Qu'est-ce que Seedance ?",
      answer:
        "Seedance est la famille de modèles de génération vidéo de ByteDance, développée par son équipe Seed. Elle génère des vidéos avec le son à partir de texte, d'images, de vidéos et d'audio de référence. Les versions actives en octobre 2026 vont de Seedance 1.0 Pro à Seedance 2.5, la plus récente, qui produit jusqu'à 30 secondes en une seule génération.",
    },
    {
      question: "Quelle différence entre Seedance 2.0 et Seedance 2.5 ?",
      answer:
        "La 2.5 double la durée maximale (30 secondes contre 15), accepte 50 références au lieu de 15 (30 images, 10 vidéos, 10 audios) et sort le 1080p en 10 bits. En échange, elle coûte environ 54 % de plus sur l'API BytePlus et ne fait pas de 4K, que seule la 2.0 propose. Pour un plan de moins de 15 secondes avec peu de références, la 2.0 suffit.",
    },
    {
      question: "Combien coûte Seedance ?",
      answer:
        "Sur l'API BytePlus, les exemples officiels donnent pour Seedance 2.5, sans vidéo en entrée et en 16:9, 0,103 $ la seconde en 480p, 0,231 $ en 720p et 0,569 $ en 1080p. Seedance 2.0 est à 0,07 $, 0,15 $, 0,37 $ et 0,78 $ en 4K. Côté grand public, Dreamina vend Seedance dans ses abonnements, avec des promotions ponctuelles dont celle de fin septembre 2026 est terminée.",
    },
    {
      question: "Peut-on utiliser Seedance en France ?",
      answer:
        "Oui. Dreamina, le site de création de CapCut, liste la France parmi les douze pays de son offre Seedance 2.5 de fin septembre 2026, et l'API BytePlus est accessible avec un compte. Tu le trouves aussi chez des plateformes tierces comme Runway (API) ou Higgsfield, qui réserve Seedance à ses plans payants au-dessus de Starter.",
    },
    {
      question: "Faut-il écrire ses prompts Seedance en anglais ?",
      answer:
        "Je te le conseille. La documentation de Seedance 2.5 liste onze langues prises en charge nativement (chinois, anglais, espagnol, indonésien, malais, thaï, arabe, portugais, vietnamien, japonais et coréen), et le français n'y figure pas. Écris la consigne en anglais, et teste avant de promettre à un client un dialogue généré en français.",
    },
    {
      question: "C'est quoi le mode Draft de Seedance 2.5 ?",
      answer:
        "C'est une génération en deux temps. Tu produis d'abord une version 480p, facturée comme une vidéo 480p, pour vérifier le plan. Si elle te convient, tu relances à partir de son identifiant pour obtenir la version finale, qui sort uniquement en 1080p. L'identifiant du Draft reste valable sept jours.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tu tapes « Seedance » et tu tombes sur six versions, des sites qui se disent tous officiels et des prix qui vont de 0,035 $ à plus de 0,50 $ la seconde. Normal que tu ne saches pas par où commencer.",
    },
    {
      type: "p",
      text: "J'ai fait le tri dans la documentation de ByteDance et de BytePlus, relue le 15 octobre 2026 : ce que chaque version sait faire, où tu peux l'utiliser depuis la France, ce que ça coûte vraiment, et la méthode que j'utilise pour ne pas brûler mon budget en essais 1080p.",
    },
    {
      type: "p",
      text: "**Pour la majorité de tes plans, Seedance 2.0 suffit.** La 2.5 coûte plus cher et ne se justifie que si tu as besoin de durée ou de beaucoup de références.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "Seedance en octobre 2026 : six versions, une seule logique",
    },
    {
      type: "h3",
      id: "famille-seedance",
      text: "Qui fabrique Seedance et comment les versions s'empilent",
    },
    {
      type: "p",
      text: "Seedance sort de l'équipe Seed de ByteDance, la maison mère de TikTok et de CapCut. ByteDance ne vend pas directement le modèle au grand public : il passe par BytePlus (l'API pour les entreprises et les développeurs), par Dreamina (le site de création de CapCut) et par des plateformes partenaires. La [page officielle de Seedance 2.5](https://seed.bytedance.com/en/seedance2_5) sert de vitrine et renvoie vers ces portes d'entrée.",
    },
    {
      type: "p",
      text: "Le catalogue BytePlus liste aujourd'hui six modèles Seedance. Les 1.0 Pro et 1.0 Pro Fast ne font que du texte vers vidéo et de l'image vers vidéo. La 1.5 Pro est marquée en retrait, BytePlus conseille de passer à la 2.0 mini. Toute la série 2 (2.0, 2.0 fast, 2.0 mini, 2.5) ajoute les références multimodales, l'édition et l'extension de vidéo.",
    },
    {
      type: "table",
      caption:
        "Les modèles Seedance de la série 2 d'après la documentation BytePlus ModelArk, consultée le 15 octobre 2026.",
      headers: ["Modèle", "Durée par génération", "Définition max", "Références max", "Pour qui"],
      rows: [
        ["Seedance 2.5", "4 à 30 s", "1080p (10 bits)", "50 (30 images, 10 vidéos, 10 audios)", "Plans longs, beaucoup de contrôle, édition fine"],
        ["Seedance 2.0", "4 à 15 s", "4K (10 bits)", "15 (9 images, 3 vidéos, 3 audios)", "La plupart des plans, seule version en 4K"],
        ["Seedance 2.0 fast", "4 à 15 s", "720p", "15", "Itérer vite sur une idée"],
        ["Seedance 2.0 mini", "4 à 15 s", "720p", "15", "Volume et petit budget, remplaçant de la 1.5 Pro"],
      ],
    },
    {
      type: "image",
      src: "/images/articles/seedance-guide-capacites.webp",
      alt: "Documentation BytePlus de Seedance 2.5, encadrés Latest capabilities : durée maximale passée de 15 à 30 secondes, références images passées de 9 à 30, références audio ou vidéo passées de 3 à 10 pour 30 secondes cumulées, nouveau format mov, prise en charge de 11 langues, puis début du tableau comparatif Seedance 2.5, 2.0, 2.0 fast et 2.0 mini",
      caption:
        "La section « Latest capabilities » du tutoriel Seedance 2.5 sur docs.byteplus.com, capturée le 15 octobre 2026.",
    },
    {
      type: "h3",
      id: "ce-que-change-la-2-5",
      text: "Ce que la 2.5 change pour toi, et ce qu'elle ne fait pas",
    },
    {
      type: "p",
      text: "La 2.5 est sortie de bêta : ByteDance l'a présentée le 23 juin 2026 (on en avait parlé dans [l'article sur l'annonce des 30 secondes](/blog/seedance-2-5-video-ia-30-secondes)) et son API est maintenant ouverte sur BytePlus. Ce que la documentation confirme : jusqu'à 30 secondes par génération, extensibles, jusqu'à 50 fichiers de référence par requête, une édition qui retouche une vidéo existante (ajouter, retirer, remplacer un élément), et une sortie en .mov avec un échantillonnage couleur plus fin pour l'édition.",
    },
    {
      type: "p",
      text: "Deux limites que les pages promo oublient. D'abord, sur BytePlus, **la 4K reste réservée à la 2.0**. Ensuite, la liste des onze langues prises en charge nativement ne contient pas le français. Si ton projet repose sur des dialogues en français générés par le modèle, fais un test avant de t'engager.",
    },
    {
      type: "h2",
      id: "ou-utiliser-seedance",
      text: "Où utiliser Seedance depuis la France, et à quel prix",
    },
    {
      type: "p",
      text: "Tu as trois portes. Chacune a son système de facturation, et c'est là que les chiffres partent dans tous les sens quand tu lis des comparatifs.",
    },
    {
      type: "ul",
      items: [
        "BytePlus ModelArk, l'API officielle, facturée au token. Pour activer la 2.5, BytePlus demande un solde de plus de 30 $, un AI Savings Plan d'au moins 30 $ ou un pack de ressources Seedance. Une console sans code existe pour tester sans programmer.",
        "Dreamina, le site de création de CapCut, vend Seedance par abonnement à crédits. Sa page tarifaire du 28 septembre 2026 annonçait Seedance 2.5 à 0,035 $ la seconde en 720p pour le premier mois du plan Basic, mais cette offre courait du 23 septembre au 9 octobre 2026 : ne bâtis pas ton budget dessus.",
        "Côté plateformes tierces, Runway propose Seedance 2.0 Fast dans son API depuis juin ([détails ici](/blog/runway-seedance-2-fast-aleph-2)), Higgsfield intègre Seedance 2.0 et 2.5 mais pas sur son plan Starter (voir [le vrai prix de ses crédits](/blog/higgsfield-guide)). Pratique si tu y as déjà un abonnement, avec leurs crédits et leurs règles.",
      ],
    },
    {
      type: "p",
      text: "Pour comparer sur une base saine, je pars des exemples de prix publiés par BytePlus, en 16:9, pour une vidéo de 5 secondes générée sans vidéo en entrée. Avec une vidéo en référence, le tarif au token baisse, mais la vidéo d'entrée est comptée et un minimum de consommation s'applique.",
    },
    {
      type: "table",
      caption:
        "Prix à la seconde des exemples officiels BytePlus (16:9, 5 s, sans vidéo en entrée), relevés le 15 octobre 2026. Le calcul « + % » est le mien.",
      headers: ["Définition", "Seedance 2.0", "Seedance 2.5", "Écart"],
      rows: [
        ["480p", "0,07 $/s", "0,103 $/s", "+ 47 %"],
        ["720p", "0,15 $/s", "0,231 $/s", "+ 54 %"],
        ["1080p", "0,37 $/s", "0,569 $/s", "+ 54 %"],
        ["4K", "0,78 $/s", "Non disponible", "-"],
      ],
    },
    {
      type: "image",
      src: "/images/articles/seedance-guide-tarifs.webp",
      alt: "Page Pricing de BytePlus ModelArk, exemples de prix Dreamina Seedance 2.5 : sans vidéo en entrée, 0,514 $ par vidéo soit 0,103 $ par seconde en 480p, 1,156 $ soit 0,231 $ par seconde en 720p, 2,843 $ soit 0,569 $ par seconde en 1080p, puis les fourchettes de prix avec vidéo en entrée de 2 à 30 secondes",
      caption:
        "Les exemples de prix Seedance 2.5 de la page Pricing de docs.byteplus.com, capturés le 15 octobre 2026.",
    },
    {
      type: "p",
      text: "Traduit en plans concrets : un plan de 15 secondes en 1080p revient à environ 5,55 $ en 2.0 et 8,54 $ en 2.5, en supposant que le prix suive la durée (BytePlus fournit un calculateur pour le vérifier). Un plan de 30 secondes en 2.5 et 1080p, environ 17 $. Multiplie par le nombre d'essais avant d'avoir le bon, et la note grimpe vite.",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "Ma méthode pour un plan Seedance réussi sans payer dix fois le 1080p",
    },
    {
      type: "p",
      text: "Dans la 2.5, je me sers surtout du **mode Draft**. Tu génères d'abord une version 480p, facturée au prix du 480p, tu vérifies la mise en scène, puis tu lances la version finale à partir de l'identifiant du brouillon. La finale reprend le prompt, les références, la graine et la durée du brouillon. Elle sort uniquement en 1080p, et l'identifiant reste valable sept jours.",
    },
    {
      type: "ol",
      items: [
        "Choisis la version avant d'écrire. Moins de 15 secondes et une poignée de références : Seedance 2.0 (ou 2.0 fast pour explorer). Besoin de 4K : 2.0, forcément. Plan long, beaucoup de références ou édition d'une vidéo existante : 2.5.",
        "Prépare les références avec un rôle chacune. Une image nette pour le visage du personnage, une autre pour le décor, un clip vidéo pour le mouvement de caméra, un fichier audio pour le rythme. La FAQ de Dreamina le dit aussi : les 50 emplacements sont une capacité, pas un objectif.",
        "Écris le prompt en anglais et nomme chaque référence comme la documentation le fait, avec @Image 1, @Video 1, @Audio 1. Exemple : « The woman in @Image 1 walks along the quay at dusk, camera moves like @Video 1, rain starts at the end, ambient harbor sounds. »",
        "Lance un Draft en 480p. Regarde uniquement la structure : qui entre dans le cadre, quand la caméra bouge, si le visage de @Image 1 tient jusqu'au bout. Ne juge pas la texture, elle sera refaite.",
        "Corrige le prompt et relance un Draft tant que la structure ne tient pas. C'est là que tu itères, à 0,103 $ la seconde au lieu de 0,569 $.",
        "Génère la finale en 1080p depuis le Draft validé, dans les sept jours. Ne renvoie pas le prompt ni les références : la doc précise qu'une erreur se déclenche même si les valeurs sont identiques.",
        "Pour prolonger ou retoucher le plan ensuite, passe par l'extension ou l'édition avec les mots attendus par le modèle : « extend », « continue » pour prolonger, « add », « remove », « replace » pour éditer.",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : pose le calcul sur un plan de 15 secondes en 2.5. Quatre essais d'un plan de 15 secondes directement en 1080p sur la 2.5, c'est environ 34,14 $. Quatre Drafts 480p puis une finale 1080p, c'est environ 6,18 $ + 8,54 $ = 14,72 $. Moins de la moitié, pour le même plan à l'arrivée.",
    },
    {
      type: "p",
      text: "Si ton film dépasse les 30 secondes, la logique reste celle du montage multi-plans que je détaille dans [la méthode pour tenir 3 minutes de vidéo IA](/blog/video-ia-longue-duree). Et pour garder le même visage d'un plan à l'autre, les références images de Seedance s'utilisent avec [les règles de stabilité d'un personnage sur plusieurs plans](/blog/stabilite-personnage-multi-plans). Pour l'écriture des prompts eux-mêmes, pioche dans [les 50 prompts vidéo IA](/blog/prompts-video-ia-50-exemples) et adapte la syntaxe @Image.",
    },
    {
      type: "image",
      src: "/images/articles/seedance-guide-seed.webp",
      alt: "Page officielle Seedance 2.5 sur le site ByteDance Seed : une danseuse de flamenco en robe rouge, bras ouverts sur fond sombre, avec le titre Seedance 2.5, la mention d'un modèle de génération audio-vidéo conçu pour raconter en 30 secondes, et les boutons Get API, Try now et Compare now",
      caption:
        "La page officielle de Seedance 2.5 sur seed.bytedance.com, capturée le 15 octobre 2026. Ses boutons mènent à l'API, à Dreamina et à Dola.",
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "Les quatre erreurs qui te coûtent des crédits sur Seedance",
    },
    {
      type: "h3",
      id: "erreur-site-officiel",
      text: "Payer un site qui se dit « officiel »",
    },
    {
      type: "p",
      text: "Symptôme : tu cherches Seedance, tu tombes sur un nom de domaine avec « seedance » dedans, un design soigné, un abonnement mensuel. Beaucoup de ces sites revendent l'API avec leur marge et leurs propres limites, parfois en annonçant des chiffres que la doc officielle ne confirme pas.",
    },
    {
      type: "p",
      text: "Fix concret : les seuls domaines ByteDance sont seed.bytedance.com, byteplus.com et dreamina.capcut.com. Si tu passes par un tiers, choisis une plateforme que tu connais déjà (Runway, Higgsfield) et vérifie quelle version de Seedance elle propose réellement.",
    },
    {
      type: "h3",
      id: "erreur-cinquante-references",
      text: "Remplir les 50 emplacements de références",
    },
    {
      type: "p",
      text: "Symptôme : tu as chargé vingt images du personnage « pour être sûr », et le visage dérive quand même, ou le modèle mélange deux tenues. Des références qui se contredisent font hésiter le modèle.",
    },
    {
      type: "p",
      text: "Fix concret : une à trois images par élément à verrouiller (visage, tenue, décor, produit), choisies pour être cohérentes entre elles, et chaque fichier cité dans le prompt avec son numéro. Si une référence n'est citée nulle part, enlève-la.",
    },
    {
      type: "h3",
      id: "erreur-type-de-tache",
      text: "Laisser le modèle deviner le type de tâche",
    },
    {
      type: "p",
      text: "Symptôme : sur l'API, ta requête part, puis échoue après coup avec une erreur InvalidParameter.TaskTypeConstraint ou TaskTypeMismatch. La 2.5 déduit seule si tu veux générer, éditer ou prolonger, à partir des fichiers et du verbe de ton prompt, et chaque cas a ses contraintes : pour une édition, ratio « adaptive », durée à -1 et vidéo source de 4 à 30 secondes.",
    },
    {
      type: "p",
      text: "Fix concret : indique explicitement le type avec le paramètre omni_reference_task_type (edit ou extend), qui fait vérifier les contraintes dès l'envoi, et écris le verbe attendu dans le prompt. En cas de doute, « adaptive » et -1 sont les réglages recommandés par BytePlus.",
    },
    {
      type: "h3",
      id: "erreur-mauvaise-version",
      text: "Prendre la 2.5 par réflexe",
    },
    {
      type: "p",
      text: "Symptôme : ta facture a pris 54 % pour des plans de 6 secondes avec deux références, que la 2.0 aurait faits pareil. Ou pire, tu attends un rendu 4K que la 2.5 ne sait pas sortir.",
    },
    {
      type: "p",
      text: "Fix concret : garde la 2.5 pour ce qu'elle seule sait faire (plans de plus de 15 secondes, plus de 15 références, édition fine d'une vidéo existante). Pour le reste, la 2.0, et la 2.0 fast pour explorer. Si tu hésites encore entre Seedance et ses voisins chinois, [le comparatif Hailuo, Wan et Seedance](/blog/hailuo-wan-seedance-video-ia) te donne les repères.",
    },
    {
      type: "h2",
      id: "faq",
      text: "FAQ",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "Qu'est-ce que Seedance ?",
    },
    {
      type: "p",
      text: "Seedance est la famille de modèles de génération vidéo de ByteDance, développée par son équipe Seed. Elle génère des vidéos avec le son à partir de texte, d'images, de vidéos et d'audio de référence. Les versions actives en octobre 2026 vont de Seedance 1.0 Pro à Seedance 2.5, la plus récente, qui produit jusqu'à 30 secondes en une seule génération.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Quelle différence entre Seedance 2.0 et Seedance 2.5 ?",
    },
    {
      type: "p",
      text: "La 2.5 double la durée maximale (30 secondes contre 15), accepte 50 références au lieu de 15 (30 images, 10 vidéos, 10 audios) et sort le 1080p en 10 bits. En échange, elle coûte environ 54 % de plus sur l'API BytePlus et ne fait pas de 4K, que seule la 2.0 propose. Pour un plan de moins de 15 secondes avec peu de références, la 2.0 suffit.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Combien coûte Seedance ?",
    },
    {
      type: "p",
      text: "Sur l'API BytePlus, les exemples officiels donnent pour Seedance 2.5, sans vidéo en entrée et en 16:9, 0,103 $ la seconde en 480p, 0,231 $ en 720p et 0,569 $ en 1080p. Seedance 2.0 est à 0,07 $, 0,15 $, 0,37 $ et 0,78 $ en 4K. Côté grand public, Dreamina vend Seedance dans ses abonnements, avec des promotions ponctuelles dont celle de fin septembre 2026 est terminée.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Peut-on utiliser Seedance en France ?",
    },
    {
      type: "p",
      text: "Oui. Dreamina, le site de création de CapCut, liste la France parmi les douze pays de son offre Seedance 2.5 de fin septembre 2026, et l'API BytePlus est accessible avec un compte. Tu le trouves aussi chez des plateformes tierces comme Runway (API) ou Higgsfield, qui réserve Seedance à ses plans payants au-dessus de Starter.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Faut-il écrire ses prompts Seedance en anglais ?",
    },
    {
      type: "p",
      text: "Je te le conseille. La documentation de Seedance 2.5 liste onze langues prises en charge nativement (chinois, anglais, espagnol, indonésien, malais, thaï, arabe, portugais, vietnamien, japonais et coréen), et le français n'y figure pas. Écris la consigne en anglais, et teste avant de promettre à un client un dialogue généré en français.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "C'est quoi le mode Draft de Seedance 2.5 ?",
    },
    {
      type: "p",
      text: "C'est une génération en deux temps. Tu produis d'abord une version 480p, facturée comme une vidéo 480p, pour vérifier le plan. Si elle te convient, tu relances à partir de son identifiant pour obtenir la version finale, qui sort uniquement en 1080p. L'identifiant du Draft reste valable sept jours.",
    },
    {
      type: "p",
      text: "Note de Frank : sur Seedance comme ailleurs, un plan raté en 1080p se paie plein tarif. Valider en basse définition et ne payer la version finale qu'une fois, la règle tient pour tous les générateurs, et c'est le genre de méthode qu'on travaille dans la [formation IA gratuite](https://frankhoubre.com/formation-ia-gratuite), avec le reste du workflow vidéo.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-10-15 -->
