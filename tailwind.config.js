/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream:   { DEFAULT: "#f5ead0", dark: "#e8d5a8" },
        agave:   { DEFAULT: "#2a6535", light: "#3d8a4a", dark: "#1e4d27" },
        chili:   { DEFAULT: "#c0392b", light: "#e74c3c" },
        gold:    { DEFAULT: "#d4a017", light: "#f0b429" },
        bark:    { DEFAULT: "#2c1810" },
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body:    ["'Lato'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
