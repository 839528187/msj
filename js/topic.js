/* // 当网页向下滑动 20px 出现"返回顶部" 按钮
window.onscroll = function() {
    scrollFunction()
};
 
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnTop").style.display = "block";
    } else {
        document.getElementById("btnTop").style.display = "none";
    }
}
 
// 点击按钮，返回顶部
function returnTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
} */

window.onscroll = function () {
    var distance = document.documentElement.scrollTop || document.body.scrollTop;
    if (distance >= 300) {
        document.getElementById('btnTop').style.display = "block";

    } else {
        document.getElementById('btnTop').style.display = "none";
    }
    var Top = document.getElementById("btnTop");
    Top.onclick = function () {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
}