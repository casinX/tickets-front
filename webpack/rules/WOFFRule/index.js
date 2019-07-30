export default () => ({
  test: /\.woff2?/,
  exclude: /node_modules/,
  loader: 'url-loader',
  query: {
    limit: 1024 * 5,
    name: `static/fonts/[name].[ext]`,
    publicPath: '/',
  }
});