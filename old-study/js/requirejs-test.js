/**
 * Created by Beck on 2017/3/16.
 */

console.log('ddd');
/*requirejs(['../lib/requirejs/require-config'],function(){

});*/

;require.config({
    baseUrl:'/WebStudy/js',
    paths : {
        "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery-test-NoExist","/WebStudy/lib/jquery/jquery-1.11.3.min"],
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
        /*
         可以简写：
         "jquery.form":["jquery"]
         * */
    }
})

define(['jquery'],function($){
    console.log($);

    //alert('requirejs是AMD形式的按需加载Js功能，目前这个alert并不会阻挡页面加载这个js前的加载渲染');


    console.log('ljlsdjflsjdlfjs');
    console.log('ljlsdjflsjdlfjs');



    var result=[];
    var angulaurArray=[];
    for(i=0;i<168;i++){
        result.push(i);
    }//模拟服务端返回的数据

    var pageSize=50;//分页大小
    var pages=Math.ceil(result.length/50);//向上取整
    console.log(result);
    //return;
    for(var j=0;j<pages-1;j++){
        var partArray=result.slice(j*pageSize,(j+1)*pageSize);//截图原来数据的部分数据进行拼接
        console.log(partArray);
        angulaurArray=angulaurArray.concat(partArray);
    }

    angulaurArray=angulaurArray.concat(result.slice(j*pageSize,(j+1)*pageSize));//填充最后一组分页
    console.log(angulaurArray);



});

