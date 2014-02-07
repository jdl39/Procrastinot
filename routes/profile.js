var data = require('../public/js/contexts.js').data

exports.view = function(req, res){
	
	// STUBBED DATA
	data['username'] = "Bob"
	data['imgURL'] = 'http://static4.businessinsider.com/image/50364bc869bedd7e37000015/meet-foursquares-money-man-steven-rosenblatt.jpg'
	data['level'] = 3
	data['points'] = 9001

	res.render('profile', data);
};