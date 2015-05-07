$(function() {
    if($(".archives .word iframe").length!=0){
      $(".archives .word iframe").addClass('iframe');
      $(".archives .word em:first-of-type").addClass('em');
    }
    $("#gotop").click(function(){
        $("html,body").animate({
            scrollTop:0
        },1000);
    });
    $(".other a").css('top',300-$(".other").offset().top);
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 300){
            $('#gotop').fadeIn("fast");
        } else {
            $('#gotop').stop().fadeOut("fast");
        }
	    $(".other a").stop().animate({
	            top:$(this).scrollTop()+300-$(".other").offset().top
	    },1000);
    	// console.log($(this).scrollTop()+100+'*'+$(".other").offset().top);
    });



		// var cl = new CanvasLoader('canvasloader-container');
		// cl.setColor('#3e6fab'); // default is '#000000'
		// cl.setShape('spiral'); // default is 'oval'
		// cl.setDiameter(38); // default is 40
		// cl.setDensity(14); // default is 40
		// cl.setRange(1.5); // default is 1.3
		// cl.setFPS(9); // default is 24
		// cl.show(); // Hidden by default

		// // This bit is only for positioning - not necessary
		//   var loaderObj = document.getElementById("canvasLoader");
  // 		loaderObj.style.position = "absolute";
  // 		loaderObj.style["top"] = cl.getDiameter() * -0.5 + "px";
  // 		loaderObj.style["left"] = cl.getDiameter() * -0.5 + "px";

})
