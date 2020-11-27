module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        body: ["Nunito", "sans-serif"]
      },
      fontSize: {
        '7xl': '6rem',
        '8xl': '10rem',
        '9xl': '8rem'

      },

      colors: {
        darkPrimary: '#223C5F',
        darkSecondary: '#E3927F'

      },
      screens: {
        // 'dark': { 'raw': '(prefers-color-scheme: dark)' },
      }
    },
  },
  variants: {},
  plugins: [],
  experimental: {
    darkModeVariant: true
  },
  dark: 'class'
}
