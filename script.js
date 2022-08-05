const hamburgerMenu = document.querySelector(".hamburger-menu input");
const navbar = document.querySelector(".navbar");

hamburgerMenu.addEventListener("click", function () {
  navbar.classList.toggle("slide");
});
