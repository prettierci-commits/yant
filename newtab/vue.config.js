const path = require('path')

module.exports = {
  publicPath: './',
  outputDir: path.resolve(__dirname, '../../ext/src/newtab'),

  transpileDependencies: [
    // 'vuex-persist',
    'vuex-module-decorators'
  ]
}
