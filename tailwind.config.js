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
          'light-black': '#535151',
          'dark-gray': '#B3B1B1',
          'gray': '#d9d9d9',
          'light-gray': '#ececec'
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
