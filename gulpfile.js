var gulp = require('gulp');
var inject = require('gulp-inject');
var wiredep = require('wiredep').stream;


gulp.task('index', function () {
  var target = gulp.src('client/index.html');
  var sources = gulp.src(['client/{app,components}/**/*.js', 'client/{app,components}/**/*.css'], {read:false});

  return target.pipe(inject(sources))
    .pipe(gulp.dest('client'));
});

gulp.task('bower', function () {
  gulp.src('client/index.html')
    .pipe(wiredep({
      optional: 'configuration',
      goes: 'here'
    }))
    .pipe(gulp)
});

gulp.task('default', function () {
  
});
