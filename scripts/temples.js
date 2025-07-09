const buttonToggle = document.getElementById("menu");
const navMenu = document.querySelector(".navigation");
const header = document.querySelector("header");

buttonToggle.addEventListener("click", () => {
  buttonToggle.classList.toggle("open");
  navMenu.classList.toggle("open");
  header.classList.toggle("open");
});