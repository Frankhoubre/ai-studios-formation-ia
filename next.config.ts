import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  /** Evite d inferer une racine parente a cause d un pnpm-lock hors repo (dev local). */
  turbopack: { root: projectRoot },
};

export default nextConfig;
