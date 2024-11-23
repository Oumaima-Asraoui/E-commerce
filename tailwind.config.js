/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Ou "media", selon tes préférences
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        cursive: ["Pacifico", "cursive"],
      },
      colors: {
        primary: "#1182c5",
        secondary: "#2aa6df",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      keyframes: {
        moveBackground: {
          "0%": { transform: "translateX(0) translateY(0)" },
          "25%": { transform: "translateX(-10px) translateY(10px)" },
          "50%": { transform: "translateX(10px) translateY(-10px)" },
          "75%": { transform: "translateX(-10px) translateY(-10px)" },
          "100%": { transform: "translateX(0) translateY(0)" },
        },
      },
      animation: {
        moveBackground: "moveBackground 5s infinite ease-in-out",
      },
      
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
