const openModalBtn = document.querySelector(".open-modal");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");

openModalBtn.addEventListener("click", () => {
  modal.classList.add("modal-show");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("modal-show");
});
