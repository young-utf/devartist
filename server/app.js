/**
 *  THIS IS THE FIRST FILE
 */

'use strict';

var express = require('express');
var port = process.env.NODE_ENV ? 80 : 2999;
var app = express();
var server = require('http').createServer(app);
var mongoose = require('mongoose');
var request = require('request');
var nodemailer = require('nodemailer');

// Connect to database
mongoose.connect('mongodb://localhost/devartist');
var stopped = false;

setInterval(function () {
  request({
    method: 'GET',
    url: 'http://thisground.com/'
  }, function (err, res, body) {
    if (!res && !stopped) {
      console.error('SERVER STOPPED !!' + new Date());
      stopped = true;
      var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'young.utf@gmail.com',
          pass: 'young123123'
        }
      });

      var mailOptions = {
        from: 'thisground',
        to: 'youngmmmoon@gmail.com',
        subject: 'Sever STOPPED !!!',
        text: '',
        html: 'THISGROUND SERVER STOPPED !!'
      }

      transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          console.log(err);
        } else {
          console.log('EMAILED !');
        }
      });
    } else if (res) {
      stopped = false;
      console.log(res.statusCode);
    } else
      console.log('nothing to do');
  });
}, 10000);

require('./config')(app);
require('./routes')(app);

server.listen(port, function () {
  console.log('Listen to ' + port);
});

var exports;
exports = module.exports = app;
