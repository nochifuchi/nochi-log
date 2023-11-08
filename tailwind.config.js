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
          'grey': '#ececec',
          'light-grey': '#F5F2F2'
        },
        'accent': {
          'blue': '#55B0F2',
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
