$(function() {
    if($(".archives .word iframe").length!=0){
      $(".archives .word iframe").addClass('iframe');
      $(".archives .word em:first-of-type").addClass('em');
    }

    $(".tags-box .tags input").on('focus',function(){
      $(".tags-box .tags").css('width','200px');
      $(".tags-box .tags .box").css('left','0px');
    }).on('blur',function(){
      $(".tags-box .tags").removeAttr('style');
      $(".tags-box .tags .box").removeAttr('style');
    });

    if($(".tags-box .tags").length!=0){
      console.log("message");
      $('.tags-box .tags .box').jScrollPane();
    }

    $("#gotop").click(function(){
        $("html,body").animate({
            scrollTop:0
        },1000);
    });
    if($(".other .page-but").length!=0){
      $(".other .page-but").css('top',300-$(".other").offset().top);
    }
    if($('#gotop').length!=0){
      $('#gotop').css('display','none');
    }
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 300){
            $('#gotop').fadeIn("fast");
        } else {
            $('#gotop').stop().fadeOut("fast");
        }
        if($(".other .page-but").length!=0){
          $(".other .page-but").stop().animate({
                  top:$(this).scrollTop()+300-$(".other").offset().top
          },1000);
        }

    });
    Pace.on("done", function(){
        $(".cover").fadeOut(1000);
    });
    $(".m-menu").on('click',function(){
      $('.aside').animate({
          left:0
      },200);
    });
    $(".close-menu").on('click',function(){
      $('.aside').animate({
          left:-100
      },200,function(){
        $('.aside').removeAttr('style');
      });
    });

    $(".m-search").on('click',function(){
      $(".x-search").css('display','inline-block');
      $('.follow form').css('padding-left','20px').animate({
          width:100+'%'
      },200);
    });
    $(".x-search").on('click',function(){
      $('.follow form').animate({
          width:200
      },200,function(){
        $('.follow form,.x-search').removeAttr('style');
      });
    });
})
