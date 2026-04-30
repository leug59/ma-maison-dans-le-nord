import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Constructeur maison traditionnelle à Lens — Brique rouge nordiste",
  description:
    "Maison traditionnelle à Lens : briques rouges et architecture nordiste dans la ville du bassin minier UNESCO. Corons, cités ouvrières, construction sur mesure. Devis gratuit.",
  alternates: { canonical: "/constructeur-maison-traditionnelle-nord/lens" },
  openGraph: buildOpenGraph("/constructeur-maison-traditionnelle-nord/lens", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Traditionnelle",
  maisonTypeHref: "/constructeur-maison-traditionnelle-nord",
  city: "Lens",
  h1: "Constructeur de maison traditionnelle à Lens",
  subtitle:
    "Lens et son bassin minier — briques rouges des corons, cités ouvrières et architecture nordiste — un héritage architectural qui inspire votre maison traditionnelle sur mesure.",
  openingIntro:
    "Faire construire une maison traditionnelle à Lens, c'est s'ancrer dans l'identité architecturale du bassin minier. Briques rouges, toit pentu, volumes chaleureux : nos constructeurs partenaires maîtrisent ce style intemporel profondément enraciné dans la région.",
  intro:
    "Lens est au cœur du bassin minier des Hauts-de-France, classé au Patrimoine mondial de l'UNESCO depuis 2012. La ville et son agglomération Lens-Liévin (250 000 habitants) sont marquées par l'architecture des corons et des cités ouvrières — ces maisons en briques rouges caractéristiques du Nord et du Pas-de-Calais. Ce patrimoine architectural fait aujourd'hui la fierté de la région et sert d'inspiration pour les constructions neuves qui souhaitent s'inscrire dans la continuité de ce style authentique. On compte parmi les quartiers résidentiels disponibles les secteurs de Lens-Centre, Yser, Grand-Souverain et les communes périphériques de Liévin, Avion et Méricourt.",
  whyBuild:
    "Construire une maison traditionnelle à Lens, c'est prolonger l'identité architecturale du bassin minier tout en bénéficiant de toutes les performances des constructions neuves : isolation RE2020, garanties décennales, équipements modernes. La brique rouge, matériau emblématique de la région, offre durabilité, esthétique et bonne inertie thermique — des atouts précieux dans le climat nordiste. Ce style est aussi très prisé à la revente sur un marché local qui y est profondément attaché.",
  constructorAdvice:
    "Ma Maison dans le Nord vous met en relation avec des constructeurs qui maîtrisent l'architecture traditionnelle nordiste dans l'agglomération Lens-Liévin : choix des briques, des menuiseries, des toitures conformes au PLU local et cohérentes avec le tissu bâti existant. Chaque professionnel partenaire est sélectionné pour son savoir-faire, sa fiabilité et sa connaissance des spécificités du secteur.",
  relatedCities: [
    { label: "Arras", href: "/constructeur-maison-traditionnelle-nord/arras" },
    { label: "Béthune", href: "/constructeur-maison-traditionnelle-nord/bethune" },
    { label: "Douai", href: "/constructeur-maison-traditionnelle-nord/douai" },
    { label: "Lille", href: "/constructeur-maison-traditionnelle-nord/lille" },
    { label: "Valenciennes", href: "/constructeur-maison-traditionnelle-nord/valenciennes" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} canonicalPath="/constructeur-maison-traditionnelle-nord/lens" />;
}
