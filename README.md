# 🦗 Chapulines Tequila Bar — Menú Digital v2

Rediseño premium oscuro. React + Vite + Tailwind CSS.

---

## 🚀 Instalación

```bash
npm install
npm run dev
# → http://localhost:5173
```

---

## 📁 Carpetas que debes crear en tu proyecto

```
public/
└── assets/
    ├── logo.png              ← Tu logo principal
    ├── icons/
    │   ├── tragos.png        ← Ícono de Los Tragos
    │   ├── margaritas.png    ← Ícono de Margaritas
    │   ├── mezcal.png        ← Ícono de Mezcal Drinks
    │   └── cervezas.png      ← Ícono de Cervezas
    └── drinks/
        ├── zenzonte-paloma.jpg
        ├── michelada.jpg
        ├── cantarito.jpg
        ├── old-fashion.jpg
        ├── zenzonte-water.jpg
        ├── vampiro.jpg
        ├── charro-negro.jpg
        ├── acapulco-de-noche.jpg
        ├── frozen-margarita.jpg
        ├── skinny-margarita.jpg
        ├── black-berrie.jpg
        ├── spicy-margarita.jpg
        ├── sassy-rita.jpg
        ├── presidente-margarita.jpg
        ├── jp-cadillac.jpg
        ├── mezcalita.jpg
        ├── bad-bunny.jpg
        ├── spicy-mezcalita.jpg
        ├── oaxaca-mule.jpg
        ├── yee-haw.jpg
        ├── modelo.jpg
        ├── xx-amber.jpg
        ├── pacifico.jpg
        ├── ultra.jpg
        ├── local-ipa.jpg
        ├── corona.jpg
        ├── negra-modelo.jpg
        ├── local-porter.jpg
        ├── local-lager.jpg
        ├── victoria.jpg
        ├── tecate.jpg
        ├── bohemia.jpg
        ├── bud-light.jpg
        └── miller-lite.jpg
```

---

## 🖼️ Cómo reemplazar el logo

1. Guarda tu logo como PNG con fondo transparente
2. Nómbralo: `logo.png`
3. Colócalo en: `public/assets/logo.png`
4. El diseño lo toma automáticamente. Si no existe, muestra el texto elegante de fallback.

---

## 🎨 Cómo reemplazar íconos de categorías

1. Crea tus íconos en PNG o SVG (recomendado: monocromático blanco/crema o verde)
2. Tamaño recomendado: 128×128px o más grande
3. Nómbralos y colócalos en `public/assets/icons/`:
   - `tragos.png`
   - `margaritas.png`
   - `mezcal.png`
   - `cervezas.png`

Si no existen, el diseño muestra un fallback elegante con la inicial de la categoría.

---

## 📸 Cómo agregar fotos de bebidas

1. Toma fotografías de las bebidas (luz natural, fondo oscuro recomendado)
2. Exporta en JPG, mínimo 800×600px
3. Nómbralas según la lista de arriba
4. Colócalas en `public/assets/drinks/`

Si una bebida no tiene foto, el diseño muestra un placeholder oscuro elegante con la inicial de la bebida.

---

## 🎨 Cómo cambiar los colores principales

Edita `tailwind.config.js`:

```js
colors: {
  carbon:  { DEFAULT: "#141414", 800: "#1a1a1a", 700: "#222222" },
  agave:   { DEFAULT: "#2db84b" },   // ← color verde principal
  cream:   { DEFAULT: "#f0e6cc" },   // ← color de textos
  gold:    { DEFAULT: "#c9973a" },   // ← acentos dorados
  chili:   { DEFAULT: "#b83232" },   // ← acentos rojos/picante
}
```

---

## ✏️ Cómo editar precios, bebidas e ingredientes

Solo edita: `src/data/menu.js`

```js
{
  name: "Zenzonte Paloma",
  price: 9,              // ← cambia precio
  ingredients: ["..."],  // ← cambia ingredientes
}
```

---

## 🚀 Subir cambios a GitHub → Vercel actualiza automáticamente

```bash
git add .
git commit -m "Actualizo precios y fotos"
git push
```

Vercel detecta el push y hace deploy automáticamente en ~1 minuto.

---

## 📱 Generar código QR

Una vez publicado en Vercel:
1. Ve a [qr-code-generator.com](https://www.qr-code-generator.com)
2. Pega tu URL de Vercel
3. Color recomendado: verde agave `#2db84b` sobre fondo oscuro
4. Descarga en PNG alta resolución para impresión

---

## 🛠️ Stack

- React 18 · Vite 4 · Tailwind CSS 3
- Fuentes: Playfair Display + Lato (Google Fonts)
