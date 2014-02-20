var data = require('../public/js/contexts.js').data
var models = require('../models')

exports.viewProjects = function(req, res){
	var fbID = req.cookies.fbid;

	if (!fbID) {
		// TODO: Make a better error response.
		res.send(400, "You're a bad cookie.");
	}

	models.User.findOne({"FBID" : fbID}).populate('_projects', options={sort: 'due'}).exec(function(err, user) {
		if (err) {
			res.send(500)
		} else {
			data['currentProjects'] = []
			data['pastProjects'] = []
			for (var i = 0; i < user._projects.length; i++) {
				var project = user._projects[i];
				console.log("Gots a project!!! " + project.title);
				var projectJSON = {
					"name" : project.title,
					"points" : project.points,
					"dueDate" : project.due.getMonth() + "/" + project.due.getDate() + "/" + project.due.getFullYear()
				}
				if (project.due >= Date.now() && !project.success) {
					data['currentProjects'].push(projectJSON)
				} else {
					data['pastProjects'].push(projectJSON)
				}
			}
			console.log(data)
			res.render('projects', data);
		}
	})
};

exports.viewProject = function(req, res){
	res.render('addproject', data);
};

exports.newProject = function(req, res) {
	var fbID = req.cookies.fbid;
	if (!fbID) {
		res.send(400, "You're a bad cookie.");
	}

	var project = new models.Project(req.body)
	project.save(function(err) {
		if (err) {
			console.log(err);
			res.redirect("/projects")
		}
		else {
			models.User.findOne({"FBID" : fbID}).exec(function(err, user) {
				if (err) {
					console.log(err);
					res.redirect("/projects");
				}
				else {
					user._projects.push(project);
					user.save(function(err) {
						console.log("It should work!!!!!!!!!!!!!!!!! D: D: D:");
						models.Project.find().exec(function(err, projects) { console.log("we have " + projects.length + " projects...") });
						models.User.findOne({"FBID" : fbID}).exec(function(err, user){ console.log("you have " + user._projects.length + " projects...")});
						if (err) console.log(err);		
						res.redirect("/projects");
					});
				}
			});
		}
	})
}

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