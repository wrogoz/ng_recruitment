const express = require('express');
const app = express();
const mysql = require('mysql');
var db = mysql.createConnection({
    host            : 'db',
    port            : '3306',
    user            : 'mysql',
    password        : 'supersecret',
    database        : 'movies'
});

db.connect(function(err){
	if(err){
		console.error("error connecting: " + err.stack);
		return process.exit(22);
	}
	console.log("connected as id " + db.threadId);
});


app.get('/', (req, res) => {
        db.query('SELECT * FROM movies',(err,result)=>{
            if(err)throw err;
            res.status(200).send(result)
        })
});

const port = 3257;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});