import type { Metadata } from "next";
import MaisonTypePage, { type MaisonTypeData } from "@/app/_components/MaisonTypePage";

export const metadata: Metadata = {
  title: "Maison contemporaine dans le Nord — Construction moderne sur mesure",
  description:
    "Construisez votre maison contemporaine dans le Nord. Lignes design, grandes baies vitrées, matériaux innovants : découvrez ce style moderne adapté aux Hauts-de-France.",
  alternates: { canonical: "/constructeur-de-maison-contemporaine-nord" },
};

const data: MaisonTypeData = {
  title: "Maison Contemporaine dans le Nord",
  subtitle:
    "Le mariage des lignes design et des matériaux de dernière génération pour une maison lumineuse, moderne et performante.",
  description:
    "La maison contemporaine se distingue par ses lignes épurées, ses grandes ouvertures et ses matériaux innovants. Enduit clair, bardage bois ou composite, toit plat ou à faible pente, grandes baies vitrées : elle crée des espaces lumineux et modulables qui s'adaptent à votre mode de vie.",
  longDescription:
    "Dans les Hauts-de-France, la maison contemporaine gagne chaque année de nouveaux adeptes. Son caractère modulable, ses performances énergétiques supérieures à la moyenne et sa capacité à valoriser un terrain, même peu favorable, en font un choix pertinent. Nos constructeurs partenaires maîtrisent les dernières techniques de construction et vous garantissent une maison conforme à la réglementation RE2020.",
  characteristics: [
    "Toiture terrasse ou très faible pente",
    "Grandes baies vitrées et baies coulissantes",
    "Façades en enduit clair, bardage ou mixte",
    "Volumes géométriques et lignes horizontales",
    "Débords de toit limités ou nuls",
    "Menuiseries aluminium ou PVC grandes dimensions",
  ],
  advantages: [
    "Luminosité et confort de vie optimisés",
    "Liberté architecturale et personnalisation totale",
    "Respect environnemental (RE2020 facilement atteinte)",
    "Valorisation immobilière tendance",
    "Économies d'énergie grâce aux matériaux performants",
    "Espaces intérieurs ouverts et modulables",
  ],
  idealFor:
    "La maison contemporaine convient parfaitement aux familles qui souhaitent un cadre de vie moderne, lumineux et éco-responsable. Elle s'adapte à tous les terrains, y compris les parcelles atypiques ou en pente, et sera un vrai plus si vous êtes situé dans une zone sans contrainte architecturale forte.",
  faq: [
    {
      question: "La maison contemporaine est-elle autorisée dans toutes les communes ?",
      answer:
        "Pas toujours. Certaines communes imposent des contraintes architecturales (briques, toitures inclinées) via leur PLU. Nos constructeurs vérifient la faisabilité de votre projet avant de vous proposer un plan. Des adaptations sont souvent possibles.",
    },
    {
      question: "L'entretien d'une maison contemporaine est-il important ?",
      answer:
        "Le toit-terrasse demande un entretien régulier (évacuation des eaux pluviales, vérification de l'étanchéité). En revanche, les façades en bardage composite ou enduit minéral sont très durables et nécessitent peu d'entretien.",
    },
    {
      question: "Peut-on combiner style contemporain et maison passive ?",
      answer:
        "Absolument. La maison contemporaine se prête particulièrement bien aux principes de la conception bioclimatique : orientation optimale, grandes baies au sud, isolation renforcée. C'est souvent le meilleur compromis entre esthétique et performance.",
    },
  ],
  image: "/images/maison-contemporaine.jpg",
  imageAlt: "Maison contemporaine moderne dans le Nord",
  relatedTypes: [
    { label: "Traditionnelle", href: "/constructeur-maison-traditionnelle-nord" },
    { label: "Cubique", href: "/constructeur-maison-cubique-nord" },
    { label: "Passive", href: "/constructeur-nord-maison-passive" },
    { label: "Individuelle", href: "/constructeur-maison-individuelle-nord" },
  ],
};

export default function MaisonContemporainePage() {
  return <MaisonTypePage data={data} />;
}
