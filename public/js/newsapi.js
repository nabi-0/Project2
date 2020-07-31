// const searchForm = document.querySelector(".new-search")
// const input = document.querySelector(".input")
const spaceNewsID = document.querySelector("news-id");
const spaceNewstitle = document.querySelector("news-title");


// searchForm.addEventListener("submit", displayNews);
window.onload = function displayNews() {
    
    // var news = $(this).attr("data-name")
    var settings = {
        async: true,
        crossDomain: true,
        url: "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty",
        method: "GET",
        headers: {
            "x-rapidapi-host": "community-hacker-news-v1.p.rapidapi.com",
            "x-rapidapi-key": "27b0ec5785msh5ec0720216625eap1328e7jsn46070a22c870"
        }
    }

    $.ajax(settings).done(function (response) {
        // return response.json();
        console.log(response);
        print(response);
        id = response.id;
        title = response.title;
        url = response.url;
        spaceNewsID.append(id);
    });
};

   /*{
        // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      // Creating a div to hold the movie
      var movieDiv = $("<div class='movie'>");

      // Storing the rating data
      var rating = response.Rated;

      // Creating an element to have the rating displayed
      var pOne = $("<p>").text("Rating: " + rating);

      // Displaying the rating
      movieDiv.append(pOne);

      // Storing the release year
      var released = response.Released;

      // Creating an element to hold the release year
      var pTwo = $("<p>").text("Released: " + released);

      // Displaying the release year
      movieDiv.append(pTwo);

      // Storing the plot
      var plot = response.Plot;

      // Creating an element to hold the plot
      var pThree = $("<p>").text("Plot: " + plot);

      // Appending the plot
      movieDiv.append(pThree);

      // Retrieving the URL for the image
      var imgURL = response.Poster;

      // Creating an element to hold the image
      var image = $("<img>").attr("src", imgURL);

      // Appending the image
      movieDiv.append(image);

      // Putting the entire movie above the previous movies
      $("#movies-view").prepend(movieDiv);
    });

  }*/