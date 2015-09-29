var animationsModule = (function() {

	// Set jQuery animations rate
	jQuery.fx.interval = 6; //default 13ms

	// Cache DOM
	var $html = $('html, body');
	var $header = $('div#navbar');
	var $heading = $('.heading');
	var $logo = $header.find(".navbar-brand");
	var $navbar = $('ul.navbar-nav');
	var $projects = $('div.projects');
	var $contact = $('div.contact');	
	var $carousel_inner = $('div.carousel-inner');
	var $carousel = $('div#project-selector-carousel');

	//Bind Events
	$(window).on('scroll', fadeInLogo);
	$(window).on('scroll', highlightLinkOnScroll);
	$navbar.find('a').on('click', jumpToSection);
	$navbar.find('a').on('click', closeMenu);	
	$carousel.on('slid.bs.carousel', changeProjectContent);


	// if the top of the window (minus header height) is lower than the bottom edge of the greeting, show the logo, else hide it 
	function fadeInLogo() {
		if ( ($(window).scrollTop() - $header.outerHeight()) > ($heading.offset().top + $heading.find("h1").outerHeight())) {
			$logo.fadeIn('slow');
		} else {
			$logo.fadeOut('slow');
		}
	}

	// Jump to top of div with matching class name if link is clicked
	function jumpToSection(location) {
		$location = $(location.target);
		$scrollPosition = $('div.' + $location.text().toLowerCase());
		topMargin = parseInt($scrollPosition.css("margin-top"));
		console.log("header outerHeight: " + $header.outerHeight());
		$html.animate({scrollTop: $scrollPosition.offset().top  - topMargin - $header.outerHeight()}, 600);
		return false;
	}

	function highlightLinkOnScroll() {
		var windowCenter = ($(window).scrollTop() + ($(window).height() / 2));
		var projectsTop = $projects.offset().top;
		var contactTop = $contact.offset().top;

		removeAllSelected($navbar.children());
		
		// highlight link based on middle of window
		if (windowCenter < projectsTop) {
			$navbar.find(".home").addClass("underline");
		} else if (windowCenter > projectsTop && windowCenter < contactTop) {
			$navbar.find(".projects").addClass("underline");
		} else {
			$navbar.find(".contact").addClass("underline");
		}
		return false;
	}

	function removeAllSelected(element) {
		element.children('.underline').removeClass('underline');
	}

	function closeMenu(event) {
		$('.navbar-collapse').collapse('hide');
	}

	function changeProjectContent(event) {
		var id = $carousel_inner.find('div.active a')[0].id;
		$('div.information:not(.hide)').addClass('hide');
		$('div.about-' + id).removeClass('hide');
		return false;
	}

	return {
		fadeInLogo: fadeInLogo,
		jumpToSection: jumpToSection,
		changeProjectContent: changeProjectContent
	};

});

$(document).ready(animationsModule);