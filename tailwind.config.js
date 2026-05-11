/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#eef6ff",
          100: "#d9ecff",
          200: "#bcdeff",
          300: "#8ecbfe",
          400: "#59affd",
          500: "#3b91fa",
          600: "#2272ef",
          700: "#1a5cdc",
          800: "#193779",
          900: "#1c418c",
          950: "#1f396a",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
}


