var data = require('../public/js/contexts.js').data
var models = require('../models')

exports.viewProjects = function(req, res){
	var fbID = req.cookies.fbid;

	if (!fbID) {
		// TODO: Make a better error response.
		res.send(400, "You're a bad cookie.");
	}

	models.Project.find().exec(function(err, projects) { console.log(projects.length); console.log(projects[0]._user)});

	//models.User.findOne({"FBID" : fbID}).populate('_projects', '_id title due points success', options={sort: 'due'}).exec(function(err, user) {
	models.User.findOne({"FBID" : fbID}).exec(function(err, user) {
	models.Project.find({"_user" : user}).exec(function(perr, projects) {
		if (err || perr) {
			res.send(500);
		} else {
			data['currentProjects'] = []
			data['pastProjects'] = []
			console.log(projects.length);
			for (var i = 0; i < projects.length; i++) {
				var project = projects[i];
				console.log("Gots a project!!! " + project.title);
				var projectJSON = {
					"id" : project._id,
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
			console.log(data);
			res.render('projects', data);
		}
	})
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

	models.User.findOne({"FBID" : fbID}).exec(function(usererr, user) {
		if (usererr) console.log(usererr);
		req.body["_user"] = user;
		var project = new models.Project(req.body)
		project.save(function(saveerr) {
			if (saveerr) {
				console.log(saveerr);
			}
			res.redirect("/projects")
		})
	});
}

exports.completeProject = function(req, res) {
	var projectID = req.body["id"];
	models.Project.findOne({"_id" : projectID}).populate('_user').exec(function(err, project) {
		if (err) {
			console.log(err);
			res.send(500);
		} else {
			project._user.points += project.points;
			project.success = true;
			project._user.save(function(err) { if (err) console.log(err); });
			project.save(function(err) { if (err) console.log(err); });
			res.send(200);
		}
	});
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