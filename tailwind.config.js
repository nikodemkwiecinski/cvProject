module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridRowStart:{
        '8': '8'
      },
      gridRowEnd:{
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
      },
      gridTemplateRows:{
        '8': 'repeat(8, minmax(0, 1fr))'
      },
      lineHeight:{
        '11': '4rem'
      },
      textColor:{
        'myGray': '#C7BDBD'
      },
      width:{
        'half': '50vw'
      },
      height:{
        'halfScreen': '75vh',
        'half': '50vh'
      },
      backgroundColor: theme => ({
        'myOrange': '#FF9F10',
        'mainBgc': '#FFF8F8'
      }),
      backgroundImage: theme => ({
        'left-panel': "url('../img/loginPanelBgc.png')"
      }),
      borderColor: theme =>({
        'borderOrange': '#FF9F10'
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
