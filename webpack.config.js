const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      title: "CAFE MC",
      favicon: "./src/images/icon.ico",
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: "asset/resource",
        // generator: {
        //   outputPath: "images/",
        // },
      },
      {
        test: /\.(woff|woff2|ttf|eot|otf)$/,
        type: "asset/resource",
        // generator: {
        //   outputPath: "fonts/",
        // },
      },
    ],
  },
};
