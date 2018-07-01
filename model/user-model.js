var db = require('./db');

module.exports = {

//login
  validateUser: function(loginUser,callbackFromController) {
    var sql = "SELECT * FROM user WHERE user.userName = ? AND user.password = ?";

    db.execute(sql, [loginUser.un, loginUser.pw] ,function(result){
      callbackFromController(result);
    });
  },

// response of AJAX request
	checkUser: function(callbackFromController) {

  var sql = "SELECT * FROM user";

  db.execute(sql,[], function(result_user) {
    callbackFromController(result_user);
  });
},

//registration
	register: function (registerUser, callbackFromController) {

        var sql = "INSERT INTO user VALUES (null,?,?,?)";
        db.execute(sql, [
        registerUser.fn,
        registerUser.un,
        registerUser.pw,
			], function (result) {
            callbackFromController(result);
          });
      }


};
