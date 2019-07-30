import path from 'path';

import devServer from './creators/devServer';
import entry from './creators/entry';
import output from './creators/output';
import resolver from './creators/resolver';
import optimizer from './creators/optimizer';

import SCSSRule from './rules/SCSSRule';
import JSXRule from './rules/JSXRule';
import WOFFRule from './rules/WOFFRule';
import ImgRule from './rules/ImgRule';

import htmlPlugin from './plugins/htmlPlugin';
import definePlugin from './plugins/definePlugin';
import extractCSSPlugin from './plugins/extractCSSPlugin';

import config from './config';


const isProduction = process.env.NODE_ENV === 'production';

const { host, port, srcName, distName, proxy } = config;

const rootPath = path.resolve(__dirname, '../');
const srcPath = path.resolve(rootPath, `./${srcName}`);
const distPath = path.resolve(rootPath, `./${distName}`);


export default {
  mode: isProduction ? 'production' : 'development',

  entry: entry({ srcPath }),

  output: output({ isProduction, distPath, port, host }),

  devtool: isProduction ? false : 'eval-source-map',

  resolve: resolver({ srcPath }),

  module: {
    rules: [
      SCSSRule({ isProduction, srcPath }),
      JSXRule(),
      WOFFRule(),
      ImgRule({ isProduction }),
    ]
  },

  optimization: optimizer({ isProduction }),

  plugins: [
    htmlPlugin({ srcPath, distPath, isProduction }),
    definePlugin({ isProduction }),
    extractCSSPlugin({ isProduction }),
  ],

  devServer: devServer({ distPath, port, host, proxy }),
}