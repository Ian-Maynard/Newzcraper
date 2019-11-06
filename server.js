// DEPENDENCIES
/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 

var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var request = require("request");
var cheerio = require("cheerio");
var app = express(); // reference Express 
// Var Step = require("step");
// var gKey = googl.setKey('AIzaSyBXobGbNYWd9dc0PUQ8Qb27kOI6nQWXxPs');
var Note = require("./models/Note.js");
var Article = require("./models/Article.js");
const router = express.Router(); 

mongoose.Promise = Promise; // configure mongoose for ES6 promises
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public")); //Static Directory

// Mongoose config and init
mongoose.connect("mongodb://localhost/scraperdata14", { useNewUrlParser: true, useUnifiedTopology: true } ); // Mongod connection
var db = mongoose.connection;
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
}); 
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Listen on port 7000
app.listen(7000, function() {
  console.log("App running on port 7000!");
});