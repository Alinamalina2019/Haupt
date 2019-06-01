$(function(){
	if(screen.width < 1025){
			$('.we_in_numbers_wrap').slick({
			  infinite: true,
			  speed: 300,
			  slidesToShow: 1,
			  adaptiveHeight: true
			});
	}
	$("button.slick-next.slick-arrow, button.slick-prev.slick-arrow").text(" ");
	$(".menu_hamburger").click(function(){
		if($(".menu_hamburger").hasClass("opened")){
			$(".header_links").slideUp(300);
			$("header").css("overflow","");
			$("header").animate({
				height:"70px"
			},300);
			
			$("body,html").css("overflow","");

			$(".menu_hamburger").removeClass("opened");
		}else{
			$(".header_links").slideDown(300);
			$("header").css("overflow","hidden");
			$("header").animate({
				height:"100vh"
			},300);
			
			$("body,html").css("overflow","hidden");
			
			$(".menu_hamburger").addClass("opened");
		}
		
	});

	
	if(screen.width < 768){
		$(".anchor_links").click(function(e){
			e.preventDefault();
			var id = $(this).attr("href"),
			top = $(id).offset().top;
			$(".header_links").slideUp(300);
			$("header").animate({
				height:"70px"
			},300);
			$(".menu_hamburger").removeClass("opened");
			$("body,html").css("overflow","");
			$("body,html").animate({scrollTop: top + 20}, 400);
		});
	}else{
		$(".anchor_links").click(function(e){
		e.preventDefault();
		var id = $(this).attr("href"),
		top = $(id).offset().top;
		$("body,html").animate({scrollTop: top + 20}, 400);
	});
	}
	$(".scroll_form").click(function(e){
		e.preventDefault();
		var id = $(this).attr("href"),
		top = $(id).offset().top;
		$("body,html").animate({scrollTop: top + 50}, 400);
	})
});