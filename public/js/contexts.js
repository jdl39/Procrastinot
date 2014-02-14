exports.data = {}

exports.data['navBarButtons'] = [
			{
				'name' : 'Profile',
				'imgFile' : 'profileStub.png',
				'url' : '/profile',
				'description' : 'Here you will find information about your account.',
			},
			{
				'name' : 'Projects',
				'imgFile' : 'projectsStub.png',
				'url' : '/projects',
				'description' : 'Here you can manage your current projects',
			},
			{
				'name' : 'Leaderboards',
				'imgFile' : 'leaderboardsStub.png',
				'url' : '/leaderboards',
				'description' : 'Here you can see how you rank against your friends and the world!',
			},
			{
				'name' : 'Help',
				'imgFile' : 'helpStub.png',
				'url' : '/',
				'description' : 'Press this at any time to return to this screen.',
			}
		]

exports.data['possiblePointVals'] = []

for (var i=0; i < 21; i++) {
	exports.data['possiblePointVals'].push({"pointVal" : i*50})
}