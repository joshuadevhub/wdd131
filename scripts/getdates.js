// getdates.js
const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

const modified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${modified}`;