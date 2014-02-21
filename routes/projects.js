var data = require('../public/js/contexts').data
var models = require('../models')
var utils = require('../public/js/procrastinotUtils')

exports.viewProjects = function(req, res){
	var fbID = req.cookies.fbid;

	if (!fbID) {
		// TODO: Make a better error response.
		res.send(400, "You're a bad cookie.");
	}

	utils.addUserProjectsToData(fbID, data, function(newdata) {
		res.render('projects', newdata);
	});
}

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
			project.completed = Date.now();
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