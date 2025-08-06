const sideBar = document.getElementById("sidebar");
const menuIcon = document.getElementById("menu");
const closeIcon = document.getElementById("close");

menuIcon.addEventListener("click", () => {
  sideBar.style.display = "flex";
});

closeIcon.addEventListener("click", () => {
  sideBar.style.display = "none";
});


// About html javascript
const teamMembers = [
  {
    name: "Mr. and Mrs. Adedayo Johnson",
    desc: "Principal & Academic Head",
    img: "images/principal_and_vice_principal.webp"
  },

  {
    name: "Mr. Samuel Godswill",
    desc: "Head of Science Department",
    img: "images/head_of_science_department.webp"
  },

  {
    name: "Mr. Kehinde Balogun",
    desc: "Head Of Commercial Department",
    img: "images/head_of_commercial_department.webp"
  },

  {
    name: "Mr. Joshua Elemide",
    desc: "Senior Physics Teacher",
    img: "images/physics_teacher.webp"
  },

  {
    name: "Mrs. Titi Ogunjimi",
    desc: "Senior Literature & Commerce Teacher",
    img: "images/commerce_teacher.webp"
  },

  {
    name: "Mrs. Grace Afolabi",
    desc: "Senior Government Teacher",
    img: "images/govt_teacher.webp"
  },
];

createTeamMemberCard(teamMembers);
function createTeamMemberCard(filteredMemberCard) {
  const teamProfileContainer = document.querySelector("#team-profile");
  teamProfileContainer.innerHTML = '';

  filteredMemberCard.forEach(member => {
    const memberCard = document.createElement("div");
    memberCard.classList.add("stream-card");

    const memberName = document.createElement("h3");
    const memberDesc = document.createElement("p");
    const memberImg = document.createElement("img");

    memberName.textContent = `${member.name}`;
    memberDesc.innerHTML = `<span>Department: </span> ${member.desc}`;
    memberImg.setAttribute("src", `${member.img}`);
    memberImg.setAttribute("alt", `${member.name} Image`);
    memberImg.setAttribute("loading", "lazy");

    memberCard.appendChild(memberName);
    memberCard.appendChild(memberDesc);
    memberCard.appendChild(memberImg);

    teamProfileContainer.appendChild(memberCard);
  });
}

const form = document.getElementById("newsletter-form");
const contactName = document.getElementById("contact-name");
const contactMessage = document.getElementById("contact-message");

// === MODAL SELECTORS ===
const modal = document.getElementById("subscribeModal");
const modalText = document.getElementById("modalText");
const modalClose = document.getElementById("modalClose");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
});

function checkInput() {
  const contactNameValue = contactName.value.trim();
  const contactMessageValue = contactMessage.value.trim();

  let valid = true; // track if all inputs are valid

  if (contactNameValue === '') {
    setErrorMessage(contactName, "Name Cannot Be Empty!");
    valid = false;
  } else {
    setSuccessMessage(contactName);
  }

  if (contactMessageValue === '') {
    setErrorMessage(contactMessage, "Message Cannot Be Empty!");
    valid = false;
  } else {
    setSuccessMessage(contactMessage);
  }

  // 👉 Only if both are valid
  if (valid) {
    const contactData = {
      name: contactNameValue,
      message: contactMessageValue
    };
    localStorage.setItem("contactMessageData", JSON.stringify(contactData));

    // Personalized modal
    openModal(`Thank you, ${contactNameValue}, your message has been sent!`);

    // Reset form & remove green borders
    form.reset();
    document.querySelectorAll(".form-control").forEach(fc => {
      fc.className = "form-control";
    });
  }
}

function setErrorMessage(input, message) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector("#error-message");
  errorMessage.textContent = message;
  formControl.className = "form-control error";
}

function setSuccessMessage(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// === MODAL FUNCTIONS ===
function openModal(message) {
  modalText.textContent = message;
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
  setTimeout(() => {
    modalText.textContent = "";
  }, 300);
}
modalClose.addEventListener("click", closeModal);



// const form = document.getElementById("newsletter-form");
// const contactName = document.getElementById("contact-name");
// const contactMessage = document.getElementById("contact-message");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   checkInput();
// });

// function checkInput() {
//   // Get the input values
//   const contactNameValue = contactName.value.trim();
//   const contactMessageValue = contactMessage.value.trim();

//   if (contactNameValue === '') {
//     setErrorMessage(contactName, "Name Cannot Be Empty!");
//   } else {
//     setSuccessMessage(contactName);
//   }

//   if (contactMessageValue === '') {
//     setErrorMessage(contactMessage, "Message Cannot Be Empty!");
//   } else {
//     setSuccessMessage(contactMessage);
//   }
// }

// function setErrorMessage(input, message) {
//   const formControl = input.parentElement;
//   const errorMessage = formControl.querySelector("#error-message");

//   errorMessage.textContent = message;
//   formControl.className = "form-control error";
// }

// function setSuccessMessage(input) {
//   const formControl = input.parentElement;
//   formControl.className = "form-control success";
// }
