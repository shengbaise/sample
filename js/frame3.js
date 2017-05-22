/**
 * Created by Administrator on 2016/12/16.
 */
$(function () {
    //header1
    var a1=function () {
        setTimeout(function () {
            $("#header1").css({
                backgroundPosition:'0px -520px',
            });
        },200);
        setTimeout(function () {
            $("#header1").css({
                backgroundPosition:'0px -255px',
            });
        },400);
        setTimeout(function () {
            $("#header1").css({
                backgroundPosition:'0px 0px',
            });
        },600);
    }
    setInterval(a1,800);
    //language.png
    var a2=function () {
        setTimeout(function () {
            $("#language").css({
                backgroundPosition:'0px -60px',
            });
        },100);
        setTimeout(function () {
            $("#language").css({
                backgroundPosition:'0px 0px',
            });
        },200);

    }
    setInterval(a2,300);
    //tadpoleTR.png
    var a3=function () {
        setTimeout(function () {
            $("#tadpoleMiddle").css({
                backgroundPosition:'0px -130px',
            });
        },100);
        setTimeout(function () {
            $("#tadpoleMiddle").css({
                backgroundPosition:'0px -250px',
            });
        },200);
        setTimeout(function () {
            $("#tadpoleMiddle").css({
                backgroundPosition:'0px 0px',
            });
        },300);
    }
    setInterval(a3,300);
    //hairA.png
    var i,h,h1,h2,h3;
    var a4 = function () {
        h=$("#hairA");
        setTimeout(function () {
            h.css({backgroundPosition: '-150px 0px'});
        }, 100);
        setTimeout(function () {
            h.css({backgroundPosition: '-310px 0px'})
        }, 200);
        setTimeout(function () {
            h.css({backgroundPosition: '0px -88px'})
        }, 300);
        setTimeout(function () {
            h.css({backgroundPosition: '-150px -88px'})
        }, 400);
        setTimeout(function () {
            h.css({backgroundPosition: '-310px -88px'})
        },500);
        setTimeout(function () {
            h.css({backgroundPosition: '0px 0px'})
        },500);
    };
    $("#hairA").mouseover(function () {
        i = setInterval(a4, 500);
    });
    $("#hairA").mouseout(function () {
        clearInterval(i);
    });

    //hairB
    var a5 = function () {
        h = $("#hairB");
        setTimeout(function () {
            h.css({backgroundPosition: '-150px 0px'});
        }, 100);
        setTimeout(function () {
            h.css({backgroundPosition: '-310px 0px'})
        }, 200);
        setTimeout(function () {
            h.css({backgroundPosition: '0px -88px'})
        }, 300);
        setTimeout(function () {
            h.css({backgroundPosition: '-150px -88px'})
        }, 400);
        setTimeout(function () {
            h.css({backgroundPosition: '-310px -88px'})
        }, 500);
        setTimeout(function () {
            h.css({backgroundPosition: '0px 0px'})
        }, 500);
    }
        $("#hairB").mouseover(function () {
        i = setInterval(a5, 500);
    });
        $("#hairB").mouseout(function () {
        clearInterval(i);
    });
    //hairC.png
    var a6 = function () {
        h = $("#hairC");
        setTimeout(function () {
            h.css({backgroundPosition: '0px -86px'});
        }, 100);
        setTimeout(function () {
            h.css({backgroundPosition: '0px -172px'})
        }, 200);
        setTimeout(function () {
            h.css({backgroundPosition: '0px -258px'})
        }, 300);
        setTimeout(function () {
            h.css({backgroundPosition: '0px 0px'})
        }, 400);
    }
    $("#hairC").mouseover(function () {
        i = setInterval(a6, 500);
    });
    $("#hairC").mouseout(function () {
        clearInterval(i);
    });
    //hairD.png
    var a7 = function () {
        h = $("#hairD");
        setTimeout(function () {
            h.css({backgroundPosition: '0px -86px'});
        }, 100);
        setTimeout(function () {
            h.css({backgroundPosition: '0px -172px'})
        }, 200);
        setTimeout(function () {
            h.css({backgroundPosition: '0px -258px'})
        }, 300);
        setTimeout(function () {
            h.css({backgroundPosition: '0px 0px'})
        }, 400);
    }
    $("#hairD").mouseover(function () {
        i = setInterval(a7, 500);
    });
    $("#hairD").mouseout(function () {
        clearInterval(i);
    });
    //hairE.png
    var a8 = function () {
        h = $("#hairE");
        setTimeout(function () {
            h.css({backgroundPosition: '-155px 0px'});
        }, 100);
        setTimeout(function () {
            h.css({backgroundPosition: '-310px 0px'})
        }, 200);
    }
    $("#hairE").mouseover(function () {
        i = setInterval(a8, 500);
    });
    $("#hairE").mouseout(function () {
        clearInterval(i);
    });
    //hairF.png
    var a9 = function () {
        h = $("#hairF");
        setTimeout(function () {
            h.css({backgroundPosition: '0px -88px'});
        }, 100);
        setTimeout(function () {
            h.css({backgroundPosition: '0px -176px'})
        }, 200);
        setTimeout(function () {
            h.css({backgroundPosition: '0px -261px'})
        }, 300);
    }
    $("#hairF").mouseover(function () {
        i = setInterval(a9, 500);
    });
    $("#hairF").mouseout(function () {
        clearInterval(i);
    });
    //hairG.png
    var a10 = function () {
        h = $("#hairG");
        setTimeout(function () {
            h.css({backgroundPosition: '-150px 0px'});
        }, 100);
        setTimeout(function () {
            h.css({backgroundPosition: '-310px 0px'})
        }, 200);
        setTimeout(function () {
            h.css({backgroundPosition: '0px 0px'})
        }, 300);
    }
    $("#hairG").mouseover(function () {
        i = setInterval(a10, 500);
    });
    $("#hairG").mouseout(function () {
        clearInterval(i);
    });
    //hairH.png
    var a11 = function () {
        h = $("#hairH");
        setTimeout(function () {
            h.css({backgroundPosition: '-150px 0px'});
        }, 100);
        setTimeout(function () {
            h.css({backgroundPosition: '-310px 0px'})
        }, 200);
        setTimeout(function () {
            h.css({backgroundPosition: '0px -88px'})
        }, 300);
        setTimeout(function () {
            h.css({backgroundPosition: '-150px -88px'})
        }, 400);
        setTimeout(function () {
            h.css({backgroundPosition: '-310px -88px'})
        },500);
        setTimeout(function () {
            h.css({backgroundPosition: '0px 0px'})
        },600);
    }
    $("#hairH").mouseover(function () {
        i = setInterval(a11, 500);
    });
    $("#hairH").mouseout(function () {
        clearInterval(i);
    });
    //kedou.bmp
    var a12 = function () {
        h1 = $("#kedou");
        setTimeout(function () {
            h1.css({backgroundPosition: '0px -190px'});
        }, 100);
        setTimeout(function () {
            h1.css({backgroundPosition: '0px -380px'})
        }, 200);
    }
    setInterval(a12, 500);
    //languageoflife.png
    var a13 = function () {
        h2 = $("#languageoflife");
        setTimeout(function () {
            h2.css({backgroundPosition: '-660px 0px'});
        }, 100)
        setTimeout(function () {
            h2.css({backgroundPosition: '-1325px 0px'})
        }, 200)
    }
    setInterval(a13, 500);
    // wearedifferent.png
    var a14 = function () {
        h3 = $("#wearedifferent");
        setTimeout(function () {
            h3.css({backgroundPosition: '0px -105px'});
        }, 100);
        setTimeout(function () {
            h3.css({backgroundPosition: '0px 0px'})
        }, 200);
    }
    setInterval(a14, 500);
    //vagina.png
    var a15 = function () {
        h=$("#vagina");
        setTimeout(function () {
            h.css({backgroundPosition: '0px -330px'});
        }, 100);
        setTimeout(function () {
            h.css({backgroundPosition: '0px 0px'})
        }, 200);
    };
    $("#penis").mouseover(function () {
        i = setInterval(a15, 500);
    });
    $("#penis").mouseout(function () {
        clearInterval(i);
    });
    //penis.png
    var a16 = function () {
        h=$("#penis");
        setTimeout(function () {
            h.css({backgroundPosition: '0px -330px'});
        }, 100);
        setTimeout(function () {
            h.css({backgroundPosition: '0px 0px'})
        }, 200);
    };
    $("#vagina").mouseover(function () {
        i = setInterval(a16, 500);
    });
    $("#vagina").mouseout(function () {
        clearInterval(i);
    });
})
