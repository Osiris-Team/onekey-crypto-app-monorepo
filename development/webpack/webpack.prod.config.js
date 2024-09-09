const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: false,
  output: {
    clean: true,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          keep_classnames: true,
          keep_fnames: true,
          format: {
            comments: false,
          },
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 102400,
      maxSize: 4194304,
      hidePathInfo: true,
      automaticNameDelimiter: '.',
      name: false,
      maxInitialRequests: 20,
      maxAsyncRequests: 50000,
      cacheGroups: {},
    },
  },
};
