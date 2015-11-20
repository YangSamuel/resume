
$(function(){
	var n=$(window).height();
	$(window).resize();
	//block-firstPage height
	$("#block-firstPage,#block-email").css("height",n+"px")

	//blockTitle top
	var a=n/2-$(".blockTitle").height();
	$(".blockTitle,#block-email>p").css("top",a+"px");

	//scroll-btn scroll
	$(document).on("click",".scroll-btn",function(e){
		$('body,html').animate({'scrollTop':n},600);
	})

	//scrollTop all
	$("#logo,nav a").bind("click",function(e){
		var $anchor=$(this);
		$("body,html").stop().animate({scrollTop:$($anchor.attr("href")).offset().top-49},600);
		 event.preventDefault();
	})

	/*block-nav position
	$(window).scroll(function(){
		if ($(window).scrollTop()>n) {
			$("#block-nav").css({position:"fixed","top":0+"px"})
		}else{
			$("#block-nav").css({position:"relative"})
		}
	})*/
	//block-icon class  
	//#block-experience  timeline-content class

	$(window).scroll(function(){
		if ($(window).scrollTop()>400) {
			$(".block-icon a:eq(0)").addClass("btn-github")
			$(".block-icon a:eq(1)").addClass("btn-linkedin")
			$(".block-icon a:eq(2)").addClass("btn-photo")
			$(".block-icon a:eq(3)").addClass("btn-blog")
			$(".block-icon a:eq(4)").addClass("btn-email")
		}
		if ($(window).scrollTop()>$("#block-experience").offset().top-100) {

			$("#block-experience .timeline-content:eq(0)").addClass("timeLine1")
			$("#block-experience .timeline-content:eq(1)").addClass("timeLine2")
			$("#block-experience .timeline-content:eq(2)").addClass("timeLine3")
			$("#block-experience .timeline-content:eq(3)").addClass("timeLine4")
		}
				
	})
})