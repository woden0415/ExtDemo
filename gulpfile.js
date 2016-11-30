/**
 * [引入gulp，自动刷新页面]
 * @type {[type]}
 */
var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

/*
*静态页面html实时预览
*/
gulp.task('server', function(){
    browserSync.init({
        server: "./"
    });
   	
   	gulp.watch('./*', browserSync.reload);
    
});
