const url = "https://course-api.com/javascript-store-single-product";

const product = document.querySelector(".product");

const fetchProduct = async () => {
  try {
    product.innerHTML = `<h4 class="Product-loading">Loading...</h4>`;

    //   To get id of single product
    //   console.log(window.location.search);

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    console.log(id);

    const response = await fetch(`${url}?id=${id}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    product.innerHTML = `<p class="error">There was an in fetching a single product</p>`;
    console.log(`there was an error`);
  }
};

const displayProduct = (products) => {
  const {
    company,
    colors,
    description,
    name: title,
    price,
    image,
  } = products.fields;
  const { url: img } = image[0];

  // To change the name in the tab
  document.title = title.toUpperCase();

  // colors
  const colorsList = colors
    .map((color) => {
      return ` <span class="product-colors" style="background-color:${color}"></span>`;
    })
    .join("");

  product.innerHTML = ` <div class="product-wrapper">
    <img src=${img} class="img" alt=${title} />
    <div class="product-info">
      <h3>${title}</h3>
      <h5>${company}</h5>
      <span>$${price / 100}</span>
      <div class="colors">${colorsList}</div>
      <p>${description}</p>
      <button class="btn">add to cart</button>
    </div>
  </div>`;
};

const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};
start();
