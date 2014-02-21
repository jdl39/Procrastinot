var data = require('../public/js/contexts.js').data


exports.view = function(req, res){
	res.render('index', data)
};