module.exports = {
  purge: ['./src/**/*.vue', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        header: '0 -1px 0 0 theme("colors.wild-sand")',
        'nav-active': 'inset 0 -2px 0 0 theme("colors.grey-bokara")',
        'nav-item': 'inset 0 -1px 0 0 theme("colors.grey-bokara")',
        navigation: 'inset 0 -1px 0 0 theme("colors.wild-sand")',
        tools: '0 1px 0 0 theme("colors.wild-sand")', // theme("spacing.px")
        underline: '0 1px 0',
        'button-secondary': 'inset 0 0 0 1px theme("colors.grey-bokara")',
        'button-secondary-hover': 'inset 0 0 0 1px theme("colors.wild-sand")',
      },
      colors: {
        cola: '#392d23',
        'grey-bokara': '#19110b',
        'white-floral': '#f6f5f3',
        'wild-sand': '#eae8e4',
      },
      flex: {
        'shrink-1/3': '0 1 33.3333%',
      },
      fontFamily: {
        sans: ['"Louis Vuitton Web"', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        xxs: '0.5rem',
        xsm: '0.8125rem',
        body: '1.125rem',
        title: '2.375rem',
      },
      lineHeight: {
        2: '0.5rem',
        11: '2.75rem',
      },
      maxHeight: {
        32.5: 'theme("spacing[32.5]")',
      },
      minHeight: {
        27.5: 'theme("spacing[27.5]")',
      },
      spacing: {
        'vw-sm': '3.125vw',
        'vw-md': '4.26667vw',
        'vw-lg': '6.4vw',
        'vh-xl': '70vh',
        3.75: '0.938rem',
        18: '4.5rem',
        '27.5': '6.875rem',
        30: '7.5rem',
        32.5: '8.125rem',
        38: '9.5rem',
        50: '12.5rem',
        'product-item': 'calc(50% - 0.25rem)',
      },
      transitionTimingFunction: {
        sine: 'cubic-bezier(.39,.575,.565,1)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
