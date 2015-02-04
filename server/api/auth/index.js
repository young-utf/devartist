/**
 * Created by youngmoon on 2/1/15.
 */
'use strict';
var express = require('express');
var User = require('../user/user.model');
var System = {};
System.out = require('../../common');

var router = express.Router();

router.post('/token', function (req, res) {
  var token = req.body.token;
  User.findOne({_id: token}, function (err, user) {
    if (user.active.login) {
      user.active.login.push(new Date);
    } else {
      user.active.login = [new Date];
    }
    User.findByIdAndUpdate(user._id, {active: user.active}, function (err, user) {
      res.json(200, user);
    });
  })
});

router.post('/local', function (req, res) {
  var email = req.body.email;
  var password = req.body.password;

  User.findOne({email: email}, function (err, user) {
    if (err) {
      res.send(404);
    }
    System.out.println(user);

    if (user) {
      if (password === user.password) {
        System.out.println('correct');
        if (user.active.login) {
          user.active.login.push(new Date);
        } else {
          user.active.login = [new Date];
        }
        User.findByIdAndUpdate(user._id, {$set: { active: user.active }}, function (err, user) {
          res.json(200, user);
        });
      } else {
       res.json(401, {errorMSG: 'incorrect password'});
      }
    }
  });





});

module.exports = router;