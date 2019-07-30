export default () => ({
  test: /\.jsx?/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  query: {
    presets: [
      [ '@babel/preset-env', { 'targets': { 'browsers': 'last 2 versions' } } ],
      '@babel/preset-react'
    ],
    plugins: [
      ['@babel/plugin-transform-runtime', { 'corejs': 3, 'proposal': true, }],
      ['@babel/plugin-proposal-decorators', { 'legacy': true }],
      ['@babel/plugin-proposal-class-properties', { 'loose' : true }],
      '@babel/plugin-proposal-object-rest-spread',
    ]
  }
})