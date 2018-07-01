var express = require('express');
var router = express.Router();
var userModel = require.main.require('./model/user-model');

router.get('/', function(req, res){
	res.render('login');

});


router.post('/', function(req, res){
	var loginUser = {
		un : req.body.username,
		pw : req.body.password
	};
	userModel.validateUser(loginUser, function(result){
		if (result.length == 1) {
			req.session.user = result;
			res.redirect("/");
		}
		else{
			res.send('invalid login');
		}
	});


});

module.exports = router;
