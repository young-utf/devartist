/**
 * Created by youngmoon on 2/3/15.
 */
'use stirct';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ArtSchema = new Schema({
  author: String,
  title: String,
  desc: String,
  published: {
    type: Date,
    default: Date.now
  },
  level: {
    type: Number,
    default: 2
  },
  hidden: {
    type: Boolean,
    default: false
  },
  filePath: String,
  viewed: {
    type: Object,
    default: {}
  },
  counting: Number
});

module.exports = mongoose.model('Arts', ArtSchema);