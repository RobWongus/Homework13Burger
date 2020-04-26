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
router.post("/burgers", function(request, response){
    burgers.insertOne([
        "burger_name", "devoured"
    ],
    [
        request.body.burger_name, request.body.devoured
    ],
        function(result) {
        response.json({ id: result.insertId });
    });
});

router.put("/burgers/:id", function (request, response) {
    burger.update(request.params.id, function (result){
        if (result,changedRows == 0) {
            return result.status(404).end();
        } else {
        response.sendStatus(200);
        }
    });
});



//update to move butgers to the right


//
module.exports = router;