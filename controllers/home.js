var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.render('home',{user : req.session.user});

});

router.get('/logout', function(req, res){
	req.session.destroy();
	res.redirect("/");
});

module.exports = router;
