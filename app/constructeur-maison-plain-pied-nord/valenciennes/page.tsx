import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Constructeur maison plain-pied à Valenciennes — Sur mesure",
  description:
    "Construisez votre maison plain-pied à Valenciennes, ville dynamique du Nord à cadre de vie idyllique. Accessible et économique. Devis gratuit.",
  alternates: { canonical: "/constructeur-maison-plain-pied-nord/valenciennes" },
  openGraph: buildOpenGraph("/constructeur-maison-plain-pied-nord/valenciennes", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Plain-pied",
  maisonTypeHref: "/constructeur-maison-plain-pied-nord",
  city: "Valenciennes",
  h1: "Constructeur de maison plain-pied à Valenciennes",
  subtitle:
    "Valenciennes, ville au cadre de vie idyllique et à l'activité économique soutenue, est l'endroit idéal pour votre maison plain-pied accessible et conviviale.",
  intro:
    "Valenciennes est reconnue comme l'une des villes les plus agréables à vivre du Nord. Son cadre de vie alliant dynamisme commercial et espaces verts en fait une destination de choix pour les projets immobiliers. La ville et ses environs offrent de nombreuses opportunités de construction sur des terrains adaptés à l'architecture de plain-pied.",
  whyBuild:
    "La maison plain-pied à Valenciennes offre un accès facile à toutes les pièces, une grande flexibilité d'aménagement intérieur et une sécurité renforcée pour les enfants, les personnes âgées et celles à mobilité réduite. Sur un seul niveau, l'entretien est simplifié et le chauffage optimisé — un avantage précieux dans les hivers nordistes.",
  constructorAdvice:
    "Votre constructeur de maison plain-pied à Valenciennes doit être à l'écoute de vos exigences et apporter les garanties essentielles contre les risques éventuels. Il doit également maîtriser la recherche de terrains avec des dimensions adaptées à l'emprise au sol d'une maison plain-pied. Ma Maison dans le Nord sélectionne des partenaires fiables qui respectent vos attentes et votre budget.",
  relatedCities: [
    { label: "Lille", href: "/constructeur-maison-plain-pied-nord/lille" },
    { label: "Arras", href: "/constructeur-maison-plain-pied-nord/arras" },
    { label: "Douai", href: "/constructeur-maison-plain-pied-nord/douai" },
    { label: "Lens", href: "/constructeur-maison-plain-pied-nord/lens" },
    { label: "Béthune", href: "/constructeur-maison-plain-pied-nord/bethune" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} />;
}
