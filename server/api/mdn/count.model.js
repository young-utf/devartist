/**
 * Created by youngmoon on 6/12/15.
 */

'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CountSchema = new Schema({
    count: {
        general: {
            type: Number,
            default: 0
        },
        page: {
            type: Number,
            default: 0
        }
    },

    date: {
        type: String
    },

    dateObj: {
        type: Date
    }
});

module.exports = mongoose.model('Count', CountSchema);
