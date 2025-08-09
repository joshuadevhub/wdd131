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


const tech = document.getElementById("commercial");
let techFilter = streams.filter(stream => {
  return stream.category.toLowerCase().includes("commercial");
});
tech.addEventListener("click", () => {
  createStreamCard(techFilter);
});



// JavaScript For The Student Testimonial
const quotes = document.querySelector(".quote");
const person = document.querySelector(".person");

const testimonials = [
  { name: "- Sarah", text: "Excel Mind completely transformed my life. The personalized attention from the teachers and the hands-on practicals gave me the confidence to chase my dreams. I now see myself achieving things I never imagined possible." },
  { name: "- Daniel", text: "The learning environment is top-notch. The teachers truly care about the success of each student, and the labs are equipped with modern tools that make learning both fun and effective. I am proud to be a product of this institution!" },
  { name: "- Esther", text: "I enrolled in the technology program and I can boldly say it is world-class. The curriculum is well structured, practical, and up to date with global trends. Excel Mind has given me the platform and skills to compete anywhere in the world." },
  { name: "- Michael", text: "From the moment I joined Excel Mind, I felt welcomed and supported. The mentorship I received helped me grow not just academically, but personally as well. I can confidently say that this has been a life-changing experience for me." },
  { name: "- Amanda", text: "Excel Mind helped me discover my potential and pushed me to go after my dreams with confidence." },
  { name: "- Leonard", text: "The dedication of the teachers and the quality of the practical sessions made learning truly enjoyable." },
  { name: "- Chisom", text: "Being part of the tech program opened my eyes to endless opportunities in the digital world." },
  { name: "- Tobi", text: "The support and guidance I received here helped me develop not just academically, but personally as well." },
  { name: "- Maria", text: "Excel Mind creates a positive environment that challenges you to grow and become the best version of yourself." },
  { name: "- Grace", text: "What makes Excel Mind unique is the way they push you to become your best self. The programs are challenging yet enjoyable, and the support system from both staff and fellow students is incredible. I've gained knowledge, lifelong friends, and unforgettable memories." }
];

let lastIndex = -1;

function changeTestimonial() {
  let random;
  do {
    random = Math.floor(Math.random() * testimonials.length);
  } while (random === lastIndex);

  // Fade + slide down out
  quotes.style.opacity = 0;
  person.style.opacity = 0;
  quotes.style.transform = "translateY(30px)";
  person.style.transform = "translateY(30px)";


  setTimeout(() => {
    quotes.innerText = testimonials[random].text;
    person.innerText = testimonials[random].name;

    // slide up + Fade In
    quotes.style.opacity = 1;
    person.style.opacity = 1;
    quotes.style.transform = "translateY(-20px)";
    person.style.transform = "translateY(-20px)";

    // reset back to center after animation
    setTimeout(() => {
      quotes.style.transform = "translateY(0)";
      person.style.transform = "translateY(0)";
    }, 800);

    lastIndex = random;
  }, 800);
}

// initial load
changeTestimonial();

// rotate every 5 seconds
setInterval(changeTestimonial, 10000);



// JavaScript For The NewsLetter Validation
const newsLetterForm = document.getElementById("newsletter-form");
const email = document.getElementById("sub-email");
newsLetterForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = email.value.trim();
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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


// JavaScript For Footer
const currentYear = document.getElementById("current-year");
const lastModified = document.getElementById("last-modified");

let today = new Date();

currentYear.textContent = today.getFullYear();
lastModified.textContent = document.lastModified;