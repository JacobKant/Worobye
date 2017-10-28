const request = require('koa2-request');
let router = require('koa-router')();
let sequelize = require('../models');
var Tweet = require('./tweet');

router
  .get('/api/tweets', async (ctx, next) => {
    let result = await request('https://api.twitter.com/1.1/search/tweets.json?q=marvel&count=20', {
      headers: {
        'Authorization': 'Bearer '+ctx.apiToken
      },
      json: true
    });
    let tweetsArray = result.body.statuses;
    let newTweets = tweetsArray.map(item => Tweet.creteTweetFromTweetter(item));
    ctx.body = newTweets;
    await next();
  })
  .post('/api/tweets', async (ctx, next) => {
    await next();
  })
  .get('/api/folder', async (ctx, next) => {
    
  })

module.exports = router