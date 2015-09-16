var linksModule = (function() {
	
	//cache DOM
	var $projects_selector = $('div.projects-selector');


	//Bind events
	$projects_selector.find('a').on('click', changeProjectContent.bind(this));

	//Define functions
	function changeProjectContent(project) {
		project.preventDefault();
		var id = project.currentTarget.id;
		$('div.information:not(.hide)').addClass('hide');
		$('div.about-' + id).removeClass('hide');
	}

});

$(document).ready(linksModule);