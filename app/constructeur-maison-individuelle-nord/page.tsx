import type { Metadata } from "next";
import MaisonTypePage, { type MaisonTypeData } from "@/app/_components/MaisonTypePage";

export const metadata: Metadata = {
  title: "Maison individuelle dans le Nord — Liberté architecturale totale",
  description:
    "Construisez votre maison individuelle dans les Hauts-de-France selon vos règles. Hors lotissement, personnalisation complète, liberté architecturale totale. Devis gratuit.",
  alternates: { canonical: "/constructeur-maison-individuelle-nord" },
};

const data: MaisonTypeData = {
  title: "Maison Individuelle dans le Nord",
  subtitle:
    "La liberté de construire votre maison selon vos propres règles, hors des contraintes de lotissement, dans les Hauts-de-France.",
  description:
    "La maison individuelle sur terrain propre est la forme la plus libre de la construction neuve. Sans cahier des charges de lotissement, votre seule contrainte est le Plan Local d'Urbanisme (PLU) de votre commune et votre imagination. C'est le projet qui vous ressemble le plus.",
  longDescription:
    "Dans les Hauts-de-France, construire une maison individuelle hors lotissement offre une liberté rare : choix du style architectural, des matériaux, de l'implantation sur le terrain, des accès, des clôtures… Nos constructeurs partenaires vous accompagnent de la conception à la remise des clés via un Contrat de Construction de Maison Individuelle (CCMI) — le seul contrat qui vous protège juridiquement avec un prix ferme, des délais garantis et une couverture en cas de défaillance du constructeur.",
  characteristics: [
    "Liberté architecturale totale (sous réserve du PLU)",
    "Implantation libre sur le terrain",
    "Choix du style : traditionnel, contemporain, cubique…",
    "Aucun cahier des charges de lotissement",
    "Terrain souvent plus grand et moins cher",
    "Environnement généralement moins dense",
  ],
  advantages: [
    "Unicité : une maison qui vous ressemble entièrement",
    "Liberté d'expression architecturale maximale",
    "Terrain souvent plus grand qu'en lotissement",
    "Intimité et indépendance vis-à-vis des voisins",
    "Exonération de taxe foncière pendant 2 ans (construction neuve)",
    "Possibilité de dépendances, piscine, garage indépendant",
  ],
  idealFor:
    "La maison individuelle sur terrain isolé est parfaite pour les propriétaires qui ont trouvé leur terrain idéal en dehors d'un lotissement et qui veulent une maison unique, sans compromis architecturaux. Elle convient aux familles recherchant l'espace, l'intimité et un cadre de vie rural ou péri-urbain dans les Hauts-de-France.",
  faq: [
    {
      question: "Quelles garanties légales protègent ma construction ?",
      answer:
        "Trois garanties obligatoires s'appliquent après la réception : la garantie de parfait achèvement (1 an) couvre tous les défauts signalés à la réception, la garantie de bon fonctionnement (2 ans) couvre les équipements dissociables (volets, robinetterie, chaudière…), et la garantie décennale (10 ans) protège contre tout vice affectant la solidité de l'ouvrage.",
    },
    {
      question: "Quelles sont les contraintes pour construire hors lotissement ?",
      answer:
        "En dehors du lotissement, votre projet est soumis au Plan Local d'Urbanisme (PLU) de la commune, qui définit les règles de hauteur, d'emprise au sol, d'aspect extérieur et de recul. Le permis de construire est obligatoire. Votre constructeur prend en charge l'analyse du PLU et le montage du dossier.",
    },
    {
      question: "Comment trouver un terrain individuel dans le Nord ?",
      answer:
        "Les annonces entre particuliers (LeBonCoin, PAP), les agences immobilières locales, les notaires et les mairies sont vos meilleures sources. Certains constructeurs de notre réseau disposent également de terrains à la vente dans leur secteur d'intervention.",
    },
    {
      question: "Le raccordement aux réseaux est-il plus compliqué hors lotissement ?",
      answer:
        "Oui, les terrains isolés ne sont pas toujours viabilisés. Il faut prévoir le raccordement à l'eau, à l'électricité, au tout-à-l'égout (ou une fosse septique) et à internet. Le coût de viabilisation peut varier de 5 000 à 20 000 € selon l'éloignement des réseaux.",
    },
  ],
  image: "/images/maison-individuelle.jpg",
  imageAlt: "Maison individuelle sur mesure dans le Nord",
  relatedTypes: [
    { label: "Traditionnelle", href: "/constructeur-maison-traditionnelle-nord" },
    { label: "Contemporaine", href: "/constructeur-de-maison-contemporaine-nord" },
    { label: "Cubique", href: "/constructeur-maison-cubique-nord" },
    { label: "Plain-pied", href: "/constructeur-maison-plain-pied-nord" },
  ],
};

export default function MaisonIndividuellePage() {
  return <MaisonTypePage data={data} />;
}
