const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/yqmap', { target: 'https://flow.browser.360.cn', changeOrigin: true }));
};
// https://www.npmjs.com/package/http-proxy-middleware 参考这个网址配置代理