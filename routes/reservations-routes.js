var db = require("../models");
module.exports = function (app) {
  // Create all our routes and set up logic within those routes where required.
  loadReservations();

  function loadReservations() {
    app.get("/reservations", function (req, res) {
      console.log("handling get request for url /reservations");
      // findAll returns all entries for a table when used with no options
      db.Reservations.findAll({}).then(function (dbReservations) {
        // console.log({ dbPost });
        var userReservationsArray = [];
        if (dbReservations.length > 0) {
          console.log(dbReservations[0]);
        }
        for (var i = 0; i < dbReservations.length; i++) {
          userReservationsArray[i] = dbReservations[i].dataValues;
        }
        console.log("Did I hget here???");

        res.render("reservations", { userreservations: userReservationsArray });
      });
    });
  }

  app.post("/reservation", function (req, res) {
    console.log("handling reservations request for url /post");
    console.log("username: " + req.body.data.username);
    console.log("descritpion: " + req.body.data.description);
    console.log("time: " + req.body.data.time);

    db.Reservations.create({
      username: req.body.data.username,
      description: req.body.data.description,
      time: req.body.data.time,
    })
      .then(function () {
        loadReservations();
        res.sendStatus(200);
        res.end();
      })
      .catch(function (err) {
        console.log("trouble saving to reservatons table", err);
        res.sendStatus(500);
        res.end;
      });
  });

  app.delete("/reservation/:id", function (req, res) {
    db.Reservations.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function (dbReservations) {
      res.json(dbReservations);
    });
  });
};
