/**
 * Created by student on 2018/11/26.
 */
$(function(){
    /*定时器*/
    var time = 3767276;
    setInterval(function(){
        time++
        var days =Math.floor( time/86400);
        var hrs = Math.floor(time%86400/3600);
        var mins = Math.floor(time%86400%3600/60)>9?Math.floor(time%86400%3600/60):"0"+Math.floor(time%86400%3600/60);
        var secs =  Math.floor(time%86400%3600%60)>9?Math.floor(time%86400%3600%60):"0"+Math.floor(time%86400%3600%60);
        $(".day").text(days);
        $(".hr").text(hrs);
        $(".min").text(mins);
        $(".sec").text(secs);

        /*console.log(window.scrollTop.height);*/
       // console.log($("#gtt_nav_nav").scrollTop());
    },1000);

    /*小轮播*/
    var lunbo = function(){
        $(".gt").click(function(){
            $("#gtt_lunbo").animate({"left":"-33.5%"},500);
        })
        $(".lt").click(function(){
            $("#gtt_lunbo").animate({"left":"0"},500);
        })
    }
    lunbo();

    /*new products*/
    var products = function(){
        $(".gt2").click(function(){
            $("#gtt_lunbo2").animate({"left":"-100%"},500);
        })
        $(".lt2").click(function(){
            $("#gtt_lunbo2").animate({"left":"0"},500);
        })
    }
    products();


    /*滚到顶部*/
     $("#gttgtt").click(function(){
         $('html , body').animate({scrollTop: 0},1000);
     })

    /*nav固定*/

    $(window).scroll(function () {
        // console.log($(window).scrollTop());
        console.log($(window).width());
        if($(window).width()>768){
            if($(window).scrollTop()>200){
                $("#gtt_nav_nav").css({"position":"fixed"});
                $("#gtt_nav_nav").css({"top":"0px"});
                $("#gtt_nav_nav").css({"left":"50%"});
                $("#gtt_nav_nav").css({"transform":"translateX(-50%)"})
                $("#gtt_nav_nav").css({"z-index":999});
            }else{
                $("#gtt_nav_nav").css({"position":"relative"});
                $("#gtt_nav_nav").css({"left":"0"});
                $("#gtt_nav_nav").css({"transform":"translateX(0%)"})
                $("#gtt_nav_nav").css({"z-index":1});
            }
        }

    })
})