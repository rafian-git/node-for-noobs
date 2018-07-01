var express = require('express');
var router = express.Router();
var userModel = require.main.require('./model/user-model');

router.get('/', function(req, res){
	res.render('register');

});

router.post('/', function(req, res){
	var registerUser = {
    fn : req.body.fName,
		un : req.body.username,
		pw : req.body.password
	};
	userModel.register(registerUser, function(result){
		res.send('registered successfully !');
	});


});


router.post('/usrnmCheck/:usrNm', function(req,res){
			//console.log(req.params.usrNm);
			userModel.checkUser( function(result_user) {
				var temp = 'Available';
				for (var i = 0; i < result_user.length; i++) {
					if (result_user[i].userName == req.params.usrNm) {
						temp = "Not Available";
						break;
					}
				}
				res.send(temp);
				});
});

module.exports = router;
