var data = require('../public/js/contexts.js').data

exports.viewProjects = function(req, res){
	
	res.render('projects', data);
};