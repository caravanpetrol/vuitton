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
        'logo-lg': '9.4375rem',
        'logo-sm': '7.625rem',
        navsm: '6.4vw',
        navlg: '3.125vw',
        18: '4.5rem',
      },
      fontSize: {
        xxs: '.5rem',
        xsm: '.8125rem',
        body: '1.125rem',
      },
      colors: {
        'grey-bokara': '#19110b',
        'white-floral': '#f6f5f3',
        cola: '#392d23',
      },
      boxShadow: {
        'nav-item': 'inset 0 -1px 0 0 #19110b',
        'nav-active': 'inset 0 -2px 0 0 #19110b',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
