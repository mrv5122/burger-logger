$(function() {
    
    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");

        var newDevouredState = {
            devoured: newDevoured
        };

        // send PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("changed devoured to ", newDevouredState);
                // reload page for updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burgerName: $("bu").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        // send POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                // reload page for updated list
                location.reload();
            }
        );
    });
});