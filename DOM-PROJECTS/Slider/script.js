const slides = document.querySelectorAll(".slide");
const nextbtn = document.querySelector(".next-btn");
const prevbtn = document.querySelector(".prev-btn");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextbtn.addEventListener("click", () => {
  counter++;
  carousel();
});
prevbtn.addEventListener("click", () => {
  counter--;
  carousel();
});

function carousel() {
  // working with slides

  //   if (counter === slides.length) {
  //     counter = 0;
  //   }
  //   if (counter < 0) {
  //     counter = slides.length - 1;
  //   }

  // working with buttons
  if (counter < slides.length - 1) {
    nextbtn.style.display = "block";
  } else {
    nextbtn.style.display = "none";
  }

  if (counter > 0) {
    prevbtn.style.display = "block";
  } else {
    prevbtn.style.display = "none";
  }
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevbtn.style.display = "none";
