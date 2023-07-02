// const counter = document.querySelector(".counter");
// const decreaseBtn = document.querySelector(".decrease-btn");
// const increaseBtn = document.querySelector(".increase-btn");
// const resetBtn = document.querySelector(".reset-btn");

// let count = 0;
// increaseBtn.addEventListener("click", () => {
//   count++;
//   counter.textContent = count;
//   if (count > 0) {
//     counter.style.color = "green";
//   }
// });

// decreaseBtn.addEventListener("click", () => {
//   count--;
//   counter.textContent = count;
//   if (count < 0) {
//     counter.style.color = "red";
//   }
// });

// resetBtn.addEventListener("click", () => {
//   count = 0;
//   counter.textContent = count;
//   if (count === 0) {
//     counter.style.color = "black";
//   }
// });

// Effective Ways //

const counter = document.querySelector(".counter");
const btn = document.querySelectorAll(".btn");

let count = 0;
btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    counter.textContent = count;

    if (count > 0) {
      counter.style.color = "green";
    }
    if (count < 0) {
      counter.style.color = "red";
    }
    if (count === 0) {
      counter.style.color = "black";
    }
  });
});
