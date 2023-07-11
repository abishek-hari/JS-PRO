// USING CONSTRUCTOR FUNCTION

// function getElement(selection) {
//   const element = document.querySelector(selection);
//   if (element) {
//     return element;
//   } else {
//     throw new Error();
//   }
// }

// function Counter(element, value) {
//   this.counter = element;
//   this.value = value;
//   this.resetBtn = element.querySelector(".reset");
//   this.increaseBtn = element.querySelector(".increase");
//   this.decreaseBtn = element.querySelector(".decrease");
//   this.valueDOM = element.querySelector(".value");
//   this.valueDOM.textContent = this.value;

//   this.increase = this.increase.bind(this);
//   this.decrease = this.decrease.bind(this);
//   this.reset = this.reset.bind(this);

//   this.increaseBtn.addEventListener("click", this.increase);
//   this.decreaseBtn.addEventListener("click", this.decrease);
//   this.resetBtn.addEventListener("click", this.reset);
// }

// Counter.prototype.increase = function () {
//   this.value++;
//   this.valueDOM.textContent = this.value;
// };
// Counter.prototype.decrease = function () {
//   this.value--;
//   this.valueDOM.textContent = this.value;
// };
// Counter.prototype.reset = function () {
//   this.value = 0;
//   this.valueDOM.textContent = this.value;
// };

// const firstCounter = new Counter(getElement(".first-counter"), 100);
// const secondCounter = new Counter(getElement(".second-counter"), 200);

// USING CLASS

function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error();
  }
}

class Counter {
  constructor(element, value) {
    this.counter = element;
    this.value = value;
    this.resetBtn = element.querySelector(".reset");
    this.increaseBtn = element.querySelector(".increase");
    this.decreaseBtn = element.querySelector(".decrease");
    this.valueDOM = element.querySelector(".value");
    this.valueDOM.textContent = this.value;

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);

    this.increaseBtn.addEventListener("click", this.increase);
    this.decreaseBtn.addEventListener("click", this.decrease);
    this.resetBtn.addEventListener("click", this.reset);
  }
  increase() {
    this.value++;
    this.valueDOM.textContent = this.value;
  }
  decrease() {
    this.value--;
    this.valueDOM.textContent = this.value;
  }
  reset() {
    this.value = 0;
    this.valueDOM.textContent = this.value;
  }
}

const firstCounter = new Counter(getElement(".first-counter"), 100);
const secondCounter = new Counter(getElement(".second-counter"), 200);