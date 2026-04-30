import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Constructeur maison ossature bois à Lille — 100 % sur mesure",
  description:
    "Construisez votre maison à ossature bois à Lille et dans la MEL. Écologique, rapide, performante. La métropole encourage les constructions durables. Devis gratuit.",
  alternates: { canonical: "/constructeur-maison-bois-nord/lille" },
  openGraph: buildOpenGraph("/constructeur-maison-bois-nord/lille", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Ossature bois",
  maisonTypeHref: "/constructeur-maison-bois-nord",
  city: "Lille",
  h1: "Constructeur de maison à ossature bois à Lille : 100 % sur mesure",
  subtitle:
    "La Métropole Européenne de Lille, plus d'un million d'habitants, encourage activement les constructions écologiques — un contexte idéal pour votre maison à ossature bois.",
  openingIntro:
    "Vous voulez un logement qui allie à la fois écologie, économie et rapidité de construction ? Alors, optez pour le plus naturel des matériaux : le bois. Mais avant de penser à votre futur nid douillet, il faut trouver le constructeur de maison à ossature bois dans le Nord idéal.",
  intro:
    "Lille est la ville principale de la Métropole Européenne de Lille (MEL), qui compte plus d'un million d'habitants. La ville est célèbre pour son Vieux Lille historique et sa position de carrefour européen entre Paris, Bruxelles et Londres. La municipalité mène une politique active en faveur de l'écologie : pistes cyclables et trottinettes, transports en commun étendus, jardins communautaires, et subventions pour l'installation d'énergies renouvelables.",
  whyBuild:
    "Dans ce contexte favorable à la durabilité, la maison à ossature bois (MOB) est un choix en parfaite cohérence avec les valeurs de la métropole lilloise. Elle offre d'excellentes performances thermiques, un bilan carbone favorable et un chantier rapide. Sa légèreté est également un atout sur les terrains argileux fréquents dans la région. Tous les styles architecturaux sont possibles : contemporain, traditionnel, cubique.",
  constructorAdvice:
    "La construction à ossature bois nécessite des techniques spécifiques très différentes de la maçonnerie traditionnelle. Il est essentiel de choisir un constructeur spécialisé, expérimenté et maîtrisant les critères de la RE2020. Ma Maison dans le Nord vous met en relation exclusivement avec des professionnels triés sur le volet, réputés pour leur sérieux, leur écoute et leur savoir-faire en construction bois.",
  relatedCities: [
    { label: "Arras", href: "/constructeur-maison-bois-nord/arras" },
    { label: "Douai", href: "/constructeur-maison-bois-nord/douai" },
    { label: "Villeneuve-d'Ascq", href: "/constructeur-maison-bois-nord/villeneuve-dascq" },
    { label: "Valenciennes", href: "/constructeur-maison-bois-nord/valenciennes" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} canonicalPath="/constructeur-maison-bois-nord/lille" />;
}
