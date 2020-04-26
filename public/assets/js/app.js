$(function () {

    $(".change-devour").on("click", function (event) {
        event.preventDefault();

        let id = $(this).data("id");
        let eatenDevoured = $(this).data("eatenDevoured");

        console.log(eatenDevoured);

        let eatenDevouredState = {
            devoured: eatenDevoured
        };

    //send put request

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eatenDevouredState
        })
        .then(function () {
            // reload page to display devoured burger in proper column
            location.reload();
        })

    });
});

$(".create-form").on("submit", function(event) {
    event.preventDefault();
    
    let newBurger = {
        burger_name: $("#burgers").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
    };

$.ajax("/api/burgers", {
    type: "POST",
    data: newBurger
})
    .then(
        function() {
            location.reload();
            }
        );

    

});

