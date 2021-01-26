const mysql = require('mysql');
var db = mysql.createConnection({
    host            : 'db',
    port            : '3306',
    user            : 'mysql',
    password        : 'supersecret',
    database        : 'movies'
});

module.exports=db