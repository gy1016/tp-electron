import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import { merge } from "webpack-merge";
import TerserPlugin from "terser-webpack-plugin";
import baseConfig from "./webpack.config.base";
import webpackPaths from "./webpack.paths";

const configuration: webpack.Configuration = {
  devtool: "source-map",
  mode: "production",
  target: ["web", "electron-renderer"],
  entry: [path.join(webpackPaths.srcRendererPath, "index.tsx")],
  output: {
    path: webpackPaths.distRendererPath,
    publicPath: "./",
    filename: "renderer.js",
    library: {
      type: "umd",
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        type: "asset",
        generator: {
          filename: "images/[name][contenthash:8][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 50 * 1024,
          },
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(webpackPaths.srcRendererPath, "index.ejs"),
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true,
      },
      isBrowser: false,
      isDevelopment: process.env.NODE_ENV !== "production",
    }),
  ],
};

export default merge(baseConfig, configuration);
