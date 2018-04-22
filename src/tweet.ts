module.exports = class Tweet {
    constructor(
        public message: string,
        public date: Date,
        public image?: string
    ) { }

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
};