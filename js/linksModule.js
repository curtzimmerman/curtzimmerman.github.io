var linksModule = (function() {
	
	//cache DOM
	var $carousel_inner = $('div.carousel-inner');
	var $carousel = $('div#project-selector-carousel');


	//Bind events
	$carousel.on('slid.bs.carousel', changeProjectContent);

	//Define functions
	function changeProjectContent(event) {
		var id = $carousel_inner.find('div.active a')[0].id;
		$('div.information:not(.hide)').addClass('hide');
		$('div.about-' + id).removeClass('hide');
		return false;
	}

});

$(document).ready(linksModule);