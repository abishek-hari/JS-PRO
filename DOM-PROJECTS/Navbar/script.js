const bar = document.querySelector(".bar");
const MenuItems = document.querySelector(".nav-item");

bar.addEventListener("click", () => {
  MenuItems.classList.toggle("show");
});
