var mysql      = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodelogin'
});


//not necessary for latest versions of node
//----------------------------------------------------------
// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }
//
//   console.log('connected as id ' + connection.threadId);
// });
//----------------------------------------------------------

module.exports = {
	execute: function(sql, param, callbackFromModel)
	{
		if(param == null)
		{
			connection.query(sql, function(err, result){
				if(err)
				{
					console.log(err);
				}
				else
				{
					callbackFromModel(result);
				}
			});
		}
		else
		{
			connection.query(sql, param, function(err, result){
				if(err)
				{
					console.log(err);
				}
				else
				{
					callbackFromModel(result);
				}
			});
		}
	}
};
