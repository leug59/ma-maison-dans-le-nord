import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
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
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
