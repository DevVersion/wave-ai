const HtmlWebpackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {

  entry: {
    main: "./src/main"
  },

  output: {
    path: __dirname + "/dist",
    filename: "[name].js"
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {
    loaders: [
      { test: /\.ts$/,   loader: 'ts-loader!angular2-template-loader', exclude: /node_modules/ },
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.less$/, loader: "raw!less" },
      { test: /\.css$/,  loader: 'style!css' },
      { test: /\.jpg$/,  loader: "file-loader" },
      { test: /\.svg$/,  loader: "url-loader?mimetype=image/svg+xml" },
      { test: /\.png$/,  loader: "url-loader?mimetype=image/png" },
      { test: /\.json$/, loader: 'json' }
    ]
  },

  plugins: [
    new LiveReloadPlugin({
      appendScriptTag: true
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ]
};