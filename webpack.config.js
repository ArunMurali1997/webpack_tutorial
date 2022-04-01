const path = require("path");

module.exports = {
  // mode: "development",
  entry: "./src/index.js",
  output: { path: path.join(__dirname, "public"), filename: "bundle.js" },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
  //   options: { devtools: "cheap-module-eval-source-map" },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3000,
  },
};
