import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Ma Maison dans le Nord",
  description:
    "Mentions légales du site ma-maison-dans-le-nord.fr : éditeur, hébergeur, propriété intellectuelle, données personnelles et conditions d'utilisation.",
  alternates: { canonical: "/mentions-legales" },
};

const sections = [
  {
    id: "definitions",
    titre: "Définitions",
    contenu: [
      {
        type: "p",
        texte:
          "Client : tout professionnel ou personne physique capable au sens des articles 1123 et suivants du Code civil, ou personne morale, qui visite le Site.",
      },
      {
        type: "p",
        texte:
          "Prestations et Services : ma-maison-dans-le-nord.fr met à disposition des Clients.",
      },
      {
        type: "p",
        texte:
          "Contenu : ensemble des éléments constituants l'information présente sur le Site, notamment textes, images et vidéos.",
      },
      {
        type: "p",
        texte:
          "Informations clients : données personnelles détenues pour gestion de compte, relation client, analyses et statistiques.",
      },
      {
        type: "p",
        texte: "Utilisateur : internaute se connectant, utilisant le site.",
      },
      {
        type: "p",
        texte:
          "Informations personnelles : les informations qui permettent, sous quelque forme que ce soit, directement ou non, l'identification des personnes physiques auxquelles elles s'appliquent.",
      },
    ],
  },
  {
    id: "presentation",
    titre: "1. Présentation du site internet",
    contenu: [
      {
        type: "list",
        items: [
          "Propriétaire : Julien Legrand – EI – Numéro de TVA : FR60790279483 – 17 rue du Plouick 59133 Phalempin",
          "Responsable publication : Julien Legrand – contact@ma-maison-dans-le-nord.fr",
          "Webmaster : Julien Legrand – contact@ma-maison-dans-le-nord.fr",
          "Hébergeur : EasyHoster – Kim Communication Limited 2003, 20/F, Tower 5, China Hong Kong City, 33 Canton Road, Tsim Sha Tsui, Kowloon, Hong Kong",
          "Délégué à la protection des données : Legrand – contact@ma-maison-dans-le-nord.fr",
        ],
      },
    ],
  },
  {
    id: "cgu",
    titre: "2. Conditions générales d'utilisation du site et des services proposés",
    contenu: [
      {
        type: "p",
        texte:
          "Le Site constitue une œuvre de l'esprit protégée par les dispositions du Code de la Propriété Intellectuelle et des Réglementations Internationales applicables. Le Client ne peut en aucune manière réutiliser, céder ou exploiter pour son propre compte tout ou partie des éléments ou travaux du Site.",
      },
      {
        type: "p",
        texte:
          "L'utilisation du site implique l'acceptation pleine et entière des conditions générales d'utilisation. Ces conditions d'utilisation sont susceptibles d'être modifiées ou complétées à tout moment, les utilisateurs du site sont donc invités à les consulter de manière régulière.",
      },
      {
        type: "p",
        texte:
          "Ce site internet est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par le site, qui s'efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l'intervention.",
      },
    ],
  },
  {
    id: "services",
    titre: "3. Description des services fournis",
    contenu: [
      {
        type: "p",
        texte:
          "Le site internet a pour objet de fournir une information concernant l'ensemble des activités de la société.",
      },
      {
        type: "p",
        texte:
          "Le site s'efforce de fournir des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des oublis, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.",
      },
      {
        type: "p",
        texte:
          "Toutes les informations indiquées sur le site sont données à titre indicatif, et sont susceptibles d'évoluer. Par ailleurs, les renseignements figurant sur le site ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.",
      },
    ],
  },
  {
    id: "limitations-techniques",
    titre: "4. Limitations contractuelles sur les données techniques",
    contenu: [
      {
        type: "p",
        texte: "Le site utilise la technologie JavaScript.",
      },
      {
        type: "p",
        texte:
          "Le site Internet ne pourra être tenu responsable de dommages matériels liés à l'utilisation du site. De plus, l'utilisateur du site s'engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis à jour.",
      },
      {
        type: "p",
        texte:
          "Le site est hébergé chez un prestataire sur le territoire de l'Union Européenne conformément aux dispositions du Règlement Général sur la Protection des Données (RGPD : n° 2016-679).",
      },
    ],
  },
  {
    id: "propriete-intellectuelle",
    titre: "5. Propriété intellectuelle et contrefaçons",
    contenu: [
      {
        type: "p",
        texte:
          "Le site est propriétaire des droits de propriété intellectuelle et détient les droits d'usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, icônes et sons.",
      },
      {
        type: "p",
        texte:
          "Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable du site.",
      },
      {
        type: "p",
        texte:
          "Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.",
      },
    ],
  },
  {
    id: "responsabilite",
    titre: "6. Limitations de responsabilité",
    contenu: [
      {
        type: "p",
        texte:
          "Le site agit en tant qu'éditeur du site et est responsable de la qualité et de la véracité du Contenu qu'il publie.",
      },
      {
        type: "p",
        texte:
          "Le site ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site internet, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l'apparition d'un bug ou d'une incompatibilité.",
      },
      {
        type: "p",
        texte:
          "Le site ne pourra également être tenu responsable des dommages indirects (tels par exemple qu'une perte de marché ou perte d'une chance) consécutifs à l'utilisation du site.",
      },
      {
        type: "p",
        texte:
          "Des espaces interactifs (possibilité de poser des questions dans l'espace contact) sont à la disposition des utilisateurs. Le site se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données.",
      },
    ],
  },
  {
    id: "donnees-personnelles",
    titre: "7. Gestion des données personnelles",
    contenu: [
      {
        type: "p",
        texte:
          "Le Client est informé des réglementations concernant la communication marketing, la loi du 21 Juin 2014 pour la confiance dans l'Économie Numérique, la Loi Informatique et Liberté du 06 Août 2004 ainsi que du Règlement Général sur la Protection des Données (RGPD : n° 2016-679).",
      },
      {
        type: "h3",
        texte: "7.1 Responsables de la collecte des données personnelles",
      },
      {
        type: "p",
        texte:
          "Pour les Données Personnelles collectées dans le cadre de la création du compte personnel de l'Utilisateur et de sa navigation sur le Site, le responsable du traitement des Données Personnelles est : Julien Legrand.",
      },
      {
        type: "h3",
        texte: "7.2 Finalité des données collectées",
      },
      {
        type: "p",
        texte: "Le site est susceptible de traiter tout ou partie des données :",
      },
      {
        type: "list",
        items: [
          "Pour permettre la navigation sur le Site et la gestion et la traçabilité des prestations et services commandés par l'utilisateur : données de connexion et d'utilisation du Site, facturation, historique des commandes, etc.",
          "Pour prévenir et lutter contre la fraude informatique (spamming, hacking…) : matériel informatique utilisé pour la navigation, l'adresse IP, le mot de passe (hashé).",
          "Pour améliorer la navigation sur le Site : données de connexion et d'utilisation.",
          "Pour mener des enquêtes de satisfaction facultatives sur le site : adresse email.",
          "Pour mener des campagnes de communication (sms, mail) : numéro de téléphone, adresse email.",
        ],
      },
      {
        type: "p",
        texte:
          "Le site ne commercialise pas vos données personnelles qui sont donc uniquement utilisées par nécessité ou à des fins statistiques et d'analyses.",
      },
      {
        type: "h3",
        texte: "7.3 Droit d'accès, de rectification et d'opposition",
      },
      {
        type: "p",
        texte:
          "Conformément à la réglementation européenne en vigueur, les Utilisateurs du site disposent des droits suivants :",
      },
      {
        type: "list",
        items: [
          "Droit d'accès (article 15 RGPD) et de rectification (article 16 RGPD), de mise à jour, de complétude des données.",
          "Droit de verrouillage ou d'effacement des données à caractère personnel (article 17 du RGPD), lorsqu'elles sont inexactes, incomplètes, équivoques ou périmées.",
          "Droit de retirer à tout moment un consentement (article 13-2c RGPD).",
          "Droit à la limitation du traitement des données (article 18 RGPD).",
          "Droit d'opposition au traitement des données (article 21 RGPD).",
          "Droit à la portabilité des données (article 20 RGPD).",
          "Droit de définir le sort des données après décès.",
        ],
      },
      {
        type: "p",
        texte:
          "Pour exercer ces droits, l'Utilisateur peut contacter : Julien Legrand – DPO, 17 rue du Plouick 59133 Phalempin – contact@ma-maison-dans-le-nord.fr. Les Utilisateurs peuvent également déposer une réclamation auprès de la CNIL (www.cnil.fr).",
      },
      {
        type: "h3",
        texte: "7.4 Non-communication des données personnelles",
      },
      {
        type: "p",
        texte:
          "Le site s'interdit de traiter, héberger ou transférer les Informations collectées sur ses Clients vers un pays situé en dehors de l'Union européenne sans en informer préalablement le client. Le site ne collecte aucune donnée sensible.",
      },
    ],
  },
  {
    id: "notification",
    titre: "8. Notification d'incident",
    contenu: [
      {
        type: "p",
        texte:
          "Quels que soient les efforts fournis, aucune méthode de transmission sur Internet et aucune méthode de stockage électronique n'est complètement sûre. Le site ne peut en conséquence pas garantir une sécurité absolue.",
      },
      {
        type: "p",
        texte:
          "Si le site prenait connaissance d'une brèche de la sécurité, il avertirait les utilisateurs concernés afin qu'ils puissent prendre les mesures appropriées. Aucune information personnelle de l'utilisateur du site n'est publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers.",
      },
    ],
  },
  {
    id: "cookies",
    titre: "9. Liens hypertextes, cookies et balises internet",
    contenu: [
      {
        type: "p",
        texte:
          "Le site contient un certain nombre de liens hypertextes vers d'autres sites, mis en place avec l'autorisation du site. Cependant, le site n'a pas la possibilité de vérifier le contenu des sites ainsi visités, et n'assumera en conséquence aucune responsabilité de ce fait.",
      },
      {
        type: "h3",
        texte: "9.1 Cookies",
      },
      {
        type: "p",
        texte:
          "Un « cookie » est un petit fichier d'information envoyé sur le navigateur de l'Utilisateur et enregistré au sein du terminal de l'Utilisateur. Ce fichier comprend des informations telles que le nom de domaine de l'Utilisateur, le fournisseur d'accès Internet, le système d'exploitation, ainsi que la date et l'heure d'accès. Les cookies ne risquent en aucun cas d'endommager le terminal de l'Utilisateur.",
      },
      {
        type: "p",
        texte:
          "Sauf si vous décidez de désactiver les cookies, vous acceptez que le site puisse les utiliser. Vous pouvez à tout moment désactiver ces cookies depuis les paramètres de votre navigateur, sachant que cela peut réduire ou empêcher l'accessibilité à tout ou partie des Services proposés par le site.",
      },
      {
        type: "h3",
        texte: "9.2 Balises internet",
      },
      {
        type: "p",
        texte:
          "Le site peut employer occasionnellement des balises Internet (également appelées « tags », ou GIF à un pixel) afin d'évaluer les réponses des visiteurs face au Site et l'efficacité de ses actions. Ces balises sont placées dans les publicités en ligne et sur les différentes pages du site.",
      },
    ],
  },
  {
    id: "droit-applicable",
    titre: "10. Droit applicable et attribution de juridiction",
    contenu: [
      {
        type: "p",
        texte:
          "Tout litige en relation avec l'utilisation du site est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de Lille.",
      },
    ],
  },
];

export default function MentionsLegalesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-navy py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Mentions légales
          </h1>
          <p className="text-white/60 mt-3 text-sm">
            Site : ma-maison-dans-le-nord.fr — © {new Date().getFullYear()} Ma Maison dans le Nord
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Table of contents */}
          <nav className="bg-gray-50 rounded-xl p-6 mb-12" aria-label="Sommaire">
            <h2 className="font-display font-bold text-navy mb-4 text-sm uppercase tracking-widest">
              Sommaire
            </h2>
            <ol className="space-y-1.5">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-sm text-gray-600 hover:text-navy transition-colors"
                  >
                    {s.titre}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Sections */}
          <div className="space-y-12">
            {sections.map((section) => (
              <article key={section.id} id={section.id}>
                <h2 className="font-display text-xl font-bold text-navy mb-4 pb-2 border-b border-gray-200">
                  {section.titre}
                </h2>
                <div className="space-y-4">
                  {section.contenu.map((block, i) => {
                    if (block.type === "p") {
                      return (
                        <p key={i} className="text-gray-600 leading-relaxed text-sm">
                          {block.texte}
                        </p>
                      );
                    }
                    if (block.type === "h3") {
                      return (
                        <h3
                          key={i}
                          className="font-semibold text-navy mt-6 mb-2"
                        >
                          {block.texte}
                        </h3>
                      );
                    }
                    if (block.type === "list" && block.items) {
                      return (
                        <ul key={i} className="space-y-2 ml-4">
                          {block.items.map((item, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2 text-sm text-gray-600"
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2"
                                aria-hidden="true"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return null;
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
