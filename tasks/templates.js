const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const emitty = require('emitty').setup('app', 'pug');


gulp.task('templates',function() {
    return new Promise((resolve, reject) => {
        emitty.scan(global.emittyChangedFile).then(() => {
            gulp.src('app/templates/*.pug')
                .pipe($.if(global.watch, emitty.filter(global.emittyChangedFile)))
                .pipe($.pug({ pretty: true }))
                .pipe(gulp.dest('build'))
                .on('end', resolve)
                .on('error', reject);
        });
    })
});