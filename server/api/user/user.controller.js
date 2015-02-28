/**
 * Created by youngmoon on 1/29/15.
 */
'use strict';

var User = require('./user.model');
var System = {};
System.out = require('../../common');

exports.get = function (req, res) {
  console.log('get');
}

exports.create = function (req, res) {
  System.out.println('create user');
  User.find({email: req.body.email}, function (err, data) {
    if (data.length < 1) {
      User.create({
        email: req.body.email,
        password: req.body.password,
        username: req.body.username
      }, function (err, data) {
        res.json(200, data.email);
      });
    } else {
      res.json(404, {errorMSG: 'Already Taken email address.'})
    }
  });
}

exports.getYum = function (req, res) {
  System.out.println('get Yum');
  User.findOne({email: 'kym2091@naver.com'}, function (err, data) {
    res.json(data);
  });
}