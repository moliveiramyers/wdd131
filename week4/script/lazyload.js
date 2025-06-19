const year = document.querySelector("#currentyear");
const lasModified = document.querySelector("#lastModified");

const currentDate = new Date();

year.innerHTML = currentDate.getFullYear();
lasModified.innerHTML = `Last modified: ${document.lastModified}`;