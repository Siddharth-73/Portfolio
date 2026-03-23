/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#F5F2E8", // Cream/Off-white
        "on-primary": "#1A1614", // Deep Espresso
        "background": "#1A1614", // Deep Espresso
        "surface": "#241F1C", // Warm Charcoal
        "surface-variant": "#2D2824",
        "outline": "#4A4138", // Muted Brass/Brown
        "secondary": "#C5A059", // Muted Gold/Brass
        "accent": "#C5A059"
      },
      fontFamily: {
        "headline": ["Epilogue", "sans-serif"],
        "body": ["Epilogue", "sans-serif"],
        "label": ["Epilogue", "sans-serif"],
        "epilogue": ["Epilogue", "sans-serif"]
      },
      borderRadius: {"DEFAULT": "0px", "lg": "0px", "xl": "0px", "full": "9999px"},
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
