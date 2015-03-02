/**
 * Created by youngmoon on 3/1/15.
 */
'use strict';

var Art = require('../arts/arts.model');
var User = require('../user/user.model');
var fs = require('fs');
var easyimg = require('easyimage');
var gm = require('gm').subClass({ imageMagick: true });
var System = {};
System.out = require('../../common');

module.exports = function (req, res) {
  System.out.println('Hello File');
  System.out.println(req.files);
  System.out.println(req.body);

  var date = new Date;
  var fileName = date.getFullYear() + date.getMonth() + date.getDay() + date.getTime();
  var filePath = './' + req.files.fileInput.path;
  var buffer = fs.readFileSync(filePath);

  var startTime = new Date();
  var partNum = 0;
  var partSize = 1024 * 1024 * 5;
  var numPartsLeft = Math.ceil(buffer.length / partSize);
  var maxUploadTries = 3;

  if (req.files.uploadImage) {

  }


  if (req.files.uploadImage) {
    Art.count({}, function (err, data) {
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