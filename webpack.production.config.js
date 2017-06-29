var path = require("path");
var SRC = path.join(__dirname, "app/");
var NODE_MODULES = path.join(__dirname, "node_modules/");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const context = path.resolve(__dirname, "src");
const extractCSS = new ExtractTextPlugin("[name]-one.css");
var combineLoaders = require("webpack-combine-loaders");
module.exports = {
  context,
  entry: {
    app: __dirname + "/src/entry/index.js",
    vendor: [
      "react-dom",
      "react",
      "redux-observable",
      "redux",
      "react-burger-menu",
      "react-transition-group/CSSTransitionGroup",
      "halogen/GridLoader",
      "react-native"
    ]
  },
  output: {
    path: __dirname + "/public",
    filename: "[name]-[chunkhash].js",
    chunkFilename: "[name]-[chunkhash].async.js",
    publicPath: "/"
  },
  resolve: {
    modules: [SRC, NODE_MODULES], // root folders for Webpack resolving, so we can now call require('greet')
    alias: {
      actions: path.join(SRC, "actions/"), // sample alias, calling require('actions/file') will resolve to ./src/actions/file.js
      "react-native": "react-native-web"
    }
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loaders: ["json-loader"]
      },
      {
        test: /\.(otf|eot|woff|ttc|woff2|ttf|svg|png|jpg|jpeg)$/,
        loader: "file-loader?limit=30000&name=[name]-[hash].[ext]"
      },
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "node_modules/react-native-uncompiled")
        ],
        loader: "babel-loader",
        query: {
          plugins: [
            "transform-react-jsx",
            [
              "react-css-modules",
              {
                context
              }
            ]
          ]
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: "css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader"
        })
      }
    ]
  },

  plugins: [
    new webpack.BannerPlugin("Copyright bookfromme"),
    new HtmlWebpackPlugin({
      template: __dirname + "/index.html"
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin({
      filename: "style-[hash].css",
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ["vendor", "manifest"]
    })
  ]
};
