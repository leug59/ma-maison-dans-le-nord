import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Constructeur maison cubique à Arras — Projet sur mesure",
  description:
    "Construisez votre maison cubique à Arras, ville du Pas-de-Calais à 45 km de Lille. Architecture géométrique 100 % personnalisée. Mise en relation gratuite.",
  alternates: { canonical: "/constructeur-maison-cubique-nord/arras" },
  openGraph: buildOpenGraph("/constructeur-maison-cubique-nord/arras", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Cubique",
  maisonTypeHref: "/constructeur-maison-cubique-nord",
  city: "Arras",
  h1: "Constructeur de maison cubique à Arras",
  subtitle:
    "Ville mythique du Pas-de-Calais à 45 km de Lille, Arras allie patrimoine UNESCO et cadre de vie idéal pour votre maison cubique sur mesure.",
  openingIntro:
    "Avoir une maison aux lignes modernes à Arras ou ses environs, vous en rêvez ? Faites confiance à un constructeur de maison cubique dans le Nord. Les structures aux formes géométriques et aux combinaisons variées n'ont pas de secret pour ces professionnels de la construction !",
  intro:
    "Arras, capitale du Pas-de-Calais, est une ville mythique des Hauts-de-France, à moins de 20 km de Lens, 45 km de Lille et 100 km de Calais. Son beffroi et la citadelle Vauban sont classés au patrimoine mondial de l'UNESCO. La ville propose également la Cité Nature (15 000 m² de jardins et expositions environnementales) et le Musée des Beaux-Arts installé dans l'ancienne abbaye Saint-Vaast sur 3 hectares. Un cadre de vie exceptionnel pour y faire construire votre maison.",
  whyBuild:
    "La maison cubique est une architecture d'avenir qui séduit de plus en plus de ménages à Arras et dans ses environs. Ses lignes épurées, ses matériaux contemporains et ses grandes ouvertures sur les espaces verts environnants en font un choix idéal pour les propriétaires qui souhaitent une maison originale et unique. Les constructeurs spécialisés maîtrisent la conception géométrique et coordonnent l'ensemble du projet, du plan à la remise des clés.",
  constructorAdvice:
    "Un bon constructeur de maison cubique à Arras doit posséder une expertise confirmée en architecture contemporaine et connaître les règles d'urbanisme locales. Ma Maison dans le Nord sélectionne rigoureusement ses partenaires constructeurs pour leur professionnalisme, leur écoute et leur capacité à livrer un projet personnalisé dans le respect des délais et du budget convenus.",
  relatedCities: [
    { label: "Lille", href: "/constructeur-maison-cubique-nord/lille" },
    { label: "Douai", href: "/constructeur-maison-cubique-nord/douai" },
    { label: "Valenciennes", href: "/constructeur-maison-cubique-nord/valenciennes" },
    { label: "Villeneuve-d'Ascq", href: "/constructeur-maison-cubique-nord/villeneuve-dascq" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} canonicalPath="/constructeur-maison-cubique-nord/arras" />;
}
