var data = require('../public/js/contexts.js').data

exports.viewProject = function(req, res){
	
	res.render('addproject', data);
};