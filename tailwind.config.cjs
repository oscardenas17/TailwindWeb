/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme =>({
        'wave-pattern': 'url(../img/wave-white.png)'
      })
    },
  },
  plugins: [],
}