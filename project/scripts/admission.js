const sideBar = document.getElementById("sidebar");
const menuIcon = document.getElementById("menu");
const closeIcon = document.getElementById("close");

menuIcon.addEventListener("click", () => {
  sideBar.style.display = "flex";
});

closeIcon.addEventListener("click", () => {
  sideBar.style.display = "none";
});

const form = document.getElementById("newsletter-form");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const phoneNumber = document.getElementById("phonenumber");
const email = document.getElementById("email");
const subjectStream = document.getElementById("stream");
const textArea = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInput();
});

function checkInput() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const phoneNumberValue = phoneNumber.value.trim();
  const emailValue = email.value.trim();
  const subjectStreamValue = subjectStream.value.trim();
  const textAreaValue = textArea.value.trim();

  if (firstNameValue === '') {
    setErrorMessage(firstName, "First Name Cannot Be Empty!");
  } else {
    setSuccessMessage(firstName);
  }

  if (lastNameValue === '') {
    setErrorMessage(lastName, "Last Name Cannot Be Empty!");
  } else {
    setSuccessMessage(lastName);
  }

  if (phoneNumberValue === '') {
    setErrorMessage(phoneNumber, "Phone Number Cannot Be Empty!");
  } else {
    setSuccessMessage(phoneNumber);
  }

  if (emailValue === '') {
    setErrorMessage(email, "Email Cannot Be Empty!");
  } else {
    setSuccessMessage(email);
  }

  if (subjectStreamValue === '') {
    setErrorMessage(subjectStream, "Please Select a Stream!");
  } else {
    setSuccessMessage(subjectStream);
  }

  if (textAreaValue === '') {
    setErrorMessage(textArea, "Text Area Cannot Be Empty!");
  } else {
    setSuccessMessage(textArea);
  }
}

function setErrorMessage(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("#error-message");

  small.textContent = message;

  formControl.className = "form-control error";
}

function setSuccessMessage(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

const subjectStreams = [
  {
    name: "Science",
    id: "aa-001"
  },

  {
    name: "Arts",
    id: "ab-002"
  },

  {
    name: "Tech",
    id: "ac-003"
  },
]
document.addEventListener("DOMContentLoaded", () => {
  const streamSelect = document.getElementById("stream");
  if (streamSelect) {
    subjectStreams.forEach(stream => {
      const option = document.createElement("option");
      option.value = stream.id;
      option.textContent = stream.name;

      streamSelect.appendChild(option);
    });
  }
});

// document.getElementById("newsletter").addEventListener("submit", function (e) {
//   e.preventDefault();

//   const name = document.getElementById("fullname").value;
//   const email = document.getElementById("email").value;
//   const stream = document.getElementById("stream").value;
//   const message = document.getElementById("message").value;

//   const application = { name, email, stream, message };
//   let applications = JSON.parse(localStorage.getItem("applications")) || [];
//   applications.push(application);
//   localStorage.setItem("applications", JSON.stringify(applications));

//   document.getElementById("confirmation").innerHTML = `
//         <p>Thank you, <strong>${name}</strong>. Your application has been received.</p>`;
//   document.getElementById("admissionForm").reset();
// });