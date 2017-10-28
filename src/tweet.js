module.exports = class Tweet {
    constructor(message, date, image) {
        this.message = message;
        this.date = date;
        this.image = image;
    }

    static creteTweetFromTweetter(tweet) {
        let image;
        if (tweet.entities.media) {
            image = tweet.entities.media.find(media => media.media_url).media_url;
        }      
        return new Tweet(
            tweet.text,
            new Date(tweet.created_at),
            image
        );
    }
}