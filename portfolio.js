document.addEventListener("DOMContentLoaded", function () {
  const filter = document.getElementById("filter");
  const videos = document.querySelectorAll(".video-item");

  filter.addEventListener("change", function (event) {
    const category = event.target.value;
    videos.forEach(function (video) {
      if (category === "all" || video.classList.contains(category)) {
        video.style.display = "block";
      } else {
        video.style.display = "none";
      }
    });
  });
});
