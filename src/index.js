require('dotenv').config()
const Koa = require("koa");
const static = require("koa-static");
const mainRouter = require('./routes');
const request = require('koa2-request');
const bodyParser = require('koa-bodyparser');
const app = new Koa();

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
  ctx.set("X-Response-Time", `${ms}ms`);
});

app.use(async (ctx, next)=>{
  let result = await request('https://api.twitter.com/oauth2/token', {
    method: 'post',
    headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Authorization': 'Basic aGt1VWNxOThBT3h4VFg5WEk5clU4cVBOdzpSdFAxSnBnVnVlcldoQWJLRm8yMnVFZzRzdWJPZmRYcXY4cHI3UmJsQmlydDNLRU14Yg=='
    },
    json: true,
    body: 'grant_type=client_credentials'
  });
  ctx.apiToken = result.body.access_token;
  console.log('SetNewTokenTwitter ', ctx.apiToken);
  await next();
});

app
.use(bodyParser())
.use(mainRouter.routes())
.use(mainRouter.allowedMethods());

app.use(static('client/dist'));

let port = process.env.PORT || 3000;
app.listen(port);