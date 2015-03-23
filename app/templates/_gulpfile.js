var browserify = require('browserify'),
    bower = require('gulp-bower'),
    concat = require('gulp-concat'),
    karma = require('karma').server,
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    shell = require('gulp-shell'),
    jade = require('gulp-jade'),
    jshint = require('gulp-jshint'),
    less = require('gulp-less'),
    minifyHtml = require('gulp-minify-html'),
    nodemon = require('gulp-nodemon'),
    path = require('path'),
    protractor = require('gulp-protractor').protractor,
    source = require('vinyl-source-stream'),
    stringify = require('stringify'),
    watchify = require('watchify'),
    mocha = require('gulp-mocha'),
    exit = require('gulp-exit');

var paths = {
  public: 'public/**',
  jade: 'app/**/*.jade',
  styles: 'app/styles/*.+(less|css)',
  scripts: 'app/**/*.js',
  staticFiles: [
    '!app/**/*.+(less|css|js|jade)',
     'app/**/*.*'
  ]
};

gulp.task('jade', function() {
  gulp.src(paths.jade)
    .pipe(jade())
    .pipe(gulp.dest('./public/'));
});

gulp.task('less', function () {
  gulp.src(paths.styles)
    .pipe(less({
      paths: [ path.join(__dirname, 'styles') ]
    }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('static-files',function(){
  return gulp.src(paths.staticFiles)
    .pipe(gulp.dest('public/'));
});

gulp.task('lint', function () {
  gulp.src(['./app/**/*.js','./server.js','./lib/**/*.js','./config/**/*.js']).pipe(jshint())
  .pipe(jshint.reporter('default'));
});

gulp.task('nodemon', function () {
  nodemon({ script: 'server.js', ext: 'js', ignore: ['public/**','app/**','node_modules/**'] })
    .on('restart',['jade','less'], function () {
      console.log('>> node restart');
    });
});

gulp.task('scripts', function() {
  gulp.src(paths.scripts)
    .pipe(concat('index.js'))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('browserify', function() {
  var b = browserify();
  b.add('./app/application.js');
  return b.bundle()
  .on('success', gutil.log.bind(gutil, 'Browserify Rebundled'))
  .on('error', gutil.log.bind(gutil, 'Browserify Error: in browserify gulp task'))
  .pipe(source('index.js'))
  .pipe(gulp.dest('./public/js'));
});

gulp.task('watch', function() {
  gulp.watch(paths.jade, ['jade']);
  gulp.watch(paths.styles, ['less']);
  gulp.watch(paths.scripts, ['browserify']);
});

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('public/lib/'));
});

gulp.task('test:client', ['browserify'], function(done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

gulp.task('test:server', ['test:client'], function() {
  return gulp.src('test/server/**/*.js')
  .pipe(mocha({
    reporter: 'spec',
    timeout: 50000
  }))
  .pipe(exit());
});

gulp.task('test:e2e',function(cb) {
  gulp.src('test/e2e/**/*.js')
  .pipe(protractor({
    configFile: 'protractor.conf.js',
    args: ['--baseUrl', 'http://127.0.0.1:8000']
  }))
  .on('error', function(e) {
      console.log(e);
  })
  .on('end', cb);
});

gulp.task('build', ['bower', 'jade','less','browserify','static-files']);
gulp.task('production', ['nodemon','build']);
gulp.task('default', ['nodemon', 'build', 'watch']);
gulp.task('heroku:production', ['build']);
gulp.task('test', ['test:client','test:server']);