$(function() {

  $(".main").onepage_scroll({
     sectionContainer: ".page",     // 可自定义选择器
     easing: "ease-in-out", // 接受 CSS3 动画类型： "ease", "linear", "ease-in","ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
     animationTime: 800,             // 每个板块的动画时间
     pagination: true,                // 是否显示分页
     updateURL: false,                // 是否随着用户滚动更新URL
     beforeMove: function(index) {},  // 页面滚动前回调函数
     afterMove: function(index) {},   // 页面滚动后回调函数
     loop: false,                     // 页面循环滚动
     keyboard: true,                  // 是否激活键盘控制
     responsiveFallback: false,        // 改变浏览器大小后恢复到正常的滚动，如设计宽度小于600px时，恢复正常滚动
     direction: "vertical"            // 滚动方向，选项 "vertical" 和 "horizontal". 默认值 "vertical".
  });

  $('.ui.fixed.button').on('click', function() {
      // $("header").animate({
      //     left:160
      // },400);
      $('.left.demo.sidebar')
        .sidebar('setting', {
          dimPage          : false,
          transition       : "slide along",
          mobileTransition : "slide along"
        })
        .sidebar('toggle');
  });

  $('.degree1').progress({
    percent: 25
  });
  $('.degree2').progress({
    percent: 50
  });
  $('.degree3').progress({
    percent: 75
  });
  $('.degree4').progress({
    percent: 99
  });

  Pace.on("done", function(){
      $(".cover").fadeOut(1000);
  });

})
