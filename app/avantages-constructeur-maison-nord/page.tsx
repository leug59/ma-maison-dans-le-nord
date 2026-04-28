import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pourquoi choisir un constructeur de maison dans le Nord ?",
  description:
    "Découvrez tous les avantages de faire appel à un constructeur de maison individuelle dans le Nord : projet sur-mesure, CCMI, RT2012, délais garantis, accompagnement terrain.",
  alternates: { canonical: "/avantages-constructeur-maison-nord" },
};

const avantages = [
  {
    num: "01",
    titre: "Un projet sur-mesure et personnalisé",
    contenu:
      "Les constructeurs sélectionnés sont à votre écoute pour exposer vos idées dans les moindres détails. Une construction permet de réaliser votre maison sur-mesure selon vos plans établis. Vous pouvez personnaliser à 100 % votre résidence unique. Les constructeurs proposent des modèles qu'ils peuvent individualiser et adapter selon vos besoins, y compris ceux d'un architecte. Pour les personnes en situation de handicap, les plans respecteront les normes PMR.",
  },
  {
    num: "02",
    titre: "Un accompagnement de qualité",
    contenu:
      "Nous garantissons le sérieux de tous les prestataires. Ce sont des constructeurs de proximité, souvent des entreprises familiales avec un savoir-faire traditionnel. La qualité des compétences est maîtrisée directement par votre constructeur. Vous bénéficiez d'un accompagnement à forte valeur ajoutée et votre constructeur propose toutes sortes de maisons d'architectes au design élégant et personnalisé.",
  },
  {
    num: "03",
    titre: "Professionnalisme et protections légales",
    contenu:
      "Vous signerez un Contrat de Construction de Maison Individuelle (CCMI) avant le commencement des travaux. Il garantit le parfait achèvement des travaux, le bon fonctionnement des équipements (garantie biennale), la garantie décennale, et la livraison au délai et au prix convenus. Votre constructeur respecte obligatoirement la Réglementation Thermique RE2020, assurant des logements à basse consommation énergétique.",
  },
  {
    num: "04",
    titre: "Un gain de temps précieux",
    contenu:
      "Vous êtes en activité et n'avez pas le temps de gérer la coordination des travaux ? Le constructeur coordonne tous les corps de métiers et devient votre unique interlocuteur. Vous n'avez pas à contacter individuellement chaque artisan ni à organiser leur venue. Les constructeurs sélectionnés connaissent bien les techniciens de la région Hauts-de-France et travaillent fréquemment ensemble.",
  },
  {
    num: "05",
    titre: "Un prix maîtrisé et transparent",
    contenu:
      "Se lancer dans la construction peut effrayer financièrement. Passer par un constructeur vous évite les dépenses imprévues. En signant le CCMI, le constructeur s'engage à exécuter les travaux pour un montant défini dès le départ : prix définitif comprenant les plans, l'étude des sols, la fourniture des matériaux, les travaux et les garanties. Un échéancier de paiement est établi selon la progression des travaux.",
  },
  {
    num: "06",
    titre: "Aide à la recherche du terrain",
    contenu:
      "Le terrain est le premier élément d'un projet de construction. Les constructeurs sélectionnés peuvent vous aider dans cette recherche. Ils sont en relation avec des vendeurs : agences immobilières, indépendants, lotisseurs. Que ce soit en lotissement ou rase campagne, ils proposent des parcelles à acheter et jouent un rôle de conseil pour recommander la meilleure implantation de votre maison.",
  },
  {
    num: "07",
    titre: "Respect des délais garanti",
    contenu:
      "La livraison doit respecter certains délais. Faire appel à un constructeur du Nord assure un emménagement dans le temps imparti. Lors de la signature du contrat sont précisés : la date de début des travaux, la durée du chantier et les pénalités en cas de retard. Si les délais sont dépassés, le constructeur sera redevable des pénalités de retard prévues au contrat.",
  },
];

export default function AvantagesConstructeurPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 px-4" aria-label="En-tête">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
            Nos engagements
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Pourquoi choisir un constructeur de maison dans le Nord ?
          </h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto">
            Construire sa maison est le projet d'une vie. Avoir un professionnel
            expert à ses côtés vous assure sérénité, qualité et maîtrise du
            budget.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 text-lg leading-relaxed">
            Vous avez un projet immobilier et hésitez entre faire appel à un
            constructeur, bâtir vous-même ou acheter un bien à rénover ?
            Construire sa maison ne doit pas être pris à la légère. Le choix de
            votre constructeur sera primordial dans cette aventure qui durera
            plusieurs mois. Voici pourquoi nos partenaires font la différence.
          </p>
        </div>
      </section>

      {/* Avantages */}
      <section className="pb-20 px-4" aria-label="Avantages">
        <div className="max-w-4xl mx-auto space-y-12">
          {avantages.map((a, i) => (
            <article
              key={a.num}
              className={`flex gap-8 items-start ${i % 2 === 0 ? "" : "flex-row"}`}
              aria-labelledby={`avantage-${a.num}`}
            >
              <div className="shrink-0 w-16 h-16 rounded-full flex items-center justify-center bg-navy">
                <span className="font-display font-bold text-gold text-lg">
                  {a.num}
                </span>
              </div>
              <div className="border-l-2 border-gray-100 pl-8">
                <h2
                  id={`avantage-${a.num}`}
                  className="font-display text-xl font-bold text-navy mb-3"
                >
                  {a.titre}
                </h2>
                <p className="text-gray-600 leading-relaxed">{a.contenu}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Garanties légales */}
      <section className="bg-gray-50 py-16 px-4" aria-labelledby="garanties-title">
        <div className="max-w-4xl mx-auto">
          <h2
            id="garanties-title"
            className="font-display text-2xl font-bold text-navy text-center mb-10"
          >
            Les garanties légales incluses dans votre CCMI
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                duree: "1 an",
                nom: "Parfait achèvement",
                desc: "Couvre tous les défauts signalés lors de la réception.",
              },
              {
                duree: "2 ans",
                nom: "Bon fonctionnement",
                desc: "Couvre les équipements dissociables (volets, robinetterie…).",
              },
              {
                duree: "10 ans",
                nom: "Garantie décennale",
                desc: "Couvre les vices affectant la solidité de l'ouvrage.",
              },
            ].map((g) => (
              <div
                key={g.nom}
                className="bg-white rounded-xl p-6 border border-gray-200 text-center"
              >
                <div className="text-3xl font-display font-bold text-gold mb-2">
                  {g.duree}
                </div>
                <h3 className="font-semibold text-navy mb-2">{g.nom}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 px-4" aria-labelledby="cta-title">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="cta-title"
            className="font-display text-3xl font-bold text-white mb-4"
          >
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Mise en relation gratuite avec nos constructeurs partenaires
            sélectionnés dans les Hauts-de-France.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/devis"
              className="px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-400 transition-colors"
            >
              Demander un devis gratuit
            </Link>
            <Link
              href="/a-propos"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-white hover:bg-white/5 transition-colors"
            >
              En savoir plus sur nous
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
