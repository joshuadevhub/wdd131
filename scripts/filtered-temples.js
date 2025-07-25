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
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti,Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
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
    location: "Kensington, Maryland, U.S",
    dedicated: "1974, November, 19",
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
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
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
    templeName: "Austin Texas",
    location: "Cedar Park, Texas",
    dedicated: " 2024, August, 17",
    area: 30000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/austin-texas-temple/austin-texas-temple-40361-thumb.jpg"
  },

  {
    templeName: "Natal Brazil",
    location: "Av. Senador Salgado Filho",
    dedicated: "2025, May, 17",
    area: 19800,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/natal-brazil-temple/natal-brazil-temple-45005-thumb.jpg"
  },
  {
    templeName: "Mount Timpanogos Utah",
    location: "American Fork, Utah, U.S",
    dedicated: "1996, October, 13-19",
    area: 107240,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mount-timpanogos-utah-temple/mount-timpanogos-utah-temple-60331-thumb.jpg"
  },
  {
    templeName: "Cape Town South Africa",
    location: "3 Liesbeek Ave Observatory",
    dedicated: "None ",
    area: 9500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/cape-town-south-africa-temple/cape-town-south-africa-temple-23846-thumb.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah ",
    dedicated: "1893, April, 6,",
    area: 382207,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-6813-thumb.jpg"
  },
  {
    templeName: "Praia Cape Verde",
    location: "Bairro Taiti 7600 Praia Santiago",
    dedicated: "2022, June, 19,",
    area: 8759,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/praia-cape-verde-temple/praia-cape-verde-temple-27204-main.jpg"
  },
  {
    templeName: "Seoul Korea",
    location: "Seoul-teukbyeols South Korea",
    dedicated: "1985, December, 14",
    area: 28057,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/seoul-korea-temple/seoul-korea-temple-22305-main.jpg"
  },
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


let smallTemple = document.getElementById("small");
let small = temples.filter(temple => {
  return temple.area < 10000
});

smallTemple.addEventListener("click", () => {
  createTempleCard(small)
})


let oldTemple = document.getElementById("old");
let old = temples.filter(temple => {
  let year = parseInt(temple.dedicated.split(",")[0].trim());

  return !isNaN(year) && year < 2000;

});

oldTemple.addEventListener('click', () => {
  createTempleCard(old)
});

let newTemple = document.getElementById("new");
let newT = temples.filter(temple => {
  let year = parseInt(temple.dedicated.split(",")[0].trim());

  return !isNaN(year) && year > 2000;
});
newTemple.addEventListener("click", () => {
  createTempleCard(newT)
});

let largeTemple = document.getElementById("large");
let large = temples.filter(temple => {
  return temple.area > 90000
});

largeTemple.addEventListener("click", () => {
  createTempleCard(large)
})

let home = document.getElementById("home");
home.addEventListener("click", () => {
  createTempleCard(temples)
})