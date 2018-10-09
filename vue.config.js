// vue.config.js
const path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        import: [
          path.resolve(__dirname, './src/assets/styles/_libraries.styl'),
          path.resolve(__dirname, './src/assets/styles/_variables.styl'),
          path.resolve(__dirname, './src/assets/styles/_mixins.styl'),
        ]
      }
    }
  }
}
