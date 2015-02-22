//當DOM開始載入時執行
$(function() {
    // ========================================================
    // 首頁
    // ========================================================

    // 嵌入頁面
    // --------------------------------------------------------

    var _data = data_bd(),
        _filter = "全部",
        _mode = "圖片",
        _class = "日誌",
        _tabs,
        _number = _data.length;
    // $("#js-web").show_data(_data, 3, "部分", "圖片", "網頁設計");
    // $("#js-cg").show_data(_data, _number, "部分", "圖片", "繪圖插畫");
    // $("#js-code").show_data(_data, _number, "部分", "圖片", "程式範例");
    // $("#js-blog").show_data(_data, _number, "部分", "圖片", "日誌");
        $("#ja-tab").tab_Set(_data, _number, "全部");
        $("#js-data_block").empty().show_data(_data, _number, "全部", "圖片", "全部");
    // $("#ja-new").empty().show_data(_data,6, "全部", "表格", "");

    var page = false;
    $("h1").on('click', function(event) {

        // if (page) _change_container(page);
        page = false;
        // show = _change_block(show, 1);
        // $(".pic-row").remove();
        // $("#js-web").show_data(_data, _number, "部分", "圖片", "網頁設計");
        // $("#js-cg").show_data(_data, _number, "部分", "圖片", "繪圖插畫");
        // $("#js-code").show_data(_data, _number, "部分", "圖片", "程式範例");
        // $("#js-blog").show_data(_data, _number, "部分", "圖片", "日誌");
        $(".tab").remove();
        $("#ja-tab").tab_Set(_data, _number, "全部");
        $("#js-data_block").empty().show_data(_data, _number, "全部", "圖片", "全部");
    });
    $(".item").eq(0).on('click', function(event) {

        // if (page) _change_container(page);
        page = false;
        // show = _change_block(show, 1);
        // $(".pic-row").remove();
        // $("#js-web").show_data(_data, _number, "部分", "圖片", "網頁設計");
        // $("#js-cg").show_data(_data, _number, "部分", "圖片", "繪圖插畫");
        // $("#js-code").show_data(_data, _number, "部分", "圖片", "程式範例");
        // $("#js-blog").show_data(_data, _number, "部分", "圖片", "日誌");
        $(".tab").remove();
        $("#ja-tab").tab_Set(_data, _number, "全部");
        $("#js-data_block").empty().show_data(_data, _number, "全部", "圖片", "全部");
    });
    $(".item").eq(1).on('click', function(event) {

        // if (!page) _change_container(page);
        // page = true;
        $(".tab").remove();
        $("#ja-tab").tab_Set(_data, _number, "網頁設計");
        $("#js-data_block").empty().show_data(_data, _number, "部分", "圖片", "網頁設計");
    });
    $(".item").eq(2).on('click', function(event) {

        // if (!page) _change_container(page);
        // page = true;
        $(".tab").remove();
        $("#ja-tab").tab_Set(_data, _number, "平面設計");
        $("#js-data_block").empty().show_data(_data, _number, "部分", "圖片", "平面設計");
    });
    $(".item").eq(3).on('click', function(event) {
        // if (!page) _change_container(page);
        // page = true;
        $(".tab").remove();
        $("#ja-tab").tab_Set(_data, _number, "繪圖插畫");
        $("#js-data_block").empty().show_data(_data, _number, "部分", "圖片", "繪圖插畫");
    });
    $(".item").eq(4).on('click', function(event) {

        // if (!page) _change_container(page);
        // page = true;
        $(".tab").remove();
        $("#ja-tab").tab_Set(_data, _number, "音樂影片");
        $("#js-data_block").empty().show_data(_data, _number, "部分", "圖片", "音樂影片");
    });
    $(".item").eq(5).on('click', function(event) {

        // if (!page) _change_container(page);
        // page = true;
        $(".tab").remove();
        $("#ja-tab").tab_Set(_data, _number, "程式專案");
        $("#js-data_block").empty().show_data(_data, _number, "部分", "圖片", "程式專案");
    });
    $(".item").eq(6).on('click', function(event) {

        // if (!page) _change_container(page);
        // page = true;
        $(".tab").remove();
        $("#ja-tab").tab_Set(_data, _number, "日誌");
        $("#js-data_block").empty().show_data(_data, _number, "部分", "圖片", "日誌");
    });

    // var show = 0;
    // $(".next").on('click', function(event) {
    //     show = _change_block(show, true);
    // });

    $(".main").on('click', '.box', function(event) {
        var _id = $(this).find(".id").text();
        for (var i = 0; i < _number; i++) {
            if (_data[i].id == _id) {
                console.log(_id);
                $(".data-title").html(_data[i].title);
                $(".data-day").html(_data[i].day);
                $(".data-pic").html( _data[i].pic_all);
                $(".data-word").html(_data[i].word);
                break;
            }
        }
        $(".js-blur").addClass("blur");
        $("#window").fadeIn(100);
    });

    $("#close").on('click', function(event) {
        $("#window").fadeOut(100);
        $(".js-blur").removeClass("blur");
    });
    // $(".single-container").mousewheel(function(event, delta, deltaX, deltaY) {
    //     if (deltaY == 1) show = _change_block(show, false);
    //     if (deltaY == -1) show = _change_block(show, true);
    //     // console.log(delta, deltaX, deltaY);
    // });

});

function _change_block(i, n) {
    if (n == 1) {
        $(".block").eq(i).removeClass("show");
        if (i == 6) i = -1;
        $(".block").eq(0).addClass('show');
        i++;
    }
    if (n) {
        $(".block").eq(i).removeClass("show");
        if (i == 6) i = -1;
        $(".block").eq(i + 1).addClass('show');
        i++;
    }
    if (!n) {
        $(".block").eq(i).removeClass("show");
        if (i == -1) i = 6;
        $(".block").eq(i - 1).addClass('show');
        i--;
    }
    return i;
}


(function($) {
    $.fn.tab_Set = function(data, n, _filter) {
        var _tabs = [];
        if (_filter == "全部") {
            for (var i = 0; i < n; i++) {
                var obj_tab = data[i].tab,
                    repeat = false;
                for (var j = 0; j < obj_tab.length; j++) {
                    repeat = _tabs.some(function(value, index, array) {
                        return value == obj_tab[j] ? true : false;
                    });
                    if (repeat == false) _tabs.push(obj_tab[j]);
                    // console.log(obj_tab[j]);
                }
            }
        } else {
            for (var i = 0; i < n; i++) {
                if (_filter == data[i].class) {
                    var obj_tab = data[i].tab,
                        repeat = false;
                    for (var j = 0; j < obj_tab.length; j++) {
                        repeat = _tabs.some(function(value, index, array) {
                            return value == obj_tab[j] ? true : false;
                        });
                        if (repeat == false) _tabs.push(obj_tab[j]);
                    }
                }
            }
        }
        // console.log(_tabs);
        for (var i = 0; i < _tabs.length; i++) {
            $(this).append("<span class='tab'>" + _tabs[i] + "</span>");
        }
    };
})(jQuery)


function _change_container(page) {
    // console.log(n);
    if (page) {
        // $(".single-container").removeClass('hide');
        // $(".container").addClass('hide');
        // $("body").addClass('overflow');
    }
    if (!page) {
        // $(".single-container").addClass('hide');
        // $(".container").removeClass('hide');
        // $("body").removeClass('overflow');
    }
}

(function($) {
    $.fn.show_data = function(_data, _number, _filter, _mode, _class) {
        if (_mode == "圖片") {
            if (_filter == "全部") {
                var n = -1;
                for (var i = 0; i < _number; i++) {
                    // if (i % 3 == 0) {
                    //     $(this).append("<div class='pic-row'></div>");
                    //     n++;
                    // }
                    $(this).append("<div class='box'><div class='in-box'><img src='" + _data[i].pic_med +
                        "'><div><h3>" + _data[i].title +
                        "</h3><span class='data'>" + _data[i].day +
                        "</span><span class='id hide'>" + _data[i].id + "</span></div><p class='word'>" + _data[i].word +
                        "</p></div></div>");
                }
            }
            if (_filter == "部分") {
                var n = -1,
                    tn = 0;
                for (var i = 0; i < _number; i++) {
                    // console.log(i);
                    if (_data[i].class == _class) {
                        // if (tn % 3 == 0) {
                        //     $(this).append("<div class='pic-row'></div>");
                        //     n++;
                        //     // console.log(n+"++++++"+$(".pic-row").eq(n).length);
                        // }
                        // console.log(i);
                        tn++;
                        $(this).append("<div class='box'><div class='in-box'><img src='" + _data[i].pic_med +
                            "'><div><h3>" + _data[i].title +
                            "</h3><span class='data'>" + _data[i].day + "</span></div><p class='word'>" + _data[i].word +
                            "</p><span class='id hide'>" + _data[i].id + "</span></div></div>");
                    }
                }
            }
        }
        if (_mode == "表格") {
            if (_filter == "全部") {
                for (var i = 0; i < _number; i++) {
                    $(this).append("<div class='box'><img class='list-pic' alt='' src='" + _data[i].pic_small +
                        "''><div class='list-box'><span class='sort'>" + _data[i].class +
                        "</span><p class='list-tit'>" + _data[i].title +
                        "</p><span class='data'>" + _data[i].day +
                        "</span></div><span class='id hide'>" + _data[i].id + "</span></div>");
                }
            }
        }
    };
})(jQuery)
