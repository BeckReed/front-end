/**
 * Created by Huangzufu on 2017/4/26.
 */

;require(['jquery','domReady'], function ($,domReady){
    domReady(function () {

        // 防抖动函数
        function debounce(func, wait, immediate) {
            var timeout;
            return function() {
                var context = this, args = arguments;
                var later = function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        };

        var myEfficientFn = debounce(function() {
            console.log('Hello');
            if ($(window).scrollTop() > 100) {
                $("#back-to-top").fadeIn(1500);
            }
            else {
                $("#back-to-top").fadeOut(1000);
            }
        }, 100);

// 绑定监听
        //window.addEventListener('resize', myEfficientFn);



        $(window).scroll(function () {
            myEfficientFn();
           /* console.log('Hello');
            if ($(window).scrollTop() > 100) {
                $("#back-to-top").fadeIn(1500);
            }
            else {
                $("#back-to-top").fadeOut(1000);
            }*/
        });
        //当点击跳转链接后，回到页面顶部位置
        $("#back-to-top").click(function () {
            $('body,html').animate({ scrollTop: 0 }, 1000);
            return false;
        });
    });

    // some code here
});
