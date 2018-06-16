"use strict";

const gulp = require("gulp");
const reqDir = require('require-dir');
reqDir('./tasks', { recurse: true });

// Build
gulp.task("build", gulp.series('templates'));

// Watcher
gulp.task("watch", function() {
    global.watch = true;

    gulp.watch('app/templates/**/*.pug', gulp.series("templates"))
        .on('all', (event, filepath) => {
            global.emittyChangedFile = filepath;
        });
});

// RUN THIS TASK AS A DEFAULT
gulp.task("dev",
    gulp.series("build", gulp.series("watch"))
);