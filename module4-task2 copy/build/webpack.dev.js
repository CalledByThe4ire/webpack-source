const path = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, '../src/assets'),
    },
    open: true,
    compress: true,
    port: 4321,
    hot: false,
  },
};
