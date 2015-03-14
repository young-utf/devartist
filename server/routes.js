/**
 * Created by youngmoon on 1/23/15.
 */

'use strict';

module.exports = function (app) {
  var path = require('path');
  var System = {};
  System.out = require('./common');

  app.use('/api/users', require('./api/user'));
  app.use('/api/arts', require('./api/arts'));
  app.use('/api/message', require('./api/message'));
  app.use('/auth', require('./api/auth'));
  app.use('/upload/stat/:location/:id', require('./api/file/stat'));
  app.use('/upload', require('./api/file'));


  app.route('/sungrok')
    .get(function (req, res) {
      res.sendFile('sungrok.html', {root: path.join(__dirname, '../server/sungrok')});
    });

  app.route('/*')
    .get(function (req, res, next) {
      //System.out.println(req.headers);
      require('./api/control.center')(req, res, next);
      res.sendFile('index.html', {root: path.join(__dirname, '../client')});
    });
};