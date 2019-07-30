export default ({
  distPath,
  isProduction,
  port,
  host,
}) => ({
  path: distPath,
  filename: `static/js/[name]${isProduction ? '.[chunkhash]' : ''}.js`,
  publicPath: isProduction ? '/' : `http://${host}:${port}/`,
});