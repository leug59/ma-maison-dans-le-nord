import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Constructeur maison contemporaine à Valenciennes — Sur mesure",
  description:
    "Maison contemporaine à Valenciennes : 17 écoles primaires, grandes écoles (Polytechnique HdF, Rubika). Lignes épurées, matériaux modernes. Devis gratuit.",
  alternates: { canonical: "/constructeur-de-maison-contemporaine-nord/valenciennes" },
  openGraph: buildOpenGraph("/constructeur-de-maison-contemporaine-nord/valenciennes", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Contemporaine",
  maisonTypeHref: "/constructeur-de-maison-contemporaine-nord",
  city: "Valenciennes",
  h1: "Constructeur de maison contemporaine à Valenciennes",
  subtitle:
    "Valenciennes, avec ses 17 écoles primaires, 6 collèges, 7 lycées et ses grandes écoles (Polytechnique HdF, Rubika), est un choix idéal pour votre maison contemporaine familiale.",
  intro:
    "Valenciennes propose une infrastructure éducative exceptionnelle : 17 écoles primaires (dont Saint-Exupéry, Jean Mineur et Françoise Badar), 6 collèges et 7 lycées. L'enseignement supérieur est également bien représenté avec Polytechnique Hauts-de-France et Rubika. La ville allie dynamisme économique et qualité de vie, ce qui en fait une destination attractive pour les familles souhaitant s'installer durablement.",
  whyBuild:
    "La maison contemporaine à Valenciennes se distingue par ses lignes épurées, ses matériaux modernes et son architecture design. Elle offre des espaces de vie lumineux grâce à ses grandes fenêtres et ses volumes généreux. Ma Maison dans le Nord vous met en relation avec le constructeur le plus adapté à votre budget et à vos aspirations architecturales.",
  constructorAdvice:
    "Nos constructeurs partenaires de maisons contemporaines à Valenciennes se concentrent sur la qualité de la mise en relation : ils trouvent pour chaque client le constructeur qui correspond précisément à ses besoins, plutôt que de proposer des solutions génériques. Contactez-nous pour bénéficier de cet accompagnement personnalisé.",
  relatedCities: [
    { label: "Lille", href: "/constructeur-de-maison-contemporaine-nord/lille" },
    { label: "Béthune", href: "/constructeur-de-maison-contemporaine-nord/bethune" },
    { label: "Arras", href: "/constructeur-de-maison-contemporaine-nord/arras" },
    { label: "Douai", href: "/constructeur-de-maison-contemporaine-nord/douai" },
    { label: "Villeneuve-d'Ascq", href: "/constructeur-de-maison-contemporaine-nord/villeneuve-dascq" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} canonicalPath="/constructeur-de-maison-contemporaine-nord/valenciennes" />;
}
