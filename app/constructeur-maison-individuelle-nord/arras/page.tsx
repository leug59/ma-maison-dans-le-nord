import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";

export const metadata: Metadata = {
  title: "Constructeur maison à Arras : prix, terrain et devis gratuit",
  description:
    "Faire construire à Arras : prix au m², terrains, communes de l'Arrageois et constructeur partenaire spécialiste de l'ossature bois. Devis gratuit.",
  alternates: { canonical: "https://www.ma-maison-dans-le-nord.fr/constructeur-maison-individuelle-nord/arras" },
  openGraph: buildOpenGraph("/constructeur-maison-individuelle-nord/arras", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Individuelle",
  maisonTypeHref: "/constructeur-maison-individuelle-nord",
  city: "Arras",
  h1: "Constructeur de maison à Arras",
  subtitle:
    "Prix du terrain, coût de construction, communes de l'Arrageois : le guide local pour faire construire à Arras, avec un constructeur partenaire spécialiste de l'ossature bois.",
  openingIntro:
    "Ma Maison dans le Nord est un service local basé à Phalempin, à moins d'une heure d'Arras. Nous ne construisons pas nous-mêmes : nous prenons le temps de comprendre votre projet, puis nous le transmettons à un constructeur partenaire qui intervient dans l'Arrageois. Ce guide rassemble ce qu'il faut savoir avant de se lancer : où chercher un terrain, quel budget prévoir et comment se déroule un projet.",
  intro:
    "Préfecture du Pas-de-Calais et capitale de l'Artois, Arras est au centre d'une communauté urbaine de 46 communes et d'environ 107 000 habitants. La ville se trouve au croisement de l'A1 et de l'A26, à une cinquantaine de minutes de Paris en TGV et à moins d'une heure de Lille. Le centre historique, autour de la Grand'Place et de la place des Héros, laisse peu de place aux terrains libres : la plupart des maisons neuves se construisent dans la première couronne et dans les villages de l'Arrageois, où l'on trouve encore des parcelles à des prix raisonnables.",
  whyBuild:
    "Une grande partie du parc de maisons de l'Arrageois date d'avant les premières réglementations thermiques. Acheter ancien implique souvent de prévoir une rénovation énergétique lourde : isolation, menuiseries, chauffage. Une maison neuve conforme à la RE 2020 part d'une feuille blanche : plans adaptés à votre famille, consommation d'énergie très faible et garanties de construction (parfait achèvement, biennale, décennale). Selon vos revenus, des aides comme le prêt à taux zéro peuvent compléter le financement : vérifiez les conditions en vigueur au moment de votre projet.",
  contentSections: [
    {
      title: "Où faire construire autour d'Arras ?",
      paragraphs: [
        "Dans Arras même, les terrains à bâtir sont rares et s'affichent autour de 200 €/m² en moyenne. Saint-Laurent-Blangy, très demandée pour sa proximité avec le centre et la vallée de la Scarpe, dépasse souvent ce niveau.",
        "La première couronne offre un bon compromis : à Achicourt, Beaurains, Dainville, Tilloy-lès-Mofflaines ou Anzin-Saint-Aubin, les annonces se situent le plus souvent entre 120 et 180 €/m². On reste à quelques minutes des écoles, des commerces et de la gare d'Arras.",
        "Plus loin, vers Avesnes-le-Comte, Aubigny-en-Artois, Vitry-en-Artois ou Bapaume, le terrain devient nettement plus abordable et les parcelles plus grandes, au prix de trajets plus longs. Au nord, le bassin minier de Lens et Liévin, à une vingtaine de minutes par l'A26, propose aussi des terrains moins chers avec tous les services d'une agglomération.",
      ],
    },
    {
      title: "Les étapes d'un projet de construction dans l'Arrageois",
      paragraphs: [
        "Tout commence par le budget global : terrain, construction, frais annexes. Une fois le terrain repéré, vérifiez le plan local d'urbanisme de la commune (hauteur, implantation, aspect extérieur) et demandez l'étude de sol si elle est obligatoire, ce qui est le cas dans les secteurs exposés au retrait-gonflement des argiles.",
        "Le constructeur établit ensuite les plans et dépose le permis de construire. Comptez en général deux mois d'instruction pour une maison individuelle, un mois de plus si le terrain est situé près d'un monument historique, ce qui arrive souvent à Arras. Viennent ensuite la signature du contrat de construction, l'obtention du prêt, puis le chantier.",
        "La durée du chantier dépend du mode constructif : souvent 10 à 12 mois en maçonnerie traditionnelle, généralement moins en ossature bois, car les murs sont préparés à l'abri puis montés en quelques jours sur la dalle.",
      ],
    },
    {
      title: "L'ossature bois, une option à étudier sérieusement",
      paragraphs: [
        "L'ossature bois se développe dans le Pas-de-Calais, y compris dans les lotissements de l'Arrageois. Les murs intègrent l'isolant dans leur épaisseur, ce qui permet d'atteindre de très bonnes performances thermiques sans perdre de surface habitable. Le bois stocke du carbone, un atout pour respecter les seuils de la RE 2020.",
        "Côté aspect, une maison à ossature bois ne ressemble pas forcément à un chalet : enduit, bardage bois ou composite, et même parement brique pour s'intégrer aux maisons voisines. Les plans restent libres, du plain-pied à la maison à étage.",
      ],
    },
  ],
  constructorAdvice:
    "Avant de signer, vérifiez trois points : un contrat de construction de maison individuelle (CCMI) plutôt qu'un simple marché de travaux, l'attestation de garantie de livraison délivrée par un organisme financier, et des réalisations visibles dans le secteur. Demandez aussi ce qui est inclus dans le prix annoncé : raccordements, peintures, revêtements de sol, aménagements extérieurs. Remplissez notre formulaire : nous transmettons votre projet à notre constructeur partenaire, qui vous recontacte pour une première étude gratuite.",
  pricing: {
    title: "Combien coûte une maison à Arras ?",
    intro:
      "Fourchettes de marché constatées dans le Pas-de-Calais en 2026. Elles servent à cadrer votre budget, pas à remplacer un devis.",
    rows: [
      { label: "Construction traditionnelle (hors terrain)", value: "1 500 à 2 000 €/m² habitable" },
      { label: "Construction ossature bois (hors terrain)", value: "1 700 à 2 400 €/m² habitable" },
      { label: "Maison de 100 m² (hors terrain)", value: "150 000 à 240 000 €" },
      { label: "Terrain à Arras", value: "environ 200 €/m²" },
      { label: "Terrain en première couronne", value: "environ 120 à 180 €/m²" },
      { label: "Frais annexes (étude de sol, raccordements, notaire sur le terrain)", value: "souvent 15 000 à 30 000 €" },
    ],
    note:
      "Valeurs indicatives relevées en 2026 à partir d'annonces de terrains et d'indices de coûts de construction. Le prix final dépend de la surface, du terrain, du niveau de finition et des aménagements extérieurs.",
  },
  partner: {
    title: "Notre constructeur partenaire dans l'Arrageois",
    body:
      "Dans l'Arrageois, nous travaillons avec un constructeur spécialiste de l'ossature bois, implanté dans le secteur. Nous lui transmettons votre demande après avoir échangé avec vous : pas de coordonnées envoyées à cinq entreprises, un seul interlocuteur qui étudie votre projet.",
    points: [
      "Maisons à ossature bois conformes à la RE 2020",
      "Contrat de construction de maison individuelle (CCMI) avec garantie de livraison",
      "Plans personnalisés, du plain-pied à la maison à étage",
      "Intervention dans l'Arrageois, le bassin minier, la Pévèle Carembault et les Weppes",
      "Première étude de votre projet gratuite et sans engagement",
    ],
  },
  serviceArea: {
    title: "Communes desservies autour d'Arras",
    intro: "Notre partenaire intervient à Arras et dans un rayon d'environ 30 km, notamment à :",
    communes: [
      "Saint-Laurent-Blangy",
      "Achicourt",
      "Beaurains",
      "Dainville",
      "Saint-Nicolas",
      "Tilloy-lès-Mofflaines",
      "Anzin-Saint-Aubin",
      "Vimy",
      "Bapaume",
      "Avesnes-le-Comte",
      "Aubigny-en-Artois",
      "Brebières",
      "Vitry-en-Artois",
      "Lens",
      "Liévin",
      "Hénin-Beaumont",
      "Douai",
    ],
  },
  relatedTypes: {
    title: "Les autres types de maison à Arras",
    intro: "Vous avez déjà une idée du style de maison ? Consultez nos pages dédiées.",
    links: [
      { label: "Maison ossature bois à Arras", href: "/constructeur-maison-bois-nord/arras" },
      { label: "Maison traditionnelle à Arras", href: "/constructeur-maison-traditionnelle-nord/arras" },
      { label: "Maison contemporaine à Arras", href: "/constructeur-de-maison-contemporaine-nord/arras" },
      { label: "Maison plain-pied à Arras", href: "/constructeur-maison-plain-pied-nord/arras" },
      { label: "Maison cubique à Arras", href: "/constructeur-maison-cubique-nord/arras" },
      { label: "Maison passive à Arras", href: "/constructeur-nord-maison-passive/arras" },
    ],
  },
  relatedCities: [
    { label: "Lens", href: "/constructeur-maison-individuelle-nord/lens" },
    { label: "Douai", href: "/constructeur-maison-individuelle-nord/douai" },
    { label: "Lille", href: "/constructeur-maison-individuelle-nord/lille" },
    { label: "Valenciennes", href: "/constructeur-maison-individuelle-nord/valenciennes" },
  ],
  faq: [
    {
      question: "Quel budget prévoir pour faire construire à Arras ?",
      answer:
        "Additionnez trois postes : le terrain, la construction et les frais annexes. Par exemple, une parcelle de 500 m² en première couronne à 150 €/m² (75 000 €), une maison de 100 m² entre 150 000 et 240 000 € et 15 000 à 30 000 € de frais annexes donnent un budget global de 240 000 à 345 000 €. Dans les villages plus éloignés, le terrain pèse nettement moins.",
    },
    {
      question: "Où trouver un terrain constructible près d'Arras ?",
      answer:
        "Les annonces en ligne ne montrent qu'une partie de l'offre. Renseignez-vous aussi en mairie sur les lotissements en projet, et auprès des constructeurs, qui connaissent souvent des parcelles disponibles. Notre partenaire peut vous accompagner dans cette recherche et vérifier qu'un terrain convient à votre projet avant l'achat.",
    },
    {
      question: "Une étude de sol est-elle obligatoire dans l'Arrageois ?",
      answer:
        "Depuis la loi ELAN, le vendeur d'un terrain constructible situé dans une zone d'exposition moyenne ou forte au retrait-gonflement des argiles doit fournir une étude géotechnique préalable. Le constructeur fait ensuite réaliser une étude complémentaire pour adapter les fondations. Vérifiez l'exposition de votre terrain sur georisques.gouv.fr avant de signer.",
    },
    {
      question: "Combien de temps faut-il pour obtenir un permis de construire à Arras ?",
      answer:
        "Le délai d'instruction est en général de deux mois pour une maison individuelle. Il passe à trois mois lorsque le terrain se trouve dans le périmètre d'un monument historique, car l'architecte des Bâtiments de France doit donner son avis. C'est fréquent à Arras, qui compte de nombreux édifices protégés.",
    },
    {
      question: "Le service Ma Maison dans le Nord est-il payant ?",
      answer:
        "Non. Le service est gratuit pour vous : Ma Maison dans le Nord est rémunéré par ses constructeurs partenaires lorsqu'un projet se concrétise. Le prix de votre maison est celui fixé par le constructeur dans votre contrat.",
    },
    {
      question: "Intervenez-vous aussi à Lens, Douai ou Bapaume ?",
      answer:
        "Oui. Notre partenaire couvre l'Arrageois et le bassin minier, dont Lens, Liévin, Hénin-Beaumont et Douai, ainsi que Bapaume et le sud de l'Artois. Si votre terrain est un peu plus loin, indiquez la commune dans le formulaire : nous vous dirons rapidement si votre projet peut être pris en charge.",
    },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} canonicalPath="/constructeur-maison-individuelle-nord/arras" />;
}
