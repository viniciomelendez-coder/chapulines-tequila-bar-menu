import { useState } from "react";

function Section({ label, children }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[9px] font-bold tracking-[0.25em] text-gold/55 uppercase font-body">{label}</span>
        <span className="h-px flex-1 bg-white/5" />
      </div>
      {children}
    </div>
  );
}

export default function HappyEndingDetail({ item, onBack }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-carbon">

      <div className="relative w-full h-52 bg-carbon-700 overflow-hidden">
        {!imgFailed ? (
          <img src={item.image} alt={item.name}
               className="w-full h-full object-cover opacity-50"
               onError={() => setImgFailed(true)} />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-14 h-14 rounded-full border border-gold/20 flex items-center justify-center">
              <span className="text-gold/35 font-display font-bold text-xl">{item.name[0]}</span>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/55 to-transparent" />

        <button onClick={onBack}
                className="absolute top-4 left-4 w-9 h-9 rounded-full bg-carbon/75 border border-white/10
                           flex items-center justify-center text-cream/60 text-lg">
          ‹
        </button>
        <div className="absolute top-4 right-4 bg-gold text-carbon font-bold text-lg px-3 py-1 rounded-sm font-body">
          <span className="text-xs align-super">$</span>
          {item.price ?? (item.priceNote ?? "—")}
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
          <h1 className="font-display font-bold text-cream text-3xl leading-tight">{item.name}</h1>
          {item.tags && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {item.tags.map((t) => (
                <span key={t}
                  className="text-[9px] font-bold px-2 py-0.5 rounded-full border
                             bg-gold/10 text-gold/60 border-gold/20">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 px-5 pt-5 pb-24 max-w-xl mx-auto w-full space-y-6">

        <p className="font-display italic text-cream/42 text-base leading-relaxed">
          {item.shortDescription}
        </p>

        <Section label="Ingredients">
          <div className="flex flex-wrap gap-2">
            {(item.ingredients ?? []).map((ing) => (
              <span key={ing}
                className="text-xs bg-white/4 text-cream/52 border border-white/7
                           px-3 py-1.5 rounded-sm font-body">
                {ing}
              </span>
            ))}
          </div>
        </Section>

        <Section label="Preparation">
          <p className="text-sm text-cream/45 font-body leading-relaxed">{item.preparation}</p>
        </Section>

        <Section label="Story">
          <p className="text-sm text-cream/40 font-display italic leading-relaxed">{item.story}</p>
          {item.funFact && (
            <div className="mt-3 bg-gold/5 border border-gold/10 rounded-lg px-4 py-3">
              <p className="text-xs text-cream/35 font-body leading-relaxed">
                <span className="text-gold/55 font-bold">Fun Fact — </span>
                {item.funFact}
              </p>
            </div>
          )}
        </Section>

        <Section label="Pairing">
          <p className="text-sm text-cream/42 font-body">{item.pairing}</p>
        </Section>

        {item.houseTouch && (
          <div className="bg-gold/5 border border-gold/15 rounded-lg px-4 py-3">
            <p className="text-[9px] text-gold font-bold tracking-widest uppercase mb-1.5 font-body">
              Chapulines House Touch
            </p>
            <p className="text-xs text-cream/40 font-display italic leading-relaxed">
              {item.houseTouch}
            </p>
          </div>
        )}

        <p className="text-center text-[9px] text-cream/13 font-body tracking-wide pt-2 border-t border-white/4">
          {item.responsibleMessage}
        </p>
      </div>
    </div>
  );
}
