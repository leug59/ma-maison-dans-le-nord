import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Constructeur maison contemporaine à Douai — Projet sur mesure",
  description:
    "Maison contemporaine à Douai : 1h35 de CDG, Louvre-Lens, Musée de la Chartreuse. Partenaires sélectionnés, CCMI, garantie décennale. Devis gratuit.",
  alternates: { canonical: "/constructeur-de-maison-contemporaine-nord/douai" },
  openGraph: buildOpenGraph("/constructeur-de-maison-contemporaine-nord/douai", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Contemporaine",
  maisonTypeHref: "/constructeur-de-maison-contemporaine-nord",
  city: "Douai",
  h1: "Constructeur de maison contemporaine à Douai : projet sur mesure",
  subtitle:
    "Douai, à 1h35 de Charles de Gaulle, 3h15 d'Amsterdam et 3h25 de Londres, offre un accès européen exceptionnel pour votre maison contemporaine.",
  openingIntro:
    "La clé d'un projet immobilier réussi est de trouver le bon constructeur de maison contemporaine dans le Nord. C'est ce que l'équipe de Ma Maison dans le Nord s'efforce de faire pour vous.",
  intro:
    "Douai est remarquablement bien connectée à l'Europe : 1 heure 35 minutes de l'aéroport Charles de Gaulle, 3 heures 15 minutes d'Amsterdam par la route et 3 heures 25 minutes de Londres via l'autoroute et le ferry. La ville propose de nombreux équipements de loisirs : le Musée de la Chartreuse, la piscine du Glacis, le parc de la Tour des Dames et le parc de loisirs Jacques Vernier pour les familles.",
  whyBuild:
    "Construire une maison contemporaine à Douai avec nos partenaires, c'est bénéficier de plusieurs garanties : des partenaires triés sur le volet reconnus pour leur professionnalisme, un accompagnement complet tout au long du projet, un CCMI (Contrat de Construction de Maison Individuelle) garantissant livraison, prix convenu, parfait achèvement et garantie décennale, une conception sur mesure et une aide à la recherche de terrain si nécessaire.",
  constructorAdvice:
    "Les partenaires de Ma Maison dans le Nord à Douai sont sélectionnés pour leur professionnalisme irréprochable en construction contemporaine. Chaque constructeur vous accompagne dans toutes les étapes, répond à vos questions et adapte le projet à vos besoins spécifiques — des matériaux aux finitions en passant par la configuration des pièces.",
  relatedCities: [
    { label: "Lille", href: "/constructeur-de-maison-contemporaine-nord/lille" },
    { label: "Béthune", href: "/constructeur-de-maison-contemporaine-nord/bethune" },
    { label: "Arras", href: "/constructeur-de-maison-contemporaine-nord/arras" },
    { label: "Valenciennes", href: "/constructeur-de-maison-contemporaine-nord/valenciennes" },
    { label: "Villeneuve-d'Ascq", href: "/constructeur-de-maison-contemporaine-nord/villeneuve-dascq" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} canonicalPath="/constructeur-de-maison-contemporaine-nord/douai" />;
}
