import { useState } from "react";

function Section({ label, children }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[10px] font-bold tracking-[0.25em] text-gold/60 uppercase font-body">
          {label}
        </span>
        <span className="h-px flex-1 bg-white/6" />
      </div>
      {children}
    </div>
  );
}

export default function BeerDetail({ beer, onBack }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-carbon">

      {/* HERO */}
      <div className="relative w-full h-48 bg-carbon-700 overflow-hidden">
        {!imgFailed ? (
          <img
            src={beer.image}
            alt={beer.name}
            className="w-full h-full object-cover opacity-50"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-carbon-700">
            <div className="w-14 h-14 rounded-full border border-gold/20 flex items-center justify-center">
              <span className="text-gold/40 font-display font-bold text-xl">{beer.name[0]}</span>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/60 to-transparent" />

        <button
          onClick={onBack}
          className="absolute top-4 left-4 w-9 h-9 rounded-full bg-carbon/80 border border-white/10
                     flex items-center justify-center text-cream/70 text-lg press"
        >
          ‹
        </button>

        <div className="absolute top-4 right-4 bg-gold text-carbon font-bold
                        text-lg px-3 py-1 rounded-sm font-body">
          <span className="text-xs align-super">$</span>
          {beer.price ?? (beer.priceNote ?? "—")}
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
          <h1 className="font-body font-bold text-cream text-2xl leading-tight">{beer.name}</h1>
          <p className="text-gold/50 text-xs font-body mt-1">{beer.type} · {beer.abv}</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 px-5 pt-5 pb-24 max-w-xl mx-auto w-full space-y-6">

        <Section label="Origen">
          <div className="bg-carbon-700 border border-white/6 rounded-lg px-4 py-3">
            <p className="font-body font-bold text-cream text-sm">{beer.origin}</p>
            <p className="text-gold/50 text-xs mt-0.5">{beer.abv} ABV · {beer.type}</p>
          </div>
        </Section>

        <Section label="Descripción">
          <p className="text-sm text-cream/50 font-body leading-relaxed">{beer.description}</p>
        </Section>

        {beer.tags?.length > 0 && (
          <Section label="Estilo">
            <div className="flex flex-wrap gap-2">
              {beer.tags.map((t) => (
                <span key={t}
                  className="text-[10px] font-bold px-2.5 py-1 rounded-full border
                             bg-gold/5 text-gold/50 border-gold/15 font-body">
                  {t}
                </span>
              ))}
            </div>
          </Section>
        )}

        <Section label="Maridaje">
          <p className="text-sm text-cream/45 font-body">{beer.pairing}</p>
        </Section>

        <p className="text-center text-[10px] text-cream/15 font-body tracking-wide pt-2 border-t border-white/4">
          {beer.responsibleMessage}
        </p>
      </div>
    </div>
  );
}
