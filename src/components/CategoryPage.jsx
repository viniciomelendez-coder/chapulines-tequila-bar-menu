import { useState } from "react";
import DrinkCard        from "./DrinkCard.jsx";
import BeerCard         from "./BeerCard.jsx";
import BottleCard       from "./BottleCard.jsx";
import HappyEndingCard  from "./HappyEndingCard.jsx";

const BOTTLE_CATEGORIES = new Set([
  "lowland-tequilas", "highland-tequilas", "mezcal-selection",
  "red-wines", "bourbon-whiskey", "vodka-gin",
]);
const COCKTAIL_CATEGORIES = new Set([
  "signature-cocktails", "margaritas", "mezcal-cocktails",
]);

function SectionLabel({ children, className = "" }) {
  return (
    <div className={`flex items-center gap-3 py-2 ${className}`}>
      <span className="h-px flex-1 bg-white/6" />
      <span className="text-[10px] text-cream/25 font-bold tracking-[0.3em] uppercase font-body">
        {children}
      </span>
      <span className="h-px flex-1 bg-white/6" />
    </div>
  );
}

export default function CategoryPage({
  categoryId, categories, categoryData, onBack, onItemClick,
}) {
  const cat = categories.find((c) => c.id === categoryId);
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch]             = useState("");

  const isCocktail = COCKTAIL_CATEGORIES.has(categoryId);
  const isBottle   = BOTTLE_CATEGORIES.has(categoryId);
  const isBeer     = categoryId === "beers";
  const isHappy    = categoryId === "happy-endings";

  // Collect tags for filter pills (cocktails only)
  const items = isBeer ? [] : (Array.isArray(categoryData) ? categoryData : []);
  const allTags = isCocktail
    ? ["All", ...new Set(items.flatMap((d) => d.tags ?? []))]
    : [];

  // Filter + search
  const filtered = items.filter((item) => {
    const matchTag = !isCocktail || activeFilter === "All" || (item.tags ?? []).includes(activeFilter);
    const q = search.toLowerCase();
    const matchSearch = !q
      || item.name.toLowerCase().includes(q)
      || (item.expression ?? "").toLowerCase().includes(q)
      || (item.type ?? "").toLowerCase().includes(q)
      || (item.origin ?? "").toLowerCase().includes(q)
      || (item.shortDescription ?? item.description ?? "").toLowerCase().includes(q);
    return matchTag && matchSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-carbon">

      {/* HEADER */}
      <div className="bg-carbon-800 border-b border-white/5 px-5 pt-5 pb-6">
        <button
          onClick={onBack}
         className="flex items-center gap-3 text-agave text-base font-bold
           tracking-[0.22em] uppercase mb-5 active:opacity-60 transition-opacity
           py-3 pr-5"
          ← Menu
        </button>
        <div className="flex items-center">
         <div className="flex items-center">
  <div>
    <h2 className="font-display font-bold text-cream text-2xl leading-none">
      {cat?.label}
    </h2>
    <p className="font-display italic text-cream/30 text-xs mt-0.5">
      {cat?.subtitle}
    </p>
  </div>
</div>
          <div>
            <h2 className="font-display font-bold text-cream text-2xl leading-none">
              {cat?.label}
            </h2>
            <p className="font-display italic text-cream/30 text-xs mt-0.5">
              {cat?.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* SEARCH (bottles + tequilas + spirits) */}
      {(isBottle || isHappy) && (
        <div className="px-4 pt-3 pb-1 bg-carbon-800">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search…"
            className="w-full bg-carbon-600 border border-white/8 rounded-md
                       px-3 py-2 text-sm text-cream/70 placeholder-cream/20
                       focus:outline-none focus:border-agave/30"
          />
        </div>
      )}

      {/* FILTER TAGS (cocktails) */}
      {isCocktail && allTags.length > 2 && (
        <div className="flex gap-2 px-4 pt-3 pb-1 overflow-x-auto scrollbar-none bg-carbon-800">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`shrink-0 text-[10px] font-bold px-3 py-1.5 rounded-full border transition-all
                ${activeFilter === tag
                  ? "bg-agave text-carbon border-agave"
                  : "bg-transparent text-cream/35 border-white/10 hover:border-agave/25"
                }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* LIST */}
      <div className="flex-1 px-4 pt-4 pb-24 space-y-2.5 max-w-xl mx-auto w-full">

        {/* COCKTAIL CATEGORIES */}
        {isCocktail && filtered.map((d) => (
          <DrinkCard key={d.id} drink={d} onClick={() => onItemClick(d)} />
        ))}

        {/* BOTTLE CATEGORIES */}
        {isBottle && filtered.map((item) => (
          <BottleCard key={item.id} item={item} categoryId={categoryId} onClick={() => onItemClick(item)} />
        ))}

        {/* HAPPY ENDINGS */}
        {isHappy && filtered.map((item) => (
          <HappyEndingCard key={item.id} item={item} onClick={() => onItemClick(item)} />
        ))}

        {/* BEERS */}
        {isBeer && (
          <>
            <SectionLabel>On Draft</SectionLabel>
            {categoryData.draft.map((b) => (
              <BeerCard key={b.id} beer={b} onClick={() => onItemClick(b)} />
            ))}
            <SectionLabel className="mt-4">Bottles &amp; Cans</SectionLabel>
            {categoryData.bottles.map((b) => (
              <BeerCard key={b.id} beer={b} onClick={() => onItemClick(b)} />
            ))}
          </>
        )}

        {/* Empty state */}
        {!isBeer && filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-cream/20 text-sm font-body">No results found.</p>
          </div>
        )}
      </div>

      {/* STICKY FOOTER */}
      <div className="fixed bottom-0 left-0 right-0 bg-carbon-800 border-t border-white/5
                      text-center py-2 text-cream/15 text-[9px] font-body tracking-[0.3em] uppercase z-10">
        Chapulines Tequila Bar
      </div>
    </div>
  );
}
