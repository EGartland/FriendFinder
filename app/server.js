var express = require("express");

var bodyParser = require("body-parser");

var path = require("path");

let htmlRoutes = require('./routing/htmlRoutes')
let apiRoutes = require('./routing/apiRoutes')



var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.text());

app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use("/", htmlRoutes);

app.use("/api", apiRoutes);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});