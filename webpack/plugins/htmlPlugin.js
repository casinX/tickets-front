import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';


export default ({ srcPath, distPath, isProduction }) => new HtmlWebpackPlugin({
  filename: path.resolve(distPath, 'index.html'),
  template: path.resolve(srcPath, 'index.ejs' ),
  title: '',
  inject: true,
  isProduction,
});