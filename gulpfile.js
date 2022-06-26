let gulp = require("gulp"),
  log = require("fancy-log"),
  pug = require("gulp-pug"),
  sass = require("gulp-sass"),
  browserSync = require("browser-sync"),
  uglify = require("gulp-uglify"),
  concat = require("gulp-concat"),
  rename = require("gulp-rename"),
  minify = require("gulp-minify"),
  del = require("del"),
  autoprefixer = require("gulp-autoprefixer"),
  gcmq = require("gulp-group-css-media-queries"),
  webp = require("gulp-webp"),
  debug = require('gulp-debug');

//log('Hello, Terminal!');

gulp.task("clean", async function () {
  del.sync("dist");
});



gulp.task("pug", function () {
  //return gulp.src('dev/pug/*.pug')

  return gulp
    .src("dev/index.pug")
    .pipe(
      pug({
        doctype: "html",
        pretty: false,
      })
    )
    .pipe(gulp.dest("production/"))
});


gulp.task("min-html", function () {

  return gulp
    .src("dev/index.pug")
    .pipe(
      pug({
        doctype: "html",
        pretty: true,
      })
    )
    .pipe(gulp.dest("dev/"))

  //        .pipe(browserSync.reload({
  //            stream: true
  //        }))
});

gulp.task("scss", function () {
  return gulp
    //в папке scss -> папка blocks - это стили для каждого html-блока 
    //discrete папка - содержит firstStyles - в ней стили для первого блока и изначального вида сайта ->
    //secondStyles - всё остальное
    .src("dev/assets/scss/discrete/*.scss")
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )

    .pipe(
      autoprefixer({
        cascade: false,
      })
    )

    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )

    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(gcmq())


    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )

    //и в Dev и в Production отдаём сжатые css-файлы (firstStyles, secondStyles),
    //т.к. всё равно их редактировать не буду.
    //для редактирования и существет sass/scss

    .pipe(gulp.dest("dev/assets/css"))

    .pipe(gulp.dest("production/assets/css"));

  //        .pipe(browserSync.reload({
  //            stream: true
  //        }))
});

gulp.task("gcmq", function () {
  return gulp
    .src("production/assets/css/*.css")
    .pipe(gcmq())
    .pipe(gulp.dest("production/assets/css/dist/"));
});

gulp.task("toWebp", () => {
  // './dev/img/**/*.{png,gif,jpg}' - все файлы в img и все файлы в подпапках в img

  log("webp task");

  return gulp.src('./dev/assets/img/**/*.{png,gif,jpg}')
    .pipe(webp())
    .pipe(rename({ prefix: 'webp/' }))
    .pipe(gulp.dest('./dev/assets/img'));

  return;
});


gulp.task("copyImages", function () {
  return gulp.src("dev/assets/img/**")
    .pipe(gulp.dest("production/assets/img"));

  return;
});

gulp.task("copyFonts", function () {
  return gulp.src("dev/assets/fonts/**").pipe(gulp.dest("production/assets/fonts"));
});


gulp.task("min-js", function () {
  return gulp
    .src("dev/assets/js/**")
    .pipe(
      minify({
        ext: {
          min: ".js",
        },
        noSource: true,
      })
    )
    .pipe(gulp.dest("production/assets/js"));
});

//gulp.task('browser-sync', function () {
//    browserSync.init({
//        server: {
//            baseDir: "dev/"
//        }
//    });
//});


gulp.task("export", function () {
  let buildHtml = gulp.src("production/assets/*.html").pipe(gulp.dest("dist"));

  let BuildCss = gulp.src("dev/assets/css/**/*.css").pipe(gulp.dest("dist/css"));

  let BuildJs = gulp.src("dev/assets/js/**/*.js").pipe(gulp.dest("dist/js"));

  let BuildFonts = gulp.src("dev/assets/fonts/**/*.*").pipe(gulp.dest("dist/fonts"));

  let BuildImg = gulp.src("dev/assets/img/**/*.*").pipe(gulp.dest("dist/img"));
});

gulp.task("watch", function () {
  gulp.watch("dev/index.pug", gulp.series("min-html"));
  gulp.watch("dev/index.pug", gulp.series("pug"));
  gulp.watch("dev/pugBlocks/basic/*.pug", gulp.series("pug"));
  gulp.watch("dev/pugBlocks/blocks/*.pug", gulp.series("pug"));
  gulp.watch("dev/assets/scss/**/*.scss", gulp.series("scss"));
  gulp.watch("dev/assets/img/**/*.{png,gif,jpg}", gulp.series("toWebp"));
  gulp.watch("dev/assets/img/**/*", gulp.series("copyImages"));
  gulp.watch("dev/assets/fonts/**", gulp.series("copyFonts"));
  gulp.watch("dev/assets/js/**", gulp.series("min-js"));
});

gulp.task("build", gulp.series("clean", "export"));

//gulp.task('default', gulp.parallel('pug', 'scss', 'css', 'js', 'browser-sync', 'watch'));
gulp.task(
  "default",
  gulp.series(
    "min-html",
    "pug",
    "scss",
    "toWebp",
    "copyImages",
    "copyFonts",
    "min-js",
    "watch"
  )
);
