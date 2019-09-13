export default [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader'
    }
  },
  {
    test: /\.(jpg|png|gif|svg)$/i,
    use: ['url-loader?limit=10000', 'img-loader']
  }
];
