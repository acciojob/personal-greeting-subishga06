const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ]
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  // ✅ Add devServer section to set the port to 8080
  devServer: {
    port: 8080,         // <-- change port here
    open: true,         // <-- automatically open browser
    hot: true,          // <-- enable hot module replacement
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
  }
};
