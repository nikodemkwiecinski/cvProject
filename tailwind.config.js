module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight:{
        '11': '4rem'
      },
      textColor:{
        'myGray': '#C7BDBD'
      },
      height:{
        'halfScreen': '75vh'
      },
      backgroundColor: theme => ({
        'myOrange': '#FF9F10',
        'mainBgc': '#FFF8F8'
      }),
      backgroundImage: theme => ({
        'left-panel': "url('../img/loginPanelBgc.png')"
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
