const express = require("express");
const burgers = require("../models/burgers");

//create the router for the app, create logic that requires 
let router = express.Router();



//Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.
router.get("/burgers", function(request, response) {
    burgers.selectAll(function(data){
        let hbsObject =  {
            burgers: data
        };
        console.log(hbsObject);
        response.render("index", hbsObject);
    });
});


//Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.
//post


//update to move butgers to the right


//
module.exports = router;