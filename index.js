const fs = require('fs');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const layouts = require('express-ejs-layouts');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) { 
res.json({message: "welcome to my test"});
});


// ==== data base stuff ====
const {
    // model names
    Customers
} = require("./models");

const // = require("./models/ //");

