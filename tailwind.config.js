/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        body: [
          'source-han-sans-japanese',
          'sans-serif'
        ]
      },
      colors: {
        'primary': {
          'black': '#000',
          'dark-grey': '#d9d9d9',
          'grey': '#ececec'
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
