const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    library: "subAppVue2",
    libraryTarget: "umd",
  },
  mode: "development",
  devServer: {
    port: 7102,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "sub_app_vue2",
      filename: "remoteEntry.js",
      exposes: {},
      shared: { vue: { singleton: true, eager: true } },
    }),
    new (require("vue-loader").VueLoaderPlugin)(),
  ],
};
