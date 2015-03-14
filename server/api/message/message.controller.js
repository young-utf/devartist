/**
 * Created by youngmoon on 3/15/15.
 */
'use strict';

var User = require('../user/user.model');
var Message = require('./message.model');
var System = {};
System.out = require('../../common');

exports.get = function (req, res) {
  System.out.println('in message get');
}

exports.send = function (req, res) {
  System.out.println('in message send', req.body);
  var message = new Message(req.body);

  message.save();
  res.send(200);
}

exports.read = function (req, res) {
  System.out.println('in message read');
}

exports.delete = function (req, res) {
  System.out.println('in message delete');
}