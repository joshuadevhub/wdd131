const currentyear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentyear;

const lastmodified = document.lastModified;
document.getElementById("lastmodified").textContent = `Last Modified: ${lastmodified}`;