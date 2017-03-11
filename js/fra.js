/**
 * Created by Administrator on 2017/1/2.
 */
$(document).ready(function () {
    //find div
    var div = $('div.showcase');
    //find ul width
    var speed = 200;
    //滚动事件
    var containerWidth = 848;
    $(div).css({overflow: 'hidden'});
    div .mousewheel(function (event, delta) {
        if(delta>0){
            $(div).animate({
                scrollLeft: '+='+containerWidth
            }, speed);

        };
        if(delta<0)
        {
            $(div).animate({
                scrollLeft: '-='+containerWidth
            }, speed);
        };
    });

    //添加横线
    $("nav").append("<div class='first_line'></div>");
    $(".first_line").css({
       width: "120px",
       height: "1px",
       backgroundColor: "gray",
       position: "absolute",
       top: "30px",
       left: "50px",
    });
    //横线动画效果
    var line = $("nav ul:nth-child(1)");
    line.on("mouseover","li",function(){
        var w = $(this).data("w1");
        var left1 = $(this).data("left1");
        var left2 = $(this).data("left2");
        var k = $(this).data("w2");
        $("nav ul:nth-child(2) li:nth-child("+(2*k-1)+")").css({
            transition : "all 1s linear",
            width : w + "px",
            left : left2 + "px",
        })
        $("nav ul:nth-child(2) li:nth-child("+k*2+")").css({
            transition : "all 1s linear",
            width : w + "px",
            left : left1 + "px",
        })
    })
    line.on("mouseleave","li",function(){
        var k = $(this).data("w2");
        var left3= $(this).data("left3");
        $("nav ul:nth-child(2) li:nth-child("+(2*k-1)+")").css({
            transition : "all 1s linear",
            width : "0px",
            left : left3 + "px",
        })
        $("nav ul:nth-child(2) li:nth-child("+k*2+")").css({
            transition : "all 1s linear",
            width : "0px",
            left : left3 + "px",
        })
    });
    //var scroll =  $(".SCROLL");
    //scroll.on("mouseover","ul",function(){
    //    var i = $(this).data("i");
    //    //$(".scroll3").css({
    //    //   display: "block",
    //    //});
    //    $(".scroll3 ul:nth-child("+i+") li:nth-child(2)").stop().slideDown();
    //});
    //scroll.on("mouseleave","ul",function(){
    //    var i = $(this).data("i");
    //    $(".scroll3 ul:nth-child("+i+") li:nth-child(2)").stop().slideUp();
    //    $(".scroll3").css({
    //        display : "none",
    //    })
    //});

    $(".scroll3 ul:nth-child(1)").hover(function(){
        $(".scroll3 ul:nth-child(1) li:nth-child(1)").css({
            animation: "all 1s linear",
            //display: "block",
            top : "30px",
        })
        $(".scroll3 ul:nth-child(1) li:nth-child(2)").stop().slideDown();
        $(".scrollone li:nth-child(1) img").css({
            animation : "all 1s linear",
            filter: "opacity(70%)",
            })
    },
        function() {
            //$(".scroll3 ul:nth-child(1) li:nth-child(1)").stop().slideUp();
            $(".scroll3 ul:nth-child(1) li:nth-child(1)").css({
                animation: "all 1s linear",
                //display: "none",

            })
            $(".scroll3 ul:nth-child(1) li:nth-child(2)").stop().slideUp();
            $(".scrollone li:nth-child(1) img").css({
                filter: "opacity(100%)",
            })
        }
    )
});
