var linksModule = (function() {
	
	//cache DOM
	var $projects_selector = $('div.projects-selector');
	var $project_title = $('h2.project-title');
	var $project_summary = $('p.project-summary');

	//load JSON project information
	var jsonProjects;
	$.getJSON('projects.json', function( data ) {
		jsonProjects = data;
	});

	//Bind events
	$projects_selector.find('a').on('click', changeProjectContent.bind(this));

	//Define functions
	function changeProjectContent(project) {
		project.preventDefault();
		var id = project.currentTarget.id;
		var projectData = jsonProjects[id];
		
		$project_title.text(projectData.title);
		$project_summary.text(projectData.summary)
	}

});

$(document).ready(linksModule);