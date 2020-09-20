'use strict';

const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    // TODO: can this point at the directory? This file's contents isn't used.
    raidboss: './ui/raidboss/data/manifest.txt',
  },
  output: {
    filename: (pathData) => {
      return '[name].bundle.js';
    },
  },
  module: {
    rules: [
      {
        test: /manifest.txt$/,
        use: [
          {
            loader: './webpack/loaders/manifest-loader.js',
          },
        ],
      },
    ],
  },
};
