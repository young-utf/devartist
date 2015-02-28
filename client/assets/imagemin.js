/**
 * Created by youngmoon on 2/28/15.
 */
var Imagemin = require('imagemin');

var imagemin1 = new Imagemin()
  .src('client/assets/images/*.{gif,jpg,png,svg}')
  .dest('client/assets/images/')
  .use(Imagemin.jpegtran({progressive: true}));

imagemin1.run(function (err, files) {
  if (err) {
    throw err;
  }

  console.log(files[0]);
  // => {path: 'build/images/foo.jpg', contents: <Buffer 89 50 4e ...>}
});

var imagemin2 = new Imagemin()
  .src('client/assets/images/yunmi/*.{gif,jpg,png,svg}')
  .dest('client/assets/images/yunmi/')
  .use(Imagemin.jpegtran({progressive: true}));

imagemin2.run(function (err, files) {
  if (err) {
    throw err;
  }

  console.log(files[0]);
  // => {path: 'build/images/foo.jpg', contents: <Buffer 89 50 4e ...>}
});