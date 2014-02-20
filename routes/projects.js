var data = require('../public/js/contexts.js').data
var models = require('../models')

exports.viewProjects = function(req, res){
	var fbID = req.cookies.fbid;

	if (!fbID) {
		// TODO: Make a better error response.
		res.send(400);
	}

	models.User.findOnelogo({"FBID" : fbID}).populate('_projects', options={sort: 'due'}).exec(function(err, user) {
		if (err) {
			res.send(500)
		} else {
			data['currentProjects'] = []
			data['pastProjects'] = []
			for (var i = 0; i < user._projects.length; i++) {
				var project = user._projects[i];
				var projectJSON = {
					"name" : project.title,
					"points" : project.points,
					"dueDate" : project.due
				}
				if (project.due < Date.now() && !project.success) {
					data['currentProjects'].push(projectJSON)
				} else {
					data['pastProjects'].push(projectJSON)
				}
			}
			res.render('projects', data);
		}
	})
};

/*
data['currentProjects'] = [
		{
			"name" : "CS147 Assignment 6",
			"points" : 200,
			"dueDate" : "02/13/2014"
		},
		{
			"name" : "CS147 Assignment 7",
			"points" : 200,
			"dueDate" : "02/20/2014"
		},
		{
			"name" : "CS147 Assignment 8",
			"points" : 200,
			"dueDate" : "02/27/2014"
		},
		{
			"name" : "CS147 Assignment 6",
			"points" : 200,
			"dueDate" : "02/13/2014"
		},
		{
			"name" : "CS147 Assignment 7",
			"points" : 200,
			"dueDate" : "02/20/2014"
		},
		{
			"name" : "CS147 Assignment 8",
			"points" : 200,
			"dueDate" : "02/27/2014"
		},
		{
			"name" : "CS147 Assignment 6",
			"points" : 200,
			"dueDate" : "02/13/2014"
		},
		{
			"name" : "CS147 Assignment 7",
			"points" : 200,
			"dueDate" : "02/20/2014"
		},
		{
			"name" : "CS147 Assignment 8",
			"points" : 200,
			"dueDate" : "02/27/2014"
		},
		{
			"name" : "CS147 Assignment 6",
			"points" : 200,
			"dueDate" : "02/13/2014"
		},
		{
			"name" : "CS147 Assignment 7",
			"points" : 200,
			"dueDate" : "02/20/2014"
		},
		{
			"name" : "CS147 Assignment 8",
			"points" : 200,
			"dueDate" : "02/27/2014"
		}
	]
*/