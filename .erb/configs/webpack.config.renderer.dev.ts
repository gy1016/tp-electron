import "webpack-dev-server";
import path from "path";
import webpack from "webpack";
import { merge } from "webpack-merge";
import { spawn } from "child_process";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import baseConfig from "./webpack.config.base";
import webpackPaths from "./webpack.paths";

const configuration: webpack.Configuration = {
  mode: "development",
  target: ["web", "electron-renderer"],
  entry: path.join(webpackPaths.srcRendererPath, "index.tsx"),
  output: {
    path: webpackPaths.distRendererPath,
    publicPath: "/",
    filename: "renderer.dev.js",
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      filename: path.join("index.html"),
      template: path.join(webpackPaths.srcRendererPath, "index.ejs"),
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true,
      },
      isBrowser: false,
    }),
  ],
  devServer: {
    port: 9527,
    compress: true,
    hot: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    static: {
      publicPath: "/",
    },
    historyApiFallback: {
      verbose: true,
    },
    proxy: {
      // '/api': 'http://localhost:9000',
    },
    setupMiddlewares(middlewares) {
      console.log("Starting preload.js builder...");
      const preloadProcess = spawn("npm", ["run", "start:preload"], {
        shell: true,
        stdio: "inherit",
      })
        .on("close", (code: number) => process.exit(code!))
        .on("error", (spawnError) => console.error(spawnError));

      console.log("Starting Main Process...");
      let args = ["run", "start:main"];
      if (process.env.MAIN_ARGS) {
        args = args.concat(
          ["--", ...process.env.MAIN_ARGS.matchAll(/"[^"]+"|[^\s"]+/g)].flat()
        );
      }
      spawn("npm", args, {
        shell: true,
        stdio: "inherit",
      })
        .on("close", (code: number) => {
          preloadProcess.kill();
          process.exit(code!);
        })
        .on("error", (spawnError) => console.error(spawnError));
      return middlewares;
    },
  },
};

export default merge(baseConfig, configuration);
