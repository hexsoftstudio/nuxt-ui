const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  exampleMsg: 'hello',
  css: [
    '@hexsoftstudio/theme-default/styles/bulma.css'
  ],
  modules: [
    { handler: require('../') },
  ]
}
