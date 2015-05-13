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

})
