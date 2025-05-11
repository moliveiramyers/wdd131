const lastModified = document.querySelector("#lastModified");
const year = document.querySelector("#currentyear");

const modified = new Date();

lastModified.innerHTML = `Last modified: <span class="highlight">${document.lastModified}</span>`;

year.innerHTML = `${modified.getFullYear()}`;