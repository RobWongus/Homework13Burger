const connection = require("./connection.js");
const orm = {
selectAll: function(tableInput, cb) {
    let queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(error, result) {
        if (error) {
            throw error;
            console.log(result);
            cb(result);
        }
        
    });
},

insertOne: function(tableInput, userInput, cb) {
    let queryString= "INSERT INTO " + tableInput + "?";
    
    queryString += " SET "; 
    connection.query(query, [userInput], function(error, response) {
        if (error) 
            throw error;
            console.log(response);
            cb(result)
    });
},


//update moves the burger
updateOne: function(tableInput, cd) {
    let queryString = "UPDATE " + tableInput;
    queryString += " SET ";
    connection.query(queryString, function(error, response) {
        if (error) {
            throw error;
        }
        cb(result);
    });
}

};

module.exports = orm