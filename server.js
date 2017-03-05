var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require ('./controllers/setupController');

var port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString());
setupController(app);

app.listen(port);
console.log('you are now listening on port ' + port + ' homie');
