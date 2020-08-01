// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
var exphbs = require("express-handlebars");
// Requiring passport as we've configured it
var passport = require("./config/passport");
// var bodyParser = require("body-parser");
// console.log({ passport });

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// console.log({ express });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// app.use(bodyParser.json());
// console.log("after body-parse");
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
console.log("before passport initialize");
app.use(passport.initialize());
console.log("after passport initialize");
app.use(passport.session());
console.log("after passport.session");

// Requiring our routes
require("./routes/html-routes.js")(app);
console.log("after html route");
require("./routes/api-routes.js")(app);
console.log("after api routes");
require("./routes/post-routes.js")(app);
console.log("after post routes");
require("./routes/reservations-routes.js")(app);
console.log("after reservations routes");
console.log("after all the routes");

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
