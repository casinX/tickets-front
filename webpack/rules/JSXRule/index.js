export default () => ({
  test: /\.jsx?/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  query: {
    presets: [
      [ '@babel/preset-env', {
        useBuiltIns: 'usage',
        corejs: 3,
      } ],
      '@babel/preset-react',
    ],
    plugins: [
      ['@babel/plugin-transform-runtime'],
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose : true }],
    ]
  }
})