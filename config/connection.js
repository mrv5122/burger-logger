const mysql = require('mysql');

let connection;
// Sets up db to connect locally or on JAWSDB if deployed
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Omicronf15',
    database: 'burgers_db'
  });
}

// export connection for ORM
module.exports = connection;