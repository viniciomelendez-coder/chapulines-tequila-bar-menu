export default function BeerDetail({ beer, onBack }) {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* Hero */}
      <div className="relative w-full h-48 bg-gold/10 overflow-hidden">
        <img
          src={beer.image}
          alt={beer.name}
          className="w-full h-full object-cover"
          onError={(e) => { e.target.style.display = "none"; }}
        />
        <button
          onClick={onBack}
          className="absolute top-4 left-4 bg-agave text-gold rounded-full w-9 h-9
                     flex items-center justify-center font-bold text-lg shadow-lg"
        >
          ‹
        </button>
        <div className="absolute top-4 right-4 bg-chili text-white font-bold
                        text-xl px-3 py-1 rounded-full shadow-lg">
          <span className="text-sm align-super">$</span>{beer.price ?? "—"}
        </div>
      </div>

      <div className="flex-1 px-5 pt-5 pb-20 max-w-xl mx-auto w-full space-y-5">
        <div>
          <h1 className="font-display font-bold text-bark text-3xl">{beer.name}</h1>
          <p className="text-agave font-bold text-sm mt-1">{beer.type}</p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {beer.tags.map((t) => (
              <span key={t} className="text-xs font-bold px-2 py-0.5 rounded-full border
                                       bg-gold/10 text-bark/70 border-gold/30">
                {t}
              </span>
            ))}
          </div>
        </div>

        <Section label="📍 Origen">
          <p className="text-sm font-bold text-bark">{beer.origin}</p>
          <p className="text-xs text-bark/50 mt-0.5">ABV: {beer.abv}</p>
        </Section>

        <Section label="🍺 Descripción">
          <p className="text-sm text-bark/75 leading-relaxed">{beer.description}</p>
        </Section>

        <Section label="🍽️ Maridaje">
          <p className="text-sm text-bark/70">{beer.pairing}</p>
        </Section>

        <div className="text-center text-xs text-bark/40 italic pt-2 border-t border-bark/10">
          {beer.responsibleMessage}
        </div>
      </div>
    </div>
  );
}

function Section({ label, children }) {
  return (
    <div>
      <p className="text-xs font-bold tracking-widest text-agave uppercase mb-2">
        {label}
      </p>
      {children}
    </div>
  );
}
