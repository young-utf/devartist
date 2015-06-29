/**
 * Created by youngmoon on 6/12/15.
 */
'use strict';

var Count = require('./count.model');


exports.index = function (req, res) {
    console.log('in mdn index');
    var today = req.query.today;

    Count.find({date: today}, function (err, counts) {
        if (counts.length === 0) {
            var newCount = createCount(today, true);

            newCount.save(function (err, count) {
                res.json(200);
            });
        } else {
            Count.update({date:today}, {$inc: {"count.general": 1}}, function (err, count) {
                res.json(200);
            });
        }
    });
};

exports.page = function (req, res) {
    console.log('in mdn page');
    var today = req.query.today;

    Count.find({date: today}, function (err, counts) {
        if (counts.length === 0) {
            var newCount = createCount(today, false);

            newCount.save(function (err, count) {
                res.json(200);
            });
        } else {
            Count.update({date:today}, {$inc: {"count.page": 1}}, function (err, count) {
                res.json(200);
            });
        }
    });
};

exports.getAll = function (req, res) {
    Count.find({}, function (err, counts) {
        res.json(counts);
    });
};

function  createCount (today, gen) {
    // gen true 면 general 아니면 페이지

    return new Count({
        count: {
            general: gen ? 1 : 0,
            page: gen ? 0 : 1
        },
        date : today
    });
}