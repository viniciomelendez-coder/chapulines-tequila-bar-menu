/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        carbon:  { DEFAULT: "#141414", 800: "#1a1a1a", 700: "#222222", 600: "#2a2a2a" },
        agave:   { DEFAULT: "#2db84b", dark: "#1e8a37" },
        cream:   { DEFAULT: "#f0e6cc", muted: "#a89070" },
        gold:    { DEFAULT: "#c9973a", muted: "#8a6520" },
        chili:   { DEFAULT: "#b83232" },
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body:    ["'Lato'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "glow-sm": "0 0 10px rgba(45,184,75,0.13)",
        glow:      "0 0 22px rgba(45,184,75,0.18)",
      },
    },
  },
  plugins: [],
};
