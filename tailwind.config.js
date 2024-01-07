/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: 'Oswald, ui-serif', // Adds a new `font-display` class
      }
    },
  },
  plugins: [],
}

