import webpack from 'webpack';
import packageJson from '../../package.json';


export default ({ isProduction }) => new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development'),
  },
  IS_PRODUCTION: isProduction,
});