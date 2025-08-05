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
    title: "Science Stream",
    category: "Science",
    desc: "Physics, Chemistry & Biology.",
    img: "images/health2.webp"
  },

  {
    title: "Art & Culture Stream",
    category: "Arts",
    desc: "Literature, Music & Fine Arts.",
    img: "images/business2.webp"
  },

  {
    title: "Tech Innovation Lab Stream",
    category: "Tech",
    desc: "Coding, Robotics & AI.",
    img: "images/computer_science_course.webp"
  }
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

  checkInput();
});

function checkInput() {
  const emailValue = email.value.trim();

  if (emailValue === '') {
    setErrorFor(email, "Email Cannot Be Empty!");
  } else {
    setSuccessFor(email);
  }
}

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

document.getElementById("subscribeBtn").addEventListener("click", () => {
  const email = document.getElementById("subEmail").value;
  if (email) {
    let subs = JSON.parse(localStorage.getItem("subscribers")) || [];
    subs.push({ email });
    localStorage.setItem("subscribers", JSON.stringify(subs));
    alert(`Thanks for subscribing, ${email}!`);
    document.getElementById("subEmail").value = "";
  }
});
