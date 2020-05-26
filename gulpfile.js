"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();

gulp.task("css", function () {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("img", function () {
  return gulp.src("source/img/**/*")
    .pipe(gulp.dest("build/img"))
})

gulp.task("fonts", function () {
  return gulp.src("source/fonts/**/*")
    .pipe(gulp.dest("build/fonts"))
})

gulp.task("js", function () {
  return gulp.src("source/js/**/*")
    .pipe(gulp.dest("build/js"))
})

gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(gulp.dest("build"))
})

gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.scss", gulp.series("css"));
  gulp.watch("source/*.html", gulp.series("html"));
  gulp.watch("build/*.html").on("change", server.reload);
});

gulp.task("start", gulp.series("css", "img", "fonts", "js", "html", "server"));
