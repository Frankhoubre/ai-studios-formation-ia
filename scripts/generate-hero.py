#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Génère un visuel hero cinématique pour un article du blog AI Studios.

Style imposé : film still photoréaliste, angle dynamique, 50mm (ou 85mm),
bokeh crémeux, lumière motivée, grain 35mm, palette teal/amber, anti-look-IA.

Par défaut : palier Imagen 4 **Fast** (le moins cher), 1K natif, export WebP
~1280px (léger, idéal hero). Pour un rendu 2K plus net : --standard ou --ultra
avec --image-size 2K. Le prix dépend du palier (Fast < Standard < Ultra), pas
de la résolution.

Pré-requis :
  - pip install --user google-genai
  - cwebp et sips (macOS) disponibles dans le PATH
  - une clé Gemini dans GEMINI_API_KEY (env ou .env racine, déjà git-ignoré)
    Clé gratuite : https://aistudio.google.com/apikey

Exemples :
  # défaut éco : Fast, 1K, 50mm
  python scripts/generate-hero.py \
    --slug prompt-negatif-ia-images-propres \
    --prompt "A focused creative in a dark studio reviewing images on a monitor"

  # portrait plus serré en 85mm
  python scripts/generate-hero.py --slug mon-article --prompt "..." --lens 85mm

  # rendu 2K net (plus cher)
  python scripts/generate-hero.py --slug mon-article --prompt "..." \
    --standard --image-size 2K --width 2048
"""

import argparse
import os
import subprocess
import sys
import tempfile
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
ARTICLES_DIR = REPO_ROOT / "public" / "images" / "articles"

# Imagen 4 : génération photographique 1K/2K native.
# Coût par image (le prix dépend du PALIER, pas de la résolution) :
#   Fast = le moins cher · Standard = intermédiaire · Ultra = le plus cher.
IMAGEN_FAST = "imagen-4.0-fast-generate-001"    # défaut (le moins cher)
IMAGEN_MODEL = "imagen-4.0-generate-001"        # standard
IMAGEN_ULTRA = "imagen-4.0-ultra-generate-001"  # ultra (le plus cher)


def build_style(lens: str = "50mm") -> str:
    """Style cinématique de marque, anti-look-IA. Lentille : 50mm ou 85mm."""
    return (
        f"Cinematic film still, dynamic angle, shot on a {lens} prime lens, "
        "shallow depth of field with creamy natural bokeh, photorealistic, "
        "motivated practical lighting, soft volumetric light, natural skin and "
        "material texture, subtle 35mm film grain, professional color grading, "
        "teal and amber palette, anamorphic feel, high dynamic range, looks "
        "like a real photograph from a movie, NOT AI-looking, no text, no "
        "watermark, no logo."
    )


def load_dotenv() -> None:
    """Charge un .env à la racine du repo si présent (clé=valeur par ligne)."""
    env_path = REPO_ROOT / ".env"
    if not env_path.exists():
        return
    for line in env_path.read_text().splitlines():
        line = line.strip()
        if line and not line.startswith("#") and "=" in line:
            key, value = line.split("=", 1)
            os.environ.setdefault(key.strip(), value.strip().strip("\"'"))


def generate(prompt: str, model: str, ratio: str, image_size: str,
             style: str) -> bytes:
    from google import genai
    from google.genai import types

    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        sys.exit("Erreur : GEMINI_API_KEY absente (env ou .env).")

    client = genai.Client(api_key=api_key)
    cfg = dict(
        number_of_images=1,
        aspect_ratio=ratio,
        person_generation="ALLOW_ADULT",
        safety_filter_level="BLOCK_LOW_AND_ABOVE",
    )
    # Le palier Fast est 1K natif et refuse le paramètre image_size : on ne
    # l'envoie que pour Standard/Ultra (qui acceptent 1K ou 2K).
    if image_size:
        cfg["image_size"] = image_size
    resp = client.models.generate_images(
        model=model,
        prompt=f"{prompt}. {style}",
        config=types.GenerateImagesConfig(**cfg),
    )
    if not resp.generated_images:
        sys.exit("Erreur : aucune image renvoyée (filtre de sécurité ?).")
    return resp.generated_images[0].image.image_bytes


def to_webp(raw: bytes, dest: Path, width: int, quality: int) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.NamedTemporaryFile(suffix=".png", delete=False) as tmp:
        tmp.write(raw)
        tmp_path = tmp.name
    try:
        subprocess.run(
            ["sips", "--resampleWidth", str(width), tmp_path],
            check=True, capture_output=True,
        )
        subprocess.run(
            ["cwebp", "-quiet", "-q", str(quality), tmp_path, "-o", str(dest)],
            check=True, capture_output=True,
        )
    finally:
        os.unlink(tmp_path)


def main() -> None:
    p = argparse.ArgumentParser(description="Génère un hero cinématique WebP 2K.")
    p.add_argument("--slug", help="slug de l'article (=> <slug>.webp)")
    p.add_argument("--out", help="chemin de sortie explicite (sinon dérivé du slug)")
    p.add_argument("--prompt", required=True, help="description de la scène")
    p.add_argument("--standard", action="store_true",
                   help="Imagen 4 Standard (défaut = Fast, le moins cher)")
    p.add_argument("--ultra", action="store_true", help="Imagen 4 Ultra (le plus cher)")
    p.add_argument("--lens", default="50mm", choices=["50mm", "85mm"],
                   help="focale du rendu (défaut 50mm)")
    p.add_argument("--ratio", default="16:9", help="ratio (défaut 16:9)")
    p.add_argument("--image-size", default="2K", choices=["1K", "2K"],
                   help="résolution native pour Standard/Ultra (Fast = 1K only)")
    p.add_argument("--width", type=int, default=1280,
                   help="largeur d'export WebP en px (défaut 1280, léger + net)")
    p.add_argument("--quality", type=int, default=82, help="qualité WebP")
    args = p.parse_args()

    if args.out:
        dest = Path(args.out)
    elif args.slug:
        dest = ARTICLES_DIR / f"{args.slug}.webp"
    else:
        sys.exit("Erreur : fournis --slug ou --out.")

    load_dotenv()
    if args.ultra:
        model, size = IMAGEN_ULTRA, args.image_size
    elif args.standard:
        model, size = IMAGEN_MODEL, args.image_size
    else:
        model, size = IMAGEN_FAST, None  # Fast = 1K natif, image_size non envoyé
    style = build_style(args.lens)
    print(f"Modèle : {model} | {args.lens} | ratio {args.ratio} | "
          f"natif {size or '1K (Fast)'} | export {args.width}px")
    raw = generate(args.prompt, model, args.ratio, size, style)
    to_webp(raw, dest, args.width, args.quality)
    size_kb = dest.stat().st_size / 1024
    try:
        shown = dest.resolve().relative_to(REPO_ROOT)
    except ValueError:
        shown = dest
    print(f"✓ {shown} ({size_kb:.0f} Ko)")


if __name__ == "__main__":
    main()
