module.export = {
  configureWebpack: {
    resolve: {
      extensions: [],
      alias: { // 别名
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
      }
    }
  }
}