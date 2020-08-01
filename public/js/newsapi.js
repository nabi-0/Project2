// const searchForm = document.querySelector(".new-search")
// const input = document.querySelector(".input")
// Get call using Axious
var axios = require("axios");
const newsData = document.getElementById("news-title");
const linkData = document.getElementById("news-link");

$(document).ready(function () {
  //event.preventDefault()
  var news = []
      axios({
      method: "GET",
      url: "https://hacker-news.firebaseio.com/v0/topstories.json"
      }).then(response => {
          console.log(response);
          this.results = response.data.slice(0, 3);
          this.results.forEach(elementID => {
            axios.get(
                "https://hacker-news.firebaseio.com/v0/item/" + elementID + ".json"
              ).then(response => {
                this.news.push(response);
                console.log(news);
              })
              title = news.response.title;
              url = news.response.url;
              console.log(title);
              console.log(url);
              newsData.append(title)
              linkData.append(url);
          });
        }).catch(err => {
          throw err;
        });
  });
/*
const spaceNewsID = document.querySelector("news-id");
const spaceNewstitle = document.querySelector("news-title");
var url = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";

window.onload = function displayNews() {
  event.preventDefault();

  var settings = {
    async: true,
    crossDomain: true,
    url: "https://hacker-news.firebaseio.com/v0/topstories.json",
    method: "GET",
    headers: {
      x_rapidapi_host: "community-hacker-news-v1.p.rapidapi.com",
      x_rapidapi_key: "27b0ec5785msh5ec0720216625eap1328e7jsn46070a22c870"
    }
  }
  $.ajax(settings).done(function (response) {
    console.log(response);
  }).done( function (response) {
    results = response.json();
    console.log(results);
    id = results.id;
    spaceNews.append(id);
	})
};
*/

 
