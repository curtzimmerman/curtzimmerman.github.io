$( document ).ready	(function () {

	var $heading = $('.heading');
	var $header = $('header');
	var $hiddenLogo = $('a.hidden');
	var $navBar = $('')


	var fadeLogo = function() {
		if ($( window ).scrollTop() > ($heading.offset().top + $heading.outerHeight() - $header.outerHeight())) {
			$hiddenLogo.css('visibility', 'visible');
			$hiddenLogo.fadeIn("slow");
		} else {
			$hiddenLogo.fadeOut("slow");
		}
	}

	fadeLogo();

	$( window ).scroll(fadeLogo);

});