const lastModified = document.querySelector("#lastModified");
const year = document.querySelector("#currentyear");

const modified = new Date();

lastModified.innerHTML = `Last modified: <span class="highlight">${document.lastModified}</span>`;

year.innerHTML = `${modified.getFullYear()}`;

const reviewCountElement = document.querySelector("#reviewCount");
let count = JSON.parse(localStorage.getItem("reviewCount")) || 0;
count++;

localStorage.setItem("reviewCount", count)
reviewCountElement.textContent = count;
