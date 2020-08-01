// Get call using Axious
var axios = require("axios");
const newsData = document.getElementById("news-title");
const linkData = document.getElementById("news-link");

window.onload = function displayNews() {
  event.preventDefault()
  export default {
    name: "home",
    data: function() {
      return {
        err: "",
        news: []
      };
    },
    created: function() {
      axios.get("https://hacker-news.firebaseio.com/v0/topstories.json"
      ).then(response => {
          console.log(response);
          this.results = response.data.slice(0, 3);
          this.results.forEach(elementID => {
            axios.get(
                "https://hacker-news.firebaseio.com/v0/item/" + elementID + ".json"
              ).then(response => {
                this.news.push(response);
                title = news.response.title;
                url = news.response.url;
                newsData.append(title)
                linkData.append(url);
              }).catch(err => {
                console.log(err);
              });
          });
        }).catch(err => {
          throw err;
        });
    }
  };
};

export function displayNews();