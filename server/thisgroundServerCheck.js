/**
 * Created by youngmoon on 15. 3. 14..
 */
'use stirct';

var request = require('request');
var nodemailer = require('nodemailer');
var stopped = false;

module.exports = function () {
  setInterval(function () {
    request({
      method: 'GET',
      url: 'http://thisground.com/'
    }, function (err, res, body) {
      if (!res && !stopped) {
        console.error('SERVER STOPPED !!' + new Date());
        stopped = true;
        var transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
            user: 'young.utf@gmail.com',
            pass: 'young123123'
          }
        });

        var mailOptions = {
          from: 'thisground',
          to: 'youngmmmoon@gmail.com',
          subject: 'Sever STOPPED !!!',
          text: '',
          html: 'THISGROUND SERVER STOPPED !!'
        }

        transporter.sendMail(mailOptions, function (err, info) {
          if (err) {
            console.log(err);
          } else {
            console.log('EMAILED !');
          }
        });
      } else if (res) {
        stopped = false;
        console.log(res.statusCode);
      } else
        console.log('nothing to do');
    });
  }, 10000);
}