$(function() {
    var page="newdata";
    $("#search_box").on('focus',(function(){
      $(".tags").addClass("show");
    })).on('blur',(function(){
      $(".tags").removeClass("show");
    }));

    if($("textarea").length!=0 && $("textarea").val()!=""){
      var date=$("textarea").val(),
          json={};
      $('pre span').html(date);
      json['word'] = date;
      $.post("/marked",json,
          function(data, status) {
              $(".preview").html(data);
      });
      page="updata";
    }
    $("textarea").on('propertychange keyup change',(function(){
      var date=$(this).val(),
          json={};
      $('pre span').html(date);
      json['word'] = date;
      $.post("/marked",json,
      function(data, status) {
        $(".preview").html(data);
      });
      return false;
    }));
/* AJAX新增資料
   ==========================================================================*/
    $("form").on('submit', function() {
    	var data = $(this).serializeArray(),
    		json={};
    	for(var i=0;i<data.length;i++){
    		json[data[i]['name']] = data[i]['value'];
    	};

      var d=new Date(),date="";
      (d.getMonth()+1)<10?date="0"+(d.getMonth()+1)+"-":date=(d.getMonth()+1)+"-";
      d.getDate()<10?date+="0"+d.getDate()+"-": date+=d.getDate()+"-";
      date =date+d.getFullYear();
      json['date'] = date;

      json['preface'] = json['content'].split("---")[0];
      // if($(".preview blockquote img").length!=0){
      //   json['preface'] = $(".preview blockquote").html();
      // }else{
      //   json['preface'] = $(".preview blockquote").text();
      // }
      if(page=="newdata"){
        $.post("/create",json,
            function(data, status) {
                alert(data);
                location.href='/';
        });
      }else{
        json['id'] =$(".logo span").html();
        $.post("/updata",json,
            function(data, status) {
                alert(data);
                location.href='/';
        });
      }

      return false;
    });


})
