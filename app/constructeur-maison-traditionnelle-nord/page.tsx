import type { Metadata } from "next";
import MaisonTypePage, { type MaisonTypeData } from "@/app/_components/MaisonTypePage";

export const metadata: Metadata = {
  title: "Maison traditionnelle dans le Nord — Construction sur mesure",
  description:
    "Construisez votre maison traditionnelle dans le Nord. Briques rouges, toit pentu, charme nordiste : découvrez les caractéristiques, avantages et prix de ce style emblématique des Hauts-de-France.",
  alternates: { canonical: "/constructeur-maison-traditionnelle-nord" },
};

const data: MaisonTypeData = {
  title: "Maison Traditionnelle dans le Nord",
  subtitle:
    "Le charme authentique de l'architecture nordiste avec la brique rouge, le toit pentu et les menuiseries caractéristiques du Nord.",
  description:
    "La maison traditionnelle est l'expression la plus emblématique de l'architecture des Hauts-de-France. Reconnaissable à sa façade en briques rouges, son toit à deux pans très pentu et ses menuiseries foncées, elle incarne le savoir-faire et l'identité bâtie de notre région.",
  longDescription:
    "Dans le Nord, la maison traditionnelle ne se résume pas à un simple style esthétique : c'est un choix qui vous garantit une parfaite intégration au paysage local, une valeur patrimoniale solide et une construction éprouvée depuis des générations. Les constructeurs de notre réseau maîtrisent parfaitement les techniques de la brique régionale et savent allier tradition architecturale et modernité des équipements intérieurs.",
  characteristics: [
    "Façade en briques rouges caractéristiques du Nord",
    "Toit à deux pans à forte pente (45° à 60°)",
    "Menuiseries foncées, verticales et étroites",
    "Chiens-assis et lucarnes typiques",
    "Soubassement en pierre ou béton apparent",
    "Pignons souvent en briques appareillées",
  ],
  advantages: [
    "Intégration parfaite dans le paysage nordiste",
    "Valeur patrimoniale et replicabilité élevée",
    "Matériaux durables et peu sensibles aux intempéries",
    "Toiture inclinée adaptée aux pluies fréquentes du Nord",
    "Forte isolation thermique grâce à la masse de brique",
    "Approbation facilitée des permis de construire",
  ],
  idealFor:
    "La maison traditionnelle est idéale pour les familles qui souhaitent s'ancrer durablement dans le tissu architectural local des Hauts-de-France. Elle convient parfaitement aux terrains situés dans des lotissements ou des communes avec un Plan Local d'Urbanisme (PLU) imposant l'harmonie architecturale.",
  faq: [
    {
      question: "La maison en briques est-elle plus chère à construire ?",
      answer:
        "La brique a un coût légèrement supérieur à l'enduit sur une construction béton, mais elle offre une durabilité et un entretien quasi nuls sur le long terme. Le rapport qualité/prix sur 30 ans est généralement très favorable.",
    },
    {
      question: "Peut-on moderniser l'intérieur d'une maison traditionnelle ?",
      answer:
        "Absolument. L'enveloppe extérieure est traditionnelle, mais l'intérieur peut être entièrement contemporain : cuisine ouverte, baies vitrées intérieures, plancher chauffant, domotique… Le style extérieur n'impose aucune contrainte à l'aménagement intérieur.",
    },
    {
      question: "La maison traditionnelle est-elle bien isolée ?",
      answer:
        "Oui. La masse thermique de la brique offre naturellement une bonne inertie. Couplée à une isolation par l'intérieur (ou l'extérieur), une maison traditionnelle neuve respecte sans difficulté la réglementation thermique RE2020.",
    },
  ],
  image: "/images/maison-traditionnelle.jpg",
  imageAlt: "Maison traditionnelle en briques rouges dans le Nord",
  relatedTypes: [
    { label: "Contemporaine", href: "/constructeur-de-maison-contemporaine-nord" },
    { label: "Cubique", href: "/constructeur-maison-cubique-nord" },
    { label: "Plain-pied", href: "/constructeur-maison-plain-pied-nord" },
    { label: "Ossature bois", href: "/constructeur-maison-bois-nord" },
  ],
};

export default function MaisonTraditionnellePage() {
  return <MaisonTypePage data={data} />;
}
