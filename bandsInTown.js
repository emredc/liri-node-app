function searchBandsInTown(artist) {
    let queryURL = "https://rest.bandsintown.com/artists/" + artist + "?app_id=codingbootcamp";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        // Printing the entire object to console
        console.log(response);
        // Constructing HTML containing the artist information
        var artistName = $("<h1>").html(response.name);
        var artistURL = $("<a>").attr("href", response.url).append(artistName);
        var artistImage = $("<img>").attr("src", response.thumb_url);
        var trackerCount = $("<h2>").html(response.tracker_count + " fans tracking this artist");
        var upcomingEvents = $("<h2>").html(response.upcoming_event_count + " upcoming events");
        var goToArtist = $("<a>").attr("href", response.url).text("See Tour Dates");
        // Empty the contents of the artist-div, append the new artist content
        $("#artist-div").empty();
        $("#artist-div").append(artistURL, artistImage, trackerCount, upcomingEvents, goToArtist);
    });
}