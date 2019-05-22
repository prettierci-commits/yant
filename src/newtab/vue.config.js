const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path')

module.exports = {
  publicPath: './',
  outputDir: path.resolve(__dirname, '../../ext/src/newtab'),

  transpileDependencies: [
    'vuex-module-decorators',
    'vuex-ltm'
  ],

  pages: {
    index: {
      entry: 'src/index/main.ts',
      chunks: ['chunk-common', 'chunk-index-vendors', 'index'],
      template: 'public/index.html'
    },
    options: {
      entry: 'src/options/main.ts',
      chunks: ['chunk-common', 'chunk-options-vendors', 'options'],
      template: 'public/options.html'
    }
  },

  chainWebpack: config => {
    const options = module.exports
    const pages = options.pages
    const pageKeys = Object.keys(pages)

    // Long-term caching
    const IS_VENDOR = /\/node_modules\//

    // Split chunk-vendors
    config.optimization
      .splitChunks({
        cacheGroups: {
          ...pageKeys.map(key => ({
            name: `chunk-${key}-vendors`,
            priority: -11,
            chunks: chunk => chunk.name === key,
            test: IS_VENDOR,
            enforce: true
          })),
          common: {
            name: 'chunk-common',
            priority: -20,
            chunks: 'initial',
            minChunks: 2,
            reuseExistingChunk: true,
            enforce: true
          }
        }
      })

    // SVG
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')

    // Webpack Bundle Analyzer
    config
      .plugin('webpack-bundle-analyzer')
      .use(BundleAnalyzerPlugin, [{
        analyzerMode: process.env.NODE_ENV === 'production' ? 'static' : 'disabled'
      }])
  }
}
