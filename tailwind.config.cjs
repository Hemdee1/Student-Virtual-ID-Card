/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Zendot: "Zen Dots, cursive",
        Lato: "Lato, sans-serif",
      },
      width: {
        fullscreen: "1700px",
      },
    },
  },
  plugins: [],
};
