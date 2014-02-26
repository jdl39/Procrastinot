var models = require('../../models')

exports.addUserProjectsToData = function(fbID, data, callback) {
	models.User.findOne({"FBID" : fbID}).exec(function(err, user) {
		models.Project.find({"_user" : user}).exec(function(perr, projects) {
			console.log(user);
			console.log(projects.length);
			if (err || perr) {
				res.send(500);
			} else {
				data['currentProjects'] = []
				data['pastProjects'] = []
				for (var i = 0; i < projects.length; i++) {
					var project = projects[i];
					var projectJSON = {
						"id" : project._id,
						"name" : project.title,
						"points" : project.points,
						"dueDate" : (project.due.getMonth() + 1) + "/" + project.due.getDate() + "/" + project.due.getFullYear(),
						"success" : project.success
					}
					if (project.completed) {
						projectJSON["completeDate"] = (project.completed.getMonth() + 1) + "/" + project.completed.getDate() + "/" + project.completed.getFullYear();
					}
					if (project.due >= Date.now() && !project.success) {
						data['currentProjects'].push(projectJSON)
					} else {
						data['pastProjects'].push(projectJSON)
					}
				}
				callback(data);
			}
		})
	})
}