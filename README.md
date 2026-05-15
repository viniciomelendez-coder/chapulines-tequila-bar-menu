# 🦗 Chapulines Tequila Bar — Menú Digital Interactivo

Proyecto React + Vite + Tailwind CSS para el menú digital interactivo de Chapulines Tequila Bar.

---

## 🚀 Instalación y uso local

```bash
# 1. Instalar dependencias
npm install

# 2. Correr en modo desarrollo
npm run dev

# 3. Abrir en el navegador
# http://localhost:5173
```

---

## 📁 Estructura del proyecto

```
chapulines-menu/
├── public/
│   └── assets/
│       ├── logo.png          ← TU LOGO aquí (reemplazar)
│       └── drinks/           ← FOTOS de bebidas aquí
│           ├── zenzonte-paloma.jpg
│           ├── michelada.jpg
│           └── ... (ver lista abajo)
├── src/
│   ├── data/
│   │   └── menu.js           ← TODOS los datos del menú
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── CategoryPage.jsx
│   │   ├── DrinkCard.jsx
│   │   ├── BeerCard.jsx
│   │   ├── DrinkDetail.jsx
│   │   └── BeerDetail.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

---

## 🖼️ Cómo reemplazar el logo

1. Guarda tu logo como **PNG con fondo transparente**
2. Nómbralo exactamente: `logo.png`
3. Colócalo en: `public/assets/logo.png`

Tamaño recomendado: **400×400px** o más grande (se escala automático).

---

## 📸 Cómo agregar fotos de bebidas

Cada bebida tiene un campo `image` en `src/data/menu.js`.

Para agregar fotos reales:
1. Toma o consigue fotografías de cada bebida
2. Nómbralas exactamente igual que el campo `image` en el archivo de datos
3. Colócalas en `public/assets/drinks/`

**Lista de imágenes necesarias:**

### Los Tragos
- `zenzonte-paloma.jpg`
- `michelada.jpg`
- `cantarito.jpg`
- `old-fashion.jpg`
- `zenzonte-water.jpg`
- `vampiro.jpg`
- `charro-negro.jpg`
- `acapulco-de-noche.jpg`

### Margaritas
- `frozen-margarita.jpg`
- `skinny-margarita.jpg`
- `black-berrie.jpg`
- `spicy-margarita.jpg`
- `sassy-rita.jpg`
- `presidente-margarita.jpg`
- `jp-cadillac.jpg`

### Mezcal Drinks
- `mezcalita.jpg`
- `bad-bunny.jpg`
- `spicy-mezcalita.jpg`
- `oaxaca-mule.jpg`

### Cervezas Draft
- `yee-haw.jpg`
- `modelo.jpg`
- `xx-amber.jpg`
- `pacifico.jpg`
- `ultra.jpg`
- `local-ipa.jpg`

### Cervezas Bottles & Cans
- `corona.jpg`
- `negra-modelo.jpg`
- `local-porter.jpg`
- `local-lager.jpg`
- `victoria.jpg`
- `tecate.jpg`
- `bohemia.jpg`
- `bud-light.jpg`
- `miller-lite.jpg`

**Formato recomendado:** JPG, 800×600px mínimo, relación 4:3.

---

## ✏️ Cómo editar precios e ingredientes

Abre `src/data/menu.js` y modifica los campos directamente:

```js
{
  name: "Zenzonte Paloma",
  price: 9,                    // ← Cambia el precio aquí
  ingredients: ["..."],        // ← Cambia ingredientes aquí
  description: "...",          // ← Cambia descripción aquí
}
```

---

## 🌐 Publicar en Netlify (gratis)

### Opción A — Drag & Drop (más fácil)
```bash
npm run build          # Genera la carpeta "dist/"
```
Luego ve a [app.netlify.com](https://app.netlify.com), arrastra la carpeta `dist/` y listo.

### Opción B — GitHub + Netlify (recomendado para actualizaciones)
1. Sube el proyecto a GitHub
2. En Netlify: "Add new site" → "Import from Git"
3. Selecciona tu repo
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click "Deploy"

---

## 🌐 Publicar en Vercel (gratis)

```bash
npm install -g vercel  # Instalar Vercel CLI
vercel                 # Seguir instrucciones
```

O conecta tu repo de GitHub en [vercel.com](https://vercel.com) — detecta Vite automáticamente.

---

## 📱 Generar el código QR

Una vez que tengas tu URL publicada (ej: `chapulines-menu.netlify.app`):

1. Ve a [qr-code-generator.com](https://www.qr-code-generator.com) o similar
2. Pega tu URL
3. Personaliza los colores (verde agave #2a6535 recomendado)
4. Descarga en alta resolución para imprimir

---

## 🛠️ Tecnologías

- [React 18](https://react.dev)
- [Vite 4](https://vitejs.dev)
- [Tailwind CSS 3](https://tailwindcss.com)
- Fuentes: Playfair Display + Lato (Google Fonts)

---

## 📞 Soporte

Para actualizar precios, agregar bebidas o cambiar fotos — edita solo el archivo `src/data/menu.js`.
