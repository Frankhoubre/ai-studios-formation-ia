import type { Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/CookieConsent";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import {
  buildOrganizationJsonLd,
  buildRootMetadata,
  buildWebsiteJsonLd,
} from "@/lib/seo";

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

export const viewport: Viewport = {
  themeColor: "#06060a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata = buildRootMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${sora.variable} h-full`}>
      <body className="min-h-full flex flex-col radial-glow antialiased">
        <SEOJsonLd
          data={[buildOrganizationJsonLd(), buildWebsiteJsonLd()]}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
