import { useState } from "react";
import { findItemById } from "../data/menu.js";

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

function SpiritCard({ item, onSpiritLink }) {
  const linked = item.spiritLinkId ? findItemById(item.spiritLinkId) : null;
  const clickable = !!linked;
  if (!item.spirit && !linked) return null;

  return (
    <div
      onClick={clickable && onSpiritLink ? () => onSpiritLink(item.spiritLinkId) : undefined}
      className={`bg-carbon-700 border rounded-lg px-4 py-3 space-y-1 transition-all
        ${clickable
          ? "border-agave/25 cursor-pointer hover:border-agave/50 hover:shadow-glow-sm active:scale-97"
          : "border-white/5 cursor-default"
        }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          {item.spirit?.name && <p className="font-body font-bold text-cream text-sm">{item.spirit.name}</p>}
          {item.spirit?.type && <p className="text-[11px] text-gold/55 font-body">{item.spirit.type}</p>}
          {item.spirit?.notes && <p className="text-xs text-cream/45 font-display italic mt-2 leading-relaxed">{item.spirit.notes}</p>}
        </div>
        {clickable && <span className="text-agave/60 text-base mt-1 shrink-0">›</span>}
      </div>
      {clickable && (
        <p className="text-[9px] text-agave/50 font-body tracking-widest uppercase pt-1 border-t border-white/5 mt-2">
          Tap to learn more
        </p>
      )}
    </div>
  );
}

export default function HappyEndingDetail({ item, onBack, onSpiritLink }) {
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

        <button
  onClick={onBack}
  className="absolute top-4 left-4 z-20 inline-flex items-center gap-2 rounded-full
             bg-carbon/80 border border-white/10 px-4 py-2
             text-cream/85 text-sm font-bold backdrop-blur-sm
             active:opacity-70 transition-all"
>
  <span className="text-lg leading-none">←</span>
  <span className="tracking-wide">Back</span>
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

        {/* Spirit linking for happy endings if applicable */}
        {(item.spirit || item.spiritLinkId) && (
          <Section label="The Spirit">
            <SpiritCard item={item} onSpiritLink={onSpiritLink} />
          </Section>
        )}

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
