const lastModified = document.querySelector("#lastModified");
const year = document.querySelector("#currentyear");
const title = document.querySelector("#page-filter");
const productContainer = document.querySelector("#product-container");

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const hideTitle = document.querySelector(".headercontainer h1")
// Hamburger Button
hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
    hideTitle.classList.toggle("hide");
});





const forms = document.querySelector(".forms");
const signupForm = document.querySelector(".signup");

function thanksPage(e) {
    e.preventDefault();

    let submissionCount = localStorage.getItem("signupCount");
    submissionCount = submissionCount ? parseInt(submissionCount) : 0;
    submissionCount++;
    localStorage.setItem("signupCount", submissionCount)

    forms.innerHTML = "";

    const msg = document.createElement("div");
    msg.classList.add("thanks-msg");

    msg.innerHTML = `
        <section>
            Thank you for subscribing! 🎉<br>
            You are subscriber <strong>#${submissionCount}</strong> to sign up on this device.<br>
            We hope you have a great day!
        </section>
    `;

    forms.appendChild(msg);
}

signupForm.addEventListener("submit", thanksPage);



// time 
const modified = new Date();

lastModified.innerHTML = `Last modified: <span class="highlight">${document.lastModified}</span>`;

year.innerHTML = `${modified.getFullYear()}`;


// product-container

const products = [
    {
        productType: "Bikini",
        size: "normal",
        price: "€ 80,00",
        sales: true,
        imageUrl: "images/bikini1.webp"
    },
    {
        productType: "Bikini",
        size: "normal",
        price: "€ 112,99",
        sales: false,
        imageUrl: "images/bikini2.webp"
    },
    {
        productType: "Bikini",
        size: "normal",
        price: "€ 102,59",
        sales: true,
        imageUrl: "images/bikini3.webp"
    },
    {
        productType: "Swimsuit",
        size: "normal",
        price: "€ 115,99",
        sales: false,
        imageUrl: "images/maio1.webp"
    },
    {
        productType: "Swimsuit",
        size: "normal",
        price: "€ 165,99",
        sales: false,
        imageUrl: "images/maio2.webp"
    },
    {
        productType: "Swimsuit",
        size: "normal",
        price: "€ 102,99",
        sales: true,
        imageUrl: "images/maio3.webp"
    },
    {
        productType: "",
        size: "normal",
        price: "€ 144,99",
        sales: false,
        imageUrl: "images/maio4.webp"
    },
    {
        productType: "Swimsuit",
        size: "normal",
        price: "€ 133,99",
        sales: false,
        imageUrl: "images/maio5.webp"
    },
    {
        productType: "Plus Size",
        size: "plus",
        price: "€ 152,99",
        sales: false,
        imageUrl: "images/plus-size1.webp"
    },
    {
        productType: "Plus Size",
        size: "plus",
        price: "€ 134,99",
        sales: false,
        imageUrl: "images/plus-size2.webp"
    },
    {
        productType: "Plus Size",
        size: "plus",
        price: "€ 101,99",
        sales: true,
        imageUrl: "images/plus-size3.webp"
    },
    {
        productType: "Plus Size",
        size: "plus",
        price: "€ 136,89",
        sales: false,
        imageUrl: "images/plus-size4.webp"
    },
    {
        productType: "Plus Size",
        size: "plus",
        price: "€ 120,99",
        sales: false,
        imageUrl: "images/plus-size5.webp"
    },
    {
        productType: "Plus Size",
        size: "plus",
        price: "€ 99,69",
        sales: true,
        imageUrl: "images/plus-size6.webp"
    },
    {
        productType: "Sandal",
        size: "n/a",
        price: "€ 63,99",
        sales: false,
        imageUrl: "images/sandal1.webp"
    },
    {
        productType: "Sandal",
        size: "n/a",
        price: "€ 60,99",
        sales: false,
        imageUrl: "images/sandal2.webp"
    },
    {
        productType: "Sandal",
        size: "n/a",
        price: "€ 43,89",
        sales: false,
        imageUrl: "images/sandal3.webp"
    },
    {
        productType: "Sandal",
        size: "n/a",
        price: "€ 50,99",
        sales: false,
        imageUrl: "images/sandal4.webp"
    },
    {
        productType: "Sandal",
        size: "n/a",
        price: "€ 70,99",
        sales: false,
        imageUrl: "images/sandal5.webp"
    },
    {
        productType: "Sandal",
        size: "n/a",
        price: "€ 40,50",
        sales: true,
        imageUrl: "images/sandal6.webp"
    },
    {
        productType: "Sandal",
        size: "n/a",
        price: "€ 35,50",
        sales: true,
        imageUrl: "images/sandal7.webp"
    }
];





function createProduct(productList) {
    productContainer.innerHTML = "";
    productList.forEach(product => {
        const item = document.createElement("section");
        item.classList.add("product-build");

        item.innerHTML = `
            <figure>
            <img src="${product.imageUrl}" alt="${product.productType}" loading="lazy" width= "400">
            <figcaption><strong> ${product.productType}</strong> - ${product.price}</figcaption>
            </figure>
        `
        productContainer.appendChild(item)
    })
};
createProduct(products)

Filters

document.querySelector(".filter").addEventListener("submit", function (e) {
    e.preventDefault();

    const selectedFilter = document.querySelector("#filter").value.toLowerCase();

    let filteredProducts;

    switch (selectedFilter) {
        case "bikini":
            filteredProducts = products.filter(product => product.productType.toLowerCase() === "bikini");
            break;
        case "swimsuit":
            filteredProducts = products.filter(product => product.productType.toLowerCase() === "swimsuit");
            break;
        case "plus":
            filteredProducts = products.filter(product => product.size === "plus");
            break;
        case "sandals":
            filteredProducts = products.filter(product => product.productType.toLowerCase() === "sandal");
            break;
        case "sales":
            filteredProducts = products.filter(product => product.sales === true);
            break;
        case "everything":
        case "":
            filteredProducts = products;
            break;
        default:
            filteredProducts = [];
    }

    // Update page heading
    const title = document.querySelector("#page-filter");
    title.textContent = selectedFilter === "" || selectedFilter === "everything"
        ? "All Products"
        : `${selectedFilter[0].toUpperCase() + selectedFilter.slice(1)}`;

    createProduct(filteredProducts);
});

