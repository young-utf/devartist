/**
 * Created by youngmoon on 1/23/15.
 */

'use strict';

module.exports = function (app) {
  app.route('/*')
    .get(function (req, res) {
      res.sendFile('client/index.html');
    });
};