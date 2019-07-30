const port = '9000';
const host = '127.0.0.1';
const srcName = 'src';
const distName = 'dist';


const proxy = {
  '/api': {
    target: 'http://somesite.ru/api',
    pathRewrite: { '^/api': '' },
    onProxyReq: (proxyReq, req, res) => {
      proxyReq.setHeader('Host', 'somesite.ru');
    },
  },
};


export default {
  proxy,
  port,
  host,
  srcName,
  distName,
}