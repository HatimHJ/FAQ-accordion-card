$(document).ready(() => {
	$(".accordion-header").click(function () {
		$(this).siblings().slideToggle();
		$(this).children("img").toggleClass("icon");
		// if (
		// 	$(this).parent().siblings().children(".answer").css("display") == "block"
		// ) {
		// 	$(this).parent().siblings().children(".answer").hide();
		// 	console.log($(this).parent().siblings());
		// }
	});
});
