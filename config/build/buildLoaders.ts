import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { RuleSetRule } from 'webpack'
import { BuildPaths, Mode } from './types'

export const buildLoaders = (mode: Mode, paths: BuildPaths): RuleSetRule[] => [
  {
    test: /\.css$/,
    include: paths.src,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
  },
  {
    test: /\.(ts|tsx)$/,
    use: 'babel-loader',
    exclude: /node_modules/,
  },
]
