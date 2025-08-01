const year = document.getElementById("current-year");
const lastModified = document.getElementById("last-modified");

const today = new Date();
year.innerHTML = today.getFullYear();

lastModified.innerHTML = document.lastModified;

// Create The Array Of Products
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },

  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },

  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },

  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },

  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// Wait Untill The Page Content Is Fully Loaded
document.addEventListener('DOMContentLoaded', () => {

  // Get The <Select> Element Where We Want To Add The Options
  const productSelect = document.getElementById("product-select");

  // If The Select Box Exist On The Form Page, Add Each Product As An Option
  if (productSelect) {
    products.forEach(product => {
      // Create An Option Tag
      const option = document.createElement("option");
      // Set The Option Value To The Product's ID
      option.value = product.id;
      // Show The Product Name In The Dropdown Menu
      option.textContent = product.name;
      // Add The Option To The Select Box
      productSelect.appendChild(option);
    });
  }

  // Check If We Are On The Review.html Page
  if (window.location.pathname.includes("review.html")) {
    // Get The Current Review Count From LocalStorage
    let count = localStorage.getItem("reviewCount");

    // If There Are No Count Yet, Start From Zero
    if (!count) {
      count = 0;
    }

    // Increase Count By One
    count = Number(count) + 1;
    localStorage.setItem("reviewCount", count);

    // Show The Count On The Page
    const display = document.getElementById("reviewCountDisplay");
    if (display) {
      display.textContent = `You Have Now Submitted ${count} Review(s)`;
    }
  }
});