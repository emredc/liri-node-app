var dotenv = require(".env").config;
var fs = rewuire("fs");
var keys = require ("./keys.js");
var spotify = require ("spotify");
var request = require ("request");


var getArtistNames = function (artist){


var getSpotify = function(songName){

spotify.search({ type: 'track', query: 'songName' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    var songs = data.tracks.items;
    for (var i=0; i<songs.length; i++) {

        console.log(i);
        console.log("Artist: " + song[i].artists.map(getArtistNames));
        console.log("Song name " + songs[i].name);
        console.log("Preview song: " + songs[i].preview_url);
        console.log("Album: " + songs[i].album.name);

    }
});

}

var getMovie = function (movieName) {

    request("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy", function(error, response, body) {
        if (!error && response.statusCode === 200) {
          
        // Movie Title, Release Year ,IMDB Rating , Rotten Tomatoes Rating ,Country of Production , Plot , Actors
            console.log("Movie Title: " + JSON.parse(body).Title);
            console.log("Release Year: " + JSON.parse(body).Year);
            console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
            console.log("Country of Production: " + JSON.parse(body).Country);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
            }
          });
}

var doWhatItSays = function() {
fs.readFile("random.txt", "utf8", function(err, data){
if (err) throw err;

var dataArr = data.split(',');

if (dataArr.length == 2) {
    pick(dataArr[0],dataArr[1]);
}
  else if (dataArr.length == 1){

    pick(dataArr[0]);
  }

});
}



var pick = function (caseData, functionData) {

    switch (caseData) {
        case 'spotify-this-song':
            getSpotify(functionData);
            break;
        case 'movie-this':
            getMovie(functionData);
        case 'do-what-it-says':
            doWhatItSays();
            break;
    }
}

}