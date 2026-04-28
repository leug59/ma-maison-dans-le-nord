import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Constructeur maison plain-pied à Arras — Sur mesure",
  description:
    "Construisez votre maison plain-pied à Arras, capitale du Pas-de-Calais. 34 % des habitants sont propriétaires. Projet 100 % personnalisé. Devis gratuit.",
  alternates: { canonical: "/constructeur-maison-plain-pied-nord/arras" },
  openGraph: buildOpenGraph("/constructeur-maison-plain-pied-nord/arras", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Plain-pied",
  maisonTypeHref: "/constructeur-maison-plain-pied-nord",
  city: "Arras",
  h1: "Constructeur de maison plain-pied à Arras",
  subtitle:
    "Arras, capitale du Pas-de-Calais bien connectée à Lille, Douai et Lens, est une ville à forte tradition de propriété : 34 % des habitants sont propriétaires.",
  intro:
    "Arras est idéalement située pour les projets de construction neuve. Environ 34 % des habitants de la ville sont propriétaires, signe d'une forte culture de l'accession immobilière. La ville bénéficie d'excellentes liaisons de transport vers Lille, Douai et Lens, ainsi que d'un bassin d'emploi dynamique. Son patrimoine historique exceptionnel (beffroi et citadelle Vauban classés UNESCO) et la qualité de ses équipements culturels en font une ville où il fait bon construire et vivre.",
  whyBuild:
    "La maison plain-pied convient parfaitement au terrain et au mode de vie arrageois. Son architecture de plain-pied facilite la vie quotidienne, réduit les coûts d'entretien et optimise les dépenses de chauffage — particulièrement utile dans le contexte climatique du Nord. Elle offre aussi une grande accessibilité, appréciée par tous les membres de la famille.",
  constructorAdvice:
    "Pour votre maison plain-pied à Arras, privilégiez un constructeur reconnu pour son expertise en architecture de plain-pied, sa réputation locale et la qualité de ses références. Il doit respecter vos préférences en matière d'emplacement, de plan intérieur et de matériaux. Ma Maison dans le Nord vous met en relation avec les meilleurs professionnels de la région.",
  relatedCities: [
    { label: "Lille", href: "/constructeur-maison-plain-pied-nord/lille" },
    { label: "Douai", href: "/constructeur-maison-plain-pied-nord/douai" },
    { label: "Valenciennes", href: "/constructeur-maison-plain-pied-nord/valenciennes" },
    { label: "Lens", href: "/constructeur-maison-plain-pied-nord/lens" },
    { label: "Béthune", href: "/constructeur-maison-plain-pied-nord/bethune" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} canonicalPath="/constructeur-maison-plain-pied-nord/arras" />;
}
