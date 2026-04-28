import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";

export const metadata: Metadata = {
  title: "Constructeur maison passive à Arras — Trouver le meilleur !",
  description:
    "Maison passive à Arras, ville UNESCO du Pas-de-Calais. Constructeurs certifiés, devis gratuit, aide à la recherche de terrain. Économies d'énergie maximales.",
  alternates: { canonical: "/constructeur-nord-maison-passive/arras" },
};

const data: CityMaisonData = {
  maisonTypeLabel: "Passive",
  maisonTypeHref: "/constructeur-nord-maison-passive",
  city: "Arras",
  h1: "Constructeur de maison passive à Arras : trouver le meilleur !",
  subtitle:
    "Arras, ville du patrimoine mondial UNESCO, ses parcs, ses forêts et ses jardins botaniques — un cadre inspirant pour construire la maison passive de demain.",
  intro:
    "Arras est stratégiquement positionnée dans le Nord-Pas-de-Calais, à proximité de Lens et avec un accès facile au littoral. La ville possède un patrimoine culturel exceptionnel, dont la citadelle Vauban et le beffroi inscrits au patrimoine mondial de l'UNESCO. Elle dispose également de parcs, forêts et jardins botaniques, rendant son cadre de vie particulièrement agréable pour les amoureux de la nature souhaitant construire durablement.",
  whyBuild:
    "La maison passive est la maison du futur : conçue pour maximiser les apports solaires et les sources d'énergie renouvelables, elle peut être alimentée en grande partie par des panneaux solaires, réduisant drastiquement vos dépenses énergétiques. À Arras, les hivers froids et les factures de chauffage élevées rendent cet investissement particulièrement rentable, avec un retour sur investissement estimé à 10-15 ans.",
  constructorAdvice:
    "Nos professionnels certifiés en construction passive à Arras sont attentifs, personnalisent chaque maison selon les spécifications du client et proposent des devis gratuits. Ils sont également compétents pour vous accompagner dans la recherche de terrain constructible. Tous nos partenaires respectent les critères stricts du label maison passive (< 15 kWh/m²/an, étanchéité à l'air < 0,6 vol/h).",
  relatedCities: [
    { label: "Lille", href: "/constructeur-nord-maison-passive/lille" },
    { label: "Douai", href: "/constructeur-nord-maison-passive/douai" },
    { label: "Valenciennes", href: "/constructeur-nord-maison-passive/valenciennes" },
    { label: "Lens", href: "/constructeur-nord-maison-passive/lens" },
    { label: "Béthune", href: "/constructeur-nord-maison-passive/bethune" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} />;
}
