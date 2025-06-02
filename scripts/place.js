const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const windSpeed = document.querySelector("#speed");
const temperature = document.querySelector("#temperature");
const scale = document.querySelector("#scale");
const windChill = document.querySelector("#wind-chill");
let result = "";
const currentDate = new Date();

year.innerHTML = currentDate.getFullYear();
lastModified.innerHTML = `Last modified: ${document.lastModified}`;


function calculateWindChill(temperature, windSpeed, scale) {
    const temp = parseFloat(temperature.textContent);
    const speed = parseFloat(windSpeed.textContent);
    const scaleValue = scale.textContent.trim().toUpperCase(); // Ensures "C" or "F"
    if (scaleValue == "F") {
        result = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    }
    else if (scaleValue == "C") {
        result = 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
    }
    else {
        result = "N/A";
    }
    windChill.textContent = result;
}
window.addEventListener("DOMContentLoaded", () => calculateWindChill(temperature, windSpeed, scale));