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
    .pipe(gulp.dest("docs/css"))
    .pipe(server.stream());
});

gulp.task("img", function () {
  return gulp.src("source/img/**/*")
    .pipe(gulp.dest("docs/img"))
})

gulp.task("fonts", function () {
  return gulp.src("source/fonts/**/*")
    .pipe(gulp.dest("docs/fonts"))
})

gulp.task("js", function () {
  return gulp.src("source/js/**/*")
    .pipe(gulp.dest("docs/js"))
})

gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(gulp.dest("docs"))
})

gulp.task("server", function () {
  server.init({
    server: "docs/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.scss", gulp.series("css"));
  gulp.watch("source/*.html", gulp.series("html"));
  gulp.watch("docs/*.html").on("change", server.reload);
});

gulp.task("start", gulp.series("css", "img", "fonts", "js", "html", "server"));

gulp.task("build", gulp.series("css", "img", "fonts", "js", "html"));
