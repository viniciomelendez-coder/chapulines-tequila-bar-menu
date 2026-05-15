const TAG_STYLE = {
  "House Favorite": "bg-agave/15 text-agave border-agave/30",
  Premium:          "bg-gold/10 text-gold border-gold/30",
  Spicy:            "bg-chili/15 text-chili border-chili/30",
  Fresh:            "bg-agave/10 text-agave/70 border-agave/20",
  Classic:          "bg-cream/5 text-cream/50 border-white/10",
  Tropical:         "bg-gold/10 text-gold/70 border-gold/20",
  Smoky:            "bg-cream/5 text-cream/40 border-white/10",
  Floral:           "bg-agave/10 text-agave/60 border-agave/20",
  Bold:             "bg-chili/10 text-chili/60 border-chili/20",
  Light:            "bg-cream/5 text-cream/35 border-white/8",
  Frozen:           "bg-agave/10 text-agave/70 border-agave/20",
};

export default function DrinkCard({ drink, onClick }) {
  return (
    <button
      onClick={onClick}
      className="press w-full bg-carbon-700 border border-white/6 rounded-lg
                 px-4 py-3.5 text-left hover:border-agave/25
                 hover:shadow-glow-sm focus:outline-none
                 flex items-center gap-3 group"
    >
      {/* Left accent */}
      <div className="w-0.5 h-10 rounded-full bg-agave/50 shrink-0 group-hover:bg-agave transition-colors" />

      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-2 mb-1">
          <span className="font-display font-bold text-cream text-lg leading-tight truncate">
            {drink.name}
          </span>
          <span className="text-agave font-bold text-xl shrink-0 font-body">
            <span className="text-xs align-super font-body">$</span>
            {drink.price ?? "—"}
          </span>
        </div>
        <p className="text-cream/30 text-xs mb-2 line-clamp-1 font-body">
          {drink.ingredients.join(" · ")}
        </p>
        <div className="flex gap-1.5 flex-wrap">
          {drink.tags.slice(0, 3).map((t) => (
            <span key={t}
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${TAG_STYLE[t] ?? "bg-cream/5 text-cream/40 border-white/10"}`}>
              {t}
            </span>
          ))}
        </div>
      </div>

      <span className="text-agave/40 text-xl font-light shrink-0 group-hover:text-agave transition-colors">›</span>
    </button>
  );
}
