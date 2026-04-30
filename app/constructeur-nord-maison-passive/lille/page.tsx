import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Constructeur maison passive à Lille — Projet 100 % sur mesure",
  description:
    "Construisez votre maison passive à Lille : moins de 15 kWh/m²/an, triple vitrage, VMC double flux. Économies massives sur vos factures. Devis gratuit.",
  alternates: { canonical: "/constructeur-nord-maison-passive/lille" },
  openGraph: buildOpenGraph("/constructeur-nord-maison-passive/lille", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Passive",
  maisonTypeHref: "/constructeur-nord-maison-passive",
  city: "Lille",
  h1: "Constructeur de maison passive à Lille : projet 100 % sur mesure",
  subtitle:
    "Lille attire de plus en plus de projets immobiliers grâce à ses transports en commun exemplaires et ses nombreux espaces verts — un contexte idéal pour votre maison passive.",
  openingIntro:
    "Avec une très bonne disposition des transports en commun ainsi qu'une forte présence d'espaces verts, Lille est une ville qui intéresse de plus en plus dans le domaine de l'immobilier. Nous verrons ici essentiellement comment trouver un constructeur de maison passive dans le Nord, plus particulièrement à Lille, et pourquoi privilégier ce choix parmi les autres possibilités.",
  intro:
    "Lille bénéficie d'une très bonne disposition des transports en commun et d'une forte présence d'espaces verts, ce qui attire un nombre croissant de projets immobiliers de qualité. La ville est desservie par le métro, les bus et le TER, avec des connexions rapides vers Paris, Bruxelles et Londres. Ce dynamisme en fait l'un des marchés les plus actifs du Nord pour la construction neuve.",
  whyBuild:
    "La maison passive consomme moins de 15 kWh/m² par an pour le chauffage — contre 150 à 300 kWh pour une maison ancienne. À Lille, où les hivers peuvent être rigoureux, cet investissement est particulièrement rentable. Le triple vitrage et la suppression des ponts thermiques maintiennent une température stable et confortable toute l'année. Les pertes de chaleur se font principalement par la toiture, puis les murs et enfin le sol — votre constructeur optimise chacun de ces points.",
  constructorAdvice:
    "Construire une maison passive à Lille requiert un spécialiste maîtrisant le diagnostic du site, les types d'isolation, les systèmes de ventilation double flux et les démarches administratives spécifiques. Ma Maison dans le Nord vous met en relation avec des constructeurs certifiés et expérimentés, qui vous guident de la conception à la remise des clés.",
  relatedCities: [
    { label: "Douai", href: "/constructeur-nord-maison-passive/douai" },
    { label: "Arras", href: "/constructeur-nord-maison-passive/arras" },
    { label: "Valenciennes", href: "/constructeur-nord-maison-passive/valenciennes" },
    { label: "Lens", href: "/constructeur-nord-maison-passive/lens" },
    { label: "Béthune", href: "/constructeur-nord-maison-passive/bethune" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} canonicalPath="/constructeur-nord-maison-passive/lille" />;
}
