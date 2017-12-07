$(document).ready(function(){

	$(".c").mouseenter(function(){

		$(this).find(".rect-1").addClass("shrink");

	});

	$(".c").mouseleave(function(){

		$(this).find(".rect-1").removeClass("shrink");

	});

});