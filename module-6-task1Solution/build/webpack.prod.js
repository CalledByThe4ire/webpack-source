const FontminPlugin = require('fontmin-webpack');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new FontminPlugin({
      autodetect: true,
      glyphs: ['\uf0c8'],
      allowedFilesRegex: null,
      skippedFilesRegex: null,
    }),
  ],
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              'imagemin-gifsicle',
              'imagemin-mozjpeg',
              'imagemin-pngquant',
              'imagemin-svgo',
              ['gifsicle', {interlaced: true}],
              ['jpegtran', {progressive: true}],
              ['optipng', {optimizationLevel: 5}],
            ],
          },
        },
        loader: false,
      }),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
};
