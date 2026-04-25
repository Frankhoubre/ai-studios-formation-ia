import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/CookieConsent";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { MAIN_SITE_URL, SITE_NAME, SITE_URL } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const defaultTitle = "AI Studios Blog - Formation IA vidéo, image et cinéma";
const defaultDescription =
  "Guides concrets pour apprendre à créer des images, vidéos, pubs et films avec l’intelligence artificielle, sans rendu générique ni workflow au hasard.";

export const viewport: Viewport = {
  themeColor: "#06060a",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: defaultDescription,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: SITE_NAME,
    title: defaultTitle,
    description: defaultDescription,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: { index: true, follow: true },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AI Studios",
  url: MAIN_SITE_URL,
  description:
    "Formation et communauté pour maîtriser l’IA créative appliquée à l’image, la vidéo et le cinéma.",
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AI Studios Blog",
  url: SITE_URL,
  inLanguage: "fr-FR",
  publisher: { "@type": "Organization", name: "AI Studios", url: MAIN_SITE_URL },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${sora.variable} h-full`}>
      <body className="min-h-full flex flex-col radial-glow antialiased">
        <SEOJsonLd data={[organizationLd, websiteLd]} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
