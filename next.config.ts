import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  /** Evite d inferer une racine parente a cause d un pnpm-lock hors repo (dev local). */
  turbopack: { root: projectRoot },
  images: {
    /** Sert de l'AVIF/WebP redimensionne aux navigateurs compatibles. */
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
