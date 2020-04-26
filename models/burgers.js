const orm = require("../config/orm");
//see git hub model setup
let burgers = {
    selectAll: function(callback) {
    orm.selectAll("burgers", function(result) {
    callback(result);
    });
},

    insertOne: function(columns, values, callback) {
    orm.insertOne("burgers", columns, values, function(result) {
        callback(result);
    });
},
//may change
    updateOne: function(objColVals, condition, callback) { 
    orm.updateOne("burgers", objColVals, condition, function(result) {
        
            callback(result);
        });
    }
}
module.exports = burgers;