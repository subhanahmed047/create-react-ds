const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
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
  watch: true,
  mode: "production",
  watchOptions: {
    ignored: /node_modules/,
  },
};
