exports.data = {}

exports.data['navBarButtons'] = [
			{
				'name' : 'Profile',
				'imgFile' : 'profileStub1.png',
				'url' : '/profile',
				'description' : 'Here you will find information about your account. You view your current level, points, and access the help page.',
			},
			{
				'name' : 'Projects',
				'imgFile' : 'projectsStub1.png',
				'url' : '/projects',
				'description' : 'Here you can manage your current projects and view projects you have completed in the past. Click the add project button on the upper right to start creating a project. Give it a name, set a personal due date for it, and give it a point value and then add it to your current list of projects. To complete a project, click on the box to the right of each project.',
			},
			{
				'name' : 'Leaderboards',
				'imgFile' : 'leaderboardsStub1.png',
				'url' : '/leaderboards',
				'description' : 'Here you can see how you rank against your friends and the world!',
			},
			{
				'name' : 'Friends',
				'imgFile' : 'friendsStub1.png',
				'url' : '/friends',
				'description' : 'Here you can search for and view your friends on Procrastinot and view their friend pages to see what tasks they are up to',
			}
		]

		exports.data['FakeFriends'] = [
			{
				'name' : 'Mike Jones',
				'level' : '20',
				'imageURL' : ' ',
				
			},
			{
				'name' : 'Bill Richardson',
				'level' : '17',
				'imageURL' : ' ',
				 
			},
			{
				'name' : 'Sarah Miller',
				'level' : '15',
				'imageURL' : ' ',
				
			},
			{
				'name' : 'Ralph Reynolds',
				'level' : '14',
				'imageURL' : ' ',
	
			}
		]

exports.data['possiblePointVals'] = []

for (var i=0; i < 21; i++) {
	exports.data['possiblePointVals'].push({"pointVal" : i*50})
}