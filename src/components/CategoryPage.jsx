import { useState } from "react";
import DrinkCard from "./DrinkCard.jsx";
import BeerCard from "./BeerCard.jsx";

export default function CategoryPage({
  categoryId, categories, allDrinks, cervezas, onBack, onDrinkClick,
}) {
  const cat = categories.find((c) => c.id === categoryId);
  const drinks = categoryId === "cervezas" ? null : allDrinks[categoryId] || [];
  const [activeFilter, setActiveFilter] = useState("All");

  const allTags = drinks
    ? ["All", ...new Set(drinks.flatMap((d) => d.tags))]
    : [];

  const filtered = !drinks
    ? drinks
    : activeFilter === "All"
    ? drinks
    : drinks.filter((d) => d.tags.includes(activeFilter));

  return (
    <div className="min-h-screen flex flex-col bg-carbon">

      {/* HEADER */}
      <div className="bg-carbon-800 border-b border-white/5 px-5 pt-5 pb-6 relative">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-agave text-xs font-bold
                     tracking-widest uppercase mb-4 press"
        >
          <span className="text-base leading-none">←</span> Menu
        </button>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full border border-agave/30 flex items-center justify-center shrink-0">
            <span className="text-agave text-lg font-display font-bold">
              {cat?.label?.[0] ?? "C"}
            </span>
          </div>
          <div>
            <h2 className="font-display font-bold text-cream text-3xl leading-none">
              {cat?.label}
            </h2>
            <p className="font-display italic text-cream/35 text-sm mt-0.5">
              {cat?.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* FILTER TAGS */}
      {drinks && allTags.length > 2 && (
        <div className="flex gap-2 px-4 pt-4 pb-1 overflow-x-auto scrollbar-none bg-carbon-800">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`shrink-0 text-[11px] font-bold px-3 py-1.5 rounded-full border transition-all press
                ${activeFilter === tag
                  ? "bg-agave text-carbon border-agave"
                  : "bg-transparent text-cream/40 border-white/10 hover:border-agave/30"
                }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* LIST */}
      <div className="flex-1 px-4 pt-4 pb-24 space-y-2.5 max-w-xl mx-auto w-full">
        {categoryId === "cervezas" ? (
          <>
            <SectionLabel>On Draft</SectionLabel>
            {cervezas.draft.map((b) => (
              <BeerCard key={b.id} beer={b} onClick={() => onDrinkClick(b, true)} />
            ))}
            <SectionLabel className="mt-6">Bottles &amp; Cans</SectionLabel>
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

      {/* FOOTER */}
      <div className="fixed bottom-0 left-0 right-0 bg-carbon-800 border-t border-white/5
                      text-center py-2.5 text-cream/20 text-[10px] font-body tracking-[0.3em] uppercase z-10">
        Chapulines Tequila Bar
      </div>
    </div>
  );
}

function SectionLabel({ children, className = "" }) {
  return (
    <div className={`flex items-center gap-3 py-2 ${className}`}>
      <span className="h-px flex-1 bg-white/8" />
      <span className="text-[10px] text-cream/30 font-bold tracking-[0.3em] uppercase font-body">
        {children}
      </span>
      <span className="h-px flex-1 bg-white/8" />
    </div>
  );
}
