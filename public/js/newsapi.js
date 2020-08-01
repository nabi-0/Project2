// const searchForm = document.querySelector(".new-search")
// const input = document.querySelector(".input")
import axios from "axios";

export default {
  name: "home",
  data: function() {
    return {
      err: "",
      news: []
    };
  },
  created: function() {
    axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then(result => {
        console.log(result);
        this.results = result.data.slice(0, 10);
        this.results.forEach(element => {
          axios
            .get(
              "https://hacker-news.firebaseio.com/v0/item/" + element + ".json"
            )
            .then(result => {
              this.news.push(result);
            })
            .catch(err => {
              console.log(err);
            });
        });
      })
      .catch(err => {
        this.err = err;
      });
  }
};
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
/*{
 
