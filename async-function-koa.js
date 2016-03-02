// use 'start-async.js' as entry file to run this code
const Koa = require('koa');
const app = new Koa();

// x-response-time
app.use(async (ctx, next) => {
    const start = new Date;
    await next();
    const ms = new Date - start;
    console.log('Setting X-Response-Time');
    ctx.set('X-Response-Time', `${ms}ms`);
});

// logger
app.use(async (ctx, next) => {
    const start = new Date;
    await next();
    const ms = new Date - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// response
app.use(ctx => {
    console.log('Hello Koa');
    ctx.body = 'Hello Koa';
});

app.listen(3000);