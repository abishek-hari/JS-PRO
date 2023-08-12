import people from "./data/data.js";

const container = document.querySelector(".slider-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

container.innerHTML = people
  .map((person, slideIndex) => {
    const { img, name, job, text } = person;
    let position = "next";
    if (slideIndex === 0) {
      position = "active";
    }
    if (slideIndex === people.length - 1) {
      position = "last";
    }

    return `<article class="slide">
  <img
    src=${img}
    class="img"
    alt=${job}
  />
  <h3>${name}</h3>
  <p class="title">${job}</p>
  <p class="text">
    ${text}
  </p>
</article>`;
  })
  .join("");
