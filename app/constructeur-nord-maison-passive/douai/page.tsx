import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";

export const metadata: Metadata = {
  title: "Constructeur maison passive à Douai — Trouver le meilleur",
  description:
    "Maison passive à Douai, entre nature et culture. Constructeurs qualifiés et certifiés. Réduisez vos factures d'énergie au minimum. Devis gratuit.",
  alternates: { canonical: "/constructeur-nord-maison-passive/douai" },
};

const data: CityMaisonData = {
  maisonTypeLabel: "Passive",
  maisonTypeHref: "/constructeur-nord-maison-passive",
  city: "Douai",
  h1: "Constructeur de maison passive à Douai : comment trouver le meilleur ?",
  subtitle:
    "Douai, entre ses musées, ses parcs et sa réserve naturelle riche en faune et flore, offre un cadre de vie idéal pour votre maison passive écologique.",
  intro:
    "Douai est une ville avec une forte demande en logements dans le Nord-Pas-de-Calais. Elle propose de nombreuses attractions culturelles (musées, jardins, parcs) et la réserve naturelle de Douai, décrite comme très riche en faune et en flore. Faire construire une maison passive à Douai, c'est choisir de vivre dans un endroit où vous pourrez profiter de la nature tout en minimisant votre empreinte écologique.",
  whyBuild:
    "La maison passive est une solution écologique dont la consommation d'énergie pour le chauffage est réduite à son strict minimum. À Douai, avec ses hivers nordistes, cet avantage se traduit concrètement par des économies substantielles sur vos factures. La maison passive contribue aussi à la protection de l'environnement — en cohérence avec la richesse naturelle du territoire douaisien.",
  constructorAdvice:
    "Ma Maison dans le Nord vous donne accès à des constructeurs qualifiés et certifiés en maison passive dans la région douaisienne. Ils vous accompagnent à chaque étape du projet, proposent des devis gratuits et peuvent vous aider dans la recherche de terrain si nécessaire. Seuls des prestataires qualifiés et expérimentés font partie de notre réseau.",
  relatedCities: [
    { label: "Lille", href: "/constructeur-nord-maison-passive/lille" },
    { label: "Arras", href: "/constructeur-nord-maison-passive/arras" },
    { label: "Valenciennes", href: "/constructeur-nord-maison-passive/valenciennes" },
    { label: "Lens", href: "/constructeur-nord-maison-passive/lens" },
    { label: "Béthune", href: "/constructeur-nord-maison-passive/bethune" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} />;
}
