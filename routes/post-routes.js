var db = require("../models");

module.exports = function (app) {
  // Create all our routes and set up logic within those routes where required.
  app.get("/post", function (req, res) {
    console.log("handling get request for url /post");
    // findAll returns all entries for a table when used with no options
    db.Post.findAll({}).then(function (dbPost) {
      console.log({ dbPost });
      res.render("post", { userpost: dbPost });
    });
  });

  app.post("/post", function (req, res) {
    console.log("handling post request for url /post");
    console.log(req.body);
    console.log("request.body.data.username=", req.body.data.username);
    console.log("request.body.data.title=", req.body.data.title);
    console.log("request.body.data.post=", req.body.data.post);
    db.Post.create({
      username: req.body.data.username,
      title: req.body.data.title,
      post: req.body.data.post,
    })
      .then(function () {
        res.sendStatus(200);
        res.end();
      })
      .catch(function (err) {
        console.log("trouble saving to post table", err);
        res.sendStatus(500);
        res.end;
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
