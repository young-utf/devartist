/**
 * Created by youngmoon on 1/29/15.
 */
'use strict';

var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var clientip = require('client-ip');
var geoip = require('geoip-lite');
var System = {};
System.out = require('../../common');

module.exports = function (req, res, next) {

  var ip = clientip(req);
  var geo = geoip.lookup(ip);

  System.out.debug(ip);
  System.out.debug(JSON.stringify(geo));

  if (process.env.NODE_ENV && geo.country == 'KR') {

    var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'young.utf@gmail.com',
        pass: 'young123123'
      }
    });

    var mailOptions = {
      from: 'fff',
      to: 'youngmmmoon@gmail.com',
      subject: 'Server Requested',
      text: '',
      html: 'from ' + ip + '<br> country : ' + geo.country + ', region : ' +
      geo.region + ', city : ' + geo.city + ', ll : ' + geo.ll
    }

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log('EMAILED !');
      }
    });
  }
}

