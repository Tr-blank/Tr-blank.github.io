// 標籤切換
// ==============================================================
function _tab_change($tabs, $panels) {
    $tabs.click(function(event) {
        var $n = $tabs.index(this);
        // alert($n);
        //選取樣式切換
        $tabs.not(this).removeClass("select")
        $(this).addClass("select");

        var $show_panel = $panels.eq($n);
        $panels.not($show_panel).removeClass("show");
        $show_panel.show().addClass("show");
    });
}

// 彈出視窗
// ==============================================================
function _box_popup($button,$box) {
    // var $win=$(window),
    //     $animation={};
    // $box.height($win.height()).width($win.width());
    var $win=$(window);
    $button.on('click','.js-click_popup', function() {
        // $box.show();
        $animation={'opacity': 1};
        $box.show().animate($animation, 300);
        _iframe("team_detal.html",$(".js-iframe"));
    });
    $box.on('click', function() {
        $animation={'opacity': 0};
        $box.animate($animation, 300,function(){
            $box.hide();
        });
        // $box.hide();
    });
}

//開新窗口
function _open_Window($theURL,$winName,$features) { //v2.0
    window.open($theURL,$winName,$features);
}

//嵌入網頁
function _iframe($file,$box){
    $.get($file,function($string){ //初始將a.html include div#iframe
        $box.html($string);
    });
}



// 左右滑動
// ==============================================================
function _box_slider($parents) {
    var $now,
        $swap=false,//動畫開關
        $animation = {};
        // alert($box.css("left"));
    $parents.on('click','.left-botton', function() {
        var $box=$parents.find(".box-content"),
            $width=$box.find('li').width()+6;
        if(!$swap){
            $swap=true;
            $animation={'left':'+='+$width};
            $now = parseInt($box.css("left"));
            if($now>=0)$animation={'left':'0'};
            $box.animate($animation, 500, function() {
                $swap=false;
            });
        }
    });
    $parents.on('click','.right-botton', function() {
        var $box=$parents.find(".box-content"),
            $width=$box.find('li').width()+6;
        if(!$swap){
            $swap=true;
            $animation={'left':'-='+$width};
            $now = parseInt($box.css("left"));
            if($now<=-904)$animation={'left':'-904'};
            $box.animate($animation, 500, function() {
                $swap=false;
            });
        }
    });
}

// 區塊卷軸
// ==============================================================
function _div_scroll($container, $scrollbar, $dragger_rail, $dragger_bar) {
    var $win = $(window),
        $container_top = parseInt($container.css("top")),
        $scrollbar_h = $scrollbar.height(),
        $container_h = $container.height(),
        // alert($container);
        $range = $container_h - $scrollbar_h, //捲動高度範圍
        $ratio = $scrollbar_h / $container_h; //比值
    $dragger_rail.hide(); //卷軸預設隱藏
    $dragger_rail.height($scrollbar_h);//捲動軸高度計算
    $dragger_bar.height($scrollbar_h * $ratio); //卷軸紐高度計算
    // alert($container_h);
    var $rail_h=$dragger_rail.height(),
        $bar_h=$dragger_bar.height(),
        $dragger_range = $rail_h - $bar_h; //捲動高度範圍

    //滑屬拖曳滾軸事件
    var $drag = false,//點擊判斷
        $inside =false;//滑鼠位置判斷
    $dragger_bar.on('mousedown', function(e) {
        var $bar_top = parseInt($dragger_bar.css("top")),
        $datum = e.pageY - $bar_top;
        // alert(123);
        $drag = true;
        $win.on('mousemove', function(e) {
            var $top = e.pageY - $datum;
            if ($top < 0) $top = 0;
            if ($top > $dragger_range) $top = $dragger_range;
            $dragger_bar.css("top", $top);
            _container_move($top);
        });
        return false;
    });
    $win.on('mouseup', function() {
        if ($drag) {
            $drag = false;
            if(!$inside) $dragger_rail.fadeOut(300);
            $win.off('mousemove');
        }
    });

    //卷軸淡出
    $scrollbar.on('mouseenter', function() {
        $inside=true;
        $dragger_rail.fadeIn(300);
        return false;
    });
    //卷軸淡入
    $scrollbar.on('mouseleave', function() {
        $inside=false;
        if (!$drag) $dragger_rail.fadeOut(300);
    });

    //滑鼠滾動事件
    var $speed = 0;
    $scrollbar.on('mousewheel', function(e) {
        $speed += -e.deltaY*34;
        if ($speed < 0) $speed = 0;
        if ($speed > $dragger_range) $speed = $dragger_range;
        $dragger_bar.stop().animate({
            top: $speed
        }, 500);
        _container_move($speed);
        return false;
    });
    function _container_move($top) {
        var $container_top = -$top / $ratio;
        $container.stop().animate({
            top: $container_top,
        }, 200);
    }
}

//浮動視窗
// ==============================================================
function _box_float($ad) {
    var $win = $(window),
    width = $ad.width(),
        height = $ad.height(),
        diffY = 880, _diffX = 0, // 距離右及下方邊距
        moveSpeed = 800; // 移動的速度

    // // 先把 #abgne_float_ad 移動到定點
    // $ad.css({
    //     top: 400,
    //     opacity: 1
    // });

    // 幫網頁加上 scroll 及 resize 事件
    $win.bind('scroll resize', function() {
        var $this = $(this);

        // 控制 #abgne_float_ad 的移動
        $ad.stop().animate({
            top: $this.scrollTop(),
            //right: $this.scrollLeft() + $this.width() - _width - _diffX
        }, moveSpeed);
    }).scroll();
}
