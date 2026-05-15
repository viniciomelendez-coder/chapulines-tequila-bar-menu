import { useState } from "react";
import {
  categories,
  signatureCocktails,
  margaritas,
  mezcalCocktails,
  beers,
  lowlandTequilas,
  highlandTequilas,
  mezcalSelection,
  redWines,
  bourbonWhiskey,
  vodkaGin,
  happyEndings,
} from "./data/menu.js";

import Home            from "./components/Home.jsx";
import CategoryPage    from "./components/CategoryPage.jsx";
import DrinkDetail     from "./components/DrinkDetail.jsx";
import BeerDetail      from "./components/BeerDetail.jsx";
import BottleDetail    from "./components/BottleDetail.jsx";
import HappyEndingDetail from "./components/HappyEndingDetail.jsx";

// Map category id → data array (or object for beers)
const CATEGORY_DATA = {
  "signature-cocktails": signatureCocktails,
  "margaritas":          margaritas,
  "mezcal-cocktails":    mezcalCocktails,
  "beers":               beers,          // { draft, bottles }
  "lowland-tequilas":    lowlandTequilas,
  "highland-tequilas":   highlandTequilas,
  "mezcal-selection":    mezcalSelection,
  "red-wines":           redWines,
  "bourbon-whiskey":     bourbonWhiskey,
  "vodka-gin":           vodkaGin,
  "happy-endings":       happyEndings,
};

// Which categories show a "bottle" detail page
const BOTTLE_CATEGORIES = new Set([
  "lowland-tequilas",
  "highland-tequilas",
  "mezcal-selection",
  "red-wines",
  "bourbon-whiskey",
  "vodka-gin",
]);

// Which categories show a "drink" detail (mixed cocktails)
const COCKTAIL_CATEGORIES = new Set([
  "signature-cocktails",
  "margaritas",
  "mezcal-cocktails",
]);

export default function App() {
  const [view, setView]                     = useState("home");
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeItem, setActiveItem]         = useState(null);
  const [detailType, setDetailType]         = useState(null);
  // detailType: "drink" | "beer" | "bottle" | "happy"

  function openCategory(id) {
    setActiveCategory(id);
    setView("category");
  }

  function openItem(item, catId) {
    setActiveItem(item);
    if (catId === "beers") {
      setDetailType("beer");
    } else if (BOTTLE_CATEGORIES.has(catId)) {
      setDetailType("bottle");
    } else if (catId === "happy-endings") {
      setDetailType("happy");
    } else {
      setDetailType("drink");
    }
    setView("detail");
  }

  function goHome() {
    setView("home");
    setActiveCategory(null);
    setActiveItem(null);
    setDetailType(null);
  }

  function goBack() {
    setActiveItem(null);
    setDetailType(null);
    setView("category");
  }

  return (
    <div className="min-h-screen bg-carbon font-body text-cream">
      {view === "home" && (
        <Home categories={categories} onSelect={openCategory} />
      )}

      {view === "category" && (
        <CategoryPage
          categoryId={activeCategory}
          categories={categories}
          categoryData={CATEGORY_DATA[activeCategory]}
          onBack={goHome}
          onItemClick={(item) => openItem(item, activeCategory)}
        />
      )}

      {view === "detail" && activeItem && detailType === "drink" && (
        <DrinkDetail drink={activeItem} onBack={goBack} />
      )}
      {view === "detail" && activeItem && detailType === "beer" && (
        <BeerDetail beer={activeItem} onBack={goBack} />
      )}
      {view === "detail" && activeItem && detailType === "bottle" && (
        <BottleDetail item={activeItem} categoryId={activeCategory} onBack={goBack} />
      )}
      {view === "detail" && activeItem && detailType === "happy" && (
        <HappyEndingDetail item={activeItem} onBack={goBack} />
      )}
    </div>
  );
}
