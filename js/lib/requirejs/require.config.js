/**
 * Created by Beck on 4/9/2017.
 */

var require={
    baseUrl:'../js',
    paths : {
        "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery-test-NoExist","lib/jquery/jquery-1.12.4"],
        "zepto": 'lib/zepto/zepto',
        //"a" : "/WebStudy/js/a"
    },
    //非AMD模块加载配置
    shim:{
        "underscore":{
            exports:"_"
        },
        "jquery.form":{
            deps:["jquery"]
        },
        'zepto': {
            exports: '$'
        }
        /*
         可以简写：
         "jquery.form":["jquery"]
         * */
    }
};
/*var require=require.config({
    baseUrl:'../js',
    paths : {
        "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery-test-NoExist","lib/jquery/jquery-1.12.4"],
        //"a" : "/WebStudy/js/a"
    },
    //非AMD模块加载配置
    shim:{
        "underscore":{
            exports:"_"
        },
        "jquery.form":{
            deps:["jquery"]
        }
        /!*
         可以简写：
         "jquery.form":["jquery"]
         * *!/
    }
})*/
