import type { Article } from "@/lib/types/article";

export const focaleObjectifPromptIa: Article = {
  title: "Focales en prompt IA : 35mm, 50mm, 85mm expliqués",
  slug: "focale-objectif-prompt-ia",
  description:
    "35mm, 50mm, 85mm : ajouter une focale à ton prompt change le cadrage et le flou d'une image IA. Le guide simple pour choisir le bon objectif.",
  excerpt:
    "Indiquer une focale dans ton prompt, c'est diriger la caméra. 35mm, 50mm, 85mm ne donnent pas la même image. Voici comment choisir, sans jargon de photographe.",
  category: "prompting",
  tags: ["prompt", "focale", "cinéma", "composition"],
  date: "2026-06-20",
  updatedAt: "2026-06-20",
  readingTime: 13,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/focale-objectif-prompt-ia.webp",
  imageAlt:
    "Plusieurs objectifs photo posés près d'un écran montrant des cadrages différents, studio sombre, lumière cinématique",
  keywords: [
    "focale prompt ia",
    "objectif prompt ia",
    "35mm 50mm 85mm ia",
    "focale image ia",
    "prompt cinématique focale",
  ],
  relatedSlugs: [
    "decrire-lumiere-prompt-ia",
    "prompt-image-ia-cinema",
    "composition-cadrage-image-ia",
  ],
  faq: [
    {
      question: "Pourquoi indiquer une focale dans un prompt IA ?",
      answer:
        "Parce qu'une focale est un raccourci puissant vers un type d'image. Écrire 85mm oriente l'IA vers un portrait serré au fond très flou, écrire 24mm vers un grand angle large. Les modèles ont appris sur des millions de photos légendées avec ces termes, donc une focale agit comme une consigne de cadrage et de profondeur de champ comprise immédiatement, sans longue description.",
    },
    {
      question: "Que change une courte focale comme 24mm ou 35mm ?",
      answer:
        "Une courte focale, ou grand angle, capte large et donne de la profondeur à la scène. Le 24mm est très large, idéal pour un décor, un paysage, une ambiance, avec un effet parfois un peu exagéré sur les perspectives. Le 35mm est le grand angle doux, parfait pour du reportage ou une scène où l'on veut voir le personnage dans son environnement. Le fond reste plutôt lisible.",
    },
    {
      question: "Et une longue focale comme 85mm ou 135mm ?",
      answer:
        "Une longue focale isole le sujet et écrase l'arrière-plan en un beau flou. Le 85mm est la référence du portrait, le visage est flatté, le fond fond en bokeh crémeux. Le 135mm va plus loin encore dans la compression et l'isolement. Plus la focale est longue, plus tu détaches ton sujet du décor, ce qui donne ce rendu cinématographique propre et premium.",
    },
    {
      question: "Le 50mm, c'est pour quoi ?",
      answer:
        "Le 50mm est l'objectif passe-partout, proche de la vision humaine. Il ne déforme presque pas, donne un rendu naturel, avec un flou d'arrière-plan modéré quand l'ouverture le permet. C'est un excellent réglage par défaut quand tu ne sais pas quelle focale choisir, ni trop large ni trop serré. Beaucoup de scènes crédibles partent d'un simple 50mm.",
    },
    {
      question: "Faut-il ajouter l'ouverture comme f/1.8 ?",
      answer:
        "Ça aide, mais ce n'est pas obligatoire. L'ouverture, par exemple f/1.8, renforce la consigne de faible profondeur de champ et de flou d'arrière-plan. Combinée à une longue focale, elle pousse le bokeh. Si ton image manque de séparation entre sujet et fond, ajouter une grande ouverture au prompt est un levier simple. Mais commence par la focale, c'est elle qui pose le cadre.",
    },
    {
      question: "La focale fonctionne-t-elle sur tous les générateurs ?",
      answer:
        "La plupart des grands modèles d'image réagissent bien aux termes de focale, car ils sont très présents dans leurs données d'entraînement. L'effet peut varier d'un outil à l'autre et n'est pas une simulation optique exacte, c'est une orientation stylistique. Teste sur ton générateur et ajuste, mais dans l'ensemble, parler en focales est l'un des vocabulaires les plus fiables pour diriger une image.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Ton image IA est correcte, mais elle manque de ce truc cinématographique, ce sujet bien détaché sur un fond crémeux, ou au contraire cette ampleur de décor. Souvent, il te manque un seul mot dans le prompt : une focale.",
    },
    {
      type: "p",
      text: "À la fin de ce guide, tu sauras ce que change un 35mm, un 50mm ou un 85mm dans ton image, et comment choisir la focale selon l'effet voulu. Pas besoin d'être photographe, juste de comprendre la logique.",
    },
    {
      type: "p",
      text: "Parce qu'indiquer une focale, ce n'est pas du jargon décoratif. C'est diriger la caméra. Et les modèles comprennent ce langage mieux que de longues descriptions floues.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "Core Concepts : la focale comme consigne",
    },
    {
      type: "h3",
      id: "pourquoi-ca-marche",
      text: "Pourquoi un nombre suffit",
    },
    {
      type: "p",
      text: "Les modèles d'image ont appris sur des millions de photos légendées, et ces légendes contiennent souvent la focale. Du coup, écrire 85mm déclenche tout un faisceau d'associations apprises, portrait, fond flou, sujet isolé. Un simple nombre agit comme un raccourci vers un type d'image entier, ce qu'aucune longue phrase ne ferait aussi efficacement.",
    },
    {
      type: "p",
      text: "Voilà pourquoi ça compte : au lieu de décrire péniblement le flou d'arrière-plan, la séparation du sujet et le cadrage, tu poses une focale et l'IA déroule le reste. C'est de la prompt economy, dire beaucoup en peu de mots. Pour pousser cette logique de prompt précis, croise avec [notre guide pour décrire la lumière dans un prompt IA](/blog/decrire-lumiere-prompt-ia).",
    },
    {
      type: "h3",
      id: "courte-vs-longue",
      text: "Courte focale ou longue focale",
    },
    {
      type: "p",
      text: "Tout se joue sur un axe simple. Une courte focale, grand angle, capte large et garde de la profondeur, le décor compte autant que le sujet. Une longue focale isole le sujet et écrase le fond en bokeh. Plus le nombre est petit, plus tu vois large. Plus il est grand, plus tu serres et tu détaches. Comprendre cet axe, c'est déjà savoir choisir.",
    },
    {
      type: "p",
      text: "Pense en intention. Tu veux montrer un personnage dans son monde, va vers le grand angle. Tu veux un portrait premium qui détache le visage, va vers la longue focale. La focale n'est pas un détail technique, c'est une décision de mise en scène, exactement comme le cadrage.",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "Practical Workflow : choisir sa focale",
    },
    {
      type: "h3",
      id: "table-focales",
      text: "Étape 1, associer focale et intention",
    },
    {
      type: "p",
      text: "Avant d'écrire le prompt, demande-toi ce que tu veux faire ressentir, puis choisis la focale correspondante. Cette grille te sert de mémo, à garder sous la main jusqu'à ce que ça devienne un réflexe.",
    },
    {
      type: "table",
      caption: "Quelle focale pour quel effet",
      headers: ["Focale", "Effet", "Idéal pour"],
      rows: [
        ["24mm", "Très large, perspectives marquées", "Décor, paysage, ambiance"],
        ["35mm", "Grand angle doux", "Scène, reportage, sujet dans son décor"],
        ["50mm", "Naturel, proche de l'oeil", "Réglage par défaut polyvalent"],
        ["85mm", "Portrait, fond très flou", "Visage, sujet isolé, premium"],
        ["135mm", "Compression forte", "Isolement maximal, look ciné"],
      ],
    },
    {
      type: "p",
      text: "Retiens les repères clés : 35mm pour la scène, 50mm par défaut, 85mm pour le portrait. Avec juste ces trois-là, tu couvres l'immense majorité de tes besoins. Le reste, ce sont des nuances que tu ajouteras avec l'expérience.",
    },
    {
      type: "h3",
      id: "integrer-prompt",
      text: "Étape 2, l'intégrer au prompt",
    },
    {
      type: "p",
      text: "Place la focale dans le bloc caméra de ton prompt, avec le reste des indications techniques. Tu peux y ajouter une ouverture pour renforcer le flou. L'ordre n'est pas magique, mais regrouper les consignes de prise de vue aide le modèle à les traiter ensemble.",
    },
    {
      type: "ol",
      items: [
        "Décide l'intention : montrer le décor, ou isoler le sujet.",
        "Choisis la focale correspondante, 35mm, 50mm ou 85mm pour commencer.",
        "Ajoute-la au bloc caméra du prompt, par exemple shot on 85mm.",
        "Si tu veux plus de flou, ajoute une grande ouverture comme f/1.8.",
        "Génère, compare, et ajuste la focale d'un cran si l'effet n'y est pas.",
      ],
    },
    {
      type: "p",
      text: "La focale est une brique du prompt structuré, elle vit dans le bloc caméra aux côtés du cadrage et de la lumière. Pour l'articuler proprement avec le reste, appuie-toi sur [notre méthode du prompt d'image cinéma](/blog/prompt-image-ia-cinema).",
    },
    {
      type: "p",
      text: "> Pro Tip : garde un seed fixe et change uniquement la focale pour voir son effet réel. Génère la même scène en 35mm, 50mm puis 85mm. Tu verras d'un coup ce que la focale fait, et tu retiendras le réglage bien mieux qu'avec n'importe quelle explication.",
    },
    {
      type: "h3",
      id: "focale-cadrage",
      text: "Étape 3, accorder focale et cadrage",
    },
    {
      type: "p",
      text: "La focale ne travaille pas seule. Un 85mm sur un plan large perd son intérêt, un 24mm sur un gros plan déforme. Accorde la focale au cadrage que tu vises : longue focale pour les plans serrés, courte focale pour les plans larges. Les deux décisions se renforcent quand elles vont dans le même sens.",
    },
    {
      type: "p",
      text: "C'est là que la grammaire de l'image se met en place. Focale, cadrage, lumière forment un tout cohérent. Pour la partie cadrage et composition, croise avec [notre guide de la composition et du cadrage en image IA](/blog/composition-cadrage-image-ia), et tu auras les trois leviers en main.",
    },
    {
      type: "p",
      text: "Pour la culture de fond sur ce qu'est vraiment une focale, garde en référence la page [Distance focale sur Wikipédia](https://fr.wikipedia.org/wiki/Distance_focale), utile pour comprendre ce que tu manipules.",
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "The Trench Warfare Section : les pièges de la focale",
    },
    {
      type: "h3",
      id: "erreur-aucune-focale",
      text: "Erreur 1, ne jamais préciser de focale",
    },
    {
      type: "p",
      text: "Tu laisses l'IA choisir, et tes images ont toutes le même rendu un peu plat, sans intention de prise de vue. Le modèle fait une moyenne, ni vraiment large ni vraiment serrée. Tu passes à côté d'un levier gratuit qui donnerait du caractère à tes images.",
    },
    {
      type: "p",
      text: "Fix concret : ajoute systématiquement une focale, même simple. Commence par 50mm si tu hésites. Rien que ce réflexe sort tes images du rendu générique et leur donne une vraie tenue de prise de vue.",
    },
    {
      type: "h3",
      id: "erreur-focale-cadrage",
      text: "Erreur 2, une focale qui jure avec le cadrage",
    },
    {
      type: "p",
      text: "Tu demandes un gros plan en 24mm, et le visage est déformé, ou un plan large en 135mm, et tout est écrasé sans air. La focale et le cadrage se contredisent, le résultat semble bizarre sans que tu saches pourquoi. C'est un conflit de logique de prise de vue.",
    },
    {
      type: "p",
      text: "Fix concret : accorde les deux. Plan serré avec longue focale, plan large avec courte focale. Quand le cadrage et la focale racontent la même chose, l'image devient naturelle et crédible.",
    },
    {
      type: "p",
      text: "> Pro Tip : pour un portrait flatteur, le combo gagnant est simple, 85mm et une grande ouverture. Tu obtiens un visage bien proportionné et un fond fondu, le look portrait premium, sans rien ajouter d'autre.",
    },
    {
      type: "h3",
      id: "erreur-trop-technique",
      text: "Erreur 3, noyer le prompt de termes techniques",
    },
    {
      type: "p",
      text: "Tu empiles focale, ouverture, vitesse, capteur, marque d'objectif, et le prompt devient une fiche technique illisible où l'essentiel se perd. Trop de jargon dilue la consigne et n'améliore pas forcément l'image. Tu confonds précision et accumulation.",
    },
    {
      type: "p",
      text: "Fix concret : garde l'utile, focale et éventuellement ouverture. Ces deux-là portent la majorité de l'effet visuel. Le reste est souvent du bruit que le modèle gère mal. Mieux vaut un prompt clair avec une bonne focale qu'une liste de spécifications.",
    },
    {
      type: "h3",
      id: "erreur-attendre-simulation",
      text: "Erreur 4, attendre une optique parfaite",
    },
    {
      type: "p",
      text: "Tu t'attends à ce que 85mm reproduise exactement le rendu d'un vrai 85mm, et tu es déçu par de petites incohérences. Mais l'IA ne simule pas une optique, elle interprète un style appris. La focale est une orientation, pas un calcul physique exact.",
    },
    {
      type: "p",
      text: "Fix concret : prends la focale comme une direction stylistique, pas comme une garantie technique. Elle pousse l'image dans le bon sens, à toi d'ajuster d'un cran si besoin. Avec cette attente juste, la focale devient un de tes outils les plus fiables.",
    },
    {
      type: "p",
      text: "Quand tu choisis ta focale selon l'intention, que tu l'accordes au cadrage et que tu la gardes simple, tu diriges la caméra au lieu de la subir. 35mm pour la scène, 50mm par défaut, 85mm pour le portrait : trois repères qui transforment des images correctes en images qui ont l'oeil d'un vrai chef opérateur.",
    },
    {
      type: "h2",
      id: "faq",
      text: "Frequently Asked Questions (FAQ)",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "Pourquoi indiquer une focale dans un prompt IA ?",
    },
    {
      type: "p",
      text: "Parce qu'une focale est un raccourci puissant vers un type d'image. Écrire 85mm oriente l'IA vers un portrait serré au fond très flou, écrire 24mm vers un grand angle large. Les modèles ont appris sur des millions de photos légendées avec ces termes, donc une focale agit comme une consigne de cadrage et de profondeur de champ comprise immédiatement, sans longue description.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Que change une courte focale comme 24mm ou 35mm ?",
    },
    {
      type: "p",
      text: "Une courte focale, ou grand angle, capte large et donne de la profondeur à la scène. Le 24mm est très large, idéal pour un décor, un paysage, une ambiance, avec un effet parfois un peu exagéré sur les perspectives. Le 35mm est le grand angle doux, parfait pour du reportage ou une scène où l'on veut voir le personnage dans son environnement. Le fond reste plutôt lisible.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Et une longue focale comme 85mm ou 135mm ?",
    },
    {
      type: "p",
      text: "Une longue focale isole le sujet et écrase l'arrière-plan en un beau flou. Le 85mm est la référence du portrait, le visage est flatté, le fond fond en bokeh crémeux. Le 135mm va plus loin encore dans la compression et l'isolement. Plus la focale est longue, plus tu détaches ton sujet du décor, ce qui donne ce rendu cinématographique propre et premium.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Le 50mm, c'est pour quoi ?",
    },
    {
      type: "p",
      text: "Le 50mm est l'objectif passe-partout, proche de la vision humaine. Il ne déforme presque pas, donne un rendu naturel, avec un flou d'arrière-plan modéré quand l'ouverture le permet. C'est un excellent réglage par défaut quand tu ne sais pas quelle focale choisir, ni trop large ni trop serré. Beaucoup de scènes crédibles partent d'un simple 50mm.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Faut-il ajouter l'ouverture comme f/1.8 ?",
    },
    {
      type: "p",
      text: "Ça aide, mais ce n'est pas obligatoire. L'ouverture, par exemple f/1.8, renforce la consigne de faible profondeur de champ et de flou d'arrière-plan. Combinée à une longue focale, elle pousse le bokeh. Si ton image manque de séparation entre sujet et fond, ajouter une grande ouverture au prompt est un levier simple. Mais commence par la focale, c'est elle qui pose le cadre.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "La focale fonctionne-t-elle sur tous les générateurs ?",
    },
    {
      type: "p",
      text: "La plupart des grands modèles d'image réagissent bien aux termes de focale, car ils sont très présents dans leurs données d'entraînement. L'effet peut varier d'un outil à l'autre et n'est pas une simulation optique exacte, c'est une orientation stylistique. Teste sur ton générateur et ajuste, mais dans l'ensemble, parler en focales est l'un des vocabulaires les plus fiables pour diriger une image.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-06-20 -->
