const FontminPlugin = require('fontmin-webpack');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [], // здесь настраиваться оптимизация для шрифтов
  optimization: {
    // здесь настраиваюстся оптимизации для изображений
    splitChunks: {
      chunks: 'all',
    },
  },
};
