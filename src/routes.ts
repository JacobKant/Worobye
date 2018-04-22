import * as request from 'koa2-request';
// const request = require('koa2-request');
let router = require('koa-router')();
let sequelize = require('./models');
let Tweet = require('./tweet');

router
  .get('/api/tweets', async (ctx, next) => {
    let result = await request('https://api.twitter.com/1.1/search/tweets.json?q=marvel&count=20', {
      headers: {
        'Authorization': 'Bearer ' + ctx.apiToken
      },
      json: true
    });
    let tweetsArray = result.body.statuses;
    let newTweets = tweetsArray.map(item => Tweet.creteTweetFromTweetter(item));
    ctx.body = newTweets;
    await next();
  })
  .get('/api/folder', async (ctx, next) => {
    ctx.body = await sequelize.UsTweet.findAll();
  })
  .post('/api/tweets', async (ctx, next) => {
    console.log(ctx.request.body);
    await sequelize.UsTweet.create(ctx.request.body);
    ctx.response.status = 201;
    ctx.body = 'ok';
  });

module.exports = router;