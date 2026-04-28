import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Constructeur maison plain-pied à Lille — Projet personnalisé",
  description:
    "Construisez votre maison plain-pied à Lille et dans la métropole. Accessible, économique à chauffer et entretenir. Mise en relation gratuite avec nos constructeurs.",
  alternates: { canonical: "/constructeur-maison-plain-pied-nord/lille" },
  openGraph: buildOpenGraph("/constructeur-maison-plain-pied-nord/lille", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Plain-pied",
  maisonTypeHref: "/constructeur-maison-plain-pied-nord",
  city: "Lille",
  h1: "Constructeur de maison plain-pied à Lille : votre projet 100 % personnalisé",
  subtitle:
    "La maison plain-pied, idéale pour le climat du Nord : facile à construire, à aménager, à entretenir et à chauffer — tout en offrant une accessibilité optimale.",
  intro:
    "Lille et sa métropole constituent l'une des premières destinations de construction neuve dans le Nord. Les hivers froids de la région rendent le choix du type de construction particulièrement important. La maison plain-pied s'y adapte parfaitement : son architecture de plain-pied facilite l'isolation thermique et la distribution homogène de la chaleur sur un seul niveau.",
  whyBuild:
    "La maison plain-pied à Lille présente quatre avantages majeurs : la facilité de construction sur les terrains plats de la métropole, la flexibilité d'aménagement intérieur, la simplicité d'entretien et l'efficacité du chauffage. Toutes les pièces étant sur un seul niveau, la chaleur se distribue de manière équitable et aucun espace n'est gaspillé. Ce type de maison est également idéal pour les personnes à mobilité réduite, les seniors et les jeunes familles.",
  constructorAdvice:
    "Un constructeur de maison plain-pied à Lille doit maîtriser la recherche de terrains adaptés (emprise au sol plus importante), la conception de plans optimisés et le choix des matériaux performants pour le climat nordiste. Ma Maison dans le Nord vous met en relation avec des professionnels agréés, attentifs à vos besoins et respectueux de votre budget.",
  relatedCities: [
    { label: "Arras", href: "/constructeur-maison-plain-pied-nord/arras" },
    { label: "Douai", href: "/constructeur-maison-plain-pied-nord/douai" },
    { label: "Valenciennes", href: "/constructeur-maison-plain-pied-nord/valenciennes" },
    { label: "Lens", href: "/constructeur-maison-plain-pied-nord/lens" },
    { label: "Béthune", href: "/constructeur-maison-plain-pied-nord/bethune" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} />;
}
