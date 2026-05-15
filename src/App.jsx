import { useState } from "react";
import { categories, tragos, margaritas, mezcal, cervezas } from "./data/menu.js";
import Home from "./components/Home.jsx";
import CategoryPage from "./components/CategoryPage.jsx";
import DrinkDetail from "./components/DrinkDetail.jsx";
import BeerDetail from "./components/BeerDetail.jsx";

export default function App() {
  const [view, setView]           = useState("home");   // "home" | "category" | "drink" | "beer"
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeDrink, setActiveDrink]       = useState(null);

  const allDrinks = { tragos, margaritas, mezcal };

  function openCategory(id) {
    setActiveCategory(id);
    setView("category");
  }

  function openDrink(drink, isBeer = false) {
    setActiveDrink(drink);
    setView(isBeer ? "beer" : "drink");
  }

  function goHome() {
    setView("home");
    setActiveCategory(null);
    setActiveDrink(null);
  }

  function goBack() {
    setActiveDrink(null);
    setView("category");
  }

  return (
    <div className="min-h-screen bg-cream font-body text-bark">
      {view === "home" && (
        <Home categories={categories} onSelect={openCategory} />
      )}
      {view === "category" && (
        <CategoryPage
          categoryId={activeCategory}
          categories={categories}
          allDrinks={allDrinks}
          cervezas={cervezas}
          onBack={goHome}
          onDrinkClick={openDrink}
        />
      )}
      {view === "drink" && activeDrink && (
        <DrinkDetail drink={activeDrink} onBack={goBack} />
      )}
      {view === "beer" && activeDrink && (
        <BeerDetail beer={activeDrink} onBack={goBack} />
      )}
    </div>
  );
}
