import products from "./products.js";
let filteredProducts = [...products];

const productContainer = document.querySelector(".products-container");
const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");
console.log(searchInput);

const displayProducts = () => {
  if (filteredProducts.length < 1) {
    productContainer.innerHTML = `<h6>Sorry, No matches found related to your search</h6>`;
    return;
  }

  productContainer.innerHTML = filteredProducts
    .map((product) => {
      const { title, image, price, id } = product;
      return `<article class="product" data-id="${id}">
    <img src=${image} class="product-img" />
    <footer>
      <h5 class="product-name">${title}</h5>
      <span class="product-price">${price}</span>
    </footer>
  </article>`;
    })
    .join("");
};

displayProducts();

form.addEventListener("keyup", () => {
  const value = searchInput.value;
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(value);
  });
  displayProducts();
});

// Filter Buttons
const companies = document.querySelector(".companies");

const displayButton = () => {
  const buttons = [
    "all",
    ...new Set(products.map((product) => product.company)),
  ];
  companies.innerHTML = buttons
    .map((company) => {
      return `<button class="company-btn" data-id="${company}">${company}</button>`;
    })
    .join("");
};
displayButton();

// Filter based on company
companies.addEventListener("click", (e) => {
  e.preventDefault();
  const el = e.target;
  if (el.classList.contains("company-btn")) {
    if (el.dataset.id === "all") {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter((product) => {
        return product.company === el.dataset.id;
      });
    }
    searchInput.value = "";
    displayProducts();
  }
});

// ANOTHER WAY
// const productItems = products
//   .map((product) => {
//     const { title, image, price } = product;
//     return `<article class="product">
//     <img src=${image} class="product-img" />
//     <footer>
//       <h5 class="product-name">${title}</h5>
//       <span class="product-price">${price}</span>
//     </footer>
//   </article>`;
//   })
//   .join("");
// productContainer.innerHTML = productItems;
