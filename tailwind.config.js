module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight:{
        '11': '4rem'
      },
      height:{
        'halfScreen': '50vh'
      },
      backgroundColor: theme => ({
        'myOrange': '#FF9F10',
        'mainBgc': '#FFF8F8'
      }),
      fontFamily:{
        'body': ['Roboto', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
