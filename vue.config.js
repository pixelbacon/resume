// vue.config.js
const path = require('path');

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/resume/'
    : '/',
  crossorigin:  process.env.NODE_ENV === 'production'
    ? undefined
    : 'anonymous',
  css: {
    loaderOptions: {
      stylus: {
        import: [
          path.resolve(__dirname, './src/styles/_libraries.styl'),
          path.resolve(__dirname, './src/styles/_variables.styl'),
          path.resolve(__dirname, './src/styles/_mixins.styl'),
        ]
      }
    }
  },
  devServer: {
    compress: true,
    headers: {
      'Access-Control-Allow-Origin': '\*',
    },
  },
};
