const orm = require("../config/orm");
//see git hub model setup
let burgers = {
    selectAll: function(cb) {
    orm.selectAll("burgers", function(response) {
    cb(response);
    });
},

insertOne: function(columns, values, input, cb) {
    orm.insertOne("burgers", columns, values, input, function(response){
        cb(response);
    });
},
//may change
update: function(objColFals, condition, input, cb) { 
    orm.updateOne("burgers", objColVals, condition, input, function(response) {
        
        cb(response);
    });
}
}
module.exports = burgers;