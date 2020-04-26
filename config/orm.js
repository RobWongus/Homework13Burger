const connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var array = [];
    for (var i = 0; i < num; i++) {
        array.push("?");
    }
    return array.toString();
}

function objToSql(ob) {
    var array = [];
    for (var key in ob) {
        array.push(key + "=" + ob[key]);
        }

    return array.toString()
}


const orm = {
selectAll: function(tableInput, callback) {
    let query = "SELECT * FROM " + tableInput + ";";
    // console.log(query);
    connection.query(query, function(error, result) {
        if (error) {
            // console.log(error);
            throw error;
            
        }
        // console.log(result);
        callback(result);
    });
},

insertOne: function(tableInput, columns, values, callback) {
    let query= "INSERT INTO " + tableInput + "?";
    
    query += " ("; 
    query += columns.toString();
    query += ") ";
    query += "VALUES ("
    query += printQuestionMarks(values.length);
    query += ") ";
    connection.query(query, values, function(error, result) {
        if (error) 
            throw error;
            // console.log(response);
    });
        // console.log(result)
        callback(result)
},


//update moves the burger
updateOne: function(tableInput,objColVals, condition, callback) {
    let query = "UPDATE " + tableInput;
    
    query += " SET ";
    query += objToSql(objColVals);
    query += " WHERE ";
    query += condition
    connection.query(query, function(error, result) {
        if (error) {
            throw error;
        }
        callback(result);
    });
}

};

module.exports = orm;