import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Constructeur maison passive à Lens — Projet 100 % personnalisé",
  description:
    "Maison passive à Lens, ville du Louvre-Lens. Constructeurs certifiés, aide à la recherche de terrain. Économies d'énergie maximales dans le Nord. Devis gratuit.",
  alternates: { canonical: "/constructeur-nord-maison-passive/lens" },
  openGraph: buildOpenGraph("/constructeur-nord-maison-passive/lens", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Passive",
  maisonTypeHref: "/constructeur-nord-maison-passive",
  city: "Lens",
  h1: "Constructeur de maison passive à Lens : projet 100 % personnalisé",
  subtitle:
    "Lens, ville du Louvre-Lens et de la qualité de vie dans le Pas-de-Calais, est l'endroit idéal pour votre maison passive à consommation d'énergie quasi nulle.",
  intro:
    "Lens est l'une des villes les plus attractives du Nord-Pas-de-Calais. Ses quartiers paisibles avec jardins offrent un cadre de vie agréable avec accès à la nature. La ville dispose d'une gare et d'un réseau de bus pour faciliter les déplacements. Son musée le Louvre-Lens est une attraction culturelle de renommée mondiale, et un projet de piscine olympique est en cours dans l'agglomération.",
  whyBuild:
    "À Lens, les hivers peuvent être froids et les dépenses de chauffage significatives pour une maison traditionnelle. La maison passive change radicalement la donne : avec moins de 15 kWh/m²/an pour le chauffage, les économies annuelles peuvent atteindre 2 000 à 4 000 €. Les constructeurs certifiés en maison passive maîtrisent chaque détail technique pour garantir ces performances.",
  constructorAdvice:
    "Ma Maison dans le Nord vous offre un accompagnement personnalisé pour votre maison passive à Lens. Nos constructeurs partenaires, qualifiés et expérimentés, vous contactent rapidement suite à votre demande de devis. Ils peuvent aussi vous aider dans la recherche de terrains constructibles si vous n'avez pas encore trouvé votre parcelle.",
  relatedCities: [
    { label: "Lille", href: "/constructeur-nord-maison-passive/lille" },
    { label: "Douai", href: "/constructeur-nord-maison-passive/douai" },
    { label: "Arras", href: "/constructeur-nord-maison-passive/arras" },
    { label: "Valenciennes", href: "/constructeur-nord-maison-passive/valenciennes" },
    { label: "Béthune", href: "/constructeur-nord-maison-passive/bethune" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} />;
}
