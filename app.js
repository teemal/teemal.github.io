$(document).ready(function(){
	var lang_click = 1;
	$(".left_arrow").click(function(){
        $("p").hide();
    });

	$(".right_arrow").click(function(){
        $("#logo" + lang_click).hide();
        lang_click++;
        $("#logo" + lang_click).show();
    });
});