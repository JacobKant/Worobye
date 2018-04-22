require('dotenv').config()
const Koa = require("koa");
const static = require("koa-static");
const mainRouter = require('./routes');
const request = require('koa2-request');
const bodyParser = require('koa-bodyparser');
const LoginTwitterInterceptor = require('./login-interceptor');
const app = new Koa();

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
  ctx.set("X-Response-Time", `${ms}ms`);
});

// Логиним сервер в твиттере, получаем токен, прокидываем его в контекст
app.use(LoginTwitterInterceptor);


app.use(bodyParser())
app.use(mainRouter.routes())
app.use(mainRouter.allowedMethods());

app.use(static('client/dist'));

let port = process.env.PORT || 3000;
app.listen(port);