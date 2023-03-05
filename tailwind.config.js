/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {},
    fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
        'sans': ['Inter var', ...defaultTheme.fontFamily.sans],
    }
  },
  plugins: [],
  darkMode: 'class'
}
