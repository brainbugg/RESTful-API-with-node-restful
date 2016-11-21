// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Mongodb
mongoose.connect('mongodb://localhost/rest_test');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'))

port = process.env.PORT || 3000;
app.listen(port);
console.log('API is running on 3000.');