/**
 * Created by Beck on 2016/6/30.
 */

//引入gulp
var gulp=require('gulp');

//引入组件
var jshint=require('gulp-jshint');
var sass=require('gulp-sass');
var concat=require('gulp-concat');
var uglify=require('gulp-uglify');
var rename=require('gulp-rename');

//检查脚本
gulp.task('lint',function(){
    gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

//编译Sass
gulp.task('sass',function(){
    gulp.src('sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/css'));
});

//合并，压缩文件
gulp.task('scripts',function(){
    gulp.src('js/lib/*.js')
        .pipe(concat('all-lib.js'))
        .pipe(gulp.dest('build/js/'))
        .pipe(rename('all-lib.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js/'));
    /*多个的情况下*/
    gulp.src('js/lib/*.js')
        .pipe(concat('all-lib22.js'))
        .pipe(gulp.dest('build/js/'))
        .pipe(rename('all-lib11.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js/'));
});


//默认任务
gulp.task('default',function(){
    gulp.run('lint','sass','scripts');

    //监听文件变化
    gulp.watch('js/*.js',function(){
        gulp.run('lint','sass','scripts');
    });
});

/*
         gulp的使用流程一般是这样子的：首先通过gulp.src()方法获取到我们想要处理的文件流，然后把文件流通过pipe方法导入到gulp的插件中，
         最后把经过插件处理后的流再通过pipe方法导入到gulp.dest()中，gulp.dest()方法则把流中的内容写入到文件中，这里首先需要弄清楚的一点是，
         我们给gulp.dest()传入的路径参数，只能用来指定要生成的文件的目录，而不能指定生成文件的文件名，它生成文件的文件名使用的是导入到它的文件流自身的文件名，
         所以生成的文件名是由导入到它的文件流决定的，即使我们给它传入一个带有文件名的路径参数，然后它也会把这个文件名当做是目录名，例如：

         var gulp = require('gulp');
         gulp.src('script/jquery.js')
         .pipe(gulp.dest('dist/foo.js'));
         //最终生成的文件路径为 dist/foo.js/jquery.js,而不是dist/foo.js
* */










