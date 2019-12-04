// import MySQL Connection
var connection = require("../config/connection.js");


// helper function to pass values into SQL Syntax
function printQMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// helper function to convert object key/value pairs to SQL syntax
function objectToSql(obj) {
    var arr = [];

    // loop through keys and push key/value as a string into arr
    for (var key in obj) {
        var value = obj[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(obj, key)) {
            // if string with spaces -> add quotes
            if (typeof value === "string" && value.indexOf(" ") >=0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    // translate array of strings to single comma-separated string:
    return arr.toString();
}

// Object for all SQL statement functions (orm)
var orm = {
    // select all burgers from database
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err
            };
            cb(result);
        });
    },

    // insert a burger into burgers_db
    insertOne: function(table, cols, vals, cb) {

        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // update devoured status of a burger
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objectToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

// export orm object for model (burger.js)
module.exports = orm;