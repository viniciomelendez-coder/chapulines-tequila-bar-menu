export default function Home({ categories, onSelect }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 py-10"
         style={{ background: "radial-gradient(ellipse at 60% 20%, #3d8a4a18 0%, transparent 60%), #f5ead0" }}>

      {/* Logo / Branding */}
      <div className="text-center mb-8">
        {/* Reemplaza esta imagen con tu logo real */}
        <img
          src="/assets/logo.png"
          alt="Chapulines Tequila Bar"
          className="w-28 h-28 object-contain mx-auto mb-4"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextElementSibling.style.display = "block";
          }}
        />
        {/* Fallback si no hay logo */}
        <div style={{ display: "none" }}
             className="w-24 h-24 rounded-full bg-agave flex items-center justify-center mx-auto mb-4 text-4xl shadow-lg">
          🦗
        </div>

        <h1 className="font-display text-5xl font-bold text-agave leading-none tracking-wide">
          CHAPULINES
        </h1>
        <div className="flex items-center gap-3 justify-center my-2">
          <span className="h-px w-14 bg-agave block" />
          <span className="text-xs tracking-widest text-bark/60 font-body uppercase">Tequila Bar</span>
          <span className="h-px w-14 bg-agave block" />
        </div>
        <p className="font-display italic text-chili text-lg">Drink Menu</p>
        <p className="font-display italic text-bark/50 text-sm mt-1">para brindar bonito · ¡Salud!</p>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className="bg-agave border-2 border-gold rounded-xl py-5 px-3 text-center
                       active:scale-95 transition-all duration-150 shadow-md
                       hover:bg-agave-light"
          >
            <span className="text-3xl block mb-1">{cat.emoji}</span>
            <span className="block font-display font-bold text-gold text-lg leading-tight">
              {cat.label}
            </span>
            <span className="block text-white/60 text-xs mt-1 tracking-wider uppercase">
              {cat.subtitle}
            </span>
          </button>
        ))}
      </div>

      {/* Badge */}
      <div className="mt-8 flex items-center gap-2 border border-agave rounded-full px-5 py-2">
        <span className="text-sm">🌿</span>
        <span className="text-agave text-xs font-bold tracking-widest uppercase">
          100% Agave · Good Vibes Guaranteed
        </span>
        <span className="text-sm">🌿</span>
      </div>
    </div>
  );
}
