/**
 * Created by student on 2018/11/24.
 */
$(function () {
    var i = 0;
    var j = 0;
    var k = 0
    var deg = true;
    var length = $(".gtt_timer>li").length;
    var timer = function(){
        var lunbo = setInterval(function(){
            k++;
            i++;
            j=0;
           if(i>=length){
               i=0;
           }
            $(".gtt_timer>li:eq("+i+")").css({"z-index":999}).siblings().css({"z-index":1});
            $(".gtt_banner_one>div:eq(0)").css({"transform":"rotateY("+k*360+"deg)"});
            $(".gtt_banner_two>div:eq(0)").css({"transform":"rotateY("+k*360+"deg)"});
            $(".gtt_banner_three>div:eq(0)").css({"transform":"rotateY("+k*360+"deg)"});

                setInterval(function(){
                    j++;
                    if(j>=8){
                        return;
                    }
                    $(".gtt_banner_one>div:eq("+j+")").css({"transform":"rotateY("+k*360+"deg)"});
                    $(".gtt_banner_two>div:eq("+j+")").css({"transform":"rotateY("+k*360+"deg)"});
                    $(".gtt_banner_three>div:eq("+j+")").css({"transform":"rotateY("+k*360+"deg)"});
                },500);

        },8000);
    }
    timer();
})
