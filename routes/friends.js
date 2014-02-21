var data = require('../public/js/contexts.js').data

exports.viewFriends = function(req, res){
	res.render('friends', data)
};