/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'jost': ['Jost','sans-serif'],
      'dancing': ['Dancing Script', 'cursive'],
      'cormorant': ['Cormorant Garamond','serif'],

    },
    colors: {
      'primary-color': '#287216',
      'button-gray': '#D9D9D9',
      

    },
  },
  plugins: [],
}