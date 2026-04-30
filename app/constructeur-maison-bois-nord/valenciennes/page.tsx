import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Constructeur maison ossature bois à Valenciennes — Écologique",
  description:
    "Maison à ossature bois à Valenciennes et dans l'arrondissement (Marly, Anzin, Onnaing…). Construction durable et personnalisée. Devis gratuit.",
  alternates: { canonical: "/constructeur-maison-bois-nord/valenciennes" },
  openGraph: buildOpenGraph("/constructeur-maison-bois-nord/valenciennes", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Ossature bois",
  maisonTypeHref: "/constructeur-maison-bois-nord",
  city: "Valenciennes",
  h1: "Constructeur de maison à ossature bois à Valenciennes",
  subtitle:
    "Valenciennes et son agglomération (Marly, Onnaing, Anzin, Aulnoy-Lez-Valenciennes) offrent de nombreuses opportunités pour votre maison à ossature bois.",
  openingIntro:
    "C'est décidé : vous allez vous lancer dans la construction, mais pas tout seul ! Vous allez faire appel à un constructeur de maison à ossature bois dans le Nord, et vous avez bien raison ! L'équipe de Ma Maison dans le Nord vous explique pourquoi.",
  intro:
    "Valenciennes, sous-préfecture du Nord, propose de nombreux équipements culturels et de loisirs : la médiathèque Simone Veil, le centre culturel l'Odyssée, le Musée des Beaux-Arts. La ville dispose aussi de services spécialisés pour les seniors et les personnes en situation de handicap. L'agglomération de Valenciennes s'étend aux communes voisines de Marly, Onnaing, Anzin et Aulnoy-Lez-Valenciennes, offrant de nombreuses possibilités de construction.",
  whyBuild:
    "Nos constructeurs partenaires à Valenciennes connaissent parfaitement la région et peuvent vous aider à trouver un terrain dans la ville ou dans les communes avoisinantes. La maison à ossature bois est particulièrement adaptée au Nord : ses excellentes performances thermiques réduisent les factures de chauffage, et sa rapidité de construction vous fait économiser des mois de loyer.",
  constructorAdvice:
    "Ma Maison dans le Nord travaille avec des constructeurs d'ossature bois sélectionnés personnellement ou sur recommandation pour leur fiabilité et la qualité de leurs réalisations à Valenciennes. Chaque professionnel s'engage sur les délais et le budget, et vous accompagne de la conception jusqu'à la remise des clés.",
  relatedCities: [
    { label: "Lille", href: "/constructeur-maison-bois-nord/lille" },
    { label: "Arras", href: "/constructeur-maison-bois-nord/arras" },
    { label: "Douai", href: "/constructeur-maison-bois-nord/douai" },
    { label: "Villeneuve-d'Ascq", href: "/constructeur-maison-bois-nord/villeneuve-dascq" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} canonicalPath="/constructeur-maison-bois-nord/valenciennes" />;
}
