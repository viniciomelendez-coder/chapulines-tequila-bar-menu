export default function BeerCard({ beer, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-carbon-700 border border-white/6 rounded-lg
                 px-4 py-3.5 text-left hover:border-gold/20
                 active:scale-97 transition-all duration-150
                 flex items-center gap-3 group focus:outline-none"
    >
      <div className="w-0.5 h-8 rounded-full bg-gold/35 shrink-0 group-hover:bg-gold/60 transition-colors" />

      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-2">
          <span className="font-body font-bold text-cream text-base leading-tight truncate">
            {beer.name}
          </span>
          <span className="text-agave font-bold text-lg shrink-0 font-body">
            <span className="text-xs align-super">$</span>
            {beer.price ?? (beer.priceNote ?? "—")}
          </span>
        </div>
        <p className="text-cream/28 text-xs mt-0.5 font-body">
          {beer.type} · <span className="text-gold/45">{beer.abv}</span>
        </p>
      </div>

      <span className="text-cream/18 text-xl font-light shrink-0 group-hover:text-gold/50 transition-colors">›</span>
    </button>
  );
}
