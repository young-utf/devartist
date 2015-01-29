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

}