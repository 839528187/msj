$(function(){
    $(".rank li").hover(function(){
        $(this).addClass('on').siblings().removeClass('on');
    })

    var colors = ['#ed707a','#ffb628','#36b3ee'];
    var arrhtml = [];
    $(".netali a").each(function(){
        var rand = Math.ceil(Math.random() * 3);
        $(this).css('background',colors[rand - 1]);
    })
    $('.netali li').each(function(){
        var html = $(this).prop('outerHTML');
        arrhtml.push(html);
    })
    arrhtml.sort(randomSort)
    function randomSort(a, b) {
        return Math.random() > 0.5 ? -1 : 1;
    }
    $(".netali ul").html(arrhtml.join(''));
    $(".netali li:last").addClass('nomr');

    $(".netali-squ a").each(function(){
        $(".netali-squ a").eq( Math.ceil(Math.random() * 9)).css('background','#bfd7ff')
    })

    $(function() {
        var sWidth = $("#focus").width(); //获取焦点图的宽度（显示面积）
        var len = $("#focus ul li").length; //获取焦点图个数
        var index = 0;
        var picTimer;
        var btn = "<div class='btnBg'></div><div class='btn'>";
        for (var i = 0; i < len; i++) {
            btn += "<span></span>";
        }
        $("#focus").append(btn);
        $("#focus .btn span").removeClass("on").mouseover(function() {
            index = $("#focus .btn span").index(this);
            showPics(index);
        }).eq(0).trigger("mouseover");
        $("#focus ul").css("width", sWidth * (len) + 2);
        $("#focus").hover(function() {
                clearInterval(picTimer);
            },
            function() {
                picTimer = setInterval(function() {
                        showPics(index);
                        index++;
                        if (index == len) {
                            index = 0;
                        }
                    },
                    3000);
            }).trigger("mouseleave");
        function showPics(index) {
            var nowLeft = -index * sWidth;
            $("#focus ul").stop(true, false).animate({
                    "left": nowLeft
                },
                300);
            $("#focus .btn span").stop(true, false).removeClass("on").eq(index).stop(true, false).addClass("on");
        }
    })
});