/**
 * Created by youngmoon on 1/29/15.
 */
'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: String,
  password: String,
  username: String,
  info: String,
  active: [String],
  joined: {
    type   : Date,
    default: Date.now,
    index  : true
  }
});

module.exports = mongoose.model('User', UserSchema);