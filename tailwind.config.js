/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Dark backgrounds
        carbon:  { DEFAULT: "#141414", 800: "#1a1a1a", 700: "#222222", 600: "#2a2a2a", 500: "#333333" },
        // Agave green accent
        agave:   { DEFAULT: "#2db84b", dark: "#1e8a37", glow: "rgba(45,184,75,0.15)" },
        // Warm cream / off-white text
        cream:   { DEFAULT: "#f0e6cc", muted: "#a89070" },
        // Secondary accents
        gold:    { DEFAULT: "#c9973a", muted: "#8a6520" },
        chili:   { DEFAULT: "#b83232" },
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body:    ["'Lato'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow:    "0 0 20px rgba(45,184,75,0.2)",
        "glow-sm": "0 0 10px rgba(45,184,75,0.15)",
      },
    },
  },
  plugins: [],
};
