const buttonToggle = document.getElementById("menu");
const navMenu = document.querySelector(".navigation");
const header = document.querySelector("header");
const fullYear = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#lastmodified")

const today = new Date();

fullYear.innerHTML = today.getFullYear()
lastmodified.innerHTML = `Last Modified: ${document.lastModified}`


buttonToggle.addEventListener("click", () => {
  buttonToggle.classList.toggle("open");
  navMenu.classList.toggle("open");
  header.classList.toggle("open");
});