import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";

export const metadata: Metadata = {
  title: "Constructeur maison individuelle à Arras — Sur mesure",
  description:
    "Maison individuelle à Arras (Pas-de-Calais) : piscines, golf, arts, culture. Constructeurs sélectionnés pour leur sérieux. Devis gratuit et sans engagement.",
  alternates: { canonical: "/constructeur-maison-individuelle-nord/arras" },
};

const data: CityMaisonData = {
  maisonTypeLabel: "Individuelle",
  maisonTypeHref: "/constructeur-maison-individuelle-nord",
  city: "Arras",
  h1: "Constructeur de maison individuelle à Arras",
  subtitle:
    "Arras et le Pays d'Artois : piscines municipales, golf, théâtres, musée des Beaux-Arts et Cité Nature — un cadre de vie exceptionnel pour votre maison individuelle.",
  intro:
    "Arras, dans le Pays d'Artois, propose à ses habitants une palette complète d'équipements. Pour le sport : deux piscines municipales (Georges Daullé et Élie Desbin), l'Aquarena aquatic center, le Golf Club d'Arras et le complexe tennis des Grandes Prairies. Pour la culture : le Musée des Beaux-Arts, la Tandem Scène Nationale, le Pharos et la Cité Nature pour la découverte scientifique. Un cadre de vie complet pour toute la famille.",
  whyBuild:
    "Faire construire une maison individuelle à Arras avec nos partenaires, c'est bénéficier d'un accompagnement de A à Z. Nos constructeurs commencent par une écoute attentive de vos souhaits, contraintes et budget, puis conçoivent et réalisent votre maison en respectant scrupuleusement vos attentes.",
  constructorAdvice:
    "Ma Maison dans le Nord sélectionne ses constructeurs partenaires à Arras sur des critères stricts : professionnalisme, écoute, qualité des réalisations et capacité à répondre aux attentes de chaque client. Remplissez notre formulaire en ligne pour être contacté dans les meilleurs délais par le professionnel le mieux adapté à votre projet.",
  relatedCities: [
    { label: "Lille", href: "/constructeur-maison-individuelle-nord/lille" },
    { label: "Douai", href: "/constructeur-maison-individuelle-nord/douai" },
    { label: "Valenciennes", href: "/constructeur-maison-individuelle-nord/valenciennes" },
    { label: "Villeneuve-d'Ascq", href: "/constructeur-maison-individuelle-nord/villeneuve-dascq" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} />;
}
