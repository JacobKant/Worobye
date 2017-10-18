class Tweet {
    constructor(message, date, images) {
        Object.defineProperties(this, [message, date, imags]);
    }

    static creteTweetFromTweetter(tweeterTweet) {
        let simpleTweets = tweetsArray.map(tweet => {
            return {
              text: tweet.text,
              date: new Date(tweet.created_at),
              images: tweet.entities.media.map(media => {
                return {
                  src: media.media_url
                }
              })
            }
        })
    }
}