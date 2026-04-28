import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Constructeur maison traditionnelle à Douai — Briques et caractère",
  description:
    "Maison traditionnelle à Douai : beffroi UNESCO, villas Art Déco, briques rouges et toits noirs. Constructeurs locaux, budget respecté. Devis gratuit.",
  alternates: { canonical: "/constructeur-maison-traditionnelle-nord/douai" },
  openGraph: buildOpenGraph("/constructeur-maison-traditionnelle-nord/douai", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Traditionnelle",
  maisonTypeHref: "/constructeur-maison-traditionnelle-nord",
  city: "Douai",
  h1: "Constructeur de maison traditionnelle à Douai",
  subtitle:
    "Douai, ville du beffroi UNESCO et de l'Abbaye des Près aux villas Art Déco, incarne le meilleur de l'architecture traditionnelle des Hauts-de-France.",
  intro:
    "Douai est une ville chargée d'histoire, avec son beffroi inscrit au patrimoine mondial de l'UNESCO et le quartier de l'Abbaye des Près avec ses remarquables villas Art Déco. La ville est au cœur d'un bassin de vie comprenant les communes de Raches, Anhiers, Waziers, Roost-Warendin, Flers-en-Escrebieux, Cuincy, Sin-le-Noble et Lambres-lez-Douai. L'architecture traditionnelle douaisienne est caractérisée par ses façades en brique rouge, ses toits noirs pentus et ses hautes menuiseries — un style intemporel qui séduit toujours.",
  whyBuild:
    "La maison traditionnelle à Douai est un choix qui traverse les générations. Son architecture en brique, typique des Hauts-de-France, s'intègre naturellement dans le tissu résidentiel douaisien et offre une valorisation immobilière éprouvée. Nos constructeurs partenaires connaissent parfaitement ce style architectural et ses exigences techniques.",
  constructorAdvice:
    "Ma Maison dans le Nord vous connecte avec le constructeur idéal pour votre maison traditionnelle à Douai. Notre réseau de partenaires maîtrise l'architecture régionale et respecte les budgets définis. Contactez-nous pour découvrir notre processus de mise en relation — sans engagement.",
  relatedCities: [
    { label: "Lille", href: "/constructeur-maison-traditionnelle-nord/lille" },
    { label: "Béthune", href: "/constructeur-maison-traditionnelle-nord/bethune" },
    { label: "Arras", href: "/constructeur-maison-traditionnelle-nord/arras" },
    { label: "Valenciennes", href: "/constructeur-maison-traditionnelle-nord/valenciennes" },
    { label: "Villeneuve-d'Ascq", href: "/constructeur-maison-traditionnelle-nord/villeneuve-dascq" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} />;
}
