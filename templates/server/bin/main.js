import Koa from 'koa';
import webpack from 'webpack';
import devMiddleware from 'koa-webpack-dev-middleware';
import hotMiddleware from 'koa-webpack-hot-middleware';
import devConfig from '../../webpack.config/webpack.config.js';
import router from '../routes/index';

const app = new Koa();
const compile = webpack(devConfig);

app.use(devMiddleware(compile, {
  noInfo: true, 
  // 编译信息有颜色显示
  stats: {
    colors: true
  }
  // publicPath: devConfig.output.publicPath
}));

app.use(hotMiddleware(compile));

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000);
console.log('has listened');
