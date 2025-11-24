/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"], // matches Prismic
      },
      fontSize: {
        hero: "clamp(3rem, 20vmin, 20rem)", // same as Prismic Hero
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
