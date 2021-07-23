const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      colors: {
        primary: colors.amber,
        secondary: colors.emerald
      },
      gridTemplateRows: {
        '3-fix': '111px auto 60px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
