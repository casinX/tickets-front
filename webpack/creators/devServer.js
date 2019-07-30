export default ({ distPath, port, host, proxy }) => ({
  contentBase: distPath,
  https: false,
  historyApiFallback: true,
  compress: true,
  host,
  port,
  disableHostCheck: true,
  stats: {
    all: false,
    modules: true,
    maxModules: 0,
    errors: true,
    warnings: true,
    moduleTrace: true,
    errorDetails: true
  },
  proxy,
});