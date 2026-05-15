import { useState } from "react";
import DrinkCard from "./DrinkCard.jsx";
import BeerCard from "./BeerCard.jsx";

const TAG_COLORS = {
  Fresh:          "bg-agave/10 text-agave border-agave/30",
  Spicy:          "bg-chili/10 text-chili border-chili/30",
  Classic:        "bg-gold/10 text-gold-dark border-gold/30",
  Premium:        "bg-bark/10 text-bark border-bark/30",
  "House Favorite": "bg-agave/20 text-agave-dark border-agave",
  Tropical:       "bg-gold/10 text-gold-dark border-gold/30",
  Smoky:          "bg-bark/10 text-bark border-bark/30",
  Floral:         "bg-chili/10 text-chili border-chili/30",
  Bold:           "bg-bark/20 text-bark border-bark/40",
  Light:          "bg-cream-dark/30 text-bark/60 border-bark/20",
  Frozen:         "bg-agave/10 text-agave border-agave/30",
};

export default function CategoryPage({
  categoryId, categories, allDrinks, cervezas, onBack, onDrinkClick,
}) {
  const cat = categories.find((c) => c.id === categoryId);
  const [activeFilter, setActiveFilter] = useState("All");

  // Collect drinks for this category
  const drinks = categoryId === "cervezas" ? null : allDrinks[categoryId] || [];

  // Collect all tags
  const allTags = ["All", ...(drinks
    ? [...new Set(drinks.flatMap((d) => d.tags))]
    : [])];

  const filtered = !drinks
    ? drinks
    : activeFilter === "All"
    ? drinks
    : drinks.filter((d) => d.tags.includes(activeFilter));

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-agave px-5 pt-4 pb-7 relative">
        <button onClick={onBack} className="text-gold text-xs font-bold tracking-widest uppercase mb-3 flex items-center gap-1">
          ← Back
        </button>
        <div className="flex items-center gap-3">
          <span className="text-4xl">{cat?.emoji}</span>
          <div>
            <h2 className="font-display font-bold text-gold text-3xl leading-none">{cat?.label}</h2>
            <p className="font-display italic text-white/60 text-sm">{cat?.subtitle}</p>
          </div>
        </div>
        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-3 bg-cream"
             style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
      </div>

      {/* Filter Tags (not for cervezas) */}
      {drinks && allTags.length > 2 && (
        <div className="flex gap-2 px-4 pt-4 pb-1 overflow-x-auto scrollbar-none">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`shrink-0 text-xs font-bold px-3 py-1 rounded-full border transition-all
                ${activeFilter === tag
                  ? "bg-agave text-white border-agave"
                  : "bg-white text-bark/60 border-bark/20"}`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* Drink list */}
      <div className="flex-1 px-4 pt-4 pb-16 space-y-3 max-w-xl mx-auto w-full">
        {categoryId === "cervezas" ? (
          <>
            <p className="font-display italic text-bark/50 text-sm mb-1">🍻 On Draft</p>
            {cervezas.draft.map((b) => (
              <BeerCard key={b.id} beer={b} onClick={() => onDrinkClick(b, true)} />
            ))}
            <p className="font-display italic text-bark/50 text-sm mt-4 mb-1">🍾 Bottles & Cans</p>
            {cervezas.bottles.map((b) => (
              <BeerCard key={b.id} beer={b} onClick={() => onDrinkClick(b, true)} />
            ))}
          </>
        ) : (
          filtered.map((d) => (
            <DrinkCard key={d.id} drink={d} onClick={() => onDrinkClick(d)} />
          ))
        )}
      </div>

      {/* Sticky footer */}
      <div className="sticky bottom-0 bg-agave text-center py-2 text-gold/70 text-xs font-bold tracking-widest uppercase">
        Chapulines Tequila Bar · ¡Salud!
      </div>
    </div>
  );
}
