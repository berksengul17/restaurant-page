const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      title: "MC Restaurant",
      template: "./src/index.html",
    }),
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
        use: ["style-loader", "css-loader"],
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
