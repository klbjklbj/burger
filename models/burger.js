// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  
  insertOne: function(tableInput, col, val, cb) {
    orm.insertOne("burgers", tableInput, col, val, function(res) {
      cb(res);
    });
  },
  updateOne: function(tableInput, objColVals, condition, cb) {
    orm.updateOne("burgers", tableInput, objColVals, condition, function(res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
