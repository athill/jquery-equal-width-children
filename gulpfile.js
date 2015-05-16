"use strict";
var gulp = require('gulp'),
	header = require('gulp-header'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify');



var pkg = require('./package.json');
var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');
var src = './src/*.js',
	dest = './dist';

gulp.task('header', function() {
	return gulp.src(dest)
	  .pipe(header(banner, { pkg : pkg } ))
	  .pipe(gulp.dest(dest));
});

gulp.task('uglify', function() {
	return gulp.src(src)
		.pipe(uglify())
		.pipe(rename(function (path) {
			path.basename += ".min";
		}))
		.pipe(header(banner, { pkg : pkg } ))
		.pipe(gulp.dest(dest));
});

gulp.task('publish', ['uglify'], function() {
	gulp.src(src)
		.pipe(header(banner, { pkg : pkg } ))
		.pipe(gulp.dest(dest));
});

gulp.task('default', ['publish']);
