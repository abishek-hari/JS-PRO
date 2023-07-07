const alert = document.querySelector(".alert");
const grocerySection = document.querySelector(".grocery-section");
const grocery = document.querySelector("#grocery");
const submitBtn = document.querySelector(".submit-btn");
const groceryContainer = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false; // For a particular list item
let editId = "";

// Form Submission
grocerySection.addEventListener("submit", addItem);

// Function

function addItem(e) {
  e.preventDefault();
  const value = grocery.value;

  const id = new Date().getTime().toString();

  if (value && !editFlag) {
    const element = document.createElement("div");
    element.classList.add("grocery-items");

    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${value}</p>
      <div class="btn-container">
        <button type="button" class="edit-btn">
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button type="button" class="delete-btn">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>`;

    list.appendChild(element);
    //  Display success
    displayAlert("added items to the list", "success");
    //     show container
    groceryContainer.classList.add("show-container");
    //   add to local storage
    addToLocalStorage(id, value);
    //   set back to Default
    setBackToDefault();
  } else if (value && editFlag) {
    console.log("editing");
  } else {
    displayAlert("please Enter value", "danger");
  }
}

// Display Alert

function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

function addToLocalStorage(id, value) {
  console.log("added");
}

function setBackToDefault() {
  console.log("default");
}
