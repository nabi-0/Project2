$(function () {
  $("#post-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newPost = {
      username: $("#username").val().trim(),
      title: $("#title").val().trim(),
      post: $("#post").val().trim(),
    };

    //if statement then call ajax post method...
    if (!newPost.username.length) {
      console.log("returning because username not entered");
      return;
    }
    console.log("Do I work?");

    // Send the POST request.
    $.ajax("/post", {
      type: "POST",
      data: newPost,
    }).then(function () {
      console.log("created new post");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  // $(".delete-burger").on("click", function (event) {
  //   var id = $(this).data("id");

  //   // Send the DELETE request.
  //   $.ajax("/api/burgers/" + id, {
  //     type: "DELETE",
  //   }).then(function () {
  //     console.log("deleted burger", id);
  //     // Reload the page to get the updated list
  //     location.reload();
  //   });
  // });
});
