/**
 * Created by Huangzufu on 2017/4/26.
 */

;require(['jquery','domReady'], function ($,domReady){
    domReady(function () {
        $(window).scroll(function () {
            console.log('Hello');
            if ($(window).scrollTop() > 100) {
                $("#back-to-top").fadeIn(1500);
            }
            else {
                $("#back-to-top").fadeOut(1000);
            }
        });
        //当点击跳转链接后，回到页面顶部位置
        $("#back-to-top").click(function () {
            $('body,html').animate({ scrollTop: 0 }, 1000);
            return false;
        });
    });

    // some code here
});
