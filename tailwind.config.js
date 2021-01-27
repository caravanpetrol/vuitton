module.exports = {
  purge: [
    './src/**/*.vue',
    './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Louis Vuitton Web"', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      lineHeight: {
        2: '.5rem',
        11: '2.75rem',
      },
      spacing: {
        navsm: '6.4vw',
        navxs: '4.26667vw',
        navlg: '3.125vw',
        18: '4.5rem',
        38: '9.5rem',
        50: '12.5rem',
      },
      fontSize: {
        xxs: '.5rem',
        xsm: '.8125rem',
        body: '1.125rem',
      },
      colors: {
        'grey-bokara': '#19110b',
        'white-floral': '#f6f5f3',
        'wild-sand': '#eae8e4',
        cola: '#392d23',
      },
      boxShadow: {
        header: '0 -1px 0 0 theme("colors.wild-sand")',
        tools: '0 1px 0 0 theme("colors.wild-sand")',
        navigation: 'inset 0 -1px 0 0 theme("colors.wild-sand")',
        'nav-item': 'inset 0 -1px 0 0 theme("colors.grey-bokara")',
        'nav-active': 'inset 0 -2px 0 0 theme("colors.grey-bokara")',
      },
      flex: {
        'shrink-1/3': '0 1 33.3333%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
