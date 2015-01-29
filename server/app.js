/**
 *  THIS IS THE FIRST FILE
 */

'use strict';

var express = require('express');
var port = process.env.NODE_ENV ? 80 : 2999;
var app = express();
var server = require('http').createServer(app);
var mongoose = require('mongoose');

// Connect to database
mongoose.connect('mongodb://localhost/devartist');

require('./config')(app);
require('./routes')(app);

server.listen(port, function () {
  console.log('Listen to ' + port);
});

var exports;
exports = module.exports = app;