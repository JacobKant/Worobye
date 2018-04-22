const request = require('koa2-request');

// Логиним сервер в твиттере, получаем токен, прокидываем его в контекст
let apiToken = null;
const LoginTwitterInterceptor = async (ctx, next) => {
  if (!apiToken) {
    await doLogin(ctx);
  } else {
    ctx.apiToken = apiToken;
  }

  try {
    await next();
  } catch(err) {
    console.error(err);
    await doLogin(ctx);
    await next();
  }
};

const doLogin = async (ctx) => {
  const result = await request('https://api.twitter.com/oauth2/token', {
    method: 'post',
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Authorization': 'Basic aGt1VWNxOThBT3h4VFg5WEk5clU4cVBOdzpSdFAxSnBnVnVlcldoQWJLRm8yMnVFZzRzdWJPZmRYcXY4cHI3UmJsQmlydDNLRU14Yg=='
    },
    json: true,
    body: 'grant_type=client_credentials'
  });
  ctx.apiToken = result.body.access_token;
  apiToken = result.body.access_token;
  console.log('SetNewTokenTwitter ', ctx.apiToken);
}

module.exports = LoginTwitterInterceptor;