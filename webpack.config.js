const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  entry: ["./src/index.js"],
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
  plugins: [new CleanWebpackPlugin()],
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  externals: {
    react: "commonjs react",
  },
};
