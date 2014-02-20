var data = require('../public/js/contexts.js').data
var models = require('../models')

exports.view = function(req, res){
	res.render('login', data)
};

exports.processLogin = function(req, res) {
	var fbid = req.params.fbid;
	if (!fbid) {
		res.send(400);
	}
	res.cookie("fbid", fbid);
	models.User.find({"FBID" : fbid}).exec(function(err, users) {
		if (err) {
			console.log("Error searching for user during login.")
		}
		if (users.length == 0) {
			// We need to create a new user!
			var newUser = new models.User({
				"FBID" : fbid,
				"points" : 0,
				"_projects" : []
			});

			newUser.save(function(saveErr) {
				if (saveErr) {
					console.log("ERROR SAVING USER!")
				} else {
					console.log("New user saved!")
				}
				res.redirect("/");
			})
		} else {
			res.redirect("/");
		}
	});
};