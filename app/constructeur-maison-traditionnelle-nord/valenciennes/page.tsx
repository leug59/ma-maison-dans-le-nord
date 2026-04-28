import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";

export const metadata: Metadata = {
  title: "Constructeur maison traditionnelle à Valenciennes — Sur mesure",
  description:
    "Maison traditionnelle à Valenciennes : Lille 30 min, Paris TGV 1h50, Bruxelles 1h. Prix et délais garantis contractuellement. Devis gratuit.",
  alternates: { canonical: "/constructeur-maison-traditionnelle-nord/valenciennes" },
};

const data: CityMaisonData = {
  maisonTypeLabel: "Traditionnelle",
  maisonTypeHref: "/constructeur-maison-traditionnelle-nord",
  city: "Valenciennes",
  h1: "Constructeur de maison traditionnelle à Valenciennes",
  subtitle:
    "Valenciennes, à 30 min de Lille, 1h50 de Paris en TGV et 1h de Bruxelles, offre une mobilité européenne exceptionnelle pour votre maison traditionnelle.",
  intro:
    "Valenciennes bénéficie d'une position stratégique enviable : Lille est à 30 minutes en voiture ou en TER, Paris est accessible en TGV direct en 1 heure 50 minutes ou par autoroute en 2 heures, et Bruxelles est à 1 heure par la route ou l'avion. Cette mobilité exceptionnelle vers plusieurs métropoles françaises et internationales fait de Valenciennes un choix idéal pour les professionnels souhaitant s'installer dans le Nord.",
  whyBuild:
    "La maison traditionnelle à Valenciennes allie le charme de l'architecture nordiste et les garanties de la construction neuve. Travailler avec un constructeur professionnel local signifie bénéficier d'une connaissance de la typologie architecturale régionale et d'un engagement contractuel sur les prix et les délais — protégeant votre budget contre toute mauvaise surprise.",
  constructorAdvice:
    "Nos partenaires constructeurs de maisons traditionnelles à Valenciennes collaborent étroitement avec chaque client pour accueillir leur vision personnelle, leurs exigences et leurs préférences. Ils s'engagent par contrat sur le prix et les délais avant le début des travaux, vous offrant une sécurité totale tout au long du projet.",
  relatedCities: [
    { label: "Lille", href: "/constructeur-maison-traditionnelle-nord/lille" },
    { label: "Béthune", href: "/constructeur-maison-traditionnelle-nord/bethune" },
    { label: "Arras", href: "/constructeur-maison-traditionnelle-nord/arras" },
    { label: "Douai", href: "/constructeur-maison-traditionnelle-nord/douai" },
    { label: "Villeneuve-d'Ascq", href: "/constructeur-maison-traditionnelle-nord/villeneuve-dascq" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} />;
}
