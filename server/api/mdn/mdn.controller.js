/**
 * Created by youngmoon on 6/12/15.
 */
'use strict';

var Count = require('./count.model');


exports.index = function (req, res) {
    var newCount =  new Count({
        sort: 'general',
        published: new Date()
    });

    newCount.save(function (err, count) {
        console.log(count);
        res.json(200);
    });
};

exports.page = function (req, res) {
    var newCount = new Count({
        sort: 'page',
        published: new Date()
    });

    newCount.save(function (err, count) {
        console.log(count);
        res.json(200);
    });
};