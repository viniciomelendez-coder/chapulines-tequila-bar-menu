export default function BeerCard({ beer, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-white rounded-xl shadow-sm border-b-2 border-gold
                 text-left px-4 py-3 active:scale-98 transition-all
                 flex items-center justify-between gap-3"
    >
      <div className="flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <span className="font-body font-bold text-bark text-base leading-tight">
            {beer.name}
          </span>
          <span className="text-chili font-bold text-xl shrink-0">
            <span className="text-sm align-super">$</span>
            {beer.price ?? "—"}
          </span>
        </div>
        <p className="text-bark/50 text-xs mt-0.5">{beer.type} · {beer.abv}</p>
      </div>
      <span className="text-bark/40 text-2xl font-light shrink-0">›</span>
    </button>
  );
}
