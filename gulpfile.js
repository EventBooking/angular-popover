/* global require, __dirname */
var gulp = require('gulp'),
    debug = require('gulp-debug'),
    concat = require('gulp-concat'),
    project = require('./package.json'),
    dest = 'dist',
    moduleName = 'ngPopover';

gulp.task('clean', clean);
gulp.task('styles', styles);
gulp.task('html', html);
gulp.task('watch', watch);

function clean() {
    var del = require('del');
    del(dest, function() {
        del('test/**/*.js', cb);
    });
}

function styles() {
    var less = require('gulp-less'),
        autoprefixer = require('gulp-autoprefixer');

    gulp.src(['src/assets.less'])
        .pipe(less({
            plugins: [require('less-plugin-glob')]
        }))
        .pipe(autoprefixer())
        .pipe(concat(project.name + '.css'))
        .pipe(gulp.dest(dest));

    gulp.src([
        '!src/variables.less',
        '!src/mixins.less',
        '!src/assets.less',
        'src/**/*.less'
    ])
        .pipe(concat(project.name + '.less'))
        .pipe(gulp.dest(dest));

    gulp.src([
        'src/variables.less',
        'src/mixins.less',
        'src/assets.less'
    ])
        .pipe(gulp.dest(dest + '/less'));
}

function html() {
    var html2js = require('gulp-ng-html2js');

    var options = {
        moduleName: moduleName,
        stripPrefix: 'directives'
    };

    gulp.src(['src/**/*.html'])
        .pipe(html2js(options))
        .pipe(concat(project.name + '.templates.js'))
        .pipe(gulp.dest(dest));
}

function watch() {
    gulp.watch(['src/**/*.less'], ['styles']);
    gulp.watch(['src/**/*.html'], ['html']);
}