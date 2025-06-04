// display last modified

const lastModified = document.querySelector("#lastModified");
const year = document.querySelector("#currentyear");
const heading = document.querySelector("main h2");

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


const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
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
        location: "Kensington, Maryland, United States",
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
        templeName: "Recife Brazil Temple",
        location: "Recife, Brazil",
        dedicated: "1996, November, 11",
        area: 37200,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/recife-brazil-temple/recife-brazil-temple-36778-main.jpg"
    },
    {
        templeName: "Bern Switzerland Temple",
        location: "Zollikofen, Switzerland",
        dedicated: "1955, September, 15",
        area: 35546,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54641-main.jpg"
    },
    {
        templeName: "Lisbon Portugal Temple",
        location: "Lisboa, Portugal",
        dedicated: "2019 ,September, 15",
        area: 23730,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/lisbon-portugal-temple/lisbon-portugal-temple-6315-main.jpg"
    }
];

const templeCards = document.getElementById("temples-container");

function createTempleCards(temples) {
    templeCards.innerHTML = "";
    temples.forEach(temple => {
        const card = document.createElement("section");
        card.classList.add("temple-card");

        card.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Size:</strong> ${temple.area} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width= "400">
            `;

        templeCards.appendChild(card)
    })
};
createTempleCards(temples)

const home = document.querySelector("#all");

home.addEventListener("click", () => {
    createTempleCards(temples);
});

const oldTemples = document.querySelector("#oldTemples");

oldTemples.addEventListener("click", () => {
    let oldTemplesFilter = temples.filter(temple => {
        const year = parseInt(temple.dedicated.substring(0, 4));
        return year < 1900;
    });
    createTempleCards(oldTemplesFilter)
    heading.textContent = `Older Temples`;
});

const newTemples = document.querySelector("#newTemples");

newTemples.addEventListener("click", () => {
    let newTemplesFilter = temples.filter(temple => {
        const year = parseInt(temple.dedicated.substring(0, 4))
        return year > 2000;
    });
    createTempleCards(newTemplesFilter);
    heading.textContent = `Newer Temples`;

});

const largerTemples = document.querySelector("#largerTemples");

largerTemples.addEventListener("click", () => {
    let largerTemplesFilter = temples.filter(temple => {
        return temple.area > 90000;
    });
    createTempleCards(largerTemplesFilter);
    heading.textContent = `Larger Temples`;

});

const smallerTemples = document.querySelector("#smallerTemples");

smallerTemples.addEventListener("click", () => {
    const smallerTemplesFilter = temples.filter(temple => {
        return temple.area < 10000;
    });
    createTempleCards(smallerTemplesFilter);
    heading.textContent = `Smaller Temples`;

});

