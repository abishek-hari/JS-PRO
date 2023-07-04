const questions = document.querySelectorAll(".question-card");

// Using For of loop:

// for (const question of questions) {
//   const btns = question.querySelector(".question-btn");

//   btns.addEventListener("click", function () {
//     question.classList.toggle("show-ans");
//   });
// }

// using forEach for each elements:

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-ans");
      }
    });
    question.classList.toggle("show-ans");
  });
});
