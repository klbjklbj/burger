// Make sure to wait to attach handlers until the DOM is fully loaded.
$(function () {
  $(".change-devoured").on("click", function (event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");

    var newDevouredState = {
      devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function () {
        console.log("changed devoured to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var name = $("[name=burger-name]").val().trim();

    if (name !== "") {
      var newBurger = {
        name: name,
        devoured: 0 //any new burger starts undevoured
      };

      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function () {
        // console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      });
    }
    else {
      $("[name=burger-name]").val("");
    }
  });

});
