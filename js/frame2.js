$(function () {
    leftwiggle.png
    $("#leftwiggle").css({
        backgroundPosition:'0px -387px',
    });
    var a1=function () {
        setTimeout(function () {
            $("#leftwiggle").css({
                backgroundPosition:'-210px 0px',
            })
        },100);
        setTimeout(function () {
            $("#leftwiggle").css({
                backgroundPosition: '0px 0px',
            });
        },200);
    }
    setInterval(a1,200);
    rightwiggle.png
    $("#rightwiggle").css({
        backgroundPosition:'-100px 0px',
    });
    var a2=function () {
        setTimeout(function () {
            $("#rightwiggle").css({
                backgroundPosition:'-320px 0px',
            })
        },200);
        setTimeout(function () {
            $("#rightwiggle").css({
                backgroundPosition: '-584px 0px',
            });
        },300);
    }
    setInterval(a2,200);
    //header.png
    var a3=function () {
        setTimeout(function () {
            $("#header").css({
                backgroundPosition:'0px -86px',
            })
        },200);
        setTimeout(function () {
            $("#header").css({
                backgroundPosition: '0px -168px',
            });
        },300);
    }
    setInterval(a3,200);
    //subheader.png
    var a4=function () {
        setTimeout(function () {
            $("#subheader").css({
                backgroundPosition:'0px -67px',
            })
        },200);
        setTimeout(function () {
            $("#subheader").css({
                backgroundPosition: '0px -135px',
            });
        },300);
    }
    setInterval(a4,200);
    //videotittle.png
    var a5=function () {
        setTimeout(function () {
            $("#videotittle").css({
                backgroundPosition:'0px 0px',
            })
        },200);
        setTimeout(function () {
            $("#videotittle").css({
                backgroundPosition: '0px -50px',
            });
        },300);
    }
    setInterval(a5,200);
    //#lefthand.png
    var a6=function () {
        setTimeout(function () {
            $("#lefthand").css({
                backgroundPosition:'0px -62px',
            })
        },200);
        setTimeout(function () {
            $("#lefthand").css({
                backgroundPosition: '0px -128px',
            });
        },300);
    }
    setInterval(a6,200);
    // pickcard.png
    var a7=function () {
        setTimeout(function () {
            $("#pickcard").css({
                backgroundPosition:'0px -85px',
            })
        },200);
        setTimeout(function () {
            $("#pickcard").css({
                backgroundPosition: '0px -165px',
            });
        },300);
    }
    setInterval(a7,200);
    //righthand.png
    var a9=function () {
        setTimeout(function () {
            $("#righthand").css({
                backgroundPosition:'0px -70px',
            })
        },200);
        setTimeout(function () {
            $("#righthand").css({
                backgroundPosition: '0px -140px',
            });
        },300);
    }
    setInterval(a9,200);
    //arrows.png
    var a10=function () {
        setTimeout(function () {
            $("#arrows").css({
                backgroundPosition:'0px -60px',
            })
        },200);
        setTimeout(function () {
            $("#arrows").css({
                backgroundPosition: '0px -115px',
            });
        },300);
    }
    setInterval(a10,200);
    // 卡牌动画
    // carddeath.png
    // $("#carddeath").click(function () {
    //     setTimeout(function () {
    //         $("#carddeath").css({
    //             backgroundPosition:'0px -280px',
    //         })
    //     },200);
    //     setTimeout(function () {
    //         $("#carddeath").css({
    //             backgroundPosition: '0px -555px',
    //         });
    //     },300);
    //     setTimeout(function () {
    //         $(".carddeath1").show();
    //     },1000);
    //     setTimeout(function () {
    //         $(".carddeath1").css({
    //             backgroundPosition:'0px -555px',
    //         })
    //     },3000);
    //     setTimeout(function () {
    //         $(".carddeath1").css({
    //             backgroundPosition: '0px -280px',
    //         });
    //     },3100);
    //     setTimeout(function () {
    //         $("#carddeath").css({
    //             backgroundPosition:'0px 0px',
    //         });
    //     },3200);
    //     setTimeout(function () {
    //         $(".carddeath1").hide();
    //     },3200);
    // });
    $("#myUl").on("click","li",function () {
        var path1=$(this).data('imgpath1');
        var path2=$(this).data('imgpath2');
        var path3=$(this).data('imgpath3');
        setTimeout(function () {
            $(".card").css({
                transform:'rotateY(45deg)',
            })
        },1000);
        setTimeout(function () {
            $("#carddeath1").attr({
                src:path1,
            });
            $("#carddeath2").attr({
                src:path2,
            });
            $("#carddeath3").attr({
                src:path3,
            });
        },900);
        setTimeout(function () {
            $(".card").css({
                transform:'rotateY(0deg)',
            })
        },1500);
        setTimeout(function () {
            $(".card").css({
                transform:'rotateY(-45deg)',
            })
        },2000);
        setTimeout(function () {
            $(".card").css({
                transform:'rotateY(0deg)',
            })
        },3000);
        setTimeout(function () {
            $("#carddeath1").attr({
                src:"",
            });
            $("#carddeath2").attr({
                src:"",
            });
            $("#carddeath3").attr({
                src:"",
            });
        },3000);
    })

})
