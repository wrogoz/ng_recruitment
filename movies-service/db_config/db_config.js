const mysql = require('mysql');
var db = mysql.createConnection({
    host            : 'db',
    port            : '3306',
    user            : 'mysql',
    password        : 'supersecret',
    database        : 'movies',
    multipleStatements: true,

});
db.connect((err)=>{
	if(err){
		console.error("error connecting: " + err.stack);
		return process.exit(22);
	}
	console.log("connected as id " + db.threadId);
});

module.exports=db