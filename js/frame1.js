$(function () {
    var i = 500;
    var a = function () {
        //图片topissue的动画效果
        $("#topissue").css({backgroundPosition: '0px -160px'});
        setTimeout(function () {
            $("#topissue").css({backgroundPosition: '0px -80px'})
        }, i)
        setTimeout(function () {
            $("#topissue").css({backgroundPosition: '0px 0px'})
        }, i + 500)
        setTimeout(function () {
            $("#topissue").css({backgroundPosition: '0px 80px'})
        }, i + 1000)
        //图片imlzpcxe的动画效果
        $("#imlzpcxe").css({backgroundPosition: '0px -124px'});
        setTimeout(function () {
            $("#imlzpcxe").css({backgroundPosition: '0px -62px'})
        }, i)
        setTimeout(function () {
            $("#imlzpcxe").css({backgroundPosition: '0px 0px'})
        }, i + 500)
        setTimeout(function () {
            $("#imlzpcxe").css({backgroundPosition: '0px 62px'})
        }, i + 1000)
        //heart1.png
        $("#heart1").css({backgroundPosition: '0px -296px'});
        setTimeout(function () {
            $("#heart1").css({backgroundPosition: '0px -148px'})
        }, i)
        setTimeout(function () {
            $("#heart1").css({backgroundPosition: '0px 0px'})
        }, i + 500)
        setTimeout(function () {
            $("#heart1").css({backgroundPosition: '0px 148px'})
        }, i + 1000)
    };
    setInterval(a, 500);


    //图片kinetic的动画
    var i;
    //var b = function () {
    //    $("#kinetic").css({backgroundPosition: '0px -340px'});
    //    setTimeout(function () {
    //        $("#kinetic").css({backgroundPosition: '0px -170px'})
    //    }, i)
    //    setTimeout(function () {
    //        $("#kinetic").css({backgroundPosition: '0px 0px'})
    //    }, i + 1000)
    //    setTimeout(function () {
    //        $("#kinetic").css({backgroundPosition: '0px 170px'})
    //    }, i + 1000)
    //};

    $("#heart").mouseover(function () {
        i = setInterval(b, 500);
    });

    $("#heart").mouseout(function () {

        clearInterval(i);
    });
    //little1.bmp
    var b1 = function () {
        $("#little1").css({backgroundPosition: '0px -216px'});
        setTimeout(function () {
            $("#little1").css({backgroundPosition: '0px -108px'})
        }, i)
        setTimeout(function () {
            $("#little1").css({backgroundPosition: '0px 0px'})
        }, i + 500)
        setTimeout(function () {
            $("#little1").css({backgroundPosition: '0px 108px'})
        }, i + 1000)
    };
    $("#little1").mouseover(function () {
        i = setInterval(b1, 500);
    });
    $("#little1").mouseout(function () {
        clearInterval(i);
    });
    //little2.png
    var b2 = function () {
        $("#little2").css({backgroundPosition: '0px -260px'});
        setTimeout(function () {
            $("#little2").css({backgroundPosition: '0px -130px'})
        }, i)
        setTimeout(function () {
            $("#little2").css({backgroundPosition: '0px 0px'})
        }, i + 500)
        setTimeout(function () {
            $("#little2").css({backgroundPosition: '0px 130px'})
        }, i + 1000)
    };
    $("#little2").mouseover(function () {
        i = setInterval(b2, 500);
    });
    $("#little2").mouseout(function () {
        clearInterval(i);
    });
    //little3.png
    var b3 = function () {
        $("#little3").css({backgroundPosition: '0px -200px'});
        setTimeout(function () {
            $("#little3").css({backgroundPosition: '0px -100px'})
        }, i)
        setTimeout(function () {
            $("#little3").css({backgroundPosition: '0px 0px'})
        }, i + 500)
        setTimeout(function () {
            $("#little3").css({backgroundPosition: '0px 100px'})
        }, i + 1000)
    };
    $("#little3").mouseover(function () {
        i = setInterval(b3, 500);
    });
    $("#little3").mouseout(function () {
        clearInterval(i);
    });
    //little4.bmp
    var b4 = function () {
        $("#little4").css({backgroundPosition: '0px -274px'});
        setTimeout(function () {
            $("#little4").css({backgroundPosition: '0px -137px'})
        }, i)
        setTimeout(function () {
            $("#little4").css({backgroundPosition: '0px 0px'})
        }, i + 500)
        setTimeout(function () {
            $("#little4").css({backgroundPosition: '0px 137px'})
        }, i + 1000)
    };
    $("#little4").mouseover(function () {
        i = setInterval(b4, 500);
    });
    $("#little4").mouseout(function () {
        clearInterval(i);
    });
    //little5.1.png
    var b7 = function () {
        $("#little5-1").css({backgroundPosition: '640px 0px'});
        setTimeout(function () {
            $("#little5-1").css({backgroundPosition: '320px 0px'})
        }, i)
        setTimeout(function () {
            $("#little5-1").css({backgroundPosition: '0px 0px'})
        }, i + 500)
        setTimeout(function () {
            $("#little5-1").css({backgroundPosition: '-320px 0px'})
        }, i + 1000)
    };
    $("#little5-1").mouseover(function () {
        i = setInterval(b7, 500);
    });
    $("#little5-1").mouseout(function () {
        clearInterval(i);
    });
    //little5.png
    var b5 = function () {
        $("#little5").css({backgroundPosition: '0px -125px'});
        setTimeout(function () {
            $("#little5").css({backgroundPosition: '0px -63px'})
        }, i)
        setTimeout(function () {
            $("#little5").css({backgroundPosition: '0px 0px'})
        }, i + 500)
        setTimeout(function () {
            $("#little5").css({backgroundPosition: '0px 63px'})
        }, i + 1000)
    };
    $("#little5").mouseover(function () {
        i = setInterval(b5, 500);
    });
    $("#little5").mouseout(function () {
        clearInterval(i);
    });
    //little6.png
    var b6 = function () {
        $("#little6").css({backgroundPosition: '-550px 0px'});
        setTimeout(function () {
            $("#little6").css({backgroundPosition: '-275px 0px'})
        }, i)
        setTimeout(function () {
            $("#little6").css({backgroundPosition: '0px 0px'})
        }, i + 500)
        setTimeout(function () {
            $("#little6").css({backgroundPosition: '275px 0px'})
        }, i + 1000)
    };
    $("#little6").mouseover(function () {
        i = setInterval(b6, 500);
    });
    $("#little6").mouseout(function () {
        clearInterval(i);
    });
    //滚轮事件
    var f = 260,k=100;
    $('#frame1')
        .mousewheel(function (event, delta) {
            var g;
            if (delta < 0) {
                if (f < 650) {
                    f = f + 30;
                    g =f-160;
                }
                $("#heart").css({
                    transition: 'all 1s linear',
                    top: f + 'px'
                });
                $("#kinetic").css({
                    transition: 'all 1s linear',
                    top: g + 'px'
                });
                if(f==410){
                $("#hole").css({
                    height:'69px',
                })};
                if(f==500){
                    $("#hole").css({
                        height:'75px',
                        top:'857px',
                        backgroundPosition:'0px -110px',

                    })};
            }
            if (delta > 0) {
                if (f > 260) {
                    f = f - 30;
                    g = f-160;
                }
                $("#heart").css({
                    transition: 'all 1s linear',
                    top: f + 'px'
                });
                $("#kinetic").css({
                    transition: 'all 1s linear',
                    top: g + 'px'
                });


                if(f==410){
                    $("#hole").css({
                        height:'0px',
                        top:'746px',
                        backgroundPosition: '0px 0px',
                    })};
            }
        });

})
