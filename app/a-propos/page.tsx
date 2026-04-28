import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "À propos — Ma Maison dans le Nord",
  description: "Qui sommes-nous ? Notre équipe, notre mission et les critères de sélection de nos constructeurs partenaires dans le Nord-Pas-de-Calais.",
  alternates: { canonical: "/a-propos" },
  openGraph: buildOpenGraph("/a-propos", "website"),
};

export default function AProposPage() {
  return (
    <>
      <section className="bg-navy py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">Notre équipe</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">Trouvez votre constructeur de maison individuelle dans le Nord</h1>
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">Pour chaque projet de construction de maison dans le Nord, nous attachons une attention particulière à vous mettre en relation avec le bon professionnel.</p>
          <Link href="/devis" className="inline-block px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-400 transition-colors">Demander un devis gratuit</Link>
        </div>
      </section>

      <section className="px-4 -mt-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image src="/images/equipe.jpg" alt="L'équipe Ma Maison dans le Nord" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 1024px" priority />
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed">Vous êtes prêts à vous lancer dans la fabuleuse aventure de la construction dans le Nord ? Mais voilà : vous ne savez pas par où commencer… Que vous soyez un jeune couple à la conquête de son premier nid douillet, un célibataire qui veut investir dans la pierre pour se constituer un capital immobilier ou un couple de seniors nécessitant une maison adaptée pour couler ses vieux jours, laissez-vous guider. Grâce aux constructeurs du Nord que nous avons soigneusement sélectionnés pour vous, vous allez bénéficier d&apos;un accompagnement complet, tout en restant maître de votre projet.</p>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-6">Qui se cache derrière ce &quot;nous&quot; ?</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Originaire de la région Nord-Pas-de-Calais, notre équipe possède à la fois une expertise dans le domaine de la construction et une parfaite connaissance de la région.</p>
            <p>Nos compétences dans l&apos;univers de la construction sont multiples. Nous possédons tout d&apos;abord l&apos;expérience acquise par la construction de maisons dans le Nord (les nôtres !). En effet, rien n&apos;est plus formateur que d&apos;expérimenter par et pour soi-même. Nous connaissons parfaitement les contraintes d&apos;une construction, les peurs des futurs propriétaires, les erreurs à ne pas commettre, les pertes de temps à rechercher un professionnel de confiance, les désillusions, mais aussi la joie de trouver le constructeur qui nous comprend et qui est phase avec nos attentes !</p>
            <p>Par ailleurs, nous avons pu développer et mesurer nos compétences grâce à la recommandation de professionnels de la région à notre entourage. Le conseil, c&apos;est notre force et le retour positif de nos proches nous conforte dans les références de constructeurs que nous vous proposons.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-6">Concrètement, comment allons-nous vous aider pour votre construction dans le Nord ?</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Rien de plus simple ! Répondez aux questions du formulaire en ligne sur notre site, afin que nous puissions examiner votre projet en détail. En fonction de vos souhaits en matière de type de construction, de surface de votre futur domicile, de votre budget, du délai imparti, etc., nous vous mettons directement en relation avec le constructeur de maison dans le Nord qui sera en mesure de répondre à vos aspirations. Il étudiera votre demande, échangera avec vous, vous donnera tous les conseils nécessaires pour mener à bien votre projet. Nos partenaires de confiance vous accompagnent à toutes les étapes de la construction.</p>
            <p>En conclusion, plus de pertes de temps à chercher la &quot;perle rare de la construction&quot;, nous la trouvons pour vous. Vous pouvez ainsi passer directement à la phase 2 de votre projet !</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-6">Sur quels critères avons-nous choisi les constructeurs qui travaillent avec nous ?</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Vous l&apos;avez bien compris, nous avons procédé à une sélection scrupuleuse des professionnels en amont. C&apos;est notre gage de qualité. Les constructeurs à qui nous avons accordé notre confiance, bien que chacun soit unique, présentent tous des qualités communes. Ils sont :</p>
            <ul className="space-y-4 pl-2">
              {[
                "réactifs : partenaires de proximité, qui travaillent dans un rayon de 30 à 40 km de leur entreprise, ce sont des constructeurs qui peuvent répondre rapidement à vos sollicitations ;",
                "reconnus pour leur travail de qualité et pour leur expertise. Il s'agit pour la plupart d'entreprises familiales, spécialistes de la construction, et parfois d'un type de construction donnée (maison bois, traditionnelle, contemporaine, …) ;",
                "à l'écoute : de votre projet, de vos attentes et de besoins. Ce sont des entrepreneurs ayant à cœur de vous satisfaire au maximum, et qui proposent des constructions élaborées sur-mesure et des prestations haut de gamme.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-gold flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>Ne perdez plus de longues heures à chercher votre futur constructeur de maison, nous le faisons pour vous ! Contactez notre équipe de spécialistes pour un accompagnement personnalisé vers la maison de vos rêves. Votre projet immobilier peut débuter dès à présent, n&apos;hésitez plus !</p>
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Prêt à démarrer votre projet ?</h2>
          <p className="text-white/70 text-lg mb-8">Vous êtes décidés à faire construire votre maison ? Nous vous mettrons rapidement en contact avec le constructeur qu&apos;il vous faut !</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis" className="px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-400 transition-colors">Demander un devis gratuit</Link>
            <Link href="/contact" className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-white hover:bg-white/5 transition-colors">Nous contacter</Link>
          </div>
        </div>
      </section>
    </>
  );
}
