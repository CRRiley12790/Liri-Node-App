require("dotenv").config();

var fs = require("fs");
var request = require("request");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var liriArgument = process.argv[2];

//spotify kept giving me an error trying to log in so I could not obtain APIs

switch(liriArgument){
    case "my-tweets": myTweets();
}

function myTweets() {
    var client = new Twitter({
        consumer_key: '',
        consumer_secret: '',
        access_token_key: '',
        access_token_secret: ''
      });
}

//wasnt able to finish after class before the the 12am deadline after being out of town with no service for the last 5 days. But I will plan to still do this assignment over the July 4th break to catch up on what I missed. 

