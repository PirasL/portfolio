/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        phone: { max: "640px" },
        // => @media (min-width: 640px) { ... }

        tablet: { max: "1024px" },
        // => @media (min-width: 1024px) { ... }

        desktop: { max: "1280px" },
        // => @media (min-width: 1280px) { ... }
      },
      colors: {
        hoverGray: "#3f4040",
        lightBlue: "#56CCF2",
        darkBlue: "#2F80ED",
        lightGrey: "#333333",
        darkGrey: "#1e1e1e",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
