console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", () => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  const badnessSumm = Number(data.age) + Number(data.badness);

  console.log(
    "The age-badness-sum of " + data.firstName + " is " + badnessSumm,
  );

  event.target.reset();
  event.target.element.firstName.focus();
});
