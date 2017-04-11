/**
 * Created by Huangzufu on 2017/4/11.
 */


/*;define(['zepto','base'],function($,base){


    $('#testDiv').text('你好，使用了zepto更改了内容');

    console.log(langPackages);
});*/


;define(['base',window.customerSetting.langPackage],function(base,aaa){
    console.log(aaa)


    $('html').text('你好，使用了zepto更改了内容');

    //console.log(langPackages);
});
