/**
 *  THIS IS THE FIRST FILE
 */

'use strict';

var express = require('express');
var port = process.env.NODE_ENV ? 80 : 2999;
var app = express();
var server = require('http').createServer(app);
var mongoose = require('mongoose');
var io = require('socket.io').listen(server);

// Connect to database
mongoose.connect('mongodb://localhost/devartist');

require('./config')(app);
require('./routes')(app);
require('./thisgroundServerCheck')();


server.listen(port, function () {
  console.log('Listen to ' + port);
});
require('./socketServer/msgSocket')(io);



var exports;
exports = module.exports = app;
