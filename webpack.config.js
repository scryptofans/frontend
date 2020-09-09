const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebpackPlugin({
  title: "Output Management",
  template: path.resolve("public/index.html"),
});

const tsRule = {
  test: /\.tsx?$/,
  use: "ts-loader",
  exclude: /node_modules/,
};

const cssRule = {
  test: /\.css$/,
  use: ["style-loader", "css-loader"],
};

module.exports = {
  mode: "development",
  plugins: [htmlPlugin],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [tsRule, cssRule],
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
  },
};
