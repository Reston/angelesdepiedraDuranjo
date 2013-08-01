$( document ).ready(function() {
	var altura_del_header = $('header').outerHeight(true);
	// Llamado cuando se cargue la página
	posicionarMenu();

	$(window).scroll(function(){
		posicionarMenu();
	});

	function posicionarMenu() {
		var altura_del_menu = $('.barraazul').outerHeight(true);

		if ($(window).scrollTop()){
			if ($(window).scrollTop() >= 200){
				$('.logo').addClass('smaller');
			}
			$('.barraazul').addClass('fixed');
			$('.contenido').css('margin-top', (altura_del_menu) + 'px');
		} else {
			$('.menuServicios').removeClass('fixed');
			$('.contenido').css('margin-top', '0');
			$('.logo').removeClass('smaller');
		}
	}

	// This is a functions that scrolls to #{blah}link
	function goToByScroll(id){
	// Remove "link" from the ID
		id = id.replace("Menu", "");
	// Scroll
		$('html,body').animate({
			scrollTop: $("#"+id).offset().top},
			'slow');
	}

	$("#menuSlow > ul > li").click(function(e){
	// Prevent a page reload when a link is pressed
		e.preventDefault();
	// Call the scroll function
		goToByScroll($(this).attr("id"));
	});
});
