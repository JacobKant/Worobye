const request = require('koa2-request');
let router = require('koa-router')();

router
  .get('/tweets', async (ctx, next) => {
    let result = await request('https://api.twitter.com/1.1/search/tweets.json?q=marvel&count=2', {
      headers: {
        'Authorization': 'Bearer '+ctx.apiToken
      },
      json: true
    });
    let tweetsArray = result.body.statuses
    ctx.body = tweetsArray;
    await next();
  })
  .post('/tweets', async (ctx, next) => {
    await next();
  })

module.exports = router