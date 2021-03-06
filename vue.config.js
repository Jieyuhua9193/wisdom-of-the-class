const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
    .set('@', resolve('src'))
    .set('assets', resolve('src/assets'))
    .set('layout', resolve('src/layout'));
  },
  devServer: {
    public: "localhost",
    proxy: {
      "/api": {
        target: "http://localhost:8088",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    }
  },
};