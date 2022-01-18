module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
    './src/**/*.component.html',
    './src/**/*.component.ts',
    './src/index.html'
    ],
    safelist: ['dark']
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      hover: ['dark']
    },
  },
  plugins: [],
}
