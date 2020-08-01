$(function () {
  $("#subres-btn").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    console.log("am I here?");

    event.preventDefault();
    event.stopPropagation();

    console.log("am I here?");
    var newReservation = {
      username: $("#username").val().trim(),
      description: $("#description").val().trim(),
      time: $("#time").val().trim(),
    };
    //if statement then call ajax post method...
    if (!newReservation.username.length) {
      console.log("returning because username not entered");
      return;
    }
    // Send the POST request.
    $.post("/reservation", {
      // method: "POST",
      data: newReservation,
      dataType: "json",
    }).then(function () {
      console.log("created new reservation");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete-reservation").on("click", function () {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/reservation/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("deleted reservation", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
