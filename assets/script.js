const d = document,
  $share = d.querySelector(".share"),
  $icons = d.querySelector(".icons");

d.addEventListener("click", (e) => {
  if (e.target.matches(".share *") || e.target.matches(".share")) {
    $share.classList.toggle("active");
    $icons.classList.toggle("active");
  } else {
    $share.classList.remove("active");
    $icons.classList.remove("active");
  }
});
