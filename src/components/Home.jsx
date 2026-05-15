import { useState } from "react";
import Footer from "./Footer.jsx";

function CategoryIcon({ src, label }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="w-8 h-8 rounded-full border border-agave/28 flex items-center justify-center mb-3 shrink-0">
        <span className="text-agave text-[10px] font-bold tracking-wider uppercase">
          {label.replace(/-/g, " ").split(" ").map(w => w[0]).join("").slice(0, 2)}
        </span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt=""
      onError={() => setFailed(true)}
      className="w-17 h-17 object-contain mb-3 opacity-95"
    />
  );
}

export default function Home({ categories, onSelect }) {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-carbon">
      <div className="flex-1 flex flex-col items-center justify-start px-5 pt-10 pb-6 bg-grid relative overflow-hidden">

        {/* Ambient glow */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80"
             style={{ background: "radial-gradient(circle, rgba(45,184,75,0.07) 0%, transparent 70%)" }} />

        {/* LOGO */}
        <div className="mb-7 text-center relative z-10">
          {!logoFailed ? (
            <img
              src="/assets/logo.png"
              alt="Chapulines Tequila Bar"
              className="w-[260px] max-w-[85vw] h-auto object-contain mx-auto mb-5 opacity-95"
              onError={() => setLogoFailed(true)}
            />
          ) : (
            <div className="mb-4">
              <div className="inline-block border border-agave/25 px-7 py-5 rounded-sm">
                <p className="font-display font-bold text-cream text-3xl tracking-[0.15em] leading-none">
                  CHAPULINES
                </p>
                <div className="flex items-center gap-3 my-2">
                  <span className="h-px flex-1 bg-agave/35" />
                  <span className="text-agave text-[9px] tracking-[0.4em] uppercase font-body">Tequila Bar</span>
                  <span className="h-px flex-1 bg-agave/35" />
                </div>
              </div>
            </div>
          )}
<p className="font-display italic text-agave/85 text-2xl tracking-wide drop-shadow-sm">
  — Para brindar bonito —
</p>
        </div>

        {/* CATEGORY GRID */}
        <div className="grid grid-cols-2 gap-3 w-full max-w-sm relative z-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className="relative bg-carbon-700 border border-white/6 rounded-lg
                         pt-5 pb-4 px-4 text-left overflow-hidden
                         hover:border-agave/35 hover:shadow-glow-sm
                         active:scale-97 transition-all duration-150
                         focus:outline-none focus:ring-1 focus:ring-agave/40"
            >
              <div className="absolute top-0 right-0 w-14 h-14 -translate-y-7 translate-x-7 rounded-full"
                   style={{ background: "radial-gradient(circle, rgba(45,184,75,0.09) 0%, transparent 70%)" }} />

              <CategoryIcon src={cat.icon} label={cat.id} />

              <p className="font-display font-bold text-cream text-lg leading-tight mb-0.5 line-clamp-2">
                {cat.label}
              </p>
              <p className="text-cream/28 text-[10px] font-body tracking-wide leading-snug line-clamp-2">
                {cat.subtitle}
              </p>

              <span className="absolute bottom-3 right-3.5 text-agave/35 text-base font-light">›</span>
            </button>
          ))}
        </div>

        {/* BADGE */}
        <div className="mt-7 relative z-10 flex items-center gap-3">
          <span className="h-px w-8 bg-agave/25 block" />
          <p className="text-cream/20 text-[9px] tracking-[0.3em] uppercase font-body">
            100% Agave · Good Vibes Guaranteed
          </p>
          <span className="h-px w-8 bg-agave/25 block" />
        </div>
      </div>

      <Footer />
    </div>
  );
}
