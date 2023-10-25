'use strict';
var gulp = require('gulp');
const { src, dest } = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
var concat = require('gulp-concat');
const htmlmin = require('gulp-html-minifier-terser');

function generateCSS(dir, finalDestination = false) {
    src(`${dir}/css/*.{scss,sass}`)
        .pipe(sourcemaps.init())
        .pipe(sass.sync({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(sourcemaps.write('.', { addComment: true }))
        .pipe(dest(finalDestination ? `./${finalDestination}` : `./${dir}/css/`))
}

function generateHTML(dir, finalDestination = false) {
    src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(finalDestination ? `./${finalDestination}` : `./`));
}

exports.stone = function (cb) {
    generateCSS('src', 'dist');
    generateHTML('src');
    cb();
}