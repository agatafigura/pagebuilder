module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      minHeight: {
        '75vh': '75vh'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
