/**
 * Created by xuliang on 15/10/16.
 * 原生js回到顶部效果
 * 兼容IE8+,Chrome,Firefox
 */
(function () {
    var topBtn = document.getElementById("btn");
    var viewHeight = document.documentElement.clientHeight || document.body.clientHeight;//视口高度
    var timer = null;
    var isTop = false;
    //如果鼠标滚动，中途停止定时器
    //滚动事件，判断页面是否滚动大于一屏，大于显示，小于消失
    window.onscroll = function () {
        var backtop = document.documentElement.scrollTop || document.body.scrollTop;//滚动高度
        if (backtop > viewHeight) {//滚动超过一屏幕才显示
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
        if (!isTop) {
            clearInterval(timer);
        }
        isTop = false;
    };
    btn.onclick = function () {
        timer = setInterval(function () {
            var backtop = document.documentElement.scrollTop || document.body.scrollTop;
            var speed = Math.ceil(backtop / 5);
            document.documentElement.scrollTop = document.body.scrollTop = backtop - speed;
            isTop = true;
            if (backtop == 0) {
                clearInterval(timer);
            }
        }, 30);
    }
})();

//document.documentElement.scrollTop || document.body.scrollTop总有一个恒为0