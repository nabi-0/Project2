$(function () {
  $("#sub-btn").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    event.stopPropagation();
    // console.log("post val= ", $("#post").val().trim());
    // console.log("username val=", $("#username").val().trim());

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
    // Send the POST request.
    $.post("/post", {
      // method: "POST",
      data: newPost,
      dataType: "json",
    }).then(function () {
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete-post").on("click", function () {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/post/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("deleted post", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
