// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#addburger").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger!");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });



    $(".devourburger").on("click", function(event) {
      event.preventDefault();
      var id = $(this).data("id");
  
      var devourState = {
        devour: 1
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devourState
      }).then(
        function() {
          console.log("User Devoured Burger", devourState);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

  
    $(".throwAwayTrash").on("click", function(event) {
      event.preventDefault();
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });