function LevelBar({ label, value, color }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-bark/50 w-16 text-right shrink-0">{label}</span>
      <div className="flex-1 h-2 bg-cream-dark rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${(value / 5) * 100}%` }}
        />
      </div>
      <span className="text-xs text-bark/40 w-4">{value}/5</span>
    </div>
  );
}

export default function DrinkDetail({ drink, onBack }) {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* Hero image */}
      <div className="relative w-full h-52 bg-agave/20 overflow-hidden">
        <img
          src={drink.image}
          alt={drink.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        {/* Back button */}
        <button
          onClick={onBack}
          className="absolute top-4 left-4 bg-agave text-gold rounded-full w-9 h-9
                     flex items-center justify-center font-bold text-lg shadow-lg"
        >
          ‹
        </button>
        {/* Price badge */}
        <div className="absolute top-4 right-4 bg-chili text-white font-bold
                        text-xl px-3 py-1 rounded-full shadow-lg">
          <span className="text-sm align-super">$</span>{drink.price ?? "—"}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-5 pt-5 pb-20 max-w-xl mx-auto w-full space-y-5">

        {/* Title & tags */}
        <div>
          <h1 className="font-display font-bold text-agave text-3xl leading-tight">{drink.name}</h1>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {drink.tags.map((t) => (
              <span key={t} className="text-xs font-bold px-2 py-0.5 rounded-full border
                                       bg-agave/10 text-agave border-agave/30">
                {t}
              </span>
            ))}
          </div>
          <p className="text-bark/70 text-sm mt-3 leading-relaxed font-display italic">
            {drink.description}
          </p>
        </div>

        {/* Ingredients */}
        <Section label="🌿 Ingredientes">
          <div className="flex flex-wrap gap-2">
            {drink.ingredients.map((ing) => (
              <span key={ing} className="text-xs bg-agave/10 text-agave border border-agave/30
                                         px-3 py-1 rounded-full font-body">
                {ing}
              </span>
            ))}
          </div>
        </Section>

        {/* Spirit info */}
        <Section label="🥃 El Espíritu">
          <p className="text-sm font-bold text-bark">{drink.spirit.name}</p>
          <p className="text-xs text-bark/60 mt-0.5">{drink.spirit.type} · {drink.spirit.origin}</p>
          <p className="text-sm text-bark/70 mt-2 leading-relaxed italic font-display">
            {drink.spirit.notes}
          </p>
        </Section>

        {/* Preparation */}
        <Section label="📋 Preparación">
          <p className="text-sm text-bark/75 leading-relaxed">{drink.preparation}</p>
        </Section>

        {/* History */}
        <Section label="📖 Historia">
          <p className="text-sm text-bark/70 leading-relaxed italic font-display">{drink.history}</p>
          {drink.funFact && (
            <div className="mt-2 bg-gold/10 border border-gold/30 rounded-lg px-3 py-2">
              <p className="text-xs text-bark/70"><span className="font-bold text-bark">💡 Dato curioso:</span> {drink.funFact}</p>
            </div>
          )}
        </Section>

        {/* Pairing */}
        <Section label="🍽️ Maridaje">
          <p className="text-sm text-bark/70">{drink.pairing}</p>
        </Section>

        {/* Levels */}
        <Section label="📊 Perfil de Sabor">
          <div className="space-y-2 mt-1">
            <LevelBar label="Dulzor" value={drink.levels.sweetness} color="bg-gold" />
            <LevelBar label="Acidez" value={drink.levels.acidity} color="bg-agave" />
            <LevelBar label="Intensidad" value={drink.levels.intensity} color="bg-bark" />
            <LevelBar label="Picante" value={drink.levels.spice} color="bg-chili" />
          </div>
        </Section>

        {/* Responsible message */}
        <div className="text-center text-xs text-bark/40 italic pt-2 border-t border-bark/10">
          {drink.responsibleMessage}
        </div>
      </div>
    </div>
  );
}

function Section({ label, children }) {
  return (
    <div>
      <p className="text-xs font-bold tracking-widest text-agave uppercase mb-2
                    flex items-center gap-2 after:flex-1 after:h-px after:bg-agave/20">
        {label}
      </p>
      {children}
    </div>
  );
}
