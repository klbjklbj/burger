var connection = require('./connection.js');

//methods to execute necessary MySQL commands

// selectAll();
// insertOne();
// updateOne();

var orm = {
    selectAll: function(tableInput) {
        var queryString = "SELECT * FROM ??";
        console.log(queryString);
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            console.log("result: " + result);
            console.log(tableInput);
        }); 
    },

}

orm.selectAll("burgers");

console.table(orm);

//listBurgers() works

// function listBurgers() {
//     connection.query("SELECT * FROM burgers", function (err, res) {
//         console.table(res);

//     });
// }

// listBurgers();

//Export ORM object
//module.exports = orm;