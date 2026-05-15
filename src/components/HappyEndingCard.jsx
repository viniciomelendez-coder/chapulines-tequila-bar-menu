export default function HappyEndingCard({ item, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-carbon-700 border border-white/6 rounded-lg
                 px-4 py-3.5 text-left hover:border-gold/25
                 active:scale-97 transition-all duration-150
                 flex items-center gap-3 group focus:outline-none"
    >
      <div className="w-0.5 h-10 rounded-full bg-gold/45 shrink-0 group-hover:bg-gold transition-colors" />

      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-2 mb-1">
          <span className="font-display font-bold text-cream text-lg leading-tight truncate">
            {item.name}
          </span>
          <span className="text-gold font-bold text-xl shrink-0 font-body">
            <span className="text-xs align-super">$</span>
            {item.price ?? (item.priceNote ?? "—")}
          </span>
        </div>
        <p className="text-cream/30 text-xs line-clamp-1 font-body">
          {item.ingredients?.join(" · ")}
        </p>
        {item.tags && (
          <div className="flex gap-1.5 mt-1.5 flex-wrap">
            {item.tags.slice(0, 2).map((t) => (
              <span key={t}
                className="text-[9px] font-bold px-2 py-0.5 rounded-full border
                           bg-gold/8 text-gold/60 border-gold/18">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      <span className="text-gold/30 text-xl font-light shrink-0 group-hover:text-gold transition-colors">›</span>
    </button>
  );
}
