$(function() {

  // $(".main").onepage_scroll({
  //    sectionContainer: ".page",     // 可自定义选择器
  //    easing: "ease-in-out", // 接受 CSS3 动画类型： "ease", "linear", "ease-in","ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
  //    animationTime: 800,             // 每个板块的动画时间
  //    pagination: true,                // 是否显示分页
  //    updateURL: false,                // 是否随着用户滚动更新URL
  //    beforeMove: function(index) {},  // 页面滚动前回调函数
  //    afterMove: function(index) {},   // 页面滚动后回调函数
  //    loop: false,                     // 页面循环滚动
  //    keyboard: true,                  // 是否激活键盘控制
  //    responsiveFallback: false,        // 改变浏览器大小后恢复到正常的滚动，如设计宽度小于600px时，恢复正常滚动
  //    direction: "vertical"            // 滚动方向，选项 "vertical" 和 "horizontal". 默认值 "vertical".
  // });

  // $('.ui.fixed.button').on('click', function() {
  //     // $("header").animate({
  //     //     left:160
  //     // },400);
  //     $('.left.demo.sidebar')
  //       .sidebar('setting', {
  //         dimPage          : false,
  //         transition       : "slide along",
  //         mobileTransition : "slide along"
  //       })
  //       .sidebar('toggle');
  // });
    if($("#experiences").length!=0){
        var exp_top = $("#experiences").offset().top;
    }

    var tiya_top = $("#tiya").offset().top,
        skill_top = $("#skills").offset().top,
        work_top = $("#works").offset().top,
        // contact_top = $("#contact").offset().top,
        nav_li = $(".nav-li");
    // var contant_top=[];
    // for(var i=0;i< nav_li.length;i++){
    //   contant_top = nav_li
    // }
    // console.log(nav_li);

    $(window).scroll(function(){
      var now = $(this).scrollTop();
      // console.log(now);
      $('#tiya').css('background-position','center calc(50% + '+(now*0.5)+'px');
      if($("#experiences").length!=0){
        if(now<exp_top-300){
          nav_li.removeClass('now');
          $("#nav_t").addClass("now");
        }
        if(now>=exp_top-300 && now<skill_top-300){
          nav_li.removeClass('now');
          $("#nav_e").addClass("now");
        }
      }
      if(now<300){
          nav_li.removeClass('now');
          $("#nav_t").addClass("now");
      }
      if(now>=skill_top-300 && now<work_top-300){
        nav_li.removeClass('now');
        $("#nav_s").addClass("now");
      }
      if(now>=work_top-300){
        nav_li.removeClass('now');
        $("#nav_w").addClass("now");
      }
      // if(now>=work_top-300 && now<contact_top-300){
      //   nav_li.removeClass('now');
      //   $("#nav_w").addClass("now");
      // }
      // if(now>=contact_top-300){
      //   nav_li.removeClass('now');
      //   $("#nav_c").addClass("now");
      // }
    });

    $("#nav_t").click(function(){
        $("html,body").animate({
            scrollTop : tiya_top
        },1000);
    });
    $("#nav_e").click(function(){
        $("html,body").animate({
            scrollTop : exp_top
        },1000);
    });
    $("#nav_s").click(function(){
        $("html,body").animate({
            scrollTop : skill_top
        },1000);
    });
    $("#nav_w").click(function(){
        $("html,body").animate({
            scrollTop : work_top
        },1000);
    });
    $("#nav_c").click(function(){
        $("html,body").animate({
            scrollTop : contact_top
        },1000);
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
    var on_off=false;
    // $(".ui.fixed.button").on('click',function(){
    //   $('.aside').animate({
    //       left:0
    //   },200);
    // });
    var aside=$(".aside");
    $(".ui.fixed.button").on('click',function(){
      if(on_off==false){
        aside.animate({
            left:0
        },300,'swing');
        on_off=true;
      }else{
        aside.animate({
            left:-100
        },300,'swing',function(){
          aside.removeAttr('style');
        });
        on_off=false;
      }

    });


  Pace.on("done", function(){
      $(".cover").fadeOut(1000);
      // console.log("message");
  });

})
