console.clear();

const colorInput = document.querySelector('[data-js="input-color"]');
const radiusInput = document.querySelector('[data-js="input-radius"]');
const rotationInput = document.querySelector('[data-js="input-rotation"]');
const box = document.querySelector('[data-js="box"]');

// input macht es flüssiger als on CHange
colorInput.addEventListener("input", () => {
  box.style.background = "hsl(" + colorInput.value + ", 100%, 50%)";
});

radiusInput.addEventListener("input", () => {
  // Prozent angabe und dann kann man *2 weglassen
  //box.style.borderRadius = radiusInput.value * 2 + "px";
  box.style.borderRadius = radiusInput.value + "%";
});

rotationInput.addEventListener("input", () => {
  box.style.transform = "rotate(" + rotationInput.value + "deg)";
});
