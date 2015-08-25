$( document ).ready	(function () {

	var $heading = $('.heading');
	var $header = $('header');
	var $hiddenLogo = $('a.hidden');
	var $navBar = $('');
	var $body = $('html, body');
	var $navLinks = $('span.links a');

	//Fade in logo in header when greeting is scrolled past
	var fadeLogo = function() {
		if ($( window ).scrollTop() > ($heading.offset().top + $heading.outerHeight() - $header.outerHeight())) {
			$hiddenLogo.css('visibility', 'visible');
			$hiddenLogo.fadeIn("slow");
		} else {
			$hiddenLogo.fadeOut("slow");
		}
	}

	//Jump to section when link is clicked
	var jumpToLocation = function(location) {
		$location = $('div.' + location);
		$body.animate({scrollTop: $location.offset().top}, 800);
	}



	//initialize
	fadeLogo();
	$( window ).scroll(fadeLogo);


	//todo: fix flashing on some clicks
	$navLinks.click(function() {
		$('a.selected').removeClass('selected');
		$(this).addClass('selected');
		console.log($(this).text().toLowerCase());
		jumpToLocation($(this).text().toLowerCase());
	});
});