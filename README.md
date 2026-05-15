# 🦗 Chapulines Tequila Bar — Digital Menu v3

React + Vite + Tailwind CSS · Dark Premium Design · Mobile-First

---

## 🚀 Run locally

```bash
npm install
npm run dev
# → http://localhost:5173
```

---

## 📁 Folder structure for your assets

```
public/
└── assets/
    ├── logo.png                    ← Main logo
    ├── icons/
    │   ├── signature-cocktails.png
    │   ├── margaritas.png
    │   ├── mezcal-cocktails.png
    │   ├── beers.png
    │   ├── lowland-tequilas.png
    │   ├── highland-tequilas.png
    │   ├── mezcal-selection.png
    │   ├── red-wines.png
    │   ├── bourbon-whiskey.png
    │   ├── vodka-gin.png
    │   └── happy-endings.png
    ├── drinks/
    │   ├── zenzonte-paloma.jpg
    │   ├── michelada.jpg
    │   ├── cantarito.jpg
    │   ├── old-fashion.jpg
    │   ├── zenzonte-water.jpg
    │   ├── vampiro.jpg
    │   ├── charro-negro.jpg
    │   ├── acapulco-de-noche.jpg
    │   ├── frozen-margarita.jpg
    │   ├── skinny-margarita.jpg
    │   ├── black-berrie.jpg
    │   ├── spicy-margarita.jpg
    │   ├── sassy-rita.jpg
    │   ├── presidente-margarita.jpg
    │   ├── jp-cadillac.jpg
    │   ├── mezcalita.jpg
    │   ├── bad-bunny.jpg
    │   ├── spicy-mezcalita.jpg
    │   ├── oaxaca-mule.jpg
    │   ├── carajillo.jpg
    │   ├── el-chapulin.jpg
    │   └── [beer files as before]
    └── bottles/
        ├── herradura-blanco.jpg
        ├── herradura-reposado.jpg
        ├── alma-jaguar-blanco.jpg
        ├── alma-jaguar-reposado.jpg
        ├── arette-blanco.jpg
        ├── arette-reposado.jpg
        ├── cascahuin-blanco.jpg
        ├── cascahuin-reposado.jpg
        ├── fortaleza-blanco.jpg
        ├── fortaleza-reposado.jpg
        ├── tequileno-blanco.jpg
        ├── tequileno-reposado.jpg
        ├── volcan-blanco.jpg
        ├── volcan-reposado.jpg
        ├── cazcanes-blanco.jpg
        ├── cazcanes-reposado.jpg
        ├── entre-manos-blanco.jpg
        ├── entre-manos-reposado.jpg
        ├── don-fulano-blanco.jpg
        ├── don-fulano-reposado.jpg
        ├── zenzonte-blanco.jpg
        ├── zenzonte-reposado.jpg
        ├── tapatio-blanco.jpg
        ├── tapatio-reposado.jpg
        ├── lalo-blanco.jpg
        ├── lalo-reposado.jpg
        ├── siete-leguas-blanco.jpg
        ├── siete-leguas-reposado.jpg
        ├── siete-leguas-anejo.jpg
        ├── ocho-blanco.jpg
        ├── ocho-reposado.jpg
        ├── corralejo-blanco.jpg
        ├── corralejo-reposado.jpg
        ├── altos-blanco.jpg
        ├── altos-reposado.jpg
        ├── clase-azul-blanco.jpg
        ├── don-julio-blanco.jpg
        ├── don-julio-reposado.jpg
        ├── don-julio-anejo.jpg
        ├── don-julio-1942.jpg
        ├── casamigos-blanco.jpg
        ├── casamigos-reposado.jpg
        ├── casamigos-anejo.jpg
        ├── patron-blanco.jpg
        ├── patron-reposado.jpg
        ├── alipus-san-andres.jpg
        ├── alipus-san-juan.jpg
        ├── del-maguey-chichicapa.jpg
        ├── del-maguey-vida.jpg
        ├── meteoro.jpg
        ├── mezcalero-15.jpg
        ├── mezcalero-17.jpg
        ├── bozal-espadin.jpg
        ├── casamigos-mezcal.jpg
        ├── clase-azul-cenizo.jpg
        ├── ilegal-joven.jpg
        ├── ilegal-reposado.jpg
        ├── 400-conejos.jpg
        ├── house-cabernet.jpg
        ├── house-blend.jpg
        ├── malbec.jpg
        ├── red-blend.jpg
        ├── jim-beam.jpg
        ├── jack-daniels.jpg
        ├── wild-turkey.jpg
        ├── makers-mark.jpg
        ├── buffalo-trace.jpg
        ├── woodford-reserve.jpg
        ├── blantons.jpg
        ├── titos.jpg
        ├── ketel-one.jpg
        ├── tanqueray.jpg
        ├── bombay-sapphire.jpg
        ├── grey-goose.jpg
        └── hendricks.jpg
```

---

## 🖼️ Recommended image sizes

| Asset | Location | Size | Format |
|-------|----------|------|--------|
| Logo | `public/assets/logo.png` | 1000×1000px | PNG transparent |
| Category icons | `public/assets/icons/` | 512×512px | PNG/SVG transparent |
| Cocktail photos | `public/assets/drinks/` | 1200×800px | JPG or PNG |
| Bottle photos | `public/assets/bottles/` | 1000×1400px | PNG transparent preferred |

If an image is missing, the app shows an elegant dark placeholder automatically.

---

## 🖼️ Replace the logo

1. Export your logo as `logo.png` (PNG, transparent background, 1000×1000px min)
2. Place it at `public/assets/logo.png`
3. Push to GitHub → Vercel auto-deploys

---

## 🎨 Replace category icons

1. Export each icon as PNG, 512×512px, transparent background
2. Name them exactly as listed in the table above
3. Place in `public/assets/icons/`
4. Push to GitHub

Icons should be monochromatic — white, cream, agave green or gold work best on the dark background.

---

## 📸 Add cocktail photos

1. Photograph the drink (centered, dark/moody background)
2. Export as JPG, 1200×800px minimum
3. Name the file exactly as the `image` field in `src/data/menu.js`
4. Place in `public/assets/drinks/`
5. Push to GitHub

---

## 🍾 Add bottle photos

1. Photograph or source the bottle image (transparent background preferred)
2. Export as PNG, 1000×1400px minimum
3. Name the file exactly as the `image` field in `src/data/menu.js`
4. Place in `public/assets/bottles/`
5. Push to GitHub

---

## ✏️ Update prices, names or descriptions

Open `src/data/menu.js` and edit directly:

```js
{ name: "Modelo", price: 5, ... }   // change price here
{ description: "...", ... }         // change description here
```

Save the file, push to GitHub, Vercel deploys in ~60 seconds.

---

## 🎨 Change main colors

Edit `tailwind.config.js`:

```js
agave: { DEFAULT: "#2db84b" },  // ← green accent
gold:  { DEFAULT: "#c9973a" },  // ← gold accent
chili: { DEFAULT: "#b83232" },  // ← red / spicy accent
cream: { DEFAULT: "#f0e6cc" },  // ← text color
carbon:{ DEFAULT: "#141414" },  // ← background
```

---

## 🚀 GitHub → Vercel auto-deploy

```bash
git add .
git commit -m "Update menu / prices / photos"
git push
```

Vercel detects the push and deploys automatically in approximately 60 seconds.

---

## 📱 Generate QR code

Once deployed on Vercel:
1. Go to [qr-code-generator.com](https://www.qr-code-generator.com)
2. Paste your Vercel URL
3. Set foreground color to `#2db84b` (agave green) on dark background
4. Download PNG at high resolution for print

---

## ⚠️ Prices marked for owner review

The following categories use estimated prices — confirm with the owner before publishing:
- Bourbon & Whiskey (all items)
- Vodka & Gin (all items)

To update: edit the `price` field in `src/data/menu.js`.

---

## 🏷️ Items marked needsReview

Some tequila, mezcal and wine items have `needsReview: true` in the data.
These items use general descriptions where official sources were not verified.
**This flag is internal only — it is never shown to customers.**
Review and update the relevant fields when official information is confirmed.

---

## 📞 Footer credit

The footer credit appears on the home page.
To update the URL, edit `src/components/Footer.jsx`:

```jsx
href="https://www.grainandbrand.com"  ← change this
www.grainandbrand.com                 ← and this line
```

---

## 🛠️ Stack

React 18 · Vite 4 · Tailwind CSS 3 · Playfair Display + Lato (Google Fonts)
