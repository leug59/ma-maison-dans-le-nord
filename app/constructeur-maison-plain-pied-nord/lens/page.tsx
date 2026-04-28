import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Constructeur maison plain-pied à Lens — Projet personnalisé",
  description:
    "Construisez votre maison plain-pied à Lens, ville du Louvre-Lens. Chauffage facile sur un seul niveau, accessibilité optimale. Devis gratuit.",
  alternates: { canonical: "/constructeur-maison-plain-pied-nord/lens" },
  openGraph: buildOpenGraph("/constructeur-maison-plain-pied-nord/lens", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Plain-pied",
  maisonTypeHref: "/constructeur-maison-plain-pied-nord",
  city: "Lens",
  h1: "Constructeur de maison plain-pied à Lens",
  subtitle:
    "Lens, ville du Louvre-Lens et de la qualité de vie dans le Pas-de-Calais, accueille votre maison plain-pied : accessible, économique et adaptée au climat nordiste.",
  intro:
    "Lens est l'une des villes les plus attractives du Nord-Pas-de-Calais, connue pour la qualité de sa vie de quartier et ses espaces verts. La ville dispose d'une gare et d'un réseau de bus pour se déplacer facilement dans la région. Son attraction culturelle phare, le Louvre-Lens, en fait une destination de renommée internationale. Un projet de piscine olympique est également en cours dans l'agglomération.",
  whyBuild:
    "Dans le climat nordiste de Lens, la maison plain-pied est particulièrement adaptée. Toutes les pièces étant construites sur un seul niveau, elles bénéficient d'une distribution équitable de la chaleur, réduisant ainsi la facture de chauffage. Ce type de maison garantit aussi une sécurité accrue pour les seniors et les familles avec enfants en bas âge.",
  constructorAdvice:
    "Un bon constructeur de maison plain-pied à Lens maîtrise l'architecture de plain-pied, la sélection des terrains adaptés et le choix de matériaux de qualité. Il doit aussi être capable de vous conseiller sur l'agencement optimal des pièces. Ma Maison dans le Nord vous met en relation avec des professionnels qualifiés et expérimentés dans la région lensoise.",
  relatedCities: [
    { label: "Lille", href: "/constructeur-maison-plain-pied-nord/lille" },
    { label: "Arras", href: "/constructeur-maison-plain-pied-nord/arras" },
    { label: "Douai", href: "/constructeur-maison-plain-pied-nord/douai" },
    { label: "Valenciennes", href: "/constructeur-maison-plain-pied-nord/valenciennes" },
    { label: "Béthune", href: "/constructeur-maison-plain-pied-nord/bethune" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} />;
}
