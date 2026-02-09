console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

let pizzaDiameter1 = 0;
let pizzaDiameter2 = 0;

pizzaInput1.addEventListener("input", () => {
  // Write your code here
  pizzaDiameter1 = pizzaInput1.value;
  pizzaDiameter2 = pizzaInput2.value;
  calculatePizzaGain(pizzaDiameter1, pizzaDiameter2);
  updatePizzaDisplay(pizzaDiameter1, pizza1);
  updateOutputColor(pizzaDiameter1, pizzaDiameter2);
});

pizzaInput2.addEventListener("input", () => {
  // Write your code here
  pizzaDiameter1 = pizzaInput1.value;
  pizzaDiameter2 = pizzaInput2.value;
  calculatePizzaGain(pizzaDiameter1, pizzaDiameter2);
  updatePizzaDisplay(pizzaDiameter2, pizza2);
  updateOutputColor(pizzaDiameter1, pizzaDiameter2);
});

// Task 1: Define the function `calculatePizzaGain` here

function calculatePizzaGain(diameter1, diameter2) {
  //const area1 = Math.PI * ()
  const area1 = Math.PI * (diameter1 / 2) ** 2;
  const area2 = Math.PI * (diameter2 / 2) ** 2;

  const pizzaGain = ((area2 - area1) / area1) * 100;

  output.innerHTML = Math.round(pizzaGain);
}

// Task 2: Define the function `updatePizzaDisplay` here

function updatePizzaDisplay(diameter, pizza) {
  const newSize = (diameter / 24) * 100;

  pizza.style.width = newSize + "px";
}
// Task 3: Define the function `updateOutputColor` here
function updateOutputColor(size1, size2) {
  if (size1 <= size2) {
    outputSection.style.backgroundColor = "var(--green)";
  } else {
    outputSection.style.backgroundColor = "var(--red)";
  }
}
