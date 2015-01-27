/**
 * Created by youngmoon on 1/23/15.
 */

'use strict';

module.exports = function (app) {
  var path = require('path');
  var nodemailer = require('nodemailer');
  var clientip = require('client-ip');
  var geoip = require('geoip-lite');


  app.route('/sungrok')
    .get(function (req, res) {
      res.sendFile('sungrok.html', {root: path.join(__dirname, '../server/sungrok')});
    });

  app.route('/*')
    .get(function (req, res) {
      var ip = clientip(req);
      var geo = geoip.lookup(ip);
      console.log(JSON.stringify(geo));
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
        html: 'from ' + ip + '<br> ' + JSON.stringify(geo)
      }

      if (process.env.NODE_ENV) {
        transporter.sendMail(mailOptions, function (err, info) {
          if (err) {
            console.log(err);
          } else {
            console.log('EMAILED !');
          }
        });
      }

      res.sendFile('index.html', {root: path.join(__dirname, '../client')});
    });
};