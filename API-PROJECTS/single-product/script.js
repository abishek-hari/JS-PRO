const url = "https://course-api.com/javascript-store-products";

const container = document.querySelector(".products-center");

const fetchProducts = async () => {
  container.innerHTML = "Loading...";
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayProduct(data);
  } catch (error) {
    container.innerHTML = `<p class="error">There was an error</p>`;
  }
};
fetchProducts();

const displayProduct = (list) => {
  const productList = list
    .map((product) => {
      const { id } = product;
      const { name: title, price } = product.fields;
      const { url: img } = product.fields.image[0];
      const formatPrice = price / 100;

      return ` <div class="product-container">
      <a class="single-product" href="./product.html?id=${id}">
    <img src=${img} class="single-product-img" alt=${title} />
  </a>
  <footer>
    <h5 class="name">${title}</h5>
    <span class="price">$${formatPrice}</span>
  </footer>
  </div>`;
    })
    .join("");
  container.innerHTML = ` ${productList}`;
};

// Another way
// const start = async () => {
//   const data = await fetchProducts();
//   displayProduct(data);
// };
// start();
