import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Navigation from "./_components/Navigation";
import Footer from "./_components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["700"],
  display: "optional",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ma-maison-dans-le-nord.fr"),
  title: {
    template: "%s | Ma Maison dans le Nord",
    default:
      "Constructeur de maison individuelle dans le Nord | Ma Maison dans le Nord",
  },
  description:
    "Ma Maison dans le Nord sélectionne les meilleurs constructeurs de maisons individuelles des Hauts-de-France. Projets 100% sur mesure à Lille, dans le Nord et le Pas-de-Calais.",
  keywords: [
    "constructeur maison nord",
    "maison individuelle hauts-de-france",
    "construction maison lille",
    "constructeur maison pas-de-calais",
    "maison sur mesure nord",
  ],
  openGraph: {
    siteName: "Ma Maison dans le Nord",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/hero-maison-nord.jpg",
        width: 1200,
        height: 630,
        alt: "Constructeur de maison individuelle dans le Nord - Ma Maison dans le Nord",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Navigation />
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <Footer />
        {/* Floating CTA — mobile only */}
        <Link
          href="/devis"
          className="fixed bottom-5 right-4 z-40 md:hidden flex items-center gap-2 px-5 py-3 bg-[#c8922a] text-white text-sm font-semibold rounded-xl shadow-lg shadow-black/25 hover:brightness-110 transition-all"
          aria-label="Demander un devis gratuit"
        >
          <svg
            className="w-4 h-4 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Devis gratuit
        </Link>
      </body>
    </html>
  );
}
