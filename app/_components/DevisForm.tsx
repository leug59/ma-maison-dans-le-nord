"use client";

import { useState } from "react";

const maisonTypes = [
  "Maison traditionnelle",
  "Maison contemporaine",
  "Maison cubique",
  "Ossature bois",
  "Plain-pied",
  "Maison passive",
  "Maison individuelle",
  "Je ne sais pas encore",
];

const budgets = [
  "Moins de 150 000 €",
  "150 000 – 200 000 €",
  "200 000 – 250 000 €",
  "250 000 – 300 000 €",
  "300 000 – 400 000 €",
  "Plus de 400 000 €",
];

export default function DevisForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
    setLoading(false);
  };

  if (status === "success") {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-bold text-navy mb-3">
          Demande envoyée !
        </h3>
        <p className="text-gray-600">
          Notre équipe vous contactera dans les 24 à 48h pour vous proposer
          une mise en relation avec nos constructeurs partenaires.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="prenom"
            className="block text-sm font-medium text-navy mb-2"
          >
            Prénom <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            required
            autoComplete="given-name"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-navy"
            placeholder="Jean"
          />
        </div>
        <div>
          <label
            htmlFor="nom"
            className="block text-sm font-medium text-navy mb-2"
          >
            Nom <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            required
            autoComplete="family-name"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-navy"
            placeholder="Dupont"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-navy mb-2"
          >
            Email <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-navy"
            placeholder="jean.dupont@exemple.fr"
          />
        </div>
        <div>
          <label
            htmlFor="telephone"
            className="block text-sm font-medium text-navy mb-2"
          >
            Téléphone
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            autoComplete="tel"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-navy"
            placeholder="06 12 34 56 78"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="type-maison"
            className="block text-sm font-medium text-navy mb-2"
          >
            Type de maison souhaité <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <select
            id="type-maison"
            name="type-maison"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-navy bg-white"
          >
            <option value="">Sélectionnez un type</option>
            {maisonTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="budget"
            className="block text-sm font-medium text-navy mb-2"
          >
            Budget approximatif <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <select
            id="budget"
            name="budget"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-navy bg-white"
          >
            <option value="">Sélectionnez un budget</option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="surface"
            className="block text-sm font-medium text-navy mb-2"
          >
            Surface souhaitée (m²)
          </label>
          <input
            type="number"
            id="surface"
            name="surface"
            min="50"
            max="500"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-navy"
            placeholder="120"
          />
        </div>
        <div>
          <label
            htmlFor="ville"
            className="block text-sm font-medium text-navy mb-2"
          >
            Ville / Code postal <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="ville"
            name="ville"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-navy"
            placeholder="Lille, 59000"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-navy mb-2">
          Avez-vous déjà un terrain ?
        </label>
        <div className="flex gap-6">
          {["Oui", "Non", "En recherche"].map((val) => (
            <label key={val} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="terrain"
                value={val.toLowerCase()}
                className="accent-gold"
              />
              <span className="text-gray-700 text-sm">{val}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-navy mb-2"
        >
          Précisions sur votre projet
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-navy resize-none"
          placeholder="Décrivez votre projet, vos attentes, vos contraintes particulières..."
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="rgpd"
          name="rgpd"
          required
          className="mt-1 accent-gold"
        />
        <label htmlFor="rgpd" className="text-sm text-gray-600">
          J&apos;accepte que mes données soient utilisées pour traiter ma demande
          de devis conformément à la{" "}
          <a
            href="/politique-confidentialite"
            className="text-gold hover:underline"
          >
            politique de confidentialité
          </a>
          .
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto px-10 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-400 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Envoi en cours…" : "Envoyer ma demande de devis"}
      </button>
    </form>
  );
}
