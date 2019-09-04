const projectName = 'vue-cli';
module.exports = {
  // 静态资源路径
  publicPath: process.env.NODE_ENV === "development" ? process.env.BASE_URL : './',
  // 输出路径
  outputDir: 'dist',
  // 关闭sourcemap
  productionSourceMap: false,
  // css配置
  css: {
    extract: {
      filename: `css/${projectName}/[name].[hash:5].css`,
      chunkFilename: `css/${projectName}/[name].[hash:5].css`
    }
  },
  configureWebpack: {
    // js配置
    output: {
      filename: `js/${projectName}/[name].[hash:5].js`,
      chunkFilename: `js/${projectName}/[name].[hash:5].js`
    },
  },
  chainWebpack: config => {
    // images配置
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        options.fallback.options.name = `images/${projectName}/[name].[hash:5].[ext]`
        return options
      })
    // svg配置
    config.module.rule('svg')
      .use('file-loader')
      .loader('file-loader')
      .tap(options => {
        options.name = `images/${projectName}/[name].[hash:5].[ext]`
        return options
      })
    // fonts配置
    config.module.rule('fonts')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        options.fallback.options.name = `fonts/${projectName}/[name].[hash:5].[ext]`
        return options
      })
  },
  // 开发时用
  devServer: {
    proxy: 'http://127.0.0.1'

  },
  pluginOptions: {
    projectName: projectName
  },
  indexPath: `html/${projectName}/index.html`
}


