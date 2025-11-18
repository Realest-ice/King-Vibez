/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        kvblack: "#0b0b0b",
        kvred: "#d62828",
        kvgold: "#d4af37",
        kvgray: "#121212"
      },
      fontFamily: {
        display: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: []
};
