/**
 * Created by youngmoon on 6/12/15.
 */

'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CountSchema = new Schema({
    sort: {
        type: String
    },

    published: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Count', CountSchema);
