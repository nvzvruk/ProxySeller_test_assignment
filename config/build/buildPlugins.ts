import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import { BuildPaths, Mode } from "./types";

export const buildPlugins = (
  mode: Mode,
  paths: BuildPaths,
): WebpackPluginInstance[] => {
  return [
    new ProgressPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({ template: paths.html }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: "write-references",
      },
    }),
  ];
};
