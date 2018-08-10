// // Dependencies
// // ===========================================================
// var express = require("express");
// var app = express();
// var path = require("path");


// // Routes
// // ===========================================================
// module.exports = function(app){
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname + "/../public/home.html"));
// });

// app.get("/survey", function(req, res) {
//   res.sendFile(path.join(__dirname + "/../public/survey.html"));
// });

// app.use(express.static(__dirname + "/../public"));
// };

'use strict'

const express = require('express')
const path = require('path')

const routes = express.Router()

routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'))
})

routes.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/survey.html'))
})

module.exports = routes