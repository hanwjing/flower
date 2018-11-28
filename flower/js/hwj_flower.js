$(function () {
    $(".hwj_sMain_product>li").hover(function () {
        $(this).find(".hwj_sMain1-2 button").css({
            "background-color":"#E62162",
            "color":"#fff",
            "border":"1px solid #E62162"
        });
        $(this).find(".hwj_sMain_outer").fadeIn(1500);
        $(this).find(".hwj_sMain_outer").addClass("hwj_transform_scale");
        $(this).find(".hwj_sMain1-1 a img").addClass("hwj_transform_scale");
    },function () {
        $(this).find(".hwj_sMain1-2 button").css({
            "background-color":"#fff",
            "color":"#233",
            "border":"1px solid #ccc"
        });
        $(this).find(".hwj_sMain_outer").fadeOut(1500);
        $(this).find(".hwj_sMain_outer").removeClass("hwj_transform_scale");
        $(this).find(".hwj_sMain1-1 a img").removeClass("hwj_transform_scale");
    });

    $(".hwj_sPart5_1").hover(function () {
        $(this).find(".carousel .hwj_sItem_inner button").css({
            "background-color":"#E62162",
            "border":"1px solid #E62162"
        });
    },function () {
        $(this).find(".carousel .hwj_sItem_inner button").css({
            "background-color":"transparent",
            "border":"1px solid #fff"
        });
    });

    $(".hwj_sMain_outer ul li a").hover(function () {
        $(this).css("background-color","#E62162");
    },function () {
        $(this).css("background-color","purple");
    });

    if(document.body.clientWidth < 460){
        $(".hwj_sMain_product>li").removeClass("col-xs-6").addClass("col-xs-12");
    }
    else if(document.body.clientWidth >= 460){
        $(".hwj_sMain_product>li").removeClass("col-xs-12").addClass("col-xs-6");
    }
    
    // $("#hwj_button").click(function () {
    //     console.log(111);
    //     $("hwj_flower").css("margin-right","250px");
    // })
})
