var Mongoose = require('mongoose');

var UserSchema = new Mongoose.Schema({
	"FBID" : String,
	"points" : Number,
	"_projects" : {type: [Mongoose.Schema.Types.ObjectID], ref: 'Project'}
});

var ProjectSchema = new Mongoose.Schema({
	"title" : String,
	"due" : Date,
	"points" : Number,
	"completed" : Date,
	"success" : Boolean
});

exports.Project = Mongoose.model('Project', ProjectSchema);
exports.User = Mongoose.model('User', UserSchema);