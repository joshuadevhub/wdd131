const sideBar = document.getElementById("sidebar");
const menuIcon = document.getElementById("menu");
const closeIcon = document.getElementById("close");

menuIcon.addEventListener("click", () => {
  sideBar.style.display = "flex";
});

closeIcon.addEventListener("click", () => {
  sideBar.style.display = "none";
});

document.getElementById("admissionForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const stream = document.getElementById("stream").value;
  const message = document.getElementById("message").value;

  const application = { name, email, stream, message };
  let applications = JSON.parse(localStorage.getItem("applications")) || [];
  applications.push(application);
  localStorage.setItem("applications", JSON.stringify(applications));

  document.getElementById("confirmation").innerHTML = `
        <p>Thank you, <strong>${name}</strong>. Your application has been received.</p>`;
  document.getElementById("admissionForm").reset();
});