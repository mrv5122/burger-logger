// establish MySQL connection
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Omicronf15",
    database: "burgers_db"
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