/**
 * Created by Administrator on 2016/12/20.
 */
$(function () {
    var f=0;
    $("#frame5").mousewheel(function (event, delta) {
        if(delta<0) {
            if (f < 500) {
                f = f + 40;
            }
            $("#camera").css({
                left: f + 10 + 'px',
            });
            $("#bicycle").css({
                left: f + 'px',
            });
            $("#pigeno").css({
                left: f + 'px',
            });
            $("#bino1").css({
                left: f + 'px',
            });
            $("#book1").css({
                left: f + 'px',
            });
            $("#ring").css({
                left: f + 'px',
            });
            $("#chop").css({
                left: f + 'px',
            });
            //right
            $("#trophy").css({
                left:(966-f)+'px',
            });
            $("#gramaphone").css({
                left:(1112-f)+'px',
            });
            $("#hash").css({
                left:(1117-f)+'px',
            });
            $("#hand").css({
                left:(967-f)+'px',
            });
            $("#youth").css({
                left:(864-f)+'px',
            });
            $("#cooks").css({
                left:(969-f)+'px',
            });
            $("#rifle").css({
                left:(1087-f)+'px',
            });
            $("#typewriter").css({
                left:(1029-f)+'px',
            });
        }
        if(delta>0){
            $("#camera").css({
                left:'0px',
            });
            $("#bicycle").css({
                left:'0px',
            });
            $("#pigeno").css({
                left:'282px',
            });
            $("#bino1").css({
                left:'44px',
            });
            $("#book1").css({
                left:'0px',
            });
            $("#ring").css({
                left:'445px',
            });
            $("#chop").css({
                left:'199px',
            });
            $("#trophy").css({
                left:'966px',
            });
            $("#gramaphone").css({
                left:'1012px',
            });
            $("#hash").css({
                left:'1017px',
            });
            $("#hand").css({
                left:'967px',
            });
            $("#youth").css({
                left:'1334px',
            });
            $("#cooks").css({
                left:'969px',
            });
            $("#rifle").css({
                left:'1087px',
            });
            $("#typewriter").css({
                left:'1029px',
            });
        }

    });

})
