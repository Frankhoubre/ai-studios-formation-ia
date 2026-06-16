#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Génère un visuel hero cinématique pour un article du blog AI Studios.

Style imposé : film still photoréaliste, angle dynamique, 50mm, bokeh,
lumière motivée, grain 35mm, palette teal/amber, anti-look-IA. Sortie en
WebP ~1K, idéale pour un hero d'article.

Pré-requis :
  - pip install --user google-genai
  - cwebp et sips (macOS) disponibles dans le PATH
  - une clé Gemini dans la variable d'env GEMINI_API_KEY
    (ou dans un fichier .env à la racine du repo — déjà git-ignoré)
    Clé gratuite : https://aistudio.google.com/apikey

Exemples :
  python scripts/generate-hero.py \
    --slug prompt-negatif-ia-images-propres \
    --prompt "A focused creative in a dark studio reviewing images on a monitor"

  python scripts/generate-hero.py --slug mon-article \
    --prompt "..." --pro          # qualité supérieure (plus cher)
"""

import argparse
import os
import subprocess
import sys
import tempfile
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
ARTICLES_DIR = REPO_ROOT / "public" / "images" / "articles"

FLASH_MODEL = "gemini-2.5-flash-image"        # ~0,039 $/image (défaut)
PRO_MODEL = "gemini-3-pro-image-preview"      # ~0,13 $/image

# Style cinématique appliqué à chaque génération (cohérence de marque).
STYLE = (
    "Cinematic film still, dynamic angle, shot on a 50mm prime lens, shallow "
    "depth of field with creamy natural bokeh, photorealistic, motivated "
    "practical lighting, soft volumetric light, natural skin and material "
    "texture, subtle 35mm film grain, professional color grading, teal and "
    "amber palette, anamorphic feel, high dynamic range, looks like a real "
    "photograph from a movie, NOT AI-looking, no text, no watermark, no logo."
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


def generate(prompt: str, model: str, ratio: str) -> bytes:
    from google import genai
    from google.genai import types

    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        sys.exit("Erreur : GEMINI_API_KEY absente (env ou .env).")

    client = genai.Client(api_key=api_key)
    resp = client.models.generate_content(
        model=model,
        contents=[f"{prompt}\n\nStyle: {STYLE}"],
        config=types.GenerateContentConfig(
            response_modalities=["IMAGE", "TEXT"],
            image_config=types.ImageConfig(aspect_ratio=ratio),
        ),
    )
    for part in resp.candidates[0].content.parts:
        data = getattr(part, "inline_data", None)
        if data and data.mime_type.startswith("image/"):
            return data.data
    sys.exit("Erreur : aucune image renvoyée par le modèle.")


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
    p = argparse.ArgumentParser(description="Génère un hero cinématique WebP.")
    p.add_argument("--slug", help="slug de l'article (=> <slug>.webp)")
    p.add_argument("--out", help="chemin de sortie explicite (sinon dérivé du slug)")
    p.add_argument("--prompt", required=True, help="description de la scène")
    p.add_argument("--pro", action="store_true", help="modèle Pro (plus cher)")
    p.add_argument("--ratio", default="16:9", help="ratio (défaut 16:9)")
    p.add_argument("--width", type=int, default=1024, help="largeur 1K par défaut")
    p.add_argument("--quality", type=int, default=82, help="qualité WebP")
    args = p.parse_args()

    if args.out:
        dest = Path(args.out)
    elif args.slug:
        dest = ARTICLES_DIR / f"{args.slug}.webp"
    else:
        sys.exit("Erreur : fournis --slug ou --out.")

    load_dotenv()
    model = PRO_MODEL if args.pro else FLASH_MODEL
    print(f"Modèle : {model} | ratio {args.ratio} | {args.width}px")
    raw = generate(args.prompt, model, args.ratio)
    to_webp(raw, dest, args.width, args.quality)
    size_kb = dest.stat().st_size / 1024
    try:
        shown = dest.resolve().relative_to(REPO_ROOT)
    except ValueError:
        shown = dest
    print(f"✓ {shown} ({size_kb:.0f} Ko)")


if __name__ == "__main__":
    main()
