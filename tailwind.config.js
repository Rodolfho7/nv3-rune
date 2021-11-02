module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
    './src/**/*.component.html'
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
