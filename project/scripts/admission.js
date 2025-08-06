const sideBar = document.getElementById("sidebar");
const menuIcon = document.getElementById("menu");
const closeIcon = document.getElementById("close");

menuIcon.addEventListener("click", () => {
  sideBar.style.display = "flex";
});

closeIcon.addEventListener("click", () => {
  sideBar.style.display = "none";
});

// ============ Admission Form Validation + Modal Popup ============

// select elements
const admissionForm = document.getElementById("newsletter-form");
// ===== Admission Form Validation + Modal Popup =====
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const male = document.getElementById("male");
const female = document.getElementById("female");
const phone = document.getElementById("phonenumber");
const emailAddress = document.getElementById("email");
const streamSelect = document.getElementById("stream");
const messageInput = document.getElementById("message");

// modal selectors
const modal = document.getElementById("subscribeModal");
const modalText = document.getElementById("modalText");
const modalClose = document.getElementById("modalClose");

// modal functions
function openModal(msg) {
  modalText.textContent = msg;
  modal.classList.add("show");
}
function closeModal() {
  modal.classList.remove("show");
  setTimeout(() => { modalText.textContent = ""; }, 300);
}
modalClose.addEventListener("click", closeModal);

// form validation submit
admissionForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let valid = true;

  // first name
  if (firstName.value.trim() === "") {
    setErrorFor(firstName, "First name required");
    valid = false;
  } else setSuccessFor(firstName);

  // last name
  if (lastName.value.trim() === "") {
    setErrorFor(lastName, "Last name required");
    valid = false;
  } else setSuccessFor(lastName);

  // gender
  if (!male.checked && !female.checked) {
    alert("Please select your gender!");  // <-- use alert instead of modal here
    valid = false;
  }

  // phone
  if (phone.value.trim() === "") {
    setErrorFor(phone, "Phone number required");
    valid = false;
  } else setSuccessFor(phone);

  // email
  if (!emailRegex.test(emailAddress.value.trim())) {
    setErrorFor(emailAddress, "Enter a valid email");
    valid = false;
  } else setSuccessFor(emailAddress);

  // stream
  if (streamSelect.value === "") {
    setErrorFor(streamSelect, "Select a stream");
    valid = false;
  } else setSuccessFor(streamSelect);

  // message
  if (messageInput.value.trim() === "") {
    setErrorFor(messageInput, "Tell us why you want to join");
    valid = false;
  } else setSuccessFor(messageInput);

  // ✅ if everything is valid finally → show modal + save data
  if (valid) {
    openModal("Your application has been received!");
    const formData = {
      firstName: firstName.value,
      lastName: lastName.value,
      gender: male.checked ? "Male" : "Female",
      phone: phone.value,
      email: emailAddress.value,
      stream: streamSelect.value,
      message: messageInput.value
    };
    localStorage.setItem("admissionFormData", JSON.stringify(formData));

    admissionForm.reset();
    document.querySelectorAll(".form-control").forEach(fc => {
      fc.className = "form-control";
    });
  }
});

// existing error/success functions
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";
}
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
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


// const form = document.getElementById("newsletter-form");
// const firstName = document.getElementById("firstname");
// const lastName = document.getElementById("lastname");
// const phoneNumber = document.getElementById("phonenumber");
// const email = document.getElementById("email");
// const subjectStream = document.getElementById("stream");
// const textArea = document.getElementById("message");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   checkInput();
// });

// function checkInput() {
//   const firstNameValue = firstName.value.trim();
//   const lastNameValue = lastName.value.trim();
//   const phoneNumberValue = phoneNumber.value.trim();
//   const emailValue = email.value.trim();
//   const subjectStreamValue = subjectStream.value.trim();
//   const textAreaValue = textArea.value.trim();

//   if (firstNameValue === '') {
//     setErrorMessage(firstName, "First Name Cannot Be Empty!");
//   } else {
//     setSuccessMessage(firstName);
//   }

//   if (lastNameValue === '') {
//     setErrorMessage(lastName, "Last Name Cannot Be Empty!");
//   } else {
//     setSuccessMessage(lastName);
//   }

//   if (phoneNumberValue === '') {
//     setErrorMessage(phoneNumber, "Phone Number Cannot Be Empty!");
//   } else {
//     setSuccessMessage(phoneNumber);
//   }

//   if (emailValue === '') {
//     setErrorMessage(email, "Email Cannot Be Empty!");
//   } else {
//     setSuccessMessage(email);
//   }

//   if (subjectStreamValue === '') {
//     setErrorMessage(subjectStream, "Please Select a Stream!");
//   } else {
//     setSuccessMessage(subjectStream);
//   }

//   if (textAreaValue === '') {
//     setErrorMessage(textArea, "Text Area Cannot Be Empty!");
//   } else {
//     setSuccessMessage(textArea);
//   }
// }

