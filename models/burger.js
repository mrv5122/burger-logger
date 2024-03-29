var orm = require("../config/orm.js");

// code that will call the ORM functions using burger-specific input for ORM
var burger = {

    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    // cols and vals are array values
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },

    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

// export database functions for controller (burgersController.js)
module.exports = burger;