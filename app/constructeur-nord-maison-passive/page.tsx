import type { Metadata } from "next";
import MaisonTypePage, { type MaisonTypeData } from "@/app/_components/MaisonTypePage";

export const metadata: Metadata = {
  title: "Maison passive dans le Nord — Performances énergétiques maximales",
  description:
    "La maison passive dans les Hauts-de-France : chauffage quasi nul, confort thermique exceptionnel et économies d'énergie massives. Découvrez ce mode constructif d'avenir.",
  alternates: { canonical: "/constructeur-nord-maison-passive" },
};

const data: MaisonTypeData = {
  title: "Maison Passive dans le Nord",
  subtitle:
    "Des performances énergétiques exceptionnelles : chauffage quasi nul, confort thermique toute l'année et économies massives sur vos factures.",
  description:
    "La maison passive accumule et conserve la chaleur provenant des occupants, des appareils électroménagers et des rayons solaires pour maintenir une température confortable sans système de chauffage traditionnel. En hiver comme en été, elle offre un confort thermique homogène. Elle consomme moins de 15 kWh/m²/an pour le chauffage, contre 150 à 300 kWh pour une maison ancienne.",
  longDescription:
    "Concept développé par l'Allemand Wolfgang Feist à la fin des années 1980, la maison passive s'est rapidement répandue en France : plus de 3 000 bâtiments passifs y ont été construits depuis 2007. Dans les Hauts-de-France, les hivers froids rendent l'investissement particulièrement rentable. 80% des maisons passives utilisent l'ossature bois, qui offre la meilleure combinaison entre légèreté, isolation et performances. En été, la VMC double flux avec échangeur thermique assure la fraîcheur sans climatisation.",
  characteristics: [
    "Besoins en chauffage < 15 kWh/m²/an (label passif)",
    "Énergie primaire totale ≤ 120 kWh/m²/an",
    "Étanchéité à l'air < 0,60 volume/heure (test blower door)",
    "Moins de 10% d'heures surchauffées (> 25°C/an)",
    "Triple vitrage, suppression des ponts thermiques",
    "VMC double flux à récupération de chaleur",
    "Grandes surfaces vitrées au sud, peu de fenêtres au nord",
  ],
  advantages: [
    "Dépense énergétique 2× moindre qu'une maison RE2020",
    "Facture de chauffage quasi nulle — économies de 2 000 à 4 000 €/an",
    "Confort thermique homogène (pas de zones froides ni de courants d'air)",
    "Qualité de l'air intérieure supérieure (VMC double flux)",
    "Entièrement personnalisable : traditionnelle, moderne, cubique…",
    "Valorisation à la revente (valeur verte)",
  ],
  idealFor:
    "La maison passive est idéale pour les propriétaires qui souhaitent investir pour l'avenir, réduire drastiquement leurs charges énergétiques et diminuer leur empreinte carbone. Elle est particulièrement recommandée dans le Nord où les hivers sont froids et les factures de chauffage traditionnellement élevées. Le surcoût initial (15 à 25%) est généralement remboursé en 10 à 15 ans.",
  faq: [
    {
      question: "Fait-il vraiment chaud dans une maison passive sans chauffage ?",
      answer:
        "Oui. Dans une maison passive bien conçue, les apports solaires, la chaleur des occupants et des appareils électroménagers suffisent à maintenir 20°C même par grand froid. Une simple résistance électrique de quelques centaines de watts peut suffire pour les jours les plus froids.",
    },
    {
      question: "N'a-t-on pas trop chaud en été dans le Nord ?",
      answer:
        "Non, si la maison est bien conçue. Les brise-soleils horizontaux protègent des rayons solaires estivaux (haut dans le ciel) tout en laissant entrer les rayons hivernaux (bas sur l'horizon). La VMC double flux maintient une température agréable en ventilant la nuit.",
    },
    {
      question: "Combien coûte une maison passive de plus qu'une maison normale ?",
      answer:
        "Le surcoût est généralement de 15 à 25% par rapport à une construction RT2012. Par rapport à la RE2020 (nouvelle norme), l'écart se réduit. Ce surcoût doit être mis en regard des économies d'énergie qui peuvent représenter 2 000 à 4 000 € par an.",
    },
    {
      question: "Y a-t-il des aides pour construire une maison passive dans le Nord ?",
      answer:
        "Oui. Le PTZ (Prêt à Taux Zéro), l'éco-prêt à taux zéro et certaines aides régionales Hauts-de-France peuvent s'appliquer. Certaines banques proposent aussi des prêts verts avantageux pour les constructions très performantes.",
    },
  ],
  image: "/images/maison-passive.jpg",
  imageAlt: "Maison passive contemporaine écologique",
  relatedTypes: [
    { label: "Ossature bois", href: "/constructeur-maison-bois-nord" },
    { label: "Contemporaine", href: "/constructeur-de-maison-contemporaine-nord" },
    { label: "Individuelle", href: "/constructeur-maison-individuelle-nord" },
    { label: "Cubique", href: "/constructeur-maison-cubique-nord" },
  ],
};

export default function MaisonPassivePage() {
  return <MaisonTypePage data={data} />;
}
