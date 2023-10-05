var backgroundImage = "";

function addPost() {
  var title = document.getElementById("title");
  var description = document.getElementById("description");
  console.log("bgImage" + backgroundImage);
  //   console.log(title.value, description.value);

  if (title.value.trim() && description.value.trim()) {
    var posts = document.getElementById("posts");

    //   posts.innerHTML = "<h1>" + title.value + "</h1>";

    //Template String

    //
    // ``

    posts.innerHTML += `
  
    <div class="card mb-2">
      <div class="card-header">@Post</div>
      <div style="background-image: url(${backgroundImage})" class="card-body">
        <blockquote class="blockquote mb-0">
          <p>${title.value}</p>
          <footer class="post-content blockquote-footer">
           ${description.value}
          </footer>
        </blockquote>
        <div class="overley"></div>
      </div>
    </div>
  `;
    title.value = "";
    description.value = "";
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter title & description!",
      // footer: '<a href="">Why do I have this issue?</a>'
    });
  }
}
// <cite title="Source Title"> </cite>

function selectImage(src) {
  backgroundImage = src;
  //   console.log(src);

  var bgImage = document.getElementsByClassName("bg-image");
  //   console.log(bgImage);
  for (var i = 0; i < bgImage.length; i++) {
    // console.log(bgImage[i]);
    bgImage[i].className = "bg-image";
  }
  event.target.className += " images-list-selected";
  //   console.log(event.target);
}
