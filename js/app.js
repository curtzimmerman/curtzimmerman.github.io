$( document ).ready	(function () {
	var $heading = $('.heading');
	var $header = $('header');
	var $hiddenLogo = $('.fade-in');
	var $navBar = $('')
	$( window ).scroll(function() {
		if ($( window ).scrollTop() > ($heading.offset().top + $heading.outerHeight() - $header.outerHeight())) {
			$hiddenLogo.fadeIn("slow");
		} else {
			$hiddenLogo.fadeOut("slow");
		}
	});
});