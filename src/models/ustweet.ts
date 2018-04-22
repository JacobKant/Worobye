'use strict';
module.exports = (sequelize, DataTypes) => {
  let UsTweet = sequelize.define('UsTweet', {
    message: DataTypes.STRING,
    date: DataTypes.DATE,
    image: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return UsTweet;
};