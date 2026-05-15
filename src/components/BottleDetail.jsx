import { useState } from "react";

const CAT_ACCENT = {
  "lowland-tequilas":  { border: "border-gold/25",   badge: "bg-gold text-carbon",     label: "text-gold/60" },
  "highland-tequilas": { border: "border-agave/25",   badge: "bg-agave text-carbon",    label: "text-agave/60" },
  "mezcal-selection":  { border: "border-cream/15",   badge: "bg-cream/80 text-carbon", label: "text-cream/50" },
  "red-wines":         { border: "border-chili/25",   badge: "bg-chili text-white",     label: "text-chili/60" },
  "bourbon-whiskey":   { border: "border-gold/25",    badge: "bg-gold text-carbon",     label: "text-gold/60" },
  "vodka-gin":         { border: "border-agave/25",   badge: "bg-agave text-carbon",    label: "text-agave/60" },
};

function Section({ label, labelColor = "text-agave/60", children }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <span className={`text-[9px] font-bold tracking-[0.25em] ${labelColor} uppercase font-body`}>{label}</span>
        <span className="h-px flex-1 bg-white/5" />
      </div>
      {children}
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between items-start gap-4">
      <span className="text-[10px] text-cream/28 font-body shrink-0">{label}</span>
      <span className="text-[11px] text-cream/55 font-body text-right leading-snug">{value}</span>
    </div>
  );
}

function capitalize(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function BottleDetail({ item, categoryId, onBack }) {
  const [imgFailed, setImgFailed] = useState(false);
  const ac = CAT_ACCENT[categoryId] ?? CAT_ACCENT["lowland-tequilas"];

  const subLabel = item.expression || item.type || item.varietal || "";
  const priceLabel = item.priceType === "glass" ? "/ glass" : item.priceType === "pour" ? "/ pour" : "";
  const isFeatured = !!item.featuredHouseTequila;

  return (
    <div className="min-h-screen flex flex-col bg-carbon">

      {/* HERO */}
      <div className="relative w-full h-56 bg-carbon-700 overflow-hidden">
        {!imgFailed ? (
          <img src={item.image} alt={item.name}
               className="w-full h-full object-cover opacity-70"
               onError={() => setImgFailed(true)} />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className={`w-16 h-16 rounded-full border ${ac.border} flex items-center justify-center`}>
              <span className="text-cream/30 font-display font-bold text-2xl">{item.name[0]}</span>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-carbon/90 via-carbon/35 to-transparent" />

        <button onClick={onBack}
                className="absolute top-4 left-4 w-9 h-9 rounded-full bg-carbon/75 border border-white/10
                           flex items-center justify-center text-cream/60 text-lg">
          ‹
        </button>

        {/* Price badge */}
        <div className={`absolute top-4 right-4 ${ac.badge} font-bold text-lg px-3 py-1 rounded-sm font-body flex items-baseline gap-1`}>
          <span className="text-xs align-super">$</span>
          <span>{item.price ?? (item.priceNote ?? "—")}</span>
          {priceLabel && <span className="text-[9px] font-normal opacity-70">{priceLabel}</span>}
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
          {/* Featured House Tequila badge */}
          {isFeatured && (
            <div className="inline-flex items-center gap-1.5 bg-agave/20 border border-agave/40
                            px-2.5 py-1 rounded-full mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-agave shrink-0" />
              <span className="text-[9px] text-agave font-bold tracking-[0.2em] uppercase font-body">
                Featured House Tequila
              </span>
            </div>
          )}
          <h1 className="font-body font-bold text-cream text-2xl leading-tight">{item.name}</h1>
          {subLabel && <p className={`text-xs ${ac.label} font-body mt-0.5`}>{subLabel}</p>}
          {item.tagline && (
            <p className="font-display italic text-cream/40 text-xs mt-1">{item.tagline}</p>
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 px-5 pt-5 pb-24 max-w-xl mx-auto w-full space-y-6">

        {/* Tasting profile tagline for Zenzonte */}
        {item.tastingProfile && (
          <div className="flex items-center gap-2">
            <span className="h-px w-6 bg-agave/30" />
            <p className="text-[10px] text-agave/60 font-body tracking-[0.25em] uppercase">
              {item.tastingProfile}
            </p>
            <span className="h-px flex-1 bg-agave/15" />
          </div>
        )}

        <p className="font-display italic text-cream/42 text-base leading-relaxed">
          {item.shortDescription}
        </p>

        {/* TEQUILA DETAILS */}
        {(item.region || item.distillery || item.agave || item.abv) && !item.varietal && categoryId !== "bourbon-whiskey" && categoryId !== "vodka-gin" && !item.agaveVariety && (
          <Section label="Details" labelColor={ac.label}>
            <div className="bg-carbon-700 border border-white/5 rounded-lg px-4 py-3 space-y-1.5">
              {item.region     && <Row label="Region"     value={item.region} />}
              {item.origin     && <Row label="Origin"     value={item.origin} />}
              {item.distillery && <Row label="Distillery" value={item.distillery} />}
              {item.agave      && <Row label="Agave"      value={item.agave} />}
              {item.abv        && <Row label="ABV"        value={item.abv} />}
              {item.NOM        && <Row label="NOM"        value={item.NOM} />}
            </div>
          </Section>
        )}

        {/* MEZCAL DETAILS */}
        {item.agaveVariety && (
          <Section label="Details" labelColor={ac.label}>
            <div className="bg-carbon-700 border border-white/5 rounded-lg px-4 py-3 space-y-1.5">
              {item.agaveVariety     && <Row label="Agave"       value={item.agaveVariety} />}
              {item.mezcalType       && <Row label="Type"        value={item.mezcalType} />}
              {item.origin           && <Row label="Origin"      value={item.origin} />}
              {item.producer         && <Row label="Producer"    value={item.producer} />}
              {item.maestroMezcalero && <Row label="Maestro"     value={item.maestroMezcalero} />}
              {item.cookingMethod    && <Row label="Cooking"     value={item.cookingMethod} />}
              {item.abv              && <Row label="ABV"         value={item.abv} />}
            </div>
          </Section>
        )}

        {/* WINE DETAILS */}
        {item.varietal && (
          <Section label="Details" labelColor={ac.label}>
            <div className="bg-carbon-700 border border-white/5 rounded-lg px-4 py-3 space-y-1.5">
              {item.varietal       && <Row label="Varietal"  value={item.varietal} />}
              {item.region         && <Row label="Region"    value={item.region} />}
              {item.country        && <Row label="Country"   value={item.country} />}
              {item.vintage        && <Row label="Vintage"   value={item.vintage} />}
              {item.abv            && <Row label="ABV"       value={item.abv} />}
              {item.body           && <Row label="Body"      value={capitalize(item.body)} />}
              {item.sweetnessLevel && <Row label="Sweetness" value={capitalize(item.sweetnessLevel)} />}
            </div>
          </Section>
        )}

        {/* BOURBON/WHISKEY DETAILS */}
        {categoryId === "bourbon-whiskey" && (
          <Section label="Details" labelColor={ac.label}>
            <div className="bg-carbon-700 border border-white/5 rounded-lg px-4 py-3 space-y-1.5">
              {item.type         && <Row label="Type"        value={item.type} />}
              {item.origin       && <Row label="Origin"      value={item.origin} />}
              {item.distillery   && <Row label="Distillery"  value={item.distillery} />}
              {item.mashBill     && <Row label="Mash Bill"   value={item.mashBill} />}
              {item.ageStatement && <Row label="Age"         value={item.ageStatement} />}
              {item.abv          && <Row label="ABV / Proof" value={item.abv} />}
            </div>
          </Section>
        )}

        {/* VODKA/GIN DETAILS */}
        {categoryId === "vodka-gin" && (
          <Section label="Details" labelColor={ac.label}>
            <div className="bg-carbon-700 border border-white/5 rounded-lg px-4 py-3 space-y-1.5">
              {item.type           && <Row label="Type"       value={item.type} />}
              {item.origin         && <Row label="Origin"     value={item.origin} />}
              {item.producer       && <Row label="Producer"   value={item.producer} />}
              {item.baseIngredient && <Row label="Base"       value={item.baseIngredient} />}
              {item.botanicals     && <Row label="Botanicals" value={item.botanicals} />}
              {item.abv            && <Row label="ABV"        value={item.abv} />}
            </div>
          </Section>
        )}

        {/* TASTING NOTES */}
        {(item.tastingNotes || item.aromaNotes || item.flavorNotes || item.finish) && (
          <Section label="Tasting Notes" labelColor={ac.label}>
            <p className="text-sm text-cream/48 font-display italic leading-relaxed">{item.tastingNotes}</p>
            {item.aromaNotes  && <p className="text-xs text-cream/32 font-body mt-2"><span className="text-cream/40 font-bold">Aroma — </span>{item.aromaNotes}</p>}
            {item.flavorNotes && <p className="text-xs text-cream/32 font-body mt-1"><span className="text-cream/40 font-bold">Flavor — </span>{item.flavorNotes}</p>}
            {item.finish      && <p className="text-xs text-cream/32 font-body mt-1"><span className="text-cream/40 font-bold">Finish — </span>{item.finish}</p>}
          </Section>
        )}

        {/* ZENZONTE PRODUCTION PROCESS */}
        {item.process && (
          <Section label="Production Process" labelColor={ac.label}>
            <div className="space-y-2">
              {Object.entries(item.process).map(([key, val]) => (
                <div key={key} className="flex gap-3 items-start">
                  <span className="text-[9px] text-cream/25 font-bold tracking-widest uppercase font-body shrink-0 w-20 pt-0.5">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </span>
                  <p className="text-xs text-cream/45 font-body leading-relaxed flex-1">{val}</p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* STORY */}
        {item.story && (
          <Section label="Story" labelColor={ac.label}>
            <p className="text-sm text-cream/42 font-display italic leading-relaxed">{item.story}</p>
            {item.funFact && (
              <div className="mt-3 bg-gold/5 border border-gold/10 rounded-lg px-4 py-3">
                <p className="text-xs text-cream/36 font-body leading-relaxed">
                  <span className="text-gold/55 font-bold">Fun Fact — </span>
                  {item.funFact}
                </p>
              </div>
            )}
          </Section>
        )}

        {/* RECOMMENDED SERVE */}
        {item.recommendedServe && (
          <Section label="Recommended Serve" labelColor={ac.label}>
            <p className="text-sm text-cream/45 font-body">{item.recommendedServe}</p>
          </Section>
        )}

        {/* PAIRING */}
        {item.pairing && (
          <Section label="Pairing" labelColor={ac.label}>
            <p className="text-sm text-cream/42 font-body">{item.pairing}</p>
          </Section>
        )}

        {/* HOUSE TOUCH */}
        {item.houseTouch && (
          <div className={`bg-carbon-700 border ${ac.border} rounded-lg px-4 py-3`}>
            <p className="text-[9px] text-agave font-bold tracking-widest uppercase mb-1.5 font-body">
              Chapulines House Touch
            </p>
            <p className="text-xs text-cream/40 font-display italic leading-relaxed">
              {item.houseTouch}
            </p>
          </div>
        )}

        <p className="text-center text-[9px] text-cream/13 font-body tracking-wide pt-2 border-t border-white/4">
          Please enjoy responsibly. Do not drink and drive.
        </p>
      </div>
    </div>
  );
}
