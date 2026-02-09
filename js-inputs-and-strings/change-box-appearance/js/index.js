console.clear();

const colorInput = document.querySelector('[data-js="input-color"]');
const radiusInput = document.querySelector('[data-js="input-radius"]');
const rotationInput = document.querySelector('[data-js="input-rotation"]');
const box = document.querySelector('[data-js="box"]');

colorInput.addEventListener("change", () => {
  box.style.background = "hsl(" + colorInput.value + ", 100%, 50%)";
});

radiusInput.addEventListener("change", () => {
  box.style.borderRadius = radiusInput.value * 2 + "px";
});

rotationInput.addEventListener("change", () => {
  box.style.transform = "rotate(" + rotationInput.value + "deg)";
});
