// display last modified

const lastModified = document.querySelector("#lastModified");
const year = document.querySelector("#currentyear");

const modified = new Date();

lastModified.innerHTML = `Last modified: <span class="highlight">${document.lastModified}</span>`;

year.innerHTML = `${modified.getFullYear()}`;

// Button function in the small viewport

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const hideTitle = document.querySelector("header h1");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
    hideTitle.classList.toggle("hide");
});