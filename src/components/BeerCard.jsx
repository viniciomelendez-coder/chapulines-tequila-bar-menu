export default function BeerCard({ beer, onClick }) {
  return (
    <button
      onClick={onClick}
      className="press w-full bg-carbon-700 border border-white/6 rounded-lg
                 px-4 py-3.5 text-left hover:border-gold/25
                 focus:outline-none flex items-center gap-3 group"
    >
      <div className="w-0.5 h-8 rounded-full bg-gold/40 shrink-0 group-hover:bg-gold transition-colors" />

      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-2">
          <span className="font-body font-bold text-cream text-base leading-tight truncate">
            {beer.name}
          </span>
          <span className="text-agave font-bold text-xl shrink-0 font-body">
            <span className="text-xs align-super">$</span>
            {beer.price ?? "—"}
          </span>
        </div>
        <p className="text-cream/30 text-xs mt-0.5 font-body">
          {beer.type} · <span className="text-gold/50">{beer.abv}</span>
        </p>
      </div>

      <span className="text-cream/20 text-xl font-light shrink-0 group-hover:text-gold/60 transition-colors">›</span>
    </button>
  );
}
