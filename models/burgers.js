const orm = require("../config/orm");
//see git hub model setup
let burgers = {
    selectAll: function(cb) {
    orm.selectAll("burgers", function(response) {
    cb(response);
    });
},

insertOne: function(cb) {
    orm.insertOne("burgers")
}
//may change
module.exports = burgers