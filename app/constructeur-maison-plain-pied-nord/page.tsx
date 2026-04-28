import type { Metadata } from "next";
import MaisonTypePage, { type MaisonTypeData } from "@/app/_components/MaisonTypePage";

export const metadata: Metadata = {
  title: "Maison de plain-pied dans le Nord — Vie pratique sans escaliers",
  description:
    "Construisez votre maison de plain-pied dans les Hauts-de-France. Accessible, pratique et confortable, ce style est idéal pour les familles et les seniors. Devis gratuit.",
  alternates: { canonical: "/constructeur-maison-plain-pied-nord" },
};

const data: MaisonTypeData = {
  title: "Maison Plain-Pied dans le Nord",
  subtitle:
    "La vie sans escaliers : pratique, accessible et confortable pour toute la famille, à tout âge de la vie.",
  description:
    "La maison de plain-pied réunit toutes les pièces de vie sur un seul et même niveau. Sans escaliers, sans demi-niveaux, elle offre une circulation facile et une accessibilité totale qui en fait le choix préféré des familles avec enfants en bas âge et des personnes à mobilité réduite.",
  longDescription:
    "Dans les Hauts-de-France, les terrains généralement plats ou légèrement vallonnés se prêtent parfaitement à la construction d'une maison de plain-pied. Si la surface au sol est plus importante qu'un équivalent avec étage, le coût de la toiture est certes plus élevé, mais on économise sur la structure de plancher intermédiaire et l'escalier. C'est souvent un excellent rapport qualité de vie / prix.",
  characteristics: [
    "Toutes les pièces au même niveau",
    "Surface au sol plus importante",
    "Toiture plus étendue (adaptée aux pluies du Nord)",
    "Accès direct jardin depuis toutes les pièces",
    "Sous-sol possible selon le terrain",
    "Extensions futures facilitées",
  ],
  advantages: [
    "Accessibilité totale : idéal à tout âge de la vie",
    "Absence d'escaliers : sécurité pour enfants et seniors",
    "Vie de plain-pied pratique au quotidien",
    "Connexion naturelle avec le jardin",
    "Entretien et nettoyage facilités",
    "Extensible sans perturber l'existant",
  ],
  idealFor:
    "La maison de plain-pied est particulièrement recommandée pour les familles avec de jeunes enfants, les personnes en situation de handicap ou souhaitant anticiper la perte de mobilité, et toute personne qui valorise la simplicité et le confort du quotidien. Elle est aussi très adaptée aux terrains plats de grande superficie, fréquents dans le Nord.",
  faq: [
    {
      question: "La maison de plain-pied est-elle plus chère à construire ?",
      answer:
        "Le coût au m² est similaire à celui d'une maison avec étage. La toiture plus grande augmente légèrement le coût, mais on économise sur la dalle intermédiaire et l'escalier. Sur des surfaces égales, le prix total est comparable.",
    },
    {
      question: "Comment maximiser la surface habitable en plain-pied ?",
      answer:
        "En travaillant sur les volumes intérieurs (plafonds cathédrale, mezzanines légères) et en optimisant le plan pour limiter les circulations. Un architecte ou un constructeur expérimenté peut vous proposer des plans très fonctionnels même sur une surface réduite.",
    },
    {
      question: "Peut-on ajouter un sous-sol à une maison de plain-pied ?",
      answer:
        "Oui, si la nature du sol le permet. Dans le Nord, les nappes phréatiques sont souvent hautes, ce qui peut rendre la cave difficile et coûteuse. Votre constructeur effectuera une étude de sol pour évaluer la faisabilité.",
    },
  ],
  image: "/images/maison-plain-pied.jpg",
  imageAlt: "Maison de plain-pied dans le Nord",
  relatedTypes: [
    { label: "Traditionnelle", href: "/constructeur-maison-traditionnelle-nord" },
    { label: "Contemporaine", href: "/constructeur-de-maison-contemporaine-nord" },
    { label: "Individuelle", href: "/constructeur-maison-individuelle-nord" },
    { label: "Ossature bois", href: "/constructeur-maison-bois-nord" },
  ],
};

export default function MaisonPlainPiedPage() {
  return <MaisonTypePage data={data} />;
}
