/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: "Montserrat",
      },
    },
   
  },
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }

      'mobile': {'max': '639px'},
    },

    extend: {
        colors: {
          dark: '#2b2929',
        },
      },
  },
  darkMode: 'class',
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
