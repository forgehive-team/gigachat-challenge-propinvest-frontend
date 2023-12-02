/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#FFF',
        secondary: '#262C35',
        accent: '#1A4586',
        hover: {
          950: '#265AA9',
          500: '#D6E0F0'
        },
        dark: '#191919'
      }
    }
  },
  plugins: []
}
