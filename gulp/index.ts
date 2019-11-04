let requireDir = require("require-dir");

/* gulpfile task  common config write here */
let gulp = require("gulp");

gulp.opts = {
    srcDir: 'src/',
    destDir: '.tmp/',
};

requireDir("./task");

gulp.task("default", function () {
    gulp.start("support");
});
