// // Wait until The Page Is Fully Loaded
// document.addEventListener("DOMContentLoaded", () => {
//   // Get The Current Review Count From LocalStorage
//   const count = localStorage.getItem("reviewCount");

//   // If There Are No Count Yet, Start From Zero
//   if (!count) {
//     count = 0;
//   }

//   // Increase Count By One
//   count = Number(count) + 1;
//   localStorage.setItem("reviewCount", count);

//   // Show The Count On The Page
//   const display = document.getElementById("reviewCountDisplay");
//   display.textContent = `You Have Now Submitted ${count} Review(s)`;
// })