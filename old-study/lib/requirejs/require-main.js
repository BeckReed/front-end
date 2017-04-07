/**
 * Created by Beck on 2016/6/29.
 */

/*
    1.之前加载的例子中加载模块都是本地JS,但是大部分情况下需要加载的JS可能来自本地服务器，
      其他网站或者CDN，这样就不能通过这种方式来加载了。用如下形式加载：
    2.以下加载方式可以给模块起一个更短更好及的名字，比如如下将百度的jquery地址标记为jquery,
      这样在require时只需要写["jquery"]就可以加载该js,本地的js我们也可以这样配置
    3.通过paths的配置会使我们的模块名字更加精炼,paths还有一个重要的功能，就是可以配置多个路径，
      如果远程CDN库没有加载成功，可以加载本地的库如下,这样当百度的Jqeury没有成功加载后悔加载本地js
      目录下的jquery
* */
require.config({
    paths:{
        "jquery":["http://libs.baidu.com/jquery/2.0.3/jquery","../js/lib/jquery-1.11.3.min"],
        "test1":"../../js/test1"
    },
    /*
        1.通过require加载的模块一般都需要符合AMD规范即使用define来申明模块，但是部分时候需要加载非AMD规范的JS,
          这个时候就需要用到另一个功能： shim，shim  直接翻译为“垫”
          1.1 非AMD模块输出，将非保准的AMD模块"垫"成可用的模块，比如在老版本的Jquery中，是没有继承AMD规范的，所以不能
              直接require["jquery"],这时候就需要shim，比如我要是用underscore类库，但是它没有实现AMD规范，可以配置如下
    * */
    shim:{
        "underscore":{
            exports:"_"
        },
        "jquery.form":{
            deps:["jquery"]
        }
        /*
            可以简写：
            "jquery.form":["jquery"]
        * */
    }
});


/*
    1.在使用requirejs时，加载模块时不用写.js后缀的，当然也是不能写后缀
    2.上面例子中的callback函数中发现$参数，这个就是依赖的Jquery模块的输出变量，如果你依赖很多个模块，
      可以依次写入多个参数来使用
    3.如果某个模块不输出变量，则没有，所以尽量将输出的模块写在前面，防止位置错乱引发误解
* */
require(["jquery","../../js/test1"],function($){
    console.log($);
    console.log(_);
    /*$(function () {
        console.log('11111');
        _.each([1,2,3],alert);
    })*/
});

/*
//哪个在前哪个先加载
require(["../js/test1","../js/test2"],function(){

});*/




/* main.js
require(['moduleA', 'moduleB', 'moduleC'], function (moduleA, moduleB, moduleC){
    // some code here
});
 require()函数接受两个参数。第一个参数是一个数组，表示所依赖的模块，
 上例就是['moduleA', 'moduleB', 'moduleC']，即主模块依赖这三个模块；
 第二个参数是一个回调函数，当前面指定的模块都加载成功后，它将被调用。
 加载的模块会以参数形式传入该函数，从而在回调函数内部就可以使用这些模块

 require()异步加载moduleA，moduleB和moduleC，浏览器不会失去响应；
 它指定的回调函数，只有前面的模块都加载成功后，才会运行，解决了依赖性的问题。

*/

/*
 require.config({
 　　　　shim: {

 　　　　　　'underscore':{
 　　　　　　　　exports: '_'
 　　　　　　},
 　　　　　　'backbone': {
 　　　　　　　　deps: ['underscore', 'jquery'],
 　　　　　　　　exports: 'Backbone'
 　　　　　　}
 　　　　}
 　　});

 require.config()接受一个配置对象，这个对象除了有前面说过的paths属性之外，还有一个shim属性，
 专门用来配置不兼容的模块。具体来说，每个模块要定义（1）exports值（输出的变量名），
  表明这个模块外部调用时的名称；（2）deps数组，表明该模块的依赖性。
* */








