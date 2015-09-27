var linksModule = (function() {
	
	//cache DOM
	var $carousel_inner = $('div.carousel-inner');


	//Bind events
	$carousel_inner.on('click', changeProjectContent);

	//Define functions
	function changeProjectContent(event) {
		event.preventDefault();
		var id = $carousel_inner.find('div.active a')[0].id;
		$('div.information:not(.hide)').addClass('hide');
		$('div.about-' + id).removeClass('hide');
	}

});

$(document).ready(linksModule);