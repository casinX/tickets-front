const port = '9000';
const host = '127.0.0.1';
const srcName = 'src';
const distName = 'dist';


const proxy = {
  '/api': {
    target: 'http://127.0.0.1:8000',
    pathRewrite: { '^/api': '' },
    onProxyReq: (proxyReq, req, res) => {
      proxyReq.setHeader('Host', '127.0.0.1');
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