var data = require('../public/js/contexts.js').data

exports.view = function(req, res){
	data['buttons'] = [
			{
				'name' : 'Profile',
				'imgFile' : 'profileStub.png',
				'url' : '/',
				'description' : 'Here you will find information about your account.',
			},
			{
				'name' : 'Projects',
				'imgFile' : 'projectsStub.png',
				'url' : '/',
				'description' : 'Here you can manage your current projects',
			},
			{
				'name' : 'Leaderboards',
				'imgFile' : 'leaderboardsStub.png',
				'url' : '/',
				'description' : 'Here you can see how you rank against your friends and the world!',
			},
			{
				'name' : 'Help',
				'imgFile' : 'helpStub.png',
				'url' : '/',
				'description' : 'Press this at any time to return to this screen.',
			},
		]
	res.render('index', data)
};