/**
 * Created by youngmoon on 1/23/15.
 */
'use strict';
var System = {};
System.out = require('./common');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var compression = require('compression');
var path = require('path');
var multer = require('multer');
//var busboy = require('connect-busboy');

module.exports = function (app) {
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(multer());
  //app.use(multer({
  //  dest: './archive/',
  //  rename: function (fieldname, filename) {
  //    System.out.println(fieldname);
  //    System.out.println(filename);
  //    return filename;
  //  },
  //  onFileUploadStart: function (file) {
  //    System.out.debug(file.fieldname + ' is starting....');
  //  },
  //  onFileUploadData: function (file, data) {
  //    System.out.debug(data.length + ' of ' + file.fieldname + ' arrived');
  //  },
  //  ofFileUploadComplete: function (file) {
  //    System.out.debug(file.fieldname + ' uploaded to ' + file.path);
  //  },
  //  onParseStart: function () {
  //    System.out.debug('Form parsing started at : ' + new Date());
  //  }
  //}));
  //app.use(busboy({ immediate: true }));
  app.use(express.static(path.join(path.normalize(__dirname + '/..'), 'client')));
}