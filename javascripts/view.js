$(function() {
    if($(".archives .word iframe").length!=0){
      $(".archives .word iframe").addClass('iframe');
      $(".archives .word em:first-of-type").addClass('em');
    }

    $("#search_box").on('focus',(function(){
    $(".search .tags").slideDown(200,function(){
    	$(this).removeAttr("style").addClass("show");
    });
      // $(".tags").addClass("show");
    })).on('blur',(function(){
        setTimeout(function() {
          $(".search .tags").slideUp(200,function(){
          	$(this).removeClass("show").removeAttr("style");
          });
        }, 200);
    }));

})
