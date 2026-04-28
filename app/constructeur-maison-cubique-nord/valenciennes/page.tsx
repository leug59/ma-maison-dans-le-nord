import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Constructeur maison cubique à Valenciennes — Projets sur mesure",
  description:
    "Construisez votre maison cubique à Valenciennes, 5e centre-ville le plus dynamique de France. Architecture contemporaine personnalisée. Devis gratuit.",
  alternates: { canonical: "/constructeur-maison-cubique-nord/valenciennes" },
  openGraph: buildOpenGraph("/constructeur-maison-cubique-nord/valenciennes", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Cubique",
  maisonTypeHref: "/constructeur-maison-cubique-nord",
  city: "Valenciennes",
  h1: "Constructeur de maison cubique à Valenciennes : projets sur mesure",
  subtitle:
    "Sous-préfecture du Nord reconnue comme le 5e centre-ville le plus dynamique de France, Valenciennes offre un cadre idéal pour votre maison cubique contemporaine.",
  intro:
    "Valenciennes, sous-préfecture du Nord, est une ville en plein essor. Son centre-ville a été reconnu comme le 5e plus dynamique de France. La ville investit dans de nouvelles pistes cyclables et l'embellissement de ses boulevards. Son aquatic center Nungesser (6 000 m², 3 bassins, toboggan de 20 m, espaces bien-être et restauration, inauguré en février 2020) en fait une ville agréable à vivre pour toute la famille.",
  whyBuild:
    "La maison cubique combine esthétique contemporaine et praticité. Ses lignes épurées, ses matériaux modernes, ses couleurs personnalisables et ses grandes fenêtres créent un habitat lumineux et original. Ce type de construction est à la fois écologique et économique : la toiture terrasse peut accueillir des panneaux solaires, et l'étanchéité renforcée améliore les performances thermiques.",
  constructorAdvice:
    "Le choix du constructeur est déterminant pour la réussite de votre maison cubique à Valenciennes. Nos partenaires s'adaptent à tous les projets, proposent un accompagnement personnalisé et respectent vos décisions tout au long du chantier. Ils maîtrisent les contraintes techniques de l'architecture à toit plat et les règles d'urbanisme locales.",
  relatedCities: [
    { label: "Lille", href: "/constructeur-maison-cubique-nord/lille" },
    { label: "Arras", href: "/constructeur-maison-cubique-nord/arras" },
    { label: "Douai", href: "/constructeur-maison-cubique-nord/douai" },
    { label: "Villeneuve-d'Ascq", href: "/constructeur-maison-cubique-nord/villeneuve-dascq" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} canonicalPath="/constructeur-maison-cubique-nord/valenciennes" />;
}
