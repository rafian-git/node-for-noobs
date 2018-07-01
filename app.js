// DECLARATION
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var expressSession = require('express-session');

var login = require('./controllers/login');
var home = require('./controllers/home');
var register = require('./controllers/register');

// CONFIGURE
app.set('view engine', 'ejs');


// MIDDLEWARES
app.use(bodyParser.urlencoded({extended:false,limit: '10mb'}));
app.use(expressSession({secret: 'secret', resave: false, saveUninitialized:true}));

// ROUTES
app.use('/login', login);
app.use('/', home);
app.use('/register', register);

// app.get('/', function(req, res){
// 			res.send("Hellow, World!");
// });

// SERVER START
var server = app.listen(3000, function(){
	console.log('Started on Port : 3000');
});



app.all('*', function(req, res) {
  res.redirect("/");
});
