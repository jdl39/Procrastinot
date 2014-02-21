var data = require('../public/js/contexts.js').data
var models = require('../models')

exports.view = function(req, res){
	data['level'] = 0
	data['points'] = 9001

	var fbID = req.cookies.fbid;
	if (!fbID) res.send(400);
	models.User.findOne({"FBID" : fbID}).exec(function(err, user) {
		data['points'] = user.points;
		res.render('profile', data);
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