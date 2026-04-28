import type { Metadata } from "next";
import MaisonTypePage, { type MaisonTypeData } from "@/app/_components/MaisonTypePage";

export const metadata: Metadata = {
  title: "Maison cubique dans le Nord — Architecture moderne et épurée",
  description:
    "Construisez votre maison cubique dans les Hauts-de-France. Volumes géométriques, toits-terrasses et lignes ultra-épurées pour une maison originale et fonctionnelle.",
  alternates: { canonical: "/constructeur-maison-cubique-nord" },
};

const data: MaisonTypeData = {
  title: "Maison Cubique dans le Nord",
  subtitle:
    "L'architecture cubique : des volumes géométriques combinés pour des espaces originaux, modulables et résolument contemporains.",
  description:
    "La maison cubique pousse l'architecture contemporaine à son expression la plus pure. Par la juxtaposition et l'imbrication de volumes cubiques ou parallélépipédiques, elle crée des silhouettes audacieuses et des espaces intérieurs riches en surprises architecturales.",
  longDescription:
    "Dans les Hauts-de-France, la maison cubique attire de plus en plus de propriétaires à la recherche d'originalité et de différenciation. Les toits-terrasses accessibles offrent de précieux espaces extérieurs, particulièrement appréciés en milieu urbain où les jardins sont réduits. Les possibilités de combinaison de matériaux — enduit, bardage, verre, métal — sont quasiment illimitées.",
  characteristics: [
    "Volumes géométriques cubiques imbriqués",
    "Toit-terrasse accessible (un ou plusieurs niveaux)",
    "Combinaison de revêtements contrastés par volume",
    "Fenêtres en bandeau ou panoramiques",
    "Saillie et décalage des volumes",
    "Lignes horizontales marquées",
  ],
  advantages: [
    "Esthétique ultra-originale et unique",
    "Toits-terrasses : espaces extérieurs supplémentaires",
    "Aménagements intérieurs sans contrainte de pente",
    "Combinaisons de matériaux quasi illimitées",
    "Valorisation immobilière forte dans les zones sans PLU restrictif",
    "Espaces de vie ouverts et lumineux",
  ],
  idealFor:
    "La maison cubique convient aux propriétaires qui assument un parti-pris architectural fort et souhaitent se démarquer. Elle est particulièrement adaptée aux terrains en milieu péri-urbain ou aux communes sans contrainte architecturale dans le PLU. Elle plait aux familles souhaitant profiter d'un ou plusieurs toits-terrasses.",
  faq: [
    {
      question: "L'entretien d'un toit-terrasse est-il complexe ?",
      answer:
        "Un toit-terrasse demande un entretien semestriel léger : vérification des évacuations pluviales et de l'étanchéité. Réalisé avec des matériaux de qualité, il peut durer 20 à 30 ans sans intervention majeure.",
    },
    {
      question: "La maison cubique est-elle plus coûteuse à construire ?",
      answer:
        "Oui, légèrement. La complexité architecturale et les matériaux de façade (bardage, mixte) augmentent le coût. Comptez 10 à 20% de plus qu'une maison traditionnelle. En revanche, les surfaces de toit-terrasse offrent un espace extérieur gratuit qui compense souvent la différence.",
    },
    {
      question: "La maison cubique peut-elle être passive ?",
      answer:
        "Oui, avec une bonne conception bioclimatique. Les volumes peuvent être orientés pour maximiser les apports solaires en hiver. L'isolation de la toiture terrasse est cruciale et doit être renforcée.",
    },
  ],
  image: "/images/maison-cubique.jpg",
  imageAlt: "Maison cubique à toit plat dans le Nord",
  relatedTypes: [
    { label: "Contemporaine", href: "/constructeur-de-maison-contemporaine-nord" },
    { label: "Individuelle", href: "/constructeur-maison-individuelle-nord" },
    { label: "Passive", href: "/constructeur-nord-maison-passive" },
    { label: "Ossature bois", href: "/constructeur-maison-bois-nord" },
  ],
};

export default function MaisonCubiquePage() {
  return <MaisonTypePage data={data} />;
}
