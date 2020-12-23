module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('cssnano')({
      preset: ['default', {
        discardComments: {
          removeAll: true
        }
      }]
    }),
    require('@fullhuman/postcss-purgecss')({
      content: [
        "./public/*.html",
        "./public/*.js"
      ],
      css: ["./style.css"],
      defaultExtractor: content => content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

    })
  ]
}