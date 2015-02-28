/**
 * Created by youngmoon on 2/28/15.
 */
'use strict';

var User = require('../user/user.model');
var fs = require('fs');
var System = {};
System.out = require('../../common');

module.exports = function (req, res) {
  System.out.println('Hello File');
  System.out.println(req.files);
  System.out.println(req.body);
  System.out.println(req.params);
  var id = req.params.id;
  var loc = req.params.location;
  System.out.println(loc);

  if (req.files.uploadImage) {
      var date = new Date();
      fs.readFile(req.files.uploadImage.path, function (err, data) {
        var dateStr = date.toGMTString() + '';
        var file = loc + '(' + dateStr.replace(/\s+/g, '').replace(/\,/, '') + ').' + req.files.uploadImage.extension;
        var filePath = 'client/assets/images/yunmi/location/' + file;
        fs.writeFile(filePath, data, function (err) {
          if (err) {
            throw err;
          } else {
            User.findByIdAndUpdate(id, {
              $set: {
                status: {
                  location: loc,
                  filepath: file,
                  date: date
                }
              }
            }, function (err, data) {
              System.out.println(data);
              res.redirect('back');
            })
          }
        });
      });
  }
}