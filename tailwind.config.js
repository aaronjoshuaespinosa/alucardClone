/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sora': ['Sora'],
        'quick': ['Quicksand'],
        'inter': ['Inter']
      },

      colors : {
        'main': '#FFF',
        'secondary': '#999',
        'red': '#8a1208',
        'card': '#D0D2C4'
      }
    },
  },
  plugins: [],
}