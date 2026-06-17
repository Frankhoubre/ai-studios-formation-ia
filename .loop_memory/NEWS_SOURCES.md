# NEWS_SOURCES.md

Sources fiables pour les 2 articles news quotidiens. Niche : IA créative
(génération d'images, de vidéos, d'audio, outils créatifs, cinéma IA, pub IA).

Règles : prioriser l'officiel, dater chaque info, croiser 2 sources minimum,
jamais de rumeur présentée comme un fait, jamais de copie de paragraphe.
Fenêtre : 24-72 h en priorité, sinon la news forte des 7 derniers jours.

> Accès web : ce projet expose des outils de recherche/scraping (Bright Data,
> WebSearch/WebFetch si activés, MCP Ahrefs pour le SEO). Voir SETUP_LOOP.md
> pour ce qui est réellement branché. Sans accès web, la news ne peut pas être
> sourcée correctement : dans ce cas, NE PAS publier de news (hard stop) et le
> noter dans ERRORS_AND_BLOCKERS.md.

## Blogs / annonces officiels (priorité haute)

- OpenAI — https://openai.com/news/ (Sora, DALL·E, GPT image)
- Google DeepMind — https://deepmind.google/discover/blog/ (Imagen, Veo)
- Google blog (Labs / Gemini image) — https://blog.google/technology/ai/
- Black Forest Labs (FLUX) — https://blog.bfl.ai/
- Stability AI — https://stability.ai/news (Stable Diffusion)
- Runway — https://runwayml.com/research / https://runwayml.com/news
- Midjourney — https://www.midjourney.com/updates / Discord officiel
- Luma AI (Dream Machine) — https://lumalabs.ai/blog
- Pika — https://pika.art/ et leur X
- ElevenLabs — https://elevenlabs.io/blog
- Suno — https://suno.com/blog
- Kling (Kuaishou) — annonces via kling.ai
- Adobe Firefly — https://blog.adobe.com/
- Leonardo.Ai — https://leonardo.ai/news/
- Ideogram, Krea, Recraft, Magnific — comptes X officiels + pages release
- Hugging Face blog — https://huggingface.co/blog (modèles open source)

## Médias / agrégateurs (corroboration, jamais source unique)

- The Verge (AI) — https://www.theverge.com/ai-artificial-intelligence
- TechCrunch (AI) — https://techcrunch.com/category/artificial-intelligence/
- Ars Technica — https://arstechnica.com/ai/
- VentureBeat AI — https://venturebeat.com/category/ai/
- MIT Technology Review — https://www.technologyreview.com/
- Numerama / Usine Digitale / Siècle Digital (FR) — angle francophone

## Flux RSS (à brancher dans le loop)

- OpenAI : https://openai.com/news/rss.xml
- Google blog AI : https://blog.google/technology/ai/rss/
- The Verge AI : https://www.theverge.com/rss/ai-artificial-intelligence/index.xml
- TechCrunch AI : https://techcrunch.com/category/artificial-intelligence/feed/
- Hugging Face : https://huggingface.co/blog/feed.xml
- Ars Technica : https://feeds.arstechnica.com/arstechnica/index

## Requêtes Google News / recherche à lancer chaque jour

- "Sora" OR "Runway" OR "Kling" OR "Veo" OR "Midjourney" when:1d
- "AI video" model release when:2d
- "image generation" model OR update when:2d
- "FLUX" OR "Stable Diffusion" OR "Imagen" when:3d
- "ElevenLabs" OR "Suno" OR "Udio" when:3d
- IA générative image vidéo (FR) when:2d
- "generative AI" copyright OR lawsuit when:3d (sujet sensible, prudence)

## Comptes X / communautés à surveiller

- @OpenAI, @runwayml, @midjourney, @bfl_ml, @LumaLabsAI, @pika_labs,
  @elevenlabsio, @suno_ai_, @StabilityAI, @GoogleDeepMind, @krea_ai
- r/StableDiffusion, r/midjourney (signaux d'usage, jamais comme source de fait)

## Sources à ÉVITER

- Fermes de contenu IA, articles SEO recopiés sans source.
- Tweets anonymes / leaks non confirmés présentés comme officiels.
- Sites qui republient une annonce sans lien vers la source primaire.
- Tout ce qui exige de franchir un paywall ou de scraper des données privées.

## Sujets sensibles (passer en revue humaine — voir autonomie)

Procès / droits d'auteur, deepfakes, contenu politique, licenciements,
régulation (AI Act). On peut en parler, mais en restant factuel, sourcé, sans
prendre parti, et en signalant l'incertitude. En cas de doute : ne pas publier,
logger dans ERRORS_AND_BLOCKERS.md.

Liens : [[STYLE_GUIDE]] [[CONTENT_LEDGER]]
