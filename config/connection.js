// establish MySQL connection
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "us-cdbr-iron-east-05.cleardb.net",
    port: 3306,
    user: "b92841c4b2cc28",
    password: "1b42559f",
    database: "heroku_0ec484725af1444"
});

// make connection
connection.connect(function(err) {
    if (err) {
    console.error("error connection: " + err.stack);
    return;
    }
    console.log("connected as id " + connection.threadId);
});

// export connection for ORM
module.exports = connection;