/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    colors: {
    'green': '#329f59',
    'black': '#262626',
    'gray-darker': '#0e0e0e',
    'gray-dark': '#242424',
    'gray-light': '#5B5B5B',
    'gray': '#3A3A3A',
    'white': '#FFFFFF',
    'black': '#000000',
    'blue-link': '#318ABC'
  },
    fontFamily: {
      'body': ['Inter', 'sans-serif'],
      'logo': ['Lexend Deca', 'sans-serif'],
    },
    extend: {}
  },
  plugins: [],
}
