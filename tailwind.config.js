/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
      mobile: { max: "639px" },
    },
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        dark: "#2b2929",
      },
    },
  },
  darkMode: "class",
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
