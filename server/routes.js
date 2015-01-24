/**
 * Created by youngmoon on 1/23/15.
 */

'use strict';

module.exports = function (app) {
  var path = require('path');

  app.route('/sungrok')
    .get(function (req, res) {
      res.sendFile('sungrok.html', {root: path.join(__dirname, '../server/sungrok')});
    });

  app.route('/*')
    .get(function (req, res) {
      res.sendFile('index.html', {root: path.join(__dirname, '../client')});
    });
};