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

io.sockets.on('connection', function (socket) {
  console.error('===================== CONNECTED ====================');
  socket.on('init', function (user) {
    console.error('userId', user);
    var userId = user.id;
    socket.on('sendNoti', function (target) {
      console.error('========== target ========');
      console.error(target.id);
      socket.broadcast.emit('notiTo' + target.id, 'got noti');
    })
  });
});

var exports;
exports = module.exports = app;
