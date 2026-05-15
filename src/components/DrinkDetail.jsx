import { useState } from "react";

const TAG_STYLE = {
  "House Favorite": "bg-agave/15 text-agave border-agave/30",
  Premium:  "bg-gold/10 text-gold border-gold/30",
  Spicy:    "bg-chili/15 text-chili border-chili/25",
  Fresh:    "bg-agave/8 text-agave/65 border-agave/18",
  Classic:  "bg-white/4 text-cream/45 border-white/8",
  Tropical: "bg-gold/8 text-gold/65 border-gold/18",
  Smoky:    "bg-white/4 text-cream/40 border-white/8",
  Floral:   "bg-agave/8 text-agave/55 border-agave/18",
  Bold:     "bg-chili/8 text-chili/55 border-chili/18",
  Light:    "bg-white/3 text-cream/30 border-white/6",
  Frozen:   "bg-agave/8 text-agave/65 border-agave/18",
};

const LEVELS = [
  { key: "sweetness", label: "Sweetness", color: "bg-gold" },
  { key: "acidity",   label: "Acidity",   color: "bg-agave" },
  { key: "intensity", label: "Intensity", color: "bg-cream/55" },
  { key: "spice",     label: "Spice",     color: "bg-chili" },
];

function LevelBar({ label, value, color }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-cream/28 w-16 text-right font-body shrink-0">{label}</span>
      <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color}`}
             style={{ width: `${(value / 5) * 100}%`, opacity: value === 0 ? 0.15 : 1 }} />
      </div>
      <span className="text-xs text-cream/18 w-4 font-body">{value}</span>
    </div>
  );
}

function Section({ label, children }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[9px] font-bold tracking-[0.25em] text-agave uppercase font-body">{label}</span>
        <span className="h-px flex-1 bg-white/5" />
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
          <img src={drink.image} alt={drink.name}
               className="w-full h-full object-cover opacity-55"
               onError={() => setImgFailed(true)} />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-carbon-700">
            <div className="w-16 h-16 rounded-full border border-agave/18 flex items-center justify-center">
              <span className="text-agave/35 font-display font-bold text-2xl">{drink.name[0]}</span>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/55 to-transparent" />

        <button onClick={onBack}
                className="absolute top-4 left-4 w-9 h-9 rounded-full bg-carbon/75 border border-white/10
                           flex items-center justify-center text-cream/60 text-lg active:opacity-60">
          ‹
        </button>
        <div className="absolute top-4 right-4 bg-agave text-carbon font-bold text-lg px-3 py-1 rounded-sm font-body">
          <span className="text-xs align-super">$</span>
          {drink.price ?? (drink.priceNote ?? "—")}
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
          <h1 className="font-display font-bold text-cream text-3xl leading-tight">{drink.name}</h1>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {(drink.tags ?? []).map((t) => (
              <span key={t}
                className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${TAG_STYLE[t] ?? "bg-white/4 text-cream/35 border-white/8"}`}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 px-5 pt-5 pb-24 max-w-xl mx-auto w-full space-y-6">

        <p className="font-display italic text-cream/45 text-base leading-relaxed">
          {drink.description}
        </p>

        <Section label="Ingredients">
          <div className="flex flex-wrap gap-2">
            {(drink.ingredients ?? []).map((ing) => (
              <span key={ing}
                className="text-xs bg-white/4 text-cream/55 border border-white/7
                           px-3 py-1.5 rounded-sm font-body">
                {ing}
              </span>
            ))}
          </div>
        </Section>

        <Section label="The Spirit">
          <div className="bg-carbon-700 border border-white/5 rounded-lg px-4 py-3 space-y-1">
            <p className="font-body font-bold text-cream text-sm">{drink.spirit?.name}</p>
            <p className="text-[11px] text-gold/55 font-body">{drink.spirit?.type}</p>
            <p className="text-[11px] text-cream/28 font-body">{drink.spirit?.origin}</p>
            <p className="text-xs text-cream/45 font-display italic mt-2 leading-relaxed">{drink.spirit?.notes}</p>
          </div>
        </Section>

        <Section label="Preparation">
          <p className="text-sm text-cream/48 font-body leading-relaxed">{drink.preparation}</p>
        </Section>

        <Section label="Story">
          <p className="text-sm text-cream/42 font-display italic leading-relaxed">{drink.story}</p>
          {drink.funFact && (
            <div className="mt-3 bg-gold/5 border border-gold/12 rounded-lg px-4 py-3">
              <p className="text-xs text-cream/38 font-body leading-relaxed">
                <span className="text-gold/60 font-bold">Fun Fact — </span>
                {drink.funFact}
              </p>
            </div>
          )}
        </Section>

        <Section label="Pairing">
          <p className="text-sm text-cream/42 font-body">{drink.pairing}</p>
        </Section>

        {drink.levels && (
          <Section label="Flavor Profile">
            <div className="space-y-3">
              {LEVELS.map(({ key, label, color }) => (
                <LevelBar key={key} label={label} value={drink.levels[key] ?? 0} color={color} />
              ))}
            </div>
          </Section>
        )}

        {/* HOUSE TOUCH */}
        {drink.houseTouch && (
          <div className="bg-agave/5 border border-agave/15 rounded-lg px-4 py-3">
            <p className="text-[10px] text-agave font-bold tracking-widest uppercase mb-1.5 font-body">
              Chapulines House Touch
            </p>
            <p className="text-xs text-cream/45 font-display italic leading-relaxed">
              {drink.houseTouch}
            </p>
          </div>
        )}

        <p className="text-center text-[9px] text-cream/14 font-body tracking-wide pt-2 border-t border-white/4">
          {drink.responsibleMessage}
        </p>
      </div>
    </div>
  );
}
