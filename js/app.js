var animationsModule = (function() {

	// Set jQuery animations rate
	jQuery.fx.interval = 6; //default 13ms

	// Cache DOM
	var $html = $('html');
	var $header = $('.header');
	var $heading = $('.heading');
	var $logo = $header.find("#logo");
	var $links = $('.links');

	//Bind Events
	$(window).on('scroll', fadeInLogo);
	$('.links').find('a').on('click', jumpToSection.bind(this));

	// if the top of the window (minus header height) is lower than the bottom edge of the greeting, show the logo, else hide it 
	function fadeInLogo() {		
		if ( ($(window).scrollTop() - $header.outerHeight()) > ($heading.offset().top + $heading.find("h1").outerHeight())) {
			$logo.css('visibility', 'visible');
			$logo.fadeIn('slow');
		} else {
			$logo.fadeOut('slow');
		}
	}

	// Jump to top of div with matching class name if link is clicked
	function jumpToSection(location) {
		console.log('location');
		$location = $(location.target);
		$location.siblings('.selected').removeClass('selected');
		$location.addClass('selected');
		$scrollPosition = $('div.' + $location.text().toLowerCase());
		$html.animate({scrollTop: $scrollPosition.offset().top}, 600);
		console.log($scrollPosition);
		return false;
	}

	return {
		fadeInLogo: fadeInLogo,
		jumpToSection: jumpToSection
	};

});

$(document).ready(animationsModule);