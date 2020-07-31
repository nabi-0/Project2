var db = require("../models");

module.exports = function (app) {
  // Create all our routes and set up logic within those routes where required.
  app.get("/post", function (req, res) {
    console.log("handling get request for url /post");
    // findAll returns all entries for a table when used with no options
    db.Post.findAll({}).then(function (dbPost) {
      console.log({ dbPost });
      res.render("post", dbPost);
    });
  });

  app.post("/post", function (req, res) {
    console.log("handling post request for url /post");
    console.log("request.body.post=", req.body.post);
    db.Post.create({
      username: req.body.username,
      title: req.body.title,
      post: req.body.post,
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  app.delete("/post/:id", function (req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });
};
