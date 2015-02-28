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
  active: {
    type: Object,
    default: {}
  },
  role: {
    type: Number,
    default: 1
  },
  status: {
    location: String,
    date: Date,
    filepath: String
  },
  visitArts: [Object],
  joined: {
    type   : Date,
    default: Date.now,
    index  : true
  }
});

module.exports = mongoose.model('User', UserSchema);