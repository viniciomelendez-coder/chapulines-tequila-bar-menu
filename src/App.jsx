import { useEffect, useState } from "react";
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
  findItemById,
} from "./data/menu.js";

import Home               from "./components/Home.jsx";
import CategoryPage       from "./components/CategoryPage.jsx";
import DrinkDetail        from "./components/DrinkDetail.jsx";
import BeerDetail         from "./components/BeerDetail.jsx";
import BottleDetail       from "./components/BottleDetail.jsx";
import HappyEndingDetail  from "./components/HappyEndingDetail.jsx";

const CATEGORY_DATA = {
  "signature-cocktails": signatureCocktails,
  "margaritas":          margaritas,
  "mezcal-cocktails":    mezcalCocktails,
  "beers":               beers,
  "lowland-tequilas":    lowlandTequilas,
  "highland-tequilas":   highlandTequilas,
  "mezcal-selection":    mezcalSelection,
  "red-wines":           redWines,
  "bourbon-whiskey":     bourbonWhiskey,
  "vodka-gin":           vodkaGin,
  "happy-endings":       happyEndings,
};

export default function App() {
  const [view, setView]                     = useState("home");
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeItem, setActiveItem]         = useState(null);
  const [detailType, setDetailType]         = useState(null);
  const [detailCatId, setDetailCatId]       = useState(null);
  // navigation stack for back button after spirit link
  const [prevState, setPrevState]           = useState(null);
useEffect(() => {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}, [view, activeCategory, activeItem?.id]);
  function openCategory(id) {
    setActiveCategory(id);
    setView("category");
    setPrevState(null);
  }

  function _setDetail(item, catId, type) {
    setActiveItem(item);
    setDetailCatId(catId);
    if (catId === "beers") {
      setDetailType("beer");
    } else if (catId === "happy-endings") {
      setDetailType("happy");
    } else if (
      ["lowland-tequilas","highland-tequilas","mezcal-selection",
       "red-wines","bourbon-whiskey","vodka-gin"].includes(catId)
    ) {
      setDetailType("bottle");
    } else {
      setDetailType("drink");
    }
    setView("detail");
  }

  function openItem(item, catId) {
    setPrevState(null);
    _setDetail(item, catId, null);
  }

  // Spirit link navigation — saves current state so we can go back
  function openItemById(id) {
    const found = findItemById(id);
    if (!found) return;
    // Save current state for back
    setPrevState({ item: activeItem, catId: detailCatId, type: detailType, view });
    _setDetail(found.item, found.categoryId, found.type);
  }

  function goHome() {
    setView("home");
    setActiveCategory(null);
    setActiveItem(null);
    setDetailType(null);
    setDetailCatId(null);
    setPrevState(null);
  }

  function goBack() {
    if (prevState) {
      // Return to the cocktail we came from
      setActiveItem(prevState.item);
      setDetailCatId(prevState.catId);
      setDetailType(prevState.type);
      setView("detail");
      setPrevState(null);
    } else {
      setActiveItem(null);
      setDetailType(null);
      setDetailCatId(null);
      setView("category");
    }
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
        <DrinkDetail drink={activeItem} onBack={goBack} onSpiritLink={openItemById} />
      )}
      {view === "detail" && activeItem && detailType === "beer" && (
        <BeerDetail beer={activeItem} onBack={goBack} />
      )}
      {view === "detail" && activeItem && detailType === "bottle" && (
        <BottleDetail item={activeItem} categoryId={detailCatId} onBack={goBack} />
      )}
      {view === "detail" && activeItem && detailType === "happy" && (
        <HappyEndingDetail item={activeItem} onBack={goBack} onSpiritLink={openItemById} />
      )}
    </div>
  );
}
