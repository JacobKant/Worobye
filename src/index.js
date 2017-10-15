const Koa = require("koa");
const static = require("koa-static");
const router = require("koa-router")();
const request = require('koa2-request');
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

router.get('/tweets', async (ctx, next) => {
  let result = await request('https://api.twitter.com/1.1/search/tweets.json?q=marvel', {
    headers: {
      'Authorization': 'Bearer '+ctx.apiToken
    }
  });
  console.log(result);
  ctx.body = result.body;
  console.log(ctx.body);
  await next();
});

// router.post('/folder', function(ctx, next){
//   // add to favorite function
//   await next();
// });

app
.use(router.routes())
.use(router.allowedMethods());

app.use(static('client/dist'));

let port = process.env.PORT || 3000;
app.listen(port);