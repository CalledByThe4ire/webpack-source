const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const isProduction = process.env.NODE_ENV == 'production'

const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader'

const config = {
  context: path.resolve(__dirname, './src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/[name].[contenthash].js',
    clean: true,
  },
  devServer: {
    open: true,
    static: {
      directory: path.join(__dirname, '../dist'),
    },
    host: 'localhost',
    allowedHosts: 'auto',
    hot: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  optimization: {
    splitChunks: {
      minSize: 5000,
      cacheGroups: {
        reactVendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          name: 'reactVendor',
          chunks: 'all',
          priority: 1,
        },
        defaultVendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'defaultVendor',
          chunks: 'all',
          minChunks: 1,
          priority: 0,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico|avif|mp3)$/i,
        type: 'asset',
        generator: {
          filename: 'img/[name][hash][ext][query]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset',
        generator: {
          filename: 'font/[name][hash][ext][query]',
        },
      },
    ],
  },
}

module.exports = () => {
  if (isProduction) {
    config.mode = 'production'

    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: 'styles/[name][hash].css',
      }),
      new CssMinimizerWebpackPlugin(),
    )
  } else {
    config.mode = 'development'
  }
  return config
}
