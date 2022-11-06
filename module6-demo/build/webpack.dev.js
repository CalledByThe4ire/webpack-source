const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '../src/assets'),
    },
    allowedHosts: 'auto',
    open: true,
    compress: true,
    port: 3001,
    hot: false,
  },
};
