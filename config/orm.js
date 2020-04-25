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
selectAll: function(tableInput, cb) {
    let queryString = "SELECT * FROM " + tableInput + ";";
    console.log(queryString);
    connection.query(queryString, function(error, result) {
        if (error) {
            console.log(error);
            throw error;
            
        }
        console.log(result);
        cb(result);
    });
},

insertOne: function(tableInput, columns, values, cb) {
    let queryString= "INSERT INTO " + tableInput + "?";
    
    queryString += " ("; 
    queryString += columns.toString();
    queryString += ") ";
    queryString += "VALUES ("
    queryString += printQuestionMarks(values.length);
    queryString += ") ";
    connection.query(queryString, [userInput], function(error, result) {
        if (error) 
            throw error;
            console.log(response);
    });
        cb(result)
},


//update moves the burger
updateOne: function(tableInput,objColVals, condition, cd) {
    let queryString = "UPDATE " + tableInput;
    
    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition
    connection.query(queryString, function(error, result) {
        if (error) {
            throw error;
        }
        cb(result);
    });
}

};

module.exports = orm