import type { Metadata } from "next";
import MaisonTypePage, { type MaisonTypeData } from "@/app/_components/MaisonTypePage";

export const metadata: Metadata = {
  title: "Maison ossature bois dans le Nord — Construction écologique",
  description:
    "Construisez votre maison à ossature bois dans les Hauts-de-France. Écologique, rapide et ultra-performante sur le plan énergétique. Découvrez les avantages de ce mode constructif.",
  alternates: { canonical: "/constructeur-maison-bois-nord" },
};

const data: MaisonTypeData = {
  title: "Maison Ossature Bois dans le Nord",
  subtitle:
    "Une construction écologique, rapide et performante. L'ossature bois cumule les avantages : durabilité, isolation, gain de temps et d'espace habitable.",
  description:
    "La maison à ossature bois (MOB) repose sur une structure en montants de bois qui constitue le squelette de l'habitation. Les panneaux sont souvent préfabriqués en atelier, ce qui accélère considérablement le chantier. Les isolants naturels (laine de bois, ouate de cellulose) ou minéraux sont intégrés entre les montants.",
  longDescription:
    "Dans les Hauts-de-France, l'ossature bois répond parfaitement aux exigences de la réglementation RE2020. La légèreté de la structure est un avantage sur les terrains argileux du Nord, souvent délicats pour les fondations massives. À l'extérieur, la façade peut être habillée en bardage bois (Douglas, Pin, Mélèze), en crépi ou mixte. À l'intérieur, les finitions en placo ou lambris sont identiques à une construction traditionnelle.",
  characteristics: [
    "Montants en bois constituant le squelette de l'habitation",
    "Panneaux préfabriqués en atelier pour un chantier rapide",
    "Isolants naturels (laine de bois, ouate de cellulose) entre montants",
    "Façades : bardage bois (Douglas, Pin, Mélèze), crépi ou mixte",
    "Murs de 25 cm seulement vs 33 cm en maçonnerie",
    "Planchers tous niveaux en bois, fondations adaptées",
  ],
  advantages: [
    "Matériau écologique, renouvelable et stockeur de CO₂",
    "Chantier 3 à 4 mois plus rapide qu'en construction maçonnée",
    "5 à 10% d'espace habitable supplémentaire (cloisons plus minces)",
    "Régulation hygrométrique naturelle (équilibre de l'humidité intérieure)",
    "Légèreté idéale pour les terrains argileux du Nord",
    "Excellentes performances thermiques et acoustiques",
  ],
  inconvenients: [
    "Inertie thermique plus faible qu'une construction en béton ou brique",
    "Bardage extérieur à entretenir (lasure ou peinture tous les 5 à 7 ans)",
    "Traitement antiparasitaire recommandé (termites, insectes xylophages)",
    "Image encore perçue comme moins durable par certains acheteurs",
  ],
  idealFor:
    "La maison à ossature bois est idéale pour les propriétaires sensibles aux enjeux environnementaux, souhaitant des performances énergétiques maximales ou ayant des contraintes de délai. Elle convient parfaitement aux terrains à sol argileux, fréquents dans le Nord, où les fondations d'une construction lourde seraient plus coûteuses. Une maison en ossature bois bien réalisée a une durée de vie d'une centaine d'années.",
  faq: [
    {
      question: "La maison en bois résiste-t-elle au climat du Nord ?",
      answer:
        "Absolument. Le bois utilisé en ossature est traité et protégé. La façade (bardage ou enduit sur OSB) le protège des intempéries. Des millions de maisons à ossature bois existent en Scandinavie, en Allemagne et au Canada dans des climates bien plus rudes que le Nord.",
    },
    {
      question: "Le bois n'est-il pas moins solide que le béton ?",
      answer:
        "Non. L'ossature bois offre une résistance mécanique équivalente à la construction traditionnelle, et une meilleure résistance aux séismes grâce à sa souplesse. Elle répond aux mêmes normes de solidité et de sécurité.",
    },
    {
      question: "Peut-on avoir tous les styles avec une maison à ossature bois ?",
      answer:
        "Oui. L'ossature bois est un mode constructif, pas un style architectural. Vous pouvez y appliquer une façade en brique, en enduit, en bardage… La maison peut être traditionnelle, contemporaine ou cubique.",
    },
  ],
  image: "/images/maison-bois.jpg",
  imageAlt: "Maison à ossature bois dans le Nord",
  relatedTypes: [
    { label: "Traditionnelle", href: "/constructeur-maison-traditionnelle-nord" },
    { label: "Contemporaine", href: "/constructeur-de-maison-contemporaine-nord" },
    { label: "Passive", href: "/constructeur-nord-maison-passive" },
    { label: "Plain-pied", href: "/constructeur-maison-plain-pied-nord" },
  ],
};

export default function MaisonOssatureBoisPage() {
  return <MaisonTypePage data={data} />;
}
