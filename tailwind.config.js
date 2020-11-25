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
      colors: {
        darkPrimary: '#223C5F',
        darkSecondary: '#E3927F'

      },
      screens: {
        'dark': { 'raw': '(prefers-color-scheme: dark)' },
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
