const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
  entry: ["./src/index.js"],
  output: {
    libraryTarget: "commonjs",
    path: path.resolve(__dirname, "./dist"),
    filename: "index.js",
  },
  plugins: [new CleanWebpackPlugin()],
};
