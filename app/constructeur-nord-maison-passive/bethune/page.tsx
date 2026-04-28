import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Constructeur maison passive à Béthune — Trouver le meilleur",
  description:
    "Maison passive à Béthune, importante ville du Nord-Pas-de-Calais. Constructeurs qualifiés, devis personnalisé, aide terrain. Économies d'énergie maximales.",
  alternates: { canonical: "/constructeur-nord-maison-passive/bethune" },
  openGraph: buildOpenGraph("/constructeur-nord-maison-passive/bethune", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Passive",
  maisonTypeHref: "/constructeur-nord-maison-passive",
  city: "Béthune",
  h1: "Constructeur de maison passive à Béthune : comment trouver le meilleur ?",
  subtitle:
    "Béthune, ancienne ville bourgeoise devenue dynamique et moderne, offre un cadre de vie agréable pour votre maison passive écologique et économique.",
  intro:
    "Béthune est l'une des villes les plus importantes du Nord-Pas-de-Calais. Ancienne ville à caractère bourgeois, elle accueille aujourd'hui de nombreux commerces, jardins et lieux culturels qui créent un environnement de vie agréable. La ville offre un équilibre entre animation commerciale et quartiers résidentiels calmes, idéal pour une construction neuve.",
  whyBuild:
    "La maison passive à Béthune est un investissement écologique et économique. En s'appuyant sur les énergies renouvelables et une conception thermique optimisée, elle maintient un confort optimal tout au long de l'année tout en minimisant l'impact environnemental. Les hivers parfois rigoureux du Pas-de-Calais rendent cette performance énergétique particulièrement précieuse.",
  constructorAdvice:
    "Ma Maison dans le Nord travaille avec des constructeurs qualifiés qui maîtrisent parfaitement les techniques de construction passive à Béthune. Leurs équipes suivent attentivement vos spécifications tout au long du chantier et proposent des devis personnalisés adaptés à votre budget. Si vous ne connaissez pas encore la région, ils peuvent aussi vous aider à trouver le terrain idéal.",
  relatedCities: [
    { label: "Lille", href: "/constructeur-nord-maison-passive/lille" },
    { label: "Douai", href: "/constructeur-nord-maison-passive/douai" },
    { label: "Arras", href: "/constructeur-nord-maison-passive/arras" },
    { label: "Valenciennes", href: "/constructeur-nord-maison-passive/valenciennes" },
    { label: "Lens", href: "/constructeur-nord-maison-passive/lens" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} />;
}
