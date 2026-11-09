import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-09";
const IMG = "/images/articles/olm-pokemon-ia-colorisation-trois-images";
const VARIETY = "https://variety.com/2026/tv/markets-festivals/pokemon-anime-studio-olm-ai-coloring-tool-three-frames-1236942198/";
const OLM = "https://www.olm.co.jp/";
const EMBER = "https://www.toonboom.com/ember";

export const olmPokemonIaColorisationTroisImages: Article = {
  title: "Le studio de Pokémon colorise avec une IA et 3 images",
  slug: "olm-pokemon-ia-colorisation-trois-images",
  description:
    "OLM, studio de l'anime Pokémon, colorise ses épisodes avec un outil qui apprend sur 3 images peintes à la main. Comment ça marche, et l'avis de Blue Spirit.",
  excerpt:
    "Trois images peintes à la main, 90 secondes d'apprentissage, 15 secondes par image ensuite : OLM a montré à Taipei son outil de colorisation pour l'anime. Ce qu'il fait, ce qu'il ne fait pas, et pourquoi le studio français Blue Spirit n'a pas le droit d'utiliser l'IA pour Netflix.",
  category: "actualites-ia",
  tags: ["Actualités IA", "animation", "anime", "colorisation ia", "olm", "toon boom"],
  date: "2026-11-09",
  updatedAt: "2026-11-09",
  news: true,
  publishedTime: "10:00",
  readingTime: 6,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/olm-pokemon-ia-colorisation-trois-images.webp",
  imageAlt:
    "Une coloriste d'une trentaine d'années travaille sur une tablette graphique dans un studio d'animation lumineux, un dragon de dessin animé en noir et blanc à l'écran en cours de colorisation, trois images de référence en couleur épinglées au-dessus",
  keywords: ["colorisation ia anime", "olm pokemon ia", "ia animation 2d", "toon boom ember", "coloriser animation ia", "ia anime japon"],
  relatedSlugs: ["animatique-ia-methode", "budget-rendu-temps-cout-ia", "workflow-ia-creatif"],
  faq: [
    {
      question: "Comment fonctionne l'outil de colorisation d'OLM ?",
      answer:
        "Un artiste colorise trois images d'une série à la main. L'outil apprend en environ 90 secondes les traits et la palette de cette série, puis colorise chaque image restante en environ 15 secondes. Plus l'artiste peint d'images à la main, plus le résultat est juste. C'est ce qu'a expliqué Yotsukura Tatsuo, directeur chez OLM Digital, au Taiwan Creative Content Fest, d'après Variety le 7 novembre 2026.",
    },
    {
      question: "Est-ce de l'IA générative ?",
      answer:
        "Pas selon OLM. « À proprement parler, ce n'est pas de l'IA générative », a dit Yotsukura Tatsuo. L'outil n'invente pas d'image : il remplit des dessins déjà faits par les animateurs, en apprenant uniquement sur les images de la production. Le studio insiste sur ce point, parce qu'aucune autre œuvre ne sert à l'entraîner.",
    },
    {
      question: "Combien de temps fait gagner l'outil d'OLM ?",
      answer:
        "OLM estime la baisse du travail de peinture à environ 30 % au stade de la preuve de concept. En contrepartie, les vérificateurs qui relisent chaque image colorisée ont un peu plus de travail. Ce sont des chiffres donnés par le studio, pas une mesure indépendante.",
    },
    {
      question: "Qu'est-ce que Toon Boom Ember ?",
      answer:
        "C'est une suite d'outils IA ajoutés à Harmony et Storyboard Pro, les logiciels d'animation de Toon Boom. Selon Variety, la bêta de la colorisation se termine et l'intervalle automatique doit entrer en bêta dans les semaines qui viennent. Un studio de Manille a fait passer la peinture d'une scène de 90 secondes à 2 minutes de 15 heures à 2 ou 3 heures.",
    },
    {
      question: "Pourquoi Blue Spirit n'utilise pas d'IA sur Blue Eye Samurai ?",
      answer:
        "Parce que Netflix ne l'autorise pas sur ce projet, d'après Charles Beirnaert, directeur de la création de Blue Spirit. Le studio demande à chaque étape, la réponse est toujours non, même s'il reconnaît que la règle ne s'applique peut-être pas à tous les partenaires de Netflix. Les règles publiées par Netflix en août 2025 demandent de déclarer tout usage prévu d'IA générative, avec un accord écrit pour certains usages.",
    },
    {
      question: "Un animateur indépendant peut-il utiliser ce genre d'outil ?",
      answer:
        "L'outil d'OLM est interne, il n'est pas vendu. Ember est en bêta chez Toon Boom, avec une inscription sur son site. La méthode, elle, est accessible : garder la main sur le dessin et les images clés, confier le remplissage répétitif à un outil, et tout vérifier. Avant d'utiliser un outil sur un projet client, vérifie toujours ce que ton contrat autorise.",
    },
  ],
  content: [
    {
      type: "p",
      text: "**OLM**, le studio japonais qui fabrique l'anime **Pokémon** (la série et les films, pas les jeux), colorise maintenant une partie de ses images avec un outil qui apprend le style d'une série sur **trois images peintes à la main**. Son directeur Yotsukura Tatsuo l'a présenté au Taiwan Creative Content Fest de Taipei, d'après [Variety](" + VARIETY + "), le **7 novembre 2026**.",
    },
    {
      type: "p",
      text: "Si tu fais de l'animation, ou de la vidéo IA en général, regarde bien comment ils s'y prennent. Ce n'est pas « l'IA dessine à ta place ». C'est l'inverse : l'artiste garde le dessin, et l'outil prend la partie la plus mécanique du travail. Sur le même panel, le studio français **Blue Spirit** a expliqué pourquoi il n'a pas le droit d'utiliser l'IA sur une série Netflix.",
    },
    {
      type: "screenshot",
      src: `${IMG}-olm.webp`,
      alt: "Page d'accueil du site officiel d'OLM et OLM Digital le 9 novembre 2026, avec les affiches de l'anime Pokémon, des Carnets de l'apothicaire et d'une autre série pour enfants",
      caption: "Le site officiel du groupe OLM. Capture du 9 novembre 2026.",
      source: OLM,
      capturedAt: CAPTURE,
      width: 1220,
      height: 560,
    },
    { type: "h2", id: "outil", text: "Comment marche l'outil d'OLM" },
    {
      type: "p",
      text: "L'outil vient d'**ANIMINS**, un projet de recherche de 15 mois mené par Yotsukura dans le cadre de **GENIAC**, un programme d'IA générative piloté par le ministère japonais de l'Économie, du Commerce et de l'Industrie. Le projet s'est terminé en février. Le problème de départ est simple : un modèle d'IA a besoin d'énormément de données, et un studio n'en a pas assez pour une seule série. OLM a pris le chemin inverse.",
    },
    {
      type: "ul",
      items: [
        "**Un artiste colorise trois images** d'un épisode à la main.",
        "**L'outil apprend sur place**, en environ **90 secondes**, la forme des traits et la palette de cette série.",
        "**Il colorise chaque image restante** en environ **15 secondes**. Plus l'artiste peint d'images à la main, plus le résultat est juste.",
        "**Un nouveau personnage** ou une créature, un dragon par exemple, se traite tout de suite : on peint, l'outil s'adapte.",
      ],
    },
    {
      type: "p",
      text: "« À proprement parler, ce n'est pas de l'IA générative », a dit Yotsukura. Et comme l'outil n'apprend que sur les images de la production, aucune autre œuvre n'est utilisée. C'est l'argument qui rend l'outil acceptable dans un métier où le sujet est explosif.",
    },
    {
      type: "screenshot",
      src: `${IMG}-schema.webp`,
      alt: "Schéma en quatre étapes : trois images peintes à la main par un humain, 90 secondes d'apprentissage par l'outil, 15 secondes par image restante, 100 % des images vérifiées par des humains, avec environ 30 % de travail de peinture en moins selon OLM et 15 heures ramenées à 2 ou 3 heures avec Ember selon un studio de Manille",
      caption: "Les étapes décrites par OLM et Toon Boom à Taipei, d'après Variety. Schéma AI Studios.",
      source: VARIETY,
      capturedAt: CAPTURE,
      width: 1600,
      height: 900,
    },
    { type: "h2", id: "chiffres", text: "Ce que ça fait gagner, et ce que ça coûte" },
    {
      type: "p",
      text: "Au stade de la preuve de concept, OLM estime la baisse du **travail de peinture à environ 30 %**. Mais les **vérificateurs**, qui relisent chaque image colorisée, ont un peu plus de travail qu'avant. Le gain n'est donc pas gratuit : il se déplace vers le contrôle.",
    },
    {
      type: "p",
      text: "Yotsukura a eu une image juste pour décrire l'écart entre les démos et la production. Il compare l'IA aux machines à capsules japonaises, les gacha : à chaque pièce de 500 yens, environ le prix d'un crédit de génération selon lui, tu ne sais pas si tu auras le jouet voulu. L'IA arrive facilement à 80 %. « La faire passer de là à 90 ou 100 % devient un travail si dur qu'il peut te briser le cœur. » Un amateur se contente de 80 %. Un animateur pro a besoin d'un outil qui respecte ses consignes à chaque fois. Il ajoute un détail que tout coloriste connaît : un outil qui retouche une image peut décaler ses valeurs de couleur, même quand le résultat a l'air bon.",
    },
    {
      type: "p",
      text: "**Toon Boom**, l'éditeur canadien de Harmony et Storyboard Pro, s'attaque au même problème avec [Ember](" + EMBER + "), sa suite d'outils IA. Selon Variety, la bêta de la colorisation se termine et l'intervalle automatique doit entrer en bêta d'ici quelques semaines. Un studio de Manille qui l'a testée a fait passer la peinture d'une scène de 90 secondes à 2 minutes de **15 heures à 2 ou 3 heures**. « Le créatif reste à l'artiste, le temps mécanique va à l'IA », résume Harry Ravelomanantsoa, chez Toon Boom.",
    },
    {
      type: "screenshot",
      src: `${IMG}-ember.webp`,
      alt: "Page Ember du site de Toon Boom le 9 novembre 2026 : démo de la colorisation Ember avec un personnage de dessin animé colorisé dans Harmony et une rangée d'images en bas de l'écran",
      caption: "La page officielle d'Ember, la suite IA de Toon Boom, avec la démo de colorisation. Capture du 9 novembre 2026.",
      source: EMBER,
      capturedAt: CAPTURE,
      width: 1200,
      height: 405,
    },
    { type: "h2", id: "blue-spirit", text: "Blue Spirit : pas d'IA pour Netflix" },
    {
      type: "p",
      text: "Le passage le plus intéressant pour nous vient du studio français **Blue Spirit**, qui a fait *Blue Eye Samurai* pour Netflix. Son directeur de la création, Charles Beirnaert, a dit que le studio n'utilise **aucune IA** sur cette série. « On n'a pas le droit d'utiliser l'IA pour les projets Netflix. » Blue Spirit demande à chaque étape, et la réponse est toujours non, même s'il reconnaît que la règle ne vaut peut-être pas pour tous les partenaires de Netflix. Sur une série Amazon, le studio peut utiliser l'IA seulement pour prévisualiser des personnages et des robots, sans que rien n'arrive dans l'image finale.",
    },
    {
      type: "p",
      text: "Variety rappelle que les règles publiées par Netflix pour ses partenaires de production, en août 2025, demandent de déclarer tout usage prévu d'IA générative, avec un accord écrit pour certains usages, dont du contenu généré dans le produit final. Hors de ces séries, Blue Spirit teste l'IA sur un projet : un pilote qui a demandé environ trois mois à une vingtaine de personnes a été refait par **une seule personne en quelques jours**. L'animation était moins bonne que l'original, a dit Beirnaert, mais les décors étaient meilleurs.",
    },
    {
      type: "screenshot",
      src: `${IMG}-variety.webp`,
      alt: "Titre de l'article de Variety du 7 novembre 2026 : le studio de l'anime Pokémon OLM entraîne un outil de colorisation IA sur seulement trois images dans un projet soutenu par le gouvernement japonais, par Naman Ramachandran",
      caption: "L'article de Variety, publié le 7 novembre 2026. Capture du 9 novembre 2026.",
      source: VARIETY,
      capturedAt: CAPTURE,
      width: 640,
      height: 250,
    },
    {
      type: "table",
      caption: "Ce qu'ont dit les studios à Taipei, d'après Variety",
      headers: ["Studio", "Usage de l'IA", "Ce qu'ils en attendent"],
      rows: [
        ["OLM (Japon)", "Colorisation apprise sur 3 images, tests sur l'intervalle", "Plus de liberté créative à budget égal"],
        ["Toon Boom (Canada)", "Ember : colorisation en fin de bêta, intervalle bientôt en bêta", "Rendre le temps mécanique à l'outil"],
        ["Blue Spirit (France)", "Aucune sur Netflix, prévisualisation seule sur une série Amazon", "Environ 1 M€ sur un budget de 8 M€, estimation « au hasard »"],
      ],
    },
    { type: "h2", id: "avis", text: "Mon avis" },
    {
      type: "p",
      text: "Ce que je retiens, c'est la méthode d'OLM, pas le chiffre de 30 %. **Peu d'images, les tiennes, et une vérification à 100 %.** C'est exactement ce qui marche aussi en vidéo IA : quand tu donnes au modèle tes propres images de référence plutôt qu'un prompt vague, tu gagnes en cohérence. C'est la même logique que l'[animatique avant la génération](/blog/animatique-ia-methode) : tu fixes ce qui compte à la main, l'outil fait le reste.",
    },
    {
      type: "p",
      text: "Et pense au contrôle dans ton devis. OLM le dit franchement : le temps gagné à peindre se reporte en partie sur la vérification. Si tu factures des projets avec de l'IA, notre méthode pour [estimer le temps et le coût d'un rendu](/blog/budget-rendu-temps-cout-ia) t'évitera de promettre le gain sans compter la relecture. Dernier point : avant d'utiliser le moindre outil IA sur un projet client, lis ton contrat. Blue Spirit montre qu'une plateforme peut tout simplement l'interdire.",
    },
    {
      type: "cta",
      variant: "formation",
      title: "Apprends à garder la main sur tes images IA",
      text: "Ma formation IA gratuite te montre comment travailler avec tes propres références pour que l'IA respecte ton style au lieu de l'inventer.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "J'ai lu le 9 novembre 2026 l'article de Variety du 7 novembre signé Naman Ramachandran, qui rapporte un panel du Taiwan Creative Content Fest à Taipei avec OLM, Toon Boom et Blue Spirit. Les citations sont traduites de l'anglais. Les captures viennent du site d'OLM, de la page Ember de Toon Boom et de l'article de Variety.",
        "Je n'ai testé ni l'outil d'OLM, qui est interne, ni Ember, qui est en bêta. Les chiffres (30 %, 90 secondes, 15 secondes, 15 heures ramenées à 2 ou 3) sont ceux donnés par les studios sur scène.",
      ],
      teste: ["La lecture du compte rendu de Variety et des pages officielles d'OLM et de Toon Boom, captures du même jour"],
      nonTeste: [
        "L'outil de colorisation d'OLM",
        "Toon Boom Ember",
        "Les gains de temps annoncés",
      ],
      sources: [
        { label: "Variety, 'Pokemon' Anime Studio OLM Trains AI Coloring Tool on Just Three Frames, 07/11/2026", href: VARIETY },
        { label: "OLM, site officiel, consulté le 09/11/2026", href: OLM },
        { label: "Toon Boom, page Ember, consultée le 09/11/2026", href: EMBER },
      ],
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-11-09 -->
