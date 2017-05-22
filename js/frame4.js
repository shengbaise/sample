/**
 * Created by Administrator on 2016/12/20.
 */
$(function () {
    var d=function () {
        setTimeout(function () {
            $("#handLeft").css({
                transition:'all 1s linear',
                top:'737px',
            })
        },1000)
        setTimeout(function () {
            $("#handLeft").css({
                transition:'all 1s linear',
                top:'780px',
            })
        },2000)
        setTimeout(function () {
            $("#handLeft").css({
                transition:'all 1s linear',
                top:'737px',
            })
        },3000)
        setTimeout(function () {
            $("#handLeft").css({
                transition:'all 1s linear',
                top:'1030px',
            })
        },4000)
    }
    setInterval(d,8000);
    var d1=function () {
        setTimeout(function () {
            $("#handRight").css({
                transition:'all 1s linear',
                left:'690px',
            })
        },1000)
        setTimeout(function () {
            $("#handRight").css({
                transition:'all 1s linear',
                left:'730px',
                top: "691px",
            })
        },2000)
        setTimeout(function () {
            $("#handRight").css({
                transition:'all 1s linear',
                left:'1400px',
                top:'671px',
            })
        },4000)
    }
    setInterval(d1,9000);
})
