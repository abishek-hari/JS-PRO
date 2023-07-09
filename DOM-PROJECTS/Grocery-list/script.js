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

// Clear Items
clearBtn.addEventListener("click", clearItems);

// load Items
window.addEventListener("DOMContentLoaded", setupItems);

// Function

function addItem(e) {
  e.preventDefault();
  const value = grocery.value;

  const id = new Date().getTime().toString();

  if (value && !editFlag) {
    createItems(id, value);

    //  Display success
    displayAlert("added items to the list", "success");
    //     show container
    groceryContainer.classList.add("show-container");
    //   add to local storage
    addToLocalStorage(id, value);
    //   set back to Default
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    displayAlert("Value Changed", "success");
    // edit value
    editLocalStorage(editId, value);
    setBackToDefault();
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

// Delete Items
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);

  if (list.children.length === 0) {
    groceryContainer.classList.remove("show-container");
  }

  displayAlert("Item successfully deleted", "danger");

  // remove from local storage
  removeFromLocalStorage(id);
  setBackToDefault();
}

// Edit Items
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;

  editElement = e.currentTarget.parentElement.previousElementSibling;
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editId = element.dataset.id;
  submitBtn.textContent = "edit";
}
// ClearItems
function clearItems() {
  const items = document.querySelectorAll(".grocery-items");
  if (items.length > 0) {
    items.forEach((item) => {
      list.removeChild(item);
    });
  }
  groceryContainer.classList.remove("show-container");

  displayAlert("Removed All Items", "danger");
  setBackToDefault();
  localStorage.removeItem("list");
}

// setBackToDefault
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editId = "";
  submitBtn.textContent = "submit";
}

// LOCAL STORAGE

function addToLocalStorage(id, value) {
  const grocery = { id, value };
  let items = getLocalStorage();
  console.log(items);

  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();

  items = items.filter((item) => {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value) {
  let items = getLocalStorage();

  items = items.map((item) => {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

// LOCALSTORAGE API
//setItem
// getItem
// removeItem
// save as strings

// setupItems
function setupItems() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach((item) => {
      createItems(item.id, item.value);
    });
    groceryContainer.classList.add("show-container");
  }
}

//  createItems
function createItems(id, value) {
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

  const deletebtn = element.querySelector(".delete-btn");
  const editbtn = element.querySelector(".edit-btn");
  deletebtn.addEventListener("click", deleteItem);
  editbtn.addEventListener("click", editItem);

  list.appendChild(element);
}
