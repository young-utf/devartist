/**
 * Created by youngmoon on 3/15/15.
 */

'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var MessageSchema = new Schema({
  sender: {
    type: String,
    required: true,
    ref: 'User'
  },
  receiver: {
    type: String,
    required: true,
    ref: 'User'
  },
  sendedAt: {
    type: Date,
    default: Date.now
  },
  content: String,
  hidden: {
    type: Boolean,
    default: false
  },
  read: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Message', MessageSchema);
