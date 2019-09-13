import { CleanWebpackPlugin } from 'clean-webpack-plugin';

import paths from './paths';
import rules from './rules';

export default {
  mode: 'production',
  output: {
    filename: `${paths.jsFolder}/[name].[hash].js`,
    path: paths.outputPath,
    chunkFilename: '[name].[chunkhash].js'
  },
  module: {
    rules
  },
  plugins: [new CleanWebpackPlugin()],
  devtool: 'source-map'
};
