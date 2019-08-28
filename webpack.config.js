const path = require('path');

module.exports = {
  entry: './src/assets/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public/')
  },
  mode: 'development'
};

