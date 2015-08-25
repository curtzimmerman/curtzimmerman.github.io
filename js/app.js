$( document ).ready	(function () {

	var $heading = $('.heading');
	var $header = $('header');
	var $hiddenLogo = $('a.hidden');
	var $navBar = $('');
	var $body = $('html, body');
	var $navLinks = $('span.links a');


	var fadeLogo = function() {
		if ($( window ).scrollTop() > ($heading.offset().top + $heading.outerHeight() - $header.outerHeight())) {
			$hiddenLogo.css('visibility', 'visible');
			$hiddenLogo.fadeIn("slow");
		} else {
			$hiddenLogo.fadeOut("slow");
		}
	}

	var jumpToLocation = function(location) {
		$location = $('div.' + location);
		$body.animate({scrollTop: $location.offset().top}, 800);
	}

	fadeLogo();
	$( window ).scroll(fadeLogo);

	$navLinks.click(function() {
		$('a.selected').removeClass('selected');
		$(this).addClass('selected');
		console.log($(this).text().toLowerCase());
		jumpToLocation($(this).text().toLowerCase());
	});
});