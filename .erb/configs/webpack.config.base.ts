import path from "path";
import webpack from "webpack";
import webpackPaths from "./webpack.paths";

const configuration: webpack.Configuration = {
  stats: "errors-only",
  output: {
    path: webpackPaths.srcPath,
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: {
          loader: "ts-loader",
          options: {
            // Remove this line to enable type checking in webpack builds
            transpileOnly: true,
            compilerOptions: {
              module: "esnext",
            },
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
};

export default configuration;
