// Category-specific accent colors
const ACCENT = {
  "lowland-tequilas":  { bar: "bg-gold/50",  price: "text-gold",  hover: "hover:border-gold/25" },
  "highland-tequilas": { bar: "bg-agave/50",  price: "text-agave", hover: "hover:border-agave/25" },
  "mezcal-selection":  { bar: "bg-cream/30",  price: "text-cream", hover: "hover:border-cream/15" },
  "red-wines":         { bar: "bg-chili/50",  price: "text-chili", hover: "hover:border-chili/25" },
  "bourbon-whiskey":   { bar: "bg-gold/50",   price: "text-gold",  hover: "hover:border-gold/25" },
  "vodka-gin":         { bar: "bg-agave/40",  price: "text-agave", hover: "hover:border-agave/25" },
};

export default function BottleCard({ item, categoryId, onClick }) {
  const ac = ACCENT[categoryId] ?? { bar: "bg-agave/40", price: "text-agave", hover: "hover:border-agave/20" };

  // Sub-label: expression, type or varietal
  const subLabel = item.expression || item.type || item.varietal || "";

  return (
    <button
      onClick={onClick}
      className={`w-full bg-carbon-700 border border-white/6 rounded-lg
                  px-4 py-3.5 text-left ${ac.hover}
                  active:scale-97 transition-all duration-150
                  flex items-center gap-3 group focus:outline-none`}
    >
      <div className={`w-0.5 h-10 rounded-full ${ac.bar} shrink-0 group-hover:opacity-80 transition-opacity`} />

      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-2 mb-0.5">
          <span className="font-body font-bold text-cream text-base leading-tight truncate">
            {item.name}
          </span>
          <span className={`${ac.price} font-bold text-lg shrink-0 font-body`}>
            <span className="text-xs align-super">$</span>
            {item.price ?? (item.priceNote ?? "—")}
          </span>
        </div>
        {subLabel && (
          <p className="text-cream/35 text-xs font-body">{subLabel}</p>
        )}
        {item.origin && (
          <p className="text-cream/22 text-[10px] font-body mt-0.5 truncate">{item.origin}</p>
        )}
      </div>

      <span className="text-cream/18 text-xl font-light shrink-0 group-hover:text-cream/40 transition-colors">›</span>
    </button>
  );
}
