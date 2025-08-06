// JavaScript For The SideBar Menu
const sideBar = document.getElementById("sidebar");
const menuIcon = document.getElementById("menu");
const closeIcon = document.getElementById("close");

menuIcon.addEventListener("click", () => {
  sideBar.style.display = "flex";
});

closeIcon.addEventListener("click", () => {
  sideBar.style.display = "none";
});


// JavaScript For The Filter And The Stream Subjects index.html
const streams = [
  {
    title: "Biological Science Stream",
    category: "Science",
    desc: "Physics, Chemistry, Biology & Health Science ...",
    img: "images/biological-stream-image.webp"
  },

  {
    title: "Humanities Stream",
    category: "Arts",
    desc: "Literature, Goverenment, English and History ...",
    img: "images/humanities-stream.webp"
  },

  {
    title: "Business & Management Stream",
    category: "Commercial",
    desc: "Office Practices, Economics, Commerce & Marketing.",
    img: "images/business-stream.webp"
  },

  {
    title: "Technological Science Stream",
    category: "Science",
    desc: "Physics, Chemistry, Mathematics & Computer Science ...",
    img: "images/technological-stream.webp"
  },

  {
    title: "Performing Art Stream",
    category: "Arts",
    desc: "Fine art, Music, Theatre Art and Graphics Designs ...",
    img: "images/performing-art-stream.webp"
  },

  {
    title: "Finance & Accounting Stream",
    category: "Commercial",
    desc: "Accounting, Mathematics, Insurance & Economics ...",
    img: "images/accounting-stream.webp"
  },
];
createStreamCard(streams);
function createStreamCard(filteredCard) {
  const streamContainer = document.querySelector("#streams");
  streamContainer.innerHTML = '';

  filteredCard.forEach(stream => {
    const streamCard = document.createElement("div");
    streamCard.classList.add("stream-card");

    const streamName = document.createElement("h3");
    const streamCategory = document.createElement("p");
    const streamDescription = document.createElement("P");
    const streamImage = document.createElement("img");
    const streamAnchor = document.createElement("a");

    streamName.textContent = `${stream.title}`;
    streamCategory.innerHTML = `<span>Category:</span> ${stream.category}`;
    streamDescription.innerHTML = `<span>Description:</span> ${stream.desc}`;
    streamImage.setAttribute("src", stream.img)
    streamImage.setAttribute("alt", `${stream.title} Image`);
    streamImage.setAttribute("loading", "lazy")
    streamImage.setAttribute("id", "stream-img");
    streamAnchor.setAttribute("href", "#")
    streamAnchor.textContent = "Learn More";

    streamCard.appendChild(streamName);
    streamCard.appendChild(streamCategory);
    streamCard.appendChild(streamDescription);
    streamCard.appendChild(streamImage);
    streamCard.appendChild(streamAnchor);

    streamContainer.appendChild(streamCard);
  });
}

const all = document.getElementById("all");
all.addEventListener("click", () => {
  createStreamCard(streams);
})


const science = document.getElementById("science");
const scienceFilter = streams.filter(stream => {
  return stream.category.toLowerCase().includes("science");
})
science.addEventListener("click", () => {
  createStreamCard(scienceFilter);
})


const art = document.getElementById("arts");
let artFilter = streams.filter(stream => {
  return stream.category.toLowerCase().includes("arts");
})
art.addEventListener("click", () => {
  createStreamCard(artFilter);
})


const tech = document.getElementById("tech");
let techFilter = streams.filter(stream => {
  return stream.category.toLowerCase().includes("tech");
});
tech.addEventListener("click", () => {
  createStreamCard(techFilter);
});



// JavaScript For The Student Testimonial
const testimonials = [
  { name: "Sarah", text: "Excel Mind transformed my life!" },
  { name: "Daniel", text: "Outstanding teachers and labs." },
  { name: "Esther", text: "The tech program is world class!" }
];

let tIndex = 0;
function showTestimonial() {
  const t = testimonials[tIndex];
  document.getElementById("testimonialBox").innerHTML = `
    <p>"${t.text}"</p><h4>- ${t.name}</h4>`;
}
showTestimonial();

document.getElementById("nextTestimonial").addEventListener("click", () => {
  tIndex = (tIndex + 1) % testimonials.length;
  showTestimonial();
});

// JavaScript For The NewsLetter Validation
const newsLetterForm = document.getElementById("newsletter-form");
const email = document.getElementById("sub-email");
newsLetterForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = email.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === "") {
    setErrorFor(email, "Email Cannot Be Empty!");
  } else if (!emailRegex.test(emailValue)) {
    setErrorFor(email, "Please enter a valid email address!");
  } else {
    // VALID -> show modal + save to storage
    localStorage.setItem("newsletterEmail", emailValue);
    openModal(`Thank you for subscribing, ${emailValue}!`);
    email.value = "";
    // remove the green border
    email.parentElement.className = "form-control";
  }
  // checkInput();
});

// function checkInput() {
//   const emailValue = email.value.trim();

//   if (emailValue === '') {
//     setErrorFor(email, "Email Cannot Be Empty!");
//   } else {
//     setSuccessFor(email);
//   }
// }

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("#error-message");

  small.innerText = message;

  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// ===== Newsletter Form + LocalStorage + MODAL =====
const emailInput = document.getElementById("sub-email");

const modal = document.getElementById("subscribeModal");
const modalText = document.getElementById("modalText");
const modalClose = document.getElementById("modalClose");

// Show Modal
function openModal(message) {
  modalText.textContent = message;
  modal.classList.add("show");
}

// Fade Out and Close Modal
function closeModal() {
  modal.classList.remove("show");
  setTimeout(() => {
    modalText.textContent = "";
  }, 300);
}

// Close button
modalClose.addEventListener("click", closeModal);

// Form submit
newsLetterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Only show modal if the user entered a valid email
  if (emailRegex.test(emailValue)) {
    localStorage.setItem("newsletterEmail", emailValue);
    openModal(`Thank you for subscribing, ${emailValue}!`);
    emailInput.value = "";
  }
});

