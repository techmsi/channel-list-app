const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const appFolder = 'app';
const isNotProduction = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    `./${appFolder}/client.js`,
  ],
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'js/bundle.js'
  },
  sassLoader: {
    includePaths: [ 'scss/' ]
  },
  cache: true,
  progress: true,
  devtool: false,
  watch: false,
  module: {
    loaders: [
      {
        test:/\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: [ 'es2015', 'stage-2', 'react' ],
          plugins: [ 'react-hot-loader/babel', 'transform-class-properties' ]
        }
      },
      {
          test: /\.scss$/,
          loaders: ['style', 'css?sourceMap!sass?sourceMap' , ExtractTextPlugin.extract('css!sass')]
      },
      {
        include: /\.json$/,
        loaders: ['json-loader']
      }
    ],
    postcss: [
      autoprefixer({
        browsers: ['last 2 versions', '> 1%']
      })
    ]
  },
  resolve: {
    extensions: ['', '.json', '.js', '.jsx'],
    alias: {
      'react': 'react-lite',
      'react-dom': 'react-lite'
    }
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('css/style.css', {
        allChunks: true
    })
  ]
};
