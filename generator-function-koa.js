const Koa = require('koa');
const co = require('co');
const app = new Koa();

app.use(co.wrap(function *(ctx, next){
    const start = new Date;
    yield next();
    const ms = new Date - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
}));

app.use(ctx => {
    console.log('Hello Koa');
    ctx.body = 'Hello Koa';
});

app.listen(3000);