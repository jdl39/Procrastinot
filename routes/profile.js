var data = require('../public/js/contexts.js').data

exports.view = function(req, res){
	
	// STUBBED DATA
	data['username'] = "Bob"
	data['imgURL'] = 'http://static4.businessinsider.com/image/50364bc869bedd7e37000015/meet-foursquares-money-man-steven-rosenblatt.jpg'
	data['level'] = 3
	data['points'] = 9001

	data['friends'] = [
		{
			"name" : "Bob's best friend",
			"imageURL" : "http://lorempixel.com/output/people-q-c-640-480-5.jpg",
			"profileURL" : "/profile"
		},
		{
			"name" : "Bob's next best friend",
			"imageURL" : "http://lorempixel.com/output/people-q-c-640-480-5.jpg",
			"profileURL" : "/profile"
		},
		{
			"name" : "Bob's worst nightmare",
			"imageURL" : "http://lorempixel.com/output/people-q-c-640-480-5.jpg",
			"profileURL" : "/profile"
		}
	]

	res.render('profile', data);
};