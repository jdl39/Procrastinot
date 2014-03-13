var data = require('../public/js/contexts.js').data

exports.view = function(req, res){

	data['friends'] = [
	{
		"name" : "Friend 1",
		"points" : "500",
		"level" : "6",
		"imageURL" : "http://lorempixel.com/output/people-q-c-640-480-5.jpg",
		"profileURL" : "/profile"
	},
	{
		"name" : "Friend 2",
		"points" : "400",
		"level" : "5",
		"imageURL" : "http://lorempixel.com/output/people-q-c-640-480-5.jpg",
		"profileURL" : "/profile"
	},
	{
		"name" : "Friend 3",
		"points" : "300",
		"level" : "4",
		"imageURL" : "http://lorempixel.com/output/people-q-c-640-480-5.jpg",
		"profileURL" : "/profile"
	},
	{
		"name" : "Friend 4",
		"points" : "200",
		"level" : "3",
		"imageURL" : "http://lorempixel.com/output/people-q-c-640-480-5.jpg",
		"profileURL" : "/profile"
	},
	{
		"name" : "Friend 5",
		"points" : "500",
		"level" : "6",
		"imageURL" : "http://lorempixel.com/output/people-q-c-640-480-5.jpg",
		"profileURL" : "/profile"
	},
	{
		"name" : "Friend 6",
		"points" : "400",
		"level" : "5",
		"imageURL" : "http://lorempixel.com/output/people-q-c-640-480-5.jpg",
		"profileURL" : "/profile"
	},
	{
		"name" : "Friend 7",
		"points" : "300",
		"level" : "4",
		"imageURL" : "http://lorempixel.com/output/people-q-c-640-480-5.jpg",
		"profileURL" : "/profile"
	},
	{
		"name" : "Friend 8",
		"points" : "200",
		"level" : "3",
		"imageURL" : "http://lorempixel.com/output/people-q-c-640-480-5.jpg",
		"profileURL" : "/profile"
	},
	{
		"name" : "Friend 9",
		"points" : "500",
		"level" : "6",
		"imageURL" : "http://lorempixel.com/output/people-q-c-640-480-5.jpg",
		"profileURL" : "/profile"
	},
	{
		"name" : "Friend 10",
		"points" : "400",
		"level" : "5",
		"imageURL" : "http://lorempixel.com/output/people-q-c-640-480-5.jpg",
		"profileURL" : "/profile"
	},
	{
		"name" : "Friend 11",
		"points" : "300",
		"level" : "4",
		"imageURL" : "http://lorempixel.com/output/people-q-c-640-480-5.jpg",
		"profileURL" : "/profile"
	},
	{
		"name" : "Friend 12",
		"points" : "200",
		"level" : "3",
		"imageURL" : "http://lorempixel.com/output/people-q-c-640-480-5.jpg",
		"profileURL" : "/profile"
	},

	]

	res.render('leaderboards', data);
};