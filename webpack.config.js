
var path = require('path');
var SRC = path.join(__dirname, 'src/');
var NODE_MODULES = path.join(__dirname, 'node_modules/');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const context = path.resolve(__dirname, 'src');

module.exports = {
  context,
  devtool: 'eval-source-map',
  entry: {
    app:__dirname + "/src/entry/index.js",
    vendor:["react-dom","react","redux-observable","redux","react-router"]
  },
  output: {
    path: __dirname + "/public",
    filename: '[name]-[chunkhash].js',
    chunkFilename:"[name]-[chunkhash].async.js"
  },
  devServer: {
    contentBase: "/public",
    historyApiFallback: true,
    inline: true,
    hot: false
  },
  resolve: {
        modules: [SRC, NODE_MODULES],                  // root folders for Webpack resolving, so we can now call require('greet')
        alias: {
            'actions': path.join(SRC, 'actions/'),    // sample alias, calling require('actions/file') will resolve to ./src/actions/file.js
        }
    },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loaders: ['json-loader']
      },
      {
        test: /\.(otf|eot|woff|woff2|ttc|ttf|svg|png|jpg)$/,
        loader: 'file-loader?limit=30000&name=[name]-[hash].[ext]'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: [
            'transform-react-jsx',
            [
              'react-css-modules',
              {
                context
              }
            ]
          ]
        },
      },
      {
        test: /\.css$/,
        use: [
            {loader: 'style-loader'},
            {loader: 'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader'},
        ]
      },
    ]
  },
  plugins: [
    new webpack.BannerPlugin("Copyright Ilyas Malgazhdarov"),
    new HtmlWebpackPlugin({
        template: __dirname + "/index.html"
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest'],
    })
  ],
  stats: 'minimal'
}








