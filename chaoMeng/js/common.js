//左边导航
$(".leftNav dl dd a").click(function() {
        var n = $(".leftNav dl dd a").index(this);
        $(".leftNav dl dd a").removeClass("presentB");
        $(this).addClass("presentB")
    })
//js滑动导航
$(function() {
    var $el, leftPos, newWidth;
    $mainNav = $("#nav");

    $mainNav.append("<li id='magic-line'></li>");

    var $magicLine = $("#magic-line");

    $magicLine
        .width($(".current_page_item").width())
        .height($mainNav.height())
        .css("left", $(".current_page_item a").position().left)
        .data("origLeft", $(".current_page_item a").position().left)
        .data("origWidth", $magicLine.width())
        .data("origColor", $(".current_page_item a").attr("rel"));

    $("#nav a").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.parent().width();
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth,
            backgroundColor: $el.attr("rel")
        })
    }, function() {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth"),
            backgroundColor: $magicLine.data("origColor")
        });
    });


    $(".current_page_item a").mouseenter();

});