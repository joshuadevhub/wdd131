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

const temples = [
  {
    templeName: "Aba, Nigeria",
    location: "Aba, Abia,  Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, United ",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, United ",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, United ",
    dedicated: "1974, june,19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico , Mexico",
    dedicated: "1983, December,2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Bern Switzerland ",
    location: "Bern Switzerland",
    dedicated: " 1955, july,15",
    area: 35546,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54641-thumb.jpg"
  },
  {
    templeName: "Austin Texas Temple",
    location: "Cedar Park, Texas",
    dedicated: " 2024, August, 17",
    area: 30000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/austin-texas-temple/austin-texas-temple-40361-thumb.jpg"
  },

  // {
  //   templeName: "Cagayan de Oro Philippines Temple",
  //   location: "Cagayan de Oro City, Misamis",
  //   dedicated: "2024, August, 31 ",
  //   area: 18449,
  //   imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/cagayan-de-oro-philippines-temple/cagayan-de-oro-philippines-temple-50369-main.jpg"
  // }
];

createTempleCard(temples);
function createTempleCard(filteredTemples) {
  const container = document.querySelector(".image-album");
  container.innerHTML = ""; // clear previous
  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    card.classList.add("card");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedicated = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".image-album").appendChild(card);
  })
}
const filters = {
  old: t => parseInt(t.dedicated) < 1900,
  new: t => parseInt(t.dedicated) > 2000,
  large: t => t.area > 90000,
  small: t => t.area < 10000,
};

document.querySelectorAll(".navigation a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const id = link.id;

    const filterFn = filters[id]; // Will be undefined for "home"

    const filteredTemples = filterFn ? temples.filter(filterFn) : temples;
    createTempleCard(filteredTemples);
  });
});

// Show all on page load
createTempleCard(temples);