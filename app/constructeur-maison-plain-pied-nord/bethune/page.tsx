import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Constructeur maison plain-pied à Béthune — Sur mesure",
  description:
    "Construisez votre maison plain-pied à Béthune, ville dynamique du Pas-de-Calais. Commerces, transports, calme et dynamisme. Devis gratuit.",
  alternates: { canonical: "/constructeur-maison-plain-pied-nord/bethune" },
  openGraph: buildOpenGraph("/constructeur-maison-plain-pied-nord/bethune", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Plain-pied",
  maisonTypeHref: "/constructeur-maison-plain-pied-nord",
  city: "Béthune",
  h1: "Constructeur de maison plain-pied à Béthune",
  subtitle:
    "Béthune, ville du Pas-de-Calais alliant commerces de proximité, transports et qualité de vie, est un excellent choix pour votre maison plain-pied.",
  intro:
    "Béthune est une ville prometteuse du département du Pas-de-Calais, appréciée pour ses nombreuses commodités : commerces de proximité, transports en commun, équipements sportifs et culturels. Elle offre à la fois un cadre de vie calme dans ses quartiers résidentiels et une animation commerciale dynamique en centre-ville — idéal pour une vie de famille épanouie.",
  whyBuild:
    "La maison plain-pied à Béthune convient parfaitement aux familles souhaitant une maison pratique et économique à entretenir. Son architecture sur un seul niveau facilite le quotidien, réduit les charges de chauffage et offre une accessibilité totale pour tous les membres de la famille. C'est aussi une maison qui se personnalise facilement selon vos goûts et votre mode de vie.",
  constructorAdvice:
    "Trouver le bon constructeur de maison plain-pied à Béthune peut s'avérer complexe. Ma Maison dans le Nord sélectionne des professionnels pour leur rigueur, leur écoute et leur capacité à mener des projets ambitieux. Contactez-nous pour être mis en relation avec le constructeur qui correspond à votre projet et à votre budget.",
  relatedCities: [
    { label: "Lille", href: "/constructeur-maison-plain-pied-nord/lille" },
    { label: "Arras", href: "/constructeur-maison-plain-pied-nord/arras" },
    { label: "Douai", href: "/constructeur-maison-plain-pied-nord/douai" },
    { label: "Valenciennes", href: "/constructeur-maison-plain-pied-nord/valenciennes" },
    { label: "Lens", href: "/constructeur-maison-plain-pied-nord/lens" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} canonicalPath="/constructeur-maison-plain-pied-nord/bethune" />;
}
