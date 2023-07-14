function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(`there is an error  ${selection}`);
  }
}

function Gallery(element) {
  this.container = element;
  this.list = [...element.querySelectorAll(".img")];
  this.modal = getElement(".modal");
  this.modalImg = getElement(".main-img");
  this.modalImages = getElement(".modal-image");
  this.closeBtn = getElement(".close-btn");
  this.nextBtn = getElement(".next-btn");
  this.prevBtn = getElement(".prev-btn");

  this.container.addEventListener("click", this.openModal);
  console.log(this.container.addEventListener("click", () => this.openModal()));
}

Gallery.prototype.openModal = function () {
  console.log(this);
  console.log("open modal");
};

const nature = new Gallery(getElement(".nature"));
const city = new Gallery(getElement(".city"));
