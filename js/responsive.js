var userWidth = $( window ).width();

function responsiveScroll(){
	userWidth = $( window ).width();
	if(userWidth < 1000){
		$( "#steps1" ).remove();
		$( "#steps2" ).remove();
		$("#largeLink2").remove();

		$("#step1background").css("min-height","200px");
		$("#step1background").css("overflow","hidden");
	}else{
		$("#step1background").css("min-height","960px");
		$("#step1background").css("overflow","");
	}
	setTimeout(responsiveScroll, 200);
}

responsiveScroll();