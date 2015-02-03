/**
 * Created by youngmoon on 2/2/15.
 */
'use strict';

var Art = require('../arts/arts.model');
var fs = require('fs');
var System = {};
System.out = require('../../common');

module.exports = function (req, res) {
  System.out.println('Hello File');
  System.out.println(req.files);
  System.out.println(req.body);
  var count;

  if (req.files.uploadImage) {
    Art.count({}, function (err, data) {
      count = data + 1;
      fs.readFile(req.files.uploadImage.path, function (err, data) {
        var filePath = 'client/assets/archive/Art_' + count + '.' + req.files.uploadImage.extension;
        fs.writeFile(filePath, data, function (err) {
          if (err) {
            throw err;
          } else {
            System.out.println('Number of Arts : ',  count);
            var newArt = new Art({
              author: 'kimsodyssey',
              title: 'Art ' + count,
              filePath: 'Art_' + count + '.' + req.files.uploadImage.extension
            });
            newArt.save(function (err, data) {
              if (err) {
                res.redirect('back');
              } else {
                System.out.println(data);
                res.redirect('back');
              }
            });
          }
        });
      });

    });
  }
}