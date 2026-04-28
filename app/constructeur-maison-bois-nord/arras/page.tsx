import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Constructeur maison ossature bois à Arras — Projet écologique",
  description:
    "Maison à ossature bois à Arras, capitale du Pas-de-Calais. Construction écologique, rapide et performante. Partenaires expérimentés. Devis gratuit.",
  alternates: { canonical: "/constructeur-maison-bois-nord/arras" },
  openGraph: buildOpenGraph("/constructeur-maison-bois-nord/arras", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Ossature bois",
  maisonTypeHref: "/constructeur-maison-bois-nord",
  city: "Arras",
  h1: "Constructeur de maison à ossature bois à Arras",
  subtitle:
    "Arras, capitale du Pas-de-Calais avec ses équipements scolaires, culturels et sportifs, offre un cadre idéal pour votre maison écologique à ossature bois.",
  intro:
    "Arras, capitale du Pas-de-Calais, propose de nombreuses infrastructures appréciées des familles : équipements de garde d'enfants, écoles et lycées de qualité, enseignement supérieur, pistes cyclables, transports en commun et stationnements. La ville offre aussi une riche programmation sportive, culturelle et touristique. C'est dans ce cadre de vie complet que vous pouvez envisager la construction de votre maison à ossature bois.",
  whyBuild:
    "La construction à ossature bois (MOB) requiert des compétences spécialisées que peu de particuliers possèdent. Les constructeurs professionnels maîtrisent toutes les étapes : conception, approvisionnement en matériaux certifiés, mise en œuvre des panneaux préfabriqués et suivi de chantier. La MOB est idéale pour Arras car la légèreté de la structure s'adapte parfaitement aux sols argileux de la région.",
  constructorAdvice:
    "Ma Maison dans le Nord travaille exclusivement avec des constructeurs forts de nombreuses années d'expérience en ossature bois. Chaque partenaire est sélectionné pour son professionnalisme, sa fiabilité et sa capacité à livrer une maison conforme à vos attentes, dans les délais et le budget convenus.",
  relatedCities: [
    { label: "Lille", href: "/constructeur-maison-bois-nord/lille" },
    { label: "Douai", href: "/constructeur-maison-bois-nord/douai" },
    { label: "Villeneuve-d'Ascq", href: "/constructeur-maison-bois-nord/villeneuve-dascq" },
    { label: "Valenciennes", href: "/constructeur-maison-bois-nord/valenciennes" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} />;
}
