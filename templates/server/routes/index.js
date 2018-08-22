import fs from 'fs';
import Router from 'koa-router';

const router = new Router();

router.get('/', (ctx) => {
  ctx.response.type = 'html';
  ctx.response.body = fs.createReadStream('./src/index.html');
});

export default router;