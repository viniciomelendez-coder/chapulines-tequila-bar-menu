import { useState } from "react";

// Fallback icon when custom PNG not found
function CategoryIcon({ src, label }) {
  const [failed, setFailed] = useState(false);
  const initials = { tragos: "T", margaritas: "M", mezcal: "MZ", cervezas: "C" };

  if (failed) {
    return (
      <div className="w-10 h-10 rounded-full border border-agave/40 flex items-center justify-center mb-3">
        <span className="text-agave text-xs font-bold tracking-widest">
          {initials[label] ?? label[0]}
        </span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt=""
      onError={() => setFailed(true)}
      className="w-10 h-10 object-contain mb-3 opacity-80"
    />
  );
}

export default function Home({ categories, onSelect }) {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 py-12 bg-grid relative overflow-hidden">
      {/* Radial glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full"
           style={{ background: "radial-gradient(circle, rgba(45,184,75,0.08) 0%, transparent 70%)" }} />

      {/* LOGO */}
      <div className="mb-8 text-center relative z-10">
        {!logoFailed ? (
          <img
            src="/assets/logo.png"
            alt="Chapulines Tequila Bar"
            className="w-32 h-32 object-contain mx-auto mb-5"
            onError={() => setLogoFailed(true)}
          />
        ) : (
          // Elegant text fallback
          <div className="mb-5">
            <div className="inline-block border border-agave/30 px-8 py-5 rounded-sm">
              <p className="font-display font-bold text-cream text-4xl tracking-[0.15em] leading-none">
                CHAPULINES
              </p>
              <div className="flex items-center gap-3 my-2">
                <span className="h-px flex-1 bg-agave/40" />
                <span className="text-agave text-[10px] tracking-[0.4em] uppercase font-body">Tequila Bar</span>
                <span className="h-px flex-1 bg-agave/40" />
              </div>
            </div>
          </div>
        )}

        <p className="font-display italic text-cream/40 text-sm tracking-wide">
          — Drink Menu —
        </p>
      </div>

      {/* CATEGORY CARDS */}
      <div className="grid grid-cols-2 gap-3 w-full max-w-sm relative z-10">
        {categories.map((cat, i) => (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className="press relative bg-carbon-700 border border-agave/20 rounded-lg
                       pt-5 pb-4 px-4 text-left overflow-hidden
                       hover:border-agave/50 hover:shadow-glow-sm
                       focus:outline-none focus:ring-1 focus:ring-agave/50"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            {/* Subtle corner glow */}
            <div className="absolute top-0 right-0 w-16 h-16 rounded-full -translate-y-8 translate-x-8"
                 style={{ background: "radial-gradient(circle, rgba(45,184,75,0.12) 0%, transparent 70%)" }} />

            <CategoryIcon src={cat.icon} label={cat.id} />

            <p className="font-display font-bold text-cream text-xl leading-tight mb-0.5">
              {cat.label}
            </p>
            <p className="text-cream/35 text-xs font-body tracking-wide">
              {cat.subtitle}
            </p>

            {/* Arrow */}
            <div className="absolute bottom-3 right-4 text-agave/40 text-lg font-light">›</div>
          </button>
        ))}
      </div>

      {/* BADGE */}
      <div className="mt-8 relative z-10 flex items-center gap-3">
        <span className="h-px w-8 bg-agave/30 block" />
        <p className="text-cream/25 text-[10px] tracking-[0.3em] uppercase font-body">
          100% Agave · Good Vibes Guaranteed
        </p>
        <span className="h-px w-8 bg-agave/30 block" />
      </div>
    </div>
  );
}
