$(function() {
    var sWidth = $(".tempWrap").width(); //获取焦点图的宽度（显示面积）
    var len = $(".tempWrap ul li").length; //获取焦点图个数
    var index = 0;
    var picTimer;
    //以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮
    //上一页按钮
    $(".tempWrap .prev").click(function() {
      index -= 1;
      if(index == -1) {index = len - 1;}
      showPics(index);
    });
    //下一页按钮
    $(".tempWrap .next").click(function() {
      index += 1;
      if(index == len) {index = 0;}
      showPics(index);
    });
    //本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
    $(".tempWrap ul").css("width",sWidth * (len) + 1);
    //鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
    $(".tempWrap").hover(function() {
      clearInterval(picTimer);
    },function() {
      picTimer = setInterval(function() {
        showPics(index);
        index++;
        if(index == len) {index = 0;}
      },4000); //此4000代表自动播放的间隔，单位：毫秒
    }).trigger("mouseleave");
    //显示图片函数，根据接收的index值显示相应的内容
    function showPics(index) { //普通切换
      var nowLeft = -index*sWidth; //根据index值计算ul元素的left值
      $(".tempWrap ul").stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position
      //$(".tempWrap .btn span").removeClass("on").eq(index).addClass("on"); //为当前的按钮切换到选中的效果
      $(".tempWrap .btn span").stop(true,false).css({"background":"#9c9c9c"},300).eq(index).stop(true,false).css({"background":"#ffef39"},300); //为当前的按钮切换到选中的效果
    }
  });
  
  
  $(function() {
      var sWidth = $("#myFocus").width(); //鑾峰彇鐒︾偣鍥剧殑瀹藉害锛堟樉绀洪潰绉級
      var len = $("#myFocus dl dt").length; //鑾峰彇鐒︾偣鍥句釜鏁�
      var index = 0;
      var picTimer;
      var btn = "<div class='btn'>";
      for(var i=0; i < len; i++) {
          btn += "<span></span>";
      }
      $("#myFocus").append(btn);
      $(".btn").eq(1).remove();
      $("#myFocus .btnBg").css("opacity",0.5);
      $("#myFocus .btn span").css("opacity",0.4).mouseenter(function() {
          index = $("#myFocus .btn span").index(this);
          showPics(index);
      }).eq(0).trigger("mouseenter");
      
      $("#myFocus dl").css("width",sWidth * (len));
      
      $("#myFocus").hover(function() {
          clearInterval(picTimer);
      },function() {
          picTimer = setInterval(function() {
              showPics(index);
              index++;
              if(index == len) {index = 0;}
          },3000); 
      }).trigger("mouseleave");
      
      function showPics(index) { //鏅€氬垏鎹�
          var nowLeft = -index*sWidth; //鏍规嵁index鍊艰绠梪l鍏冪礌鐨刲eft鍊�
          $("#myFocus dl").stop(true,false).animate({"left":nowLeft},300); //閫氳繃animate()璋冩暣ul鍏冪礌婊氬姩鍒拌绠楀嚭鐨刾osition鏋�
          $("#myFocus .btn span").stop(true,false).animate({"opacity":"0.4"},300).eq(index).stop(true,false).animate({"opacity":"1"},300); //涓哄綋鍓嶇殑鎸夐挳鍒囨崲鍒伴€変腑鐨勬晥鏋�
      }
  });
  
  
  
   $(function(){
      $("ul.photo img").hover(function(){
        $(this).animate({"top":"-60px"},0);
      },function(){
        $(this).animate({"top":"0"},0)
      });
  
      var $lbpic = $(".lbpic-1 .lbpic-list-1");
      var $index = 0;
      var picTimer;
      $(".lbpic-1 .lbpic-count-1 li").eq(2).trigger('hover');
  
      $lbpic.find("li").css({"opacity":"0","index":"1"});
      $lbpic.find("li:first").css({"opacity":"1","z-index":"999"});
      $(".lbpic-1 .lbpic-count-1 li").hover(function(){
          $index = $(this).index();
          hd($index);
      }).eq(0).trigger("mouseover");
  
      $(".lbpic-1").hover(function(){
          clearInterval(picTimer);
      },function(){
          picTimer = setInterval(function() {
              $index++;
              if($index == 5){$index = 0;}
              hd($index);
          },2500);
      }).trigger("mouseleave");
  
      function hd($index){
  
          $(".lbpic-1 .lbpic-count-1 li").eq($index).addClass("current").siblings().removeClass("current");
          $lbpic.find("li").eq($index).css({"z-index":"999"}).animate({"opacity":"1"},0).siblings().css({"z-index":"1"}).animate({"opacity":"0"},0);
      }
  
  })
  
  $(function(){
  
      var $lbpic2 = $(".lbpic-2 .lbpic-list-2");
      var $index2 = 0;
      var picTimer2;
      $(".lbpic-2 .lbpic-count-2 li").eq(2).trigger('hover');
  
      $lbpic2.find("li").css({"opacity":"0","index":"1"});
      $lbpic2.find("li:first").css({"opacity":"1","z-index":"999"});
      $(".lbpic-2 .lbpic-count-2 li").hover(function(){
          $index2 = $(this).index();
          hd2($index2);
      }).eq(0).trigger("mouseover");
  
      $(".lbpic-2").hover(function(){
          clearInterval(picTimer2);
      },function(){
          picTimer2 = setInterval(function() {
              $index2++;
              if($index2 == 5){$index2 = 0;}
              hd2($index2);
          },2500);
      }).trigger("mouseleave");
  
      function hd2($index2){
  
          $(".lbpic-2 .lbpic-count-2 li").eq($index2).addClass("current").siblings().removeClass("current");
          $lbpic2.find("li").eq($index2).css({"z-index":"999"}).animate({"opacity":"1"},0).siblings().css({"z-index":"1"}).animate({"opacity":"0"},0);
      }
  
  })