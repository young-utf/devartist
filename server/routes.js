/**
 * Created by youngmoon on 1/23/15.
 */

'use strict';

module.exports = function (app) {
  var path = require('path');
  app.route('/*')
    .get(function (req, res) {
      console.log(path.join(__dirname, '../client'));
      res.sendFile('index.html', {root: path.join(__dirname, '../client')});
    });
};