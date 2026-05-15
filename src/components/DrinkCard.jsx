const TAG_STYLE = {
  "House Favorite": "bg-agave/15 text-agave border-agave/30",
  Premium:          "bg-gold/10 text-gold border-gold/30",
  Spicy:            "bg-chili/15 text-chili border-chili/25",
  Fresh:            "bg-agave/8 text-agave/65 border-agave/18",
  Classic:          "bg-white/4 text-cream/45 border-white/8",
  Tropical:         "bg-gold/8 text-gold/65 border-gold/18",
  Smoky:            "bg-white/4 text-cream/40 border-white/8",
  Floral:           "bg-agave/8 text-agave/55 border-agave/18",
  Bold:             "bg-chili/8 text-chili/55 border-chili/18",
  Light:            "bg-white/3 text-cream/30 border-white/6",
  Frozen:           "bg-agave/8 text-agave/65 border-agave/18",
};

export default function DrinkCard({ drink, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-carbon-700 border border-white/6 rounded-lg
                 px-4 py-3.5 text-left hover:border-agave/25
                 active:scale-97 transition-all duration-150
                 flex items-center gap-3 group focus:outline-none"
    >
      <div className="w-0.5 h-10 rounded-full bg-agave/45 shrink-0 group-hover:bg-agave transition-colors" />

      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-2 mb-1">
          <span className="font-display font-bold text-cream text-lg leading-tight truncate">
            {drink.name}
          </span>
          <span className="text-agave font-bold text-xl shrink-0 font-body">
            <span className="text-xs align-super">$</span>
            {drink.price ?? (drink.priceNote ?? "—")}
          </span>
        </div>
        <p className="text-cream/28 text-xs mb-2 line-clamp-1 font-body">
          {drink.ingredients?.join(" · ")}
        </p>
        <div className="flex gap-1.5 flex-wrap">
          {(drink.tags ?? []).slice(0, 3).map((t) => (
            <span key={t}
              className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${TAG_STYLE[t] ?? "bg-white/4 text-cream/35 border-white/8"}`}>
              {t}
            </span>
          ))}
        </div>
      </div>

      <span className="text-agave/35 text-xl font-light shrink-0 group-hover:text-agave transition-colors">›</span>
    </button>
  );
}
