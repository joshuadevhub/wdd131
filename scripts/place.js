// Wind Chill Calculation Formulae in Degree Celcius
// Twc = 13.12 + 0.6215Ta​ − 11.37V^0.16 + 0.3965TaV^0.16


let windChill = document.querySelector("#wind-chill");
let temperatureValue = 10;
let windValue = 5;
const degree = "\u00B0"

const calculateWindChill = (temp, wind) =>
  (13.12 + (0.6215 * temp) - (11.37 * wind ** 0.16) + 0.3965 * (temp * wind ** 0.16)).toFixed(1);

windChill.textContent = `${calculateWindChill(temperatureValue, windValue)}${degree}C`;

// Declaring variable for the Current Year and The Last Modified.
const fullYear = document.querySelector("#current-year");
const lastModified = document.querySelector("#last-modified");

let today = new Date();
fullYear.textContent = today.getFullYear();
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;