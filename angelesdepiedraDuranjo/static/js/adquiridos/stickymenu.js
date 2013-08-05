$( document ).ready(function() {
	var altura_del_header = $('header').outerHeight(true);
	// Llamado cuando se cargue la página
	posicionarMenu();

	$(window).scroll(function(){
		console.log("testing");
		posicionarMenu();
	});

	function posicionarMenu() {
			if ($(window).scrollTop() >= altura_del_header){
				$('.logo').stop().animate({
							width: "180",
							height: "94",
							}, 'fast');
			} else {
				$('.logo').stop().animate({
							width: "310",
							height: "229",
							}, 'fast');
			}
	}

	
	$("#menuSlow > ul > li").click(function(e){
	// Prevent a page reload when a link is pressed
		e.preventDefault();
	// Call the scroll function
		goToByScroll($(this).attr("id"));
	});

	// This is a functions that scrolls to #{blah}link
	function goToByScroll(id){
	// Remove "link" from the ID
	console.log(id);
		id = id.replace("Menu", "");
	// Scroll
		$('html,body').stop().animate({
			scrollTop: $("#"+id).offset().top},
			'slow');
	}
});
