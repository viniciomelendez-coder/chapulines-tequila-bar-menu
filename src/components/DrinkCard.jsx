// DrinkCard.jsx
export default function DrinkCard({ drink, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-white rounded-xl shadow-sm border-l-4 border-agave
                 text-left px-4 py-3 active:scale-98 transition-all
                 flex items-center justify-between gap-3"
    >
      <div className="flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <span className="font-display font-bold text-agave text-lg leading-tight">
            {drink.name}
          </span>
          <span className="text-chili font-bold text-xl shrink-0">
            <span className="text-sm align-super">$</span>
            {drink.price ?? "—"}
          </span>
        </div>
        <p className="text-bark/60 text-xs mt-0.5 line-clamp-1">
          {drink.ingredients.join(" · ")}
        </p>
        <div className="flex gap-1 mt-1.5 flex-wrap">
          {drink.tags.slice(0, 3).map((t) => (
            <span key={t}
              className="text-xs px-2 py-0.5 rounded-full border
                         bg-agave/10 text-agave border-agave/30 font-bold">
              {t}
            </span>
          ))}
        </div>
      </div>
      <span className="text-agave text-2xl font-light shrink-0">›</span>
    </button>
  );
}
