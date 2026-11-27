import type { MetadataRoute } from "next";
import {
  ORG_LOGO,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "AI Studios",
    description:
      "Guides IA image, vidéo et cinéma pour des workflows créatifs professionnels.",
    start_url: "/",
    display: "standalone",
    background_color: "#06060a",
    theme_color: "#06060a",
    lang: "fr",
    icons: [
      {
        src: ORG_LOGO,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    id: SITE_URL,
  };
}
