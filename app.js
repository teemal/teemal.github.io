$(document).ready(function(){
	var lang_click = 1;

	$(".left_arrow").click(function(){
        $("#logo_" + lang_click).hide();
        lang_click--;
        if (lang_click <= 0) {
        	lang_click = 9;
        };
        $("#logo_" + lang_click).show();
    });

	$(".right_arrow").click(function(){
        $("#logo_" + lang_click).hide();
        lang_click++;
        if (lang_click > 9) {
        	lang_click = 1;
        };
        $("#logo_" + lang_click).show();
    });

    $("#head-home").click(function(){
    	$(".lang").hide();
    	$(".exp").hide();
    	$(".home").css("display", "grid");
    });

    $("#head-lang").click(function(){
    	$(".home").hide();
    	$(".exp").hide();
    	$(".lang").css("display", "grid");
    });
});