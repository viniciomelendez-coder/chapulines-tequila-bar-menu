import { useState } from "react";

const TAG_STYLE = {
  "House Favorite": "bg-agave/15 text-agave border-agave/30",
  Premium:          "bg-gold/10 text-gold border-gold/30",
  Spicy:            "bg-chili/15 text-chili border-chili/30",
  Fresh:            "bg-agave/10 text-agave/70 border-agave/20",
  Classic:          "bg-cream/5 text-cream/50 border-white/10",
  Tropical:         "bg-gold/10 text-gold/70 border-gold/20",
  Smoky:            "bg-cream/5 text-cream/40 border-white/10",
  Floral:           "bg-agave/10 text-agave/60 border-agave/20",
  Bold:             "bg-chili/10 text-chili/60 border-chili/20",
  Light:            "bg-cream/5 text-cream/35 border-white/8",
  Frozen:           "bg-agave/10 text-agave/70 border-agave/20",
};

const LEVEL_COLOR = {
  sweetness: "bg-gold",
  acidity:   "bg-agave",
  intensity: "bg-cream/60",
  spice:     "bg-chili",
};
const LEVEL_LABEL = {
  sweetness: "Dulzor",
  acidity:   "Acidez",
  intensity: "Intensidad",
  spice:     "Picante",
};

function LevelBar({ type, value }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-cream/30 w-16 text-right font-body shrink-0">
        {LEVEL_LABEL[type]}
      </span>
      <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${LEVEL_COLOR[type]}`}
          style={{ width: `${(value / 5) * 100}%`, opacity: value === 0 ? 0.15 : 1 }}
        />
      </div>
      <span className="text-xs text-cream/20 w-4 font-body">{value}</span>
    </div>
  );
}

function Section({ label, children }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[10px] font-bold tracking-[0.25em] text-agave uppercase font-body">
          {label}
        </span>
        <span className="h-px flex-1 bg-white/6" />
      </div>
      {children}
    </div>
  );
}

export default function DrinkDetail({ drink, onBack }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-carbon">

      {/* HERO */}
      <div className="relative w-full h-56 bg-carbon-700 overflow-hidden">
        {!imgFailed ? (
          <img
            src={drink.image}
            alt={drink.name}
            className="w-full h-full object-cover opacity-60"
            onError={() => setImgFailed(true)}
          />
        ) : (
          // Dark placeholder
          <div className="w-full h-full flex items-center justify-center bg-carbon-700">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border border-agave/20 mx-auto mb-2
                              flex items-center justify-center">
                <span className="text-agave/40 font-display font-bold text-2xl">
                  {drink.name[0]}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/60 to-transparent" />

        {/* Back button */}
        <button
          onClick={onBack}
          className="absolute top-4 left-4 w-9 h-9 rounded-full bg-carbon/80 border border-white/10
                     flex items-center justify-center text-cream/70 text-lg press"
        >
          ‹
        </button>

        {/* Price */}
        <div className="absolute top-4 right-4 bg-agave text-carbon font-bold
                        text-lg px-3 py-1 rounded-sm font-body">
          <span className="text-xs align-super">$</span>
          {drink.price ?? (drink.priceNote ?? "—")}
        </div>

        {/* Title at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
          <h1 className="font-display font-bold text-cream text-3xl leading-tight">
            {drink.name}
          </h1>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {drink.tags.map((t) => (
              <span key={t}
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${TAG_STYLE[t] ?? "bg-cream/5 text-cream/40 border-white/10"}`}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 px-5 pt-5 pb-24 max-w-xl mx-auto w-full space-y-6">

        {/* Description */}
        <p className="font-display italic text-cream/50 text-base leading-relaxed">
          {drink.description}
        </p>

        {/* Ingredients */}
        <Section label="Ingredientes">
          <div className="flex flex-wrap gap-2">
            {drink.ingredients.map((ing) => (
              <span key={ing}
                className="text-xs bg-white/4 text-cream/60 border border-white/8
                           px-3 py-1.5 rounded-sm font-body">
                {ing}
              </span>
            ))}
          </div>
        </Section>

        {/* Spirit */}
        <Section label="El Espíritu">
          <div className="bg-carbon-700 border border-white/6 rounded-lg px-4 py-3 space-y-1">
            <p className="font-body font-bold text-cream text-sm">{drink.spirit.name}</p>
            <p className="text-[11px] text-gold/60 font-body">{drink.spirit.type}</p>
            <p className="text-[11px] text-cream/30 font-body">{drink.spirit.origin}</p>
            <p className="text-xs text-cream/50 font-display italic mt-2 leading-relaxed">
              {drink.spirit.notes}
            </p>
          </div>
        </Section>

        {/* Preparation */}
        <Section label="Preparación">
          <p className="text-sm text-cream/50 font-body leading-relaxed">{drink.preparation}</p>
        </Section>

        {/* History */}
        <Section label="Historia">
          <p className="text-sm text-cream/45 font-display italic leading-relaxed">{drink.history}</p>
          {drink.funFact && (
            <div className="mt-3 bg-gold/5 border border-gold/15 rounded-lg px-4 py-3">
              <p className="text-xs text-cream/40 font-body leading-relaxed">
                <span className="text-gold/70 font-bold">Dato curioso — </span>
                {drink.funFact}
              </p>
            </div>
          )}
        </Section>

        {/* Pairing */}
        <Section label="Maridaje">
          <p className="text-sm text-cream/45 font-body">{drink.pairing}</p>
        </Section>

        {/* Levels */}
        <Section label="Perfil de Sabor">
          <div className="space-y-3">
            {Object.entries(drink.levels).map(([k, v]) => (
              <LevelBar key={k} type={k} value={v} />
            ))}
          </div>
        </Section>

        {/* Responsible message */}
        <p className="text-center text-[10px] text-cream/15 font-body tracking-wide pt-2 border-t border-white/4">
          {drink.responsibleMessage}
        </p>
      </div>
    </div>
  );
}
