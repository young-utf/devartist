/**
 * Created by youngmoon on 1/29/15.
 */
'use strict';
var fs = require('fs');
var Art = require('./arts.model');
var System = {};
System.out = require('../../common');


exports.get = function (req, res) {
  console.log('get');

  Art.find({}, function (err, data) {
    res.json(data);
  });
}

exports.create = function (req, res) {
  System.out.println(req.files);

  //fs.readFiles(req.files.uploadFile.path, function (error, data) {
  //  var filePath = __dirname +req.files.uploadFile.name;
  //
  //  fs.writeFile(filePath, data, function (err) {
  //    if (err) {
  //      throw err;
  //    } else {
  //      res.send(200);
  //    }
  //  });
  //});
}