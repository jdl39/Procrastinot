var data = require('../public/js/contexts.js').data

exports.viewHelp = function(req, res){
	res.render('help', data)
};