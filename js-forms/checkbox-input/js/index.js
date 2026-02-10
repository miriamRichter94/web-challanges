console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successDiv = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data.hasOwnProperty("tos"));

  if (!data.hasOwnProperty("tos")) {
    showTosError();
  } else {
    hideTosError();
    successDiv.removeAttribute("hidden");
    event.target.reset();
  }

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  //alert("Form submitted");
});
