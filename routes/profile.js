var data = require('../public/js/contexts.js').data
var models = require('../models')
var utils = require('../public/js/procrastinotUtils')

exports.view = function(req, res){
	data['level'] = 0
	data['points'] = 9001

	var fbID = null;
	if (req.query.fbid) {
		fbID = req.query.fbid;
		data['fbID'] = fbID;
		data['isCurrUser'] = false;
	}
	else {
		fbID = req.cookies.fbid;
		data['fbID'] = "me";
		data['isCurrUser'] = true;
	}
	if (!fbID) res.send(400);
	models.User.findOne({"FBID" : fbID}).exec(function(err, user) {
		if (user == null) res.send(500, "User not found.");
		else data['points'] = user.points;
		if (data['fbID'] == "me") {
			res.render('profile', data);
		} else {
			utils.addUserProjectsToData(data['fbID'], data, function(data) {
				res.render('profile', data);
			});
		}
	})
};

exports.view2 = function(req, res){
	data['level'] = 0
	data['points'] = 9001

	var fbID = null;
	if (req.query.fbid) {
		fbID = req.query.fbid;
		data['fbID'] = fbID;
		data['isCurrUser'] = false;
	}
	else {
		fbID = req.cookies.fbid;
		data['fbID'] = "me";
		data['isCurrUser'] = true;
	}
	if (!fbID) res.send(400);
	models.User.findOne({"FBID" : fbID}).exec(function(err, user) {
		if (user == null) res.send(500, "User not found.");
		else data['points'] = user.points;
		res.render('profile2', data);
	})
};

exports.userJSON = function(req, res) {
	var fbIDs = req.body["ids"];
	models.User.find().exec(function(err, users) {
		var toReturn = []
		for (var i = 0; i < users.length; i++) {
			var user = users[i];
			if (fbIDs.indexOf(user.FBID) != -1) toReturn.push(user);
		}
		res.json(toReturn);
	})
}