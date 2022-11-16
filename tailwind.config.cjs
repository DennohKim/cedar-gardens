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
    height: {
      '128': '572px'
    },
    width: {
      '128': '424px'
    }
  },
  plugins: [],
}