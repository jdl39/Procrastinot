var mongoose = require('mongoose');
var models   = require('./models');

// Connect to the Mongo database, whether locally or on Heroku
// MAKE SURE TO CHANGE THE NAME FROM 'lab7' TO ... IN OTHER PROJECTS
var local_database_name = 'procrastinot';
var local_database_uri  = 'mongodb://localhost/' + local_database_name
var database_uri = process.env.MONGOLAB_URI || local_database_uri
mongoose.connect(database_uri);

// Step 1: load the JSON data
// TODO: Have JSON data...

// Step 2: Remove all existing documents (and reinitialize dummy data?)
var usersDone = false
var projectsDone = false
models.User.find().remove(function(err) {
	if (err) console.log(err);
	usersDone = true
	if (projectsDone) {
		console.log("done.");
		mongoose.connection.close();
	}
});

models.Project.find().remove(function(err) {
	if (err) console.log(err);
	projectsDone = true
	if (usersDone) {
		console.log("done.");
		mongoose.connection.close();
	}
});
