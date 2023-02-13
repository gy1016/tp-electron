import path from "path";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

const configuration: webpack.Configuration = {
  entry: "./src/renderer/index.tsx",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "scripts/[name].[contenthash].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public", "index.html"),
      filename: "index.html",
      title: "TP-任务池",
      inject: "body",
      favicon: "./public/favicon.ico",
    }),
  ],
};

export default configuration;
